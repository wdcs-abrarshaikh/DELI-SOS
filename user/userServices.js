var userModel = require('../schema/user');
var restModel = require('../schema/restaurant');
var reviewModel = require('../schema/review');
var aboutModel = require('../schema/about_Privacy');
var notificationModel = require('../schema/notification');
var bcrypt = require('bcrypt');
var util = require('../app util/util');
var code = require('../constants').http_codes;
var msg = require('../constants').messages;
var role = require('../constants').roles;
var status = require('../constants').status;
let schmaName = require('../constants').schemas;
let type = require('../constants').Type;
let adminService = require('../admin/adminServices');
var mongoose = require('mongoose');
const mongoQuery = require('../constants/mongoQuery');
const ntfctnType = require('../constants').notificationsTypes;
const fcm = require('../app util/fcmSetup')

async function createUser(req, res) {
    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: code.badRequest, message: msg.emailAlreadyRegistered });
    }
    else {
        if (util.validateEmail(data.email)
            && util.validatePassword(data.password)) {
            let user = new userModel(data)
            user.role = role.USER
            user.password = bcrypt.hashSync(data.password, 11)
            user.save((err, data) => {
                return (err) ?
                    res.json({ code: code.ineternalError, message: msg.internalServerError }) :
                    res.json({ code: code.created, message: msg.registered, data: data })
            });
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidEmailPass })
        }
    }
}

function authenticateUser(req, res) {
    let data = req.body;
    userModel.findOneAndUpdate({ email: data.email, role: role.USER, status: status.active },
        { $set: { deviceId: data.deviceId, deviceType: data.deviceType, fcmToken: data.fcmToken, location: data.location } },
        { new: true }, (err, result) => {
            if (err) {
                return res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else if (!result) {
                return res.json({ code: code.notFound, message: msg.userNotFound })
            }
            else {
                if (bcrypt.compareSync(data.password, result.password)) {
                    let token = util.generateToken(result, process.env.user_secret)
                    let currentToken = result.activeToken
                    let updation;
                    if (currentToken) {
                        updation = { $set: { activeToken: token }, $push: { blackListedTokens: currentToken } }
                    }
                    else {
                        updation = { $set: { activeToken: token } }
                    }
                    userModel.update({ _id: result._id }, updation, (err, cb) => {
                        if (err) {
                            return res.json({ code: code.ineternalError, message: msg.internalServerError })
                        }
                    })
                    let { _id, name, location, locationVisible, email, role, profilePicture } = result
                    result = { _id, name, location, locationVisible, email, role, profilePicture }
                    return res.json({ code: code.ok, message: msg.loggedIn, token: token, data: result })
                }
                else {
                    return res.json({ code: code.badRequest, message: msg.invalidPassword })
                }
            }
        })
}

function resetPassword(req, res) {
    let newpass = util.generateRandomPassword().toUpperCase()
    let hash = bcrypt.hashSync(newpass, 11)

    userModel.findOneAndUpdate({ email: req.body.email, role: role.USER },
        { password: hash }, { new: true }, async (err, result) => {
            if (err) {
                return res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else if (!result) {
                return res.json({ code: code.notFound, message: msg.emailNotFound })
            }
            else {
                await util.sendEMail(result.email, newpass).then((data) => {
                    return (data == true) ? res.json({ code: code.ok, message: `password sent on ${result.email}` })
                        : res.json({ code: code.notImplemented, message: msg.mailNotSent })
                }).catch((err) => {
                    return res.json({ code: code.notImplemented, message: msg.mailNotSent })
                })
            }
        })
}

function fetchDetail(req, res) {
    let id = req.params.id,
        userId = util.decodeToken(req.headers['authorization']).id;
    userModel.findOne({ _id: id }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            if (data.review.length > 0) {
                userModel.aggregate(mongoQuery.userProfileWithReview(id, true), (err, response) => {
                    if (err) {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    }
                    else {
                        let final = response.map(function (data) {
                            data._id.followedByMe = 0;
                            data._id.follower.some(function (liked) {
                                if (liked.equals(userId) == true) {
                                    data._id.followedByMe = 1;
                                }
                            })
                            let reviews_details = data.reviews.filter(function (result) {
                                result.likedByMe = 0;
                                result.likedBy.some(function (liked) {
                                    if (liked.equals(userId) == true) {
                                        result.likedByMe = 1;
                                    }
                                });
                                if (result.status == status.active) {
                                    delete result.status
                                    delete result.likedBy
                                    return result
                                }
                            })
                            data.reviews = reviews_details
                            data._id.totalReviews = data.reviews.length
                            delete data._id.follower
                            delete data._id.following
                            return data
                        })
                        return res.json({ code: code.ok, message: msg.ok, data: response[0] })
                    }
                })
            }
            else {
                const { _id, name, profilePicture, location, locationVisible, follower, following, review } = data
                let final = { _id, name, profilePicture, location, locationVisible, follower, following, review }
                return res.json({ code: code.ok, message: msg.ok, data: final })
            }
        }
    })

}

function manageSocialLogin(req, res) {
    let data = req.body
    let user = new userModel(data)
    userModel.findOneAndUpdate({ socialId: data.socialId },
        { $set: { deviceId: data.deviceId, deviceType: data.deviceType, fcmToken: data.fcmToken, email: data.email, location: data.location } },
        { new: true }, (err, data) => {
            if (err) {
                return json({ code: code.internalError, message: msg.internalServerError })
            }
            else if (!data) {
                user.isSocialLogin = true
                user.role = role.USER
                user.save((err, result) => {
                    if (err) {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    }
                    else {
                        let token = util.generateToken(result, process.env.user_secret)
                        return res.json({ code: code.ok, message: msg.loggedIn, token: token, data: result })
                    }
                })
            }
            else {
                let token = util.generateToken(data, process.env.user_secret)
                return res.json({ code: code.ok, message: msg.loggedIn, token: token, data: data })
            }
        })
}

function uploadPhoto(req, res) {
    adminService.uploadPhoto(req, res);
}

function addRestaurant(req, res) {
    obj = util.decodeToken(req.headers['authorization'])
    req.body.createdBy = obj.id;
    req.body.location = {
        type: "Point",
        coordinates: [req.body.longitude, req.body.latitude]
    }
    req.body.status = status.pending;
    let rest = new restModel(req.body)
    rest.save((err, data) => {
        return (err) ? res.json({ code: code.internalError, message: msg.internalServerError }) :
            res.json({ code: code.created, message: msg.restRequestSent, data: data })
    })
}

function getRestaurantDetail(req, res) {
    let id = req.params.id,
        userId = mongoose.Types.ObjectId(util.decodeToken(req.headers['authorization']).id);
    restModel.findOne({ _id: id }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            if (data.reviews.length > 0) {
                restModel.aggregate(mongoQuery.getRestaurantDetail(id), async (err, response) => {
                    if (err) {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    }
                    else {
                        userModel.findOne({ _id: userId }, { 'favourites': 1, '_id': 0 }).then((result) => {
                            let fav = result.favourites
                            let actual_response = response[0]
                            actual_response._id.addedInFavourites = 0;
                            if (fav.indexOf(id) >= 0) {
                                actual_response._id.addedInFavourites = 1;
                            }
                            let reviewDetails = actual_response.reviews.filter(function (review_unfilter) {
                                review_unfilter.likedByMe = 0

                                review_unfilter.likedBy.some((liked) => {
                                    if (liked.equals(userId) == true) {
                                        review_unfilter.likedByMe = 1;
                                    }
                                });

                                delete review_unfilter.status
                                delete review_unfilter.likedBy
                                return review_unfilter
                            })
                            actual_response.reviews = reviewDetails;
                            return res.json({ code: code.ok, message: msg.ok, data: actual_response })
                        }).catch((err) => {
                            console.log(err)
                            return res.json({ code: code.internalError, message: msg.internalServerError })
                        })
                    }
                })
            }
            else {
                const { name, description, location,
                    photos, openTime, closeTime,
                    contactNumber, website, menu, photoByUser,
                    perPersonCost } = data
                let final = {};
                final._id = {
                    name, description, location,
                    photos, openTime, closeTime,
                    contactNumber, website, menu, photoByUser,
                    perPersonCost
                }
                final._id.cuisin = data.cuisinOffered
                final._id.restId = data._id
                final.reviews = data.reviews
                final.totalRatings = 0
                final.avgRating = 0
                userModel.findOne({ _id: userId }, { 'favourites': 1, '_id': 0 })
                    .then((result) => {
                        let fav = result.favourites
                        final._id.addedInFavourites = 0;
                        if (fav.indexOf(id) >= 0) {
                            final._id.addedInFavourites = 1;
                        }
                        return res.json({ code: code.ok, message: msg.ok, data: final })
                    }).catch((err) => {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    })
            }
        }
    })
}

function getRestaurantList(req, res) {
    restModel.find((err, result) => {
        return (err) ? res.json({ code: code.internalError, message: internalServerError })
            : res.json({ code: code.ok, message: msg.ok, data: result })
    })
}

function addReview(req, res) {
    userModel.findOne({ _id: req.body.userId }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        } else if (!data) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            restModel.findOne({ _id: req.body.restId }, (err, data) => {
                if (err) {
                    return res.json({ code: code.internalError, message: msg.internalServerError })
                }
                else if (!data) {
                    return res.json({ code: code.notFound, message: msg.restNotFound })
                }
                else {
                    let review = new reviewModel(req.body)
                    review.createdAt = Date.now()
                    review.save((err, data) => {
                        if (err) {
                            rres.json({ code: code.internalError, message: msg.internalServerError })
                        }
                        else {
                            userModel.findByIdAndUpdate({ _id: req.body.userId }, { $push: { review: data._id } }, (err, result) => {
                                if (err) {
                                    return res.json({ code: code.internalError, message: msg.internalServerError })
                                }
                                else {
                                    restModel.findByIdAndUpdate({ _id: req.body.restId }, { $push: { reviews: data._id } }, (err) => {
                                        if (err) {
                                            return res.json({ code: code.internalError, message: msg.internalServerError })
                                        }
                                        else {
                                            let model = new notificationModel()
                                            model.notificationType = ntfctnType.reviewPosted
                                            model.reviewId = data._id;
                                            model.sender = req.body.userId;
                                            model.restId = req.body.restId;
                                            model.receiver = result.follower;
                                            let receiverTokens;
                                            userModel.find({ _id: { $in: result.follower } }).select('fcmToken').then((tokens) => {
                                                if (tokens.length > 0) {
                                                    receiverTokens = tokens
                                                }
                                            }).catch((err) => {
                                                return res.json({ code: code.internalError, message: msg.internalServerError })
                                            })
                                            let notfctnData = model
                                            model.save().then((response) => {
                                                let obj = util.decodeToken(req.headers['authorization'])
                                                let message = `${obj.name} posted new review.`
                                                receiverTokens.map((token) => {
                                                    fcm.sendMessage(token.fcmToken, message, process.env.appName, notfctnData)
                                                })
                                                return res.json({ code: code.created, message: msg.reviewAdded, data: data })
                                            })
                                        }
                                    })

                                }
                            })

                        }
                    })
                }
            })
        }
    })
}

function updateReview(req, res) {
    reviewModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.reviewNotFound })
        }
        else {
            return res.json({ code: code.ok, message: msg.updated, data: data })
        }
    })
}

function deleteReview(req, res) {
    reviewModel.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: status.inactive } }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.reviewNotFound })
        }
        else {
            notificationModel.findOneAndRemove({ reviewId: req.params.id }, (err, result) => {
                if (err) {
                    return res.json({ code: code.internalError, message: msg.internalServerError })
                }
            })
            return res.json({ code: code.ok, message: msg.deleted })
        }
    })
}

function getAllReviews(req, res) {
    return restModel.findById({ _id: req.params.restId })
        .select({ "reviews": 1 }).populate({ path: "reviews" }).exec((err, data) => {
            if (err) {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else if (!data) {
                return res.json({ code: code.notFound, message: msg.restNotFound })
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

function addPhotoByUser(req, res) {
    let data = req.body
    let condition = {
        _id: data.restId,
        'photoByUser.userId': { $ne: data.userId }
    }
    let newArray = []
    let obj = data.url.map(async (result) => {
        var newObj = {
            userId: data.userId,
            url: result,
            postedAt: Date.now()
        };
        newArray.push(newObj);
        return result;
    })
    let update = {
        $addToSet: { photoByUser: newArray }
    }
    return restModel.findOneAndUpdate(condition, update).then((result) => {
        if (!result) {
            res.json({ code: code.forbidden, message: msg.alreadyUploadPhotos })
        }
        else {
            res.json({ code: code.created, message: msg.imageUploaded })
        }
    }).catch((err) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
    })
}

function deletePhotoByUser(req, res) {
    let data = req.body.data,
        id = req.body.restId
    return restModel.findOneAndUpdate({ _id: id }, { $pull: { photoByUser: data } }, (err, result) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!result) {
            res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            res.json({ code: code.ok, message: msg.imageDeleted })
        }
    })
}

function addToFavourites(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        userId = obj.id,
        restId = req.params.restId
    return userModel.findByIdAndUpdate({ _id: userId }, { $addToSet: { favourites: restId } }, (err, data) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        } else if (!data) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            res.json({ code: code.created, message: msg.addedToFavourites })
        }
    })
}

function removeFavourite(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        userId = obj.id,
        restId = req.params.restId
    return userModel.findByIdAndUpdate({ _id: userId }, { $pull: { favourites: restId } }, (err, data) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!data) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            res.json({ code: code.created, message: msg.removeFromFavourites })
        }
    })
}

function showFavourites(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    var userId = obj.id
    return userModel.aggregate(mongoQuery.showFavourites(userId), (err, response) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else {
            let final = response.filter(function (data) {
                if (data._id.status == status.active) {
                    data._id.distance = util.calculateDistance(data.location.coordinates[1], data.location.coordinates[0],
                        data._id.location.coordinates[1], data._id.location.coordinates[0], "K") * 1000;
                    var totalRatings = 0;
                    if (data.reviews.length > 0) {
                        var reviews_details = data.reviews[0].filter((result) => {
                            if (result.status == status.active) {
                                totalRatings += result.rating
                                return result
                            }
                        })

                        if (reviews_details.length > 0) {
                            data._id.ratings = totalRatings / reviews_details.length
                        }
                        else {
                            data._id.ratings = 0
                        }
                    }
                    else {
                        data._id.ratings = 0
                    }
                    delete data._id.status
                    delete data.location;
                    delete data.reviews;
                    delete data._id.location;
                    return data;
                }
            })
            res.json({ code: code.ok, message: msg.ok, data: final })
        }
    })
}

function showProfile(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    let request;
    if (req.query.reviews == 'true') {
        request = mongoQuery.userProfileWithReview(obj.id, true)
        userModel.findOne({ _id: obj.id }, (err, data) => {
            if (err) {
                res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else if (!data) {
                res.json({ code: code.notFound, message: msg.userNotFound })
            }
            else {
                if (data.review.length > 0) {
                    userModel.aggregate(request, (err, response) => {
                        if (err) {
                            return res.json({ code: code.internalError, message: msg.internalServerError })
                        }
                        else {
                            let final = response.map(function (data) {
                                let reviews_details = data.reviews.filter(function (result) {
                                    result.likedByMe = 0;
                                    result.likedBy.some(function (liked) {
                                        if (liked.equals(obj.id) == true) {
                                            result.likedByMe = 1;
                                        }
                                    });
                                    delete result.likedBy
                                    if (result.status == status.active) {
                                        return result
                                    }
                                })
                                data.reviews = reviews_details
                                data._id.totalReviews = data.reviews.length
                                delete data._id.follower
                                delete data._id.following
                                return data
                            })
                            return res.json({ code: code.ok, message: msg.ok, data: final[0] })
                        }
                    })
                }
                else {
                    let object = new Object();
                    const { name, profilePicture, location, locationVisible } = data
                    let final = { name, profilePicture, location, locationVisible }
                    object._id = final
                    object._id.userId = data._id
                    object._id.totalReviews = data.review.length
                    object._id.totalFollower = data.follower.length
                    object._id.totalFollowing = data.following.length
                    object.reviews = data.review
                    return res.json({ code: code.ok, message: msg.ok, data: object })
                }
            }
        })
    } else {
        request = mongoQuery.userProfileWithReview(obj.id, false)
        userModel.aggregate(request, (err, response) => {
            if (err) {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: response[0] })
            }
        })
    }
}

function updateProfile(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])

    return userModel.findByIdAndUpdate({ _id: obj.id }, { $set: req.body }, (err, data) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!data) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            res.json({ code: code.ok, message: msg.profileUpdated })
        }
    })
}

function changePassword(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        newpass = bcrypt.hashSync(req.body.newPassword, 11)
    userModel.findById({ _id: obj.id }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            if (bcrypt.compareSync(req.body.oldPassword, data.password)) {
                return userModel.findByIdAndUpdate({ _id: data._id }, { password: newpass }, (err) => {
                    return (err) ? res.json({ code: code.internalError, message: msg.internalServerError })
                        : res.json({ code: code.ok, message: msg.passwordChanged })
                })
            }
            else {
                return res.json({ code: code.badRequest, message: msg.wrongPassword })
            }
        }
    })
}

function getNearByRestaurant(req, res) {
    userModel.findOne({ _id: req.params.userId, status: status.active }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        } else if (!data) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        } else {
            restModel.aggregate([
                {
                    $geoNear: {
                        near: { type: data.location.type, coordinates: [data.location.coordinates[0], data.location.coordinates[1]] },
                        distanceField: "dist.calculated",
                        maxDistance: 100000,
                        key: 'location',
                        query: { status: status.active },
                        num: 5, spherical: true
                    }
                }, {
                    $project: {
                        'location': 1, 'photos': 1, '_id': 1,
                        'reviews': 1, 'name': 1, 'dist': 1, 'mealOffers': 1, 'cuisinOffered': 1
                    }
                },
                {
                    $lookup: {
                        from: schmaName.reviews,
                        localField: 'reviews',
                        foreignField: '_id',
                        as: 'reviews_details'
                    }
                }, {
                    $addFields: {
                        "rating": { $avg: '$reviews_details.rating' },
                        "distance": '$dist.calculated'
                    }
                }, {
                    $project: {
                        "reviews_details": false,
                        reviews: false,
                        dist: false

                    }
                }], (err, response) => {
                    if (err) {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    } else {
                        let marker = [];
                        let recommendation = []

                        let modifyed_response = response.map(async (response_res) => {
                            let obj = Object.assign({}, response_res);
                            delete obj.mealOffers;
                            obj.lat = obj.location.coordinates[1];
                            obj.long = obj.location.coordinates[0];
                            obj.photos = obj.photos[0];
                            response_res.photos = response_res.photos[0];
                            delete obj.location;
                            delete response_res.location;

                            response_res.addedInFavourites = 0;
                            data.favourites.some(function (favourite) {
                                if (favourite.equals(response_res._id) == true) {
                                    response_res.addedInFavourites = 1;
                                }
                            });

                            marker.push(obj);
                            recommendation.push(response_res);

                        });
                        recommendation = recommendation.slice(0, 10)

                        return res.json({ code: code.ok, marker, recommendation })
                    }

                })
        }
    })
}

function followUser(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        uid = req.params.userId
    userModel.findByIdAndUpdate({ _id: uid }, { $addToSet: { follower: obj.id } }, { new: true }, (err, result) => {
        if (err) {
            return res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            userModel.findOneAndUpdate({ _id: obj.id }, { $addToSet: { following: uid } }, (err, data) => {
                if (err) {
                    return res.json({ code: code.ineternalError, message: msg.internalServerError })
                }
                else {
                    let model = new notificationModel()
                    model.sender = obj.id
                    model.receiver = [uid]
                    model.notificationType = ntfctnType.follow
                    let message = `${obj.name} started following you.`;

                    if (data.follower.indexOf(uid) != -1) {
                        message = `${obj.name} followed you back.`
                        model.notificationType = ntfctnType.followedBack
                    }
                    model.save((err, response) => {
                        if (err) {
                            return res.json({ code: code.ineternalError, message: msg.internalServerError })
                        }
                        else {
                            fcm.sendMessage(result.fcmToken, message, process.env.appName, model)
                            return res.json({ code: code.ok, message: msg.followed })
                        }
                    })
                }
            })
        }
    })
}

function unfollowUser(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        uid = req.params.userId
    userModel.findByIdAndUpdate({ _id: uid }, { $pull: { follower: obj.id } }, (err, result) => {
        if (err) {
            return res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            userModel.findOneAndUpdate({ _id: obj.id }, { $pull: { following: uid } }, (err, data) => {
                if (err) {
                    return res.json({ code: code.ineternalError, message: msg.internalServerError })
                }
                else {
                    notificationModel.findOneAndRemove({
                        $and: [{ sender: obj.id },
                        { $or: [{ notificationType: ntfctnType.follow }, { notificationType: ntfctnType.followedBack }] }],
                    }, (err, result) => {
                        if (err) {
                            return res.json({ code: code.ineternalError, message: msg.internalServerError })
                        }
                        else {
                            return res.json({ code: code.ok, message: msg.unfollowed })
                        }
                    })
                }
            })
        }
    })
}

function getFollowingList(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    userModel.findOne({ _id: obj.id })
        .select({ "following": 1, "_id": 0 })
        .populate({ path: "following", select: "_id name profilePicture location locationVisible follower following" })
        .lean().exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
                let final = data.following.map(function (result) {
                    result.followedByMe = 0
                    result.following.some(function (followed) {
                        if (followed.equals(obj.id) == true) {
                            result.followedByMe = 1;
                        }
                    });
                    delete result.following
                    delete result.follower
                    return result;
                })
                data.following = final
                res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

function getFollowerList(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    return userModel.findOne({ _id: obj.id })
        .select({ "follower": 1, "_id": 0 })
        .populate({ path: "follower", select: "_id name profilePicture location locationVisible follower following" })
        .lean().exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
                let final = data.follower.map(function (result) {
                    result.followedByMe = 0
                    result.follower.some(function (followed) {
                        if (followed.equals(obj.id) == true) {
                            result.followedByMe = 1;
                        }
                    });
                    delete result.following
                    delete result.follower
                    return result;
                })
                data.follower = final
                res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

function searchFollower(req, res) {
    let listName = "follower"
    searchInList(req, res, listName)
}

function searchFollowing(req, res) {
    let listName = "following"
    searchInList(req, res, listName)
}

function searchInList(req, res, listName) {
    let obj = util.decodeToken(req.headers['authorization'])
    userModel.findOne({ _id: obj.id }).select({ listName: 1, "_id": 0 })
        .populate({
            path: listName, select: "_id name profilePicture location locationVisible following follower ",
            match: { name: new RegExp('^' + req.params.name, "i") }
        })
        .lean().exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
                let final = data[listName].map(function (result) {
                    result.followedByMe = 0
                    result[listName].some(function (followed) {
                        if (followed.equals(obj.id) == true) {
                            result.followedByMe = 1;
                        }
                    });
                    delete result.following
                    delete result.follower
                    return result;
                })
                data[listName] = final
                res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

function changeLocation(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    return userModel.findByIdAndUpdate({ _id: obj.id }, { $set: { location: req.body.location } })
        .then((result) => {
            if (result) {
                res.json({ code: code.ok, message: msg.locationChanged })
            }
        }).catch((err) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
        })
}

function likeUnlikeReview(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    reviewModel.findById({ _id: req.params.reviewId }).then((result) => {
        if (result.likedBy.indexOf(obj.id) >= 0) {
            reviewModel.update({ _id: req.params.reviewId }, { $pull: { likedBy: obj.id } }).then((result) => {
                notificationModel.findOneAndRemove({ $and: [{ reviewId: req.params.reviewId }, { notificationType: ntfctnType.reviewLiked }] }).then(() => {
                    return res.json({ code: code.ok, message: msg.unlikedReview })
                }).catch((err) => {
                    return res.json({ code: code.internalError, message: msg.internalServerError })
                })
            })
        }
        else {
            reviewModel.findOneAndUpdate({ _id: req.params.reviewId }, { $push: { likedBy: obj.id } }).then((result) => {
                if (obj.id != result.userId) {
                    let model = new notificationModel()
                    model.notificationType = ntfctnType.reviewLiked
                    model.reviewId = req.params.reviewId;
                    model.sender = obj.id;
                    model.restId = result.restId;
                    model.receiver = [result.userId];

                    model.save().then(async (response) => {
                        let user = await userModel.findById({ _id: result.userId }).select('fcmToken').then((data) => {
                            return data
                        })
                        let message = `${obj.name} liked your review`
                        fcm.sendMessage(user.fcmToken, message, process.env.appName, model)
                        return res.json({ code: code.ok, message: msg.likedReview })
                    })
                }
                else {
                    return res.json({ code: code.ok, message: msg.likedReview })
                }
            })
        }
    }).catch((err) => {
        return res.json({ code: code.internalError, message: msg.internalServerError })
    })
}

function getCuisinList(req, res) {
    adminService.getCuisinList(req, res)
}

function filterRestaurants(req, res) {
    let data = req.body, flag = false
    if (data.maxBudget) {
        flag = true;
    }
    restModel.aggregate(mongoQuery.filterRestaurant(data, flag), (err, response) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else {
            let obj = util.decodeToken(req.headers['authorization'])
            userModel.findOne({ _id: obj.id }).select('location').exec((err, loc) => {
                if (err) {
                    res.json({ code: code.internalError, message: msg.internalServerError })
                }
                else if (loc) {
                    let final = response.filter(function (data) {
                        data._id.distance = util.calculateDistance(loc.location.coordinates[1], loc.location.coordinates[0],
                            data._id.location.coordinates[1], data._id.location.coordinates[0], "K") * 1000;
                        var totalRatings = 0;
                        if (data.reviews[0].length > 0) {
                            let reviews_details = data.reviews.filter(function (result) {
                                if (result[0].status == status.active) {
                                    totalRatings += result[0].rating
                                    return result
                                }
                            })
                            data._id.ratings = totalRatings / reviews_details.length
                        }
                        else {
                            data._id.ratings = 0
                        }
                        delete data._id.location;
                        delete data.reviews;
                        if (data._id.distance <= 10000) {
                            return data;
                        }
                    })
                    final.sort((a, b) => {
                        return (a._id['distance'] - b._id['distance'])
                    })
                    res.json({ code: code.ok, message: msg.ok, data: final })
                }
            })
        }
    })
}

function searchRestaurants(req, res) {
    let search = req.params.name
    let sortBy = req.query.sortBy

    restModel.aggregate(mongoQuery.searchRestaurants(search), (err, response) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else {
            let obj = util.decodeToken(req.headers['authorization'])
            userModel.findOne({ _id: obj.id }).select('location').exec((err, loc) => {
                if (err) {
                    return res.json({ code: code.internalError, message: msg.internalServerError })
                }
                else if (loc) {

                    var final = response.filter(function (data) {
                        data._id.distance = util.calculateDistance(loc.location.coordinates[1], loc.location.coordinates[0],
                            data._id.location.coordinates[1], data._id.location.coordinates[0], "K") * 1000;
                        var totalRatings = 0;
                        if (data.reviews[0].length > 0) {
                            let reviews_details = data.reviews.filter(function (result) {
                                if (result[0].status == status.active) {
                                    totalRatings += result[0].rating
                                    return result
                                }
                            })
                            data._id.ratings = totalRatings / reviews_details.length
                        }
                        else {
                            data._id.ratings = 0
                        }
                        delete data._id.location;
                        delete data.reviews;
                        if (data._id.distance <= 10000) {
                            return data;
                        }
                    })
                    final.sort((a, b) => {
                        return (a._id['distance'] - b._id['distance'])
                    })
                    if (sortBy) {
                        final.sort((a, b) => {
                            return (b._id[sortBy] - a._id[sortBy])
                        })
                    }

                    return res.json({ code: code.ok, message: msg.ok, data: final })
                }
            })
        }
    })
}

function getAboutUs(req, res) {
    adminService.aboutUsList(req, res)
}

function contactUs(req, res) {
    let data = req.body
    let obj = util.decodeToken(req.headers['authorization'])
    data.createdBy = obj.id
    data.type = type.contact
    data.createdAt = Date.now()
    let contactReq = new aboutModel(data)
    contactReq.save((err, result) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else {
            return res.json({ code: code.created, message: msg.contactReqSent })
        }
    })
}

function getNotificationList(req, res) {
    notificationModel.aggregate(mongoQuery.notificationList(req.params.userId)).then((data) => {
        return res.json({ code: code.ok, message: msg.ok, data: data })
    }).catch((err) => {
        return res.json({ code: code.internalError, message: msg.internalServerError })
    })
}

function logout(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    userModel.findByIdAndUpdate({ _id: obj.id }, { $push: { blackListedTokens: req.headers['authorization'] } })
        .then((data) => {
            if (data) {
                return res.json({ code: code.ok, message: msg.loggedout })
            }
        }).catch((err) => {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        })
}

function shareReview(req, res) {
    let obj = {
        appLogo: process.env.appLogo,
        appBannerText: process.env.appBannerText,
        url: `${process.env.shareReviewUrl}${req.params.restId}`,
        reviewId: req.params.reviewId
    }
    return res.json({ code: code.ok, message: msg.ok, data: obj })
}

module.exports = {
    createUser,
    authenticateUser,
    resetPassword,
    fetchDetail,
    manageSocialLogin,
    addRestaurant,
    getRestaurantDetail,
    uploadPhoto,
    addReview,
    updateReview,
    addPhotoByUser,
    deletePhotoByUser,
    deleteReview,
    getAllReviews,
    addToFavourites,
    removeFavourite,
    showFavourites,
    showProfile,
    updateProfile,
    changePassword,
    getRestaurantList,
    getNearByRestaurant,
    followUser,
    unfollowUser,
    getFollowingList,
    getFollowerList,
    searchFollower,
    searchFollowing,
    changeLocation,
    likeUnlikeReview,
    getCuisinList,
    filterRestaurants,
    searchRestaurants,
    getAboutUs,
    contactUs,
    getNotificationList,
    logout,
    shareReview
}