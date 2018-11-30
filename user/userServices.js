var userModel = require('../schema/user');
var restModel = require('../schema/restaurant');
var reviewModel = require('../schema/review');
var aboutModel = require('../schema/about_Privacy');
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
    return restModel.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            if (data.reviews.length > 0) {
                restModel.aggregate(mongoQuery.getRestaurantDetail(id), (err, response) => {
                    if (err) {
                        console.log(err)
                        res.json({ code: code.internalError, message: msg.internalServerError })
                    }
                    else {
                        let final = response.map(function (data) {
                            data._id.addedInFavourites = 0;

                            data._id.favourites.some(function (favourite) {
                                if (favourite.equals(id) == true) {
                                    data._id.addedInFavourites = 1;
                                }
                            });
                            var totalRating = 0;
                            let reviewDetails = data.reviews.filter(function (result) {
                                result.likedByMe = 0
                                result.likedBy.some(function (liked) {
                                    if (liked.equals(userId) == true) {
                                        result.likedByMe = 1;
                                    }
                                });
                                if (result.status == status.active) {
                                    totalRating += result.rating
                                    delete result.status
                                    delete result.likedBy
                                    return result
                                }
                            })
                            data.totalRatings = reviewDetails.length
                            data.avgRating = totalRating/data.totalRatings
                            data.reviews = reviewDetails
                            delete data._id.favourites;
                            return data;
                        })
                        res.json({ code: code.ok, message: msg.ok, data: final[0] })
                    }
                })
            }
            else {
                const { _id, name, description, location,
                    photos, cuisinOffered, openTime, closeTime,
                    contactNumber, website, menu, photoByUser,
                    reviews, perPersonCost } = data

                let final = {
                    _id, name, description, location,
                    photos, cuisinOffered, openTime, closeTime,
                    contactNumber, website, menu, photoByUser,
                    reviews, perPersonCost
                }
                res.json({ code: code.ok, message: msg.ok, data: final })
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
                            userModel.findByIdAndUpdate({ _id: req.body.userId }, { $push: { review: data._id } }, (err) => {
                                if (err) {
                                    return res.json({ code: code.internalError, message: msg.internalServerError })
                                }
                                else {
                                    restModel.findByIdAndUpdate({ _id: req.body.restId }, { $push: { reviews: data._id } }, (err) => {
                                        if (err) {
                                            return res.json({ code: code.internalError, message: msg.internalServerError })
                                        }
                                        else {
                                            return res.json({ code: code.created, message: msg.reviewAdded, data: data })
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
    reviewModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body },{new:true}, (err, data) => {
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
            console.log(err)
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
            let final = response.map(function (data) {
                data.favourites_details.dist = util.calculateDistance(data.location.coordinates[1], data.location.coordinates[0],
                    data.favourites_details.location.coordinates[1], data.favourites_details.location.coordinates[0], "K") * 1000;
                delete data.location;
                delete data.favourites_details.location;
                return data;
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
                                    console.log("staus", result.status)
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
                        'reviews': 1, 'name': 1, 'dist': 1, 'mealOffers': 1
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
                    console.log(err);
                    console.log(response)
                    if (err) {
                        return res.json({ code: code.internalError, message: msg.internalServerError })
                    } else {
                        console.log(response);
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

                        return res.json({ code: code.ok, marker, recommendation })
                    }

                })
        }
    })
}

function followUser(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        uid = req.params.userId
    return userModel.findByIdAndUpdate({ _id: uid }, { $addToSet: { follower: obj.id } }, (err, result) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!result) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            userModel.findOneAndUpdate({ _id: obj.id }, { $addToSet: { following: uid } }, (err, data) => {
                if (err) {
                    res.json({ code: code.ineternalError, message: msg.internalServerError })
                }
                else {
                    res.json({ code: code.ok, message: msg.followed })
                }
            })
        }
    })
}

function unfollowUser(req, res) {
    let obj = util.decodeToken(req.headers['authorization']),
        uid = req.params.userId
    return userModel.findByIdAndUpdate({ _id: uid }, { $pull: { follower: obj.id } }, (err, result) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!result) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            userModel.findOneAndUpdate({ _id: obj.id }, { $pull: { following: uid } }, (err, data) => {
                if (err) {
                    res.json({ code: code.ineternalError, message: msg.internalServerError })
                }
                else {
                    res.json({ code: code.ok, message: msg.unfollowed })
                }
            })
        }
    })
}

function getFollowingList(req, res) {
    let obj = util.decodeToken(req.headers['authorization'])
    userModel.findOne({ _id: obj.id })
        .select({ "following": 1, "_id": 0 })
        .populate({ path: "following", select: "_id name profilePicture location locationVisible" })
        .exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
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
            path: listName, select: "_id name profilePicture location locationVisible",
            match: { name: new RegExp('^' + req.params.name, "i") }
        })
        .exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
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
    return reviewModel.findById({ _id: req.params.reviewId }).then((result) => {
        if (result.likedBy.indexOf(obj.id) >= 0) {
            reviewModel.update({ _id: req.params.reviewId }, { $pull: { likedBy: obj.id } }).then((result) => {
                res.json({ code: code.ok, message: msg.ok })
            })
        }
        else {
            reviewModel.update({ _id: req.params.reviewId }, { $push: { likedBy: obj.id } }).then((result) => {
                res.json({ code: code.ok, message: msg.ok })
            })
        }
    }).catch((err) => {
        res.json({ code: code.internalError, message: msg.internalServerError })
    })
}

function getCuisinList(req, res) {
    adminService.getCuisinList(req, res)
}

function filterRestaurants(req, res) {
    let data = req.body
    restModel.aggregate(mongoQuery.filterRestaurant(data), (err, response) => {
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
                    let final = response.map(function (data) {
                        data._id.distance = util.calculateDistance(loc.location.coordinates[1], loc.location.coordinates[0],
                            data._id.location.coordinates[1], data._id.location.coordinates[0], "K") * 1000;
                        var totalRatings = 0;
                        let reviews_details = data._id.reviews.filter(function (result) {
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
                        delete data._id.location;
                        delete data._id.reviews;
                        return data;
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

    return restModel.aggregate(mongoQuery.searchRestaurants(search), (err, response) => {
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
                    var final = response.map(function (data) {
                        data._id.distance = util.calculateDistance(loc.location.coordinates[1], loc.location.coordinates[0],
                            data._id.location.coordinates[1], data._id.location.coordinates[0], "K") * 1000;
                        var totalRatings = 0;
                        let reviews_details = data._id.reviews.filter(function (result) {
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
                        delete data._id.location;
                        delete data._id.reviews;
                        return data;
                    })
                    if (sortBy) {
                        final.sort((a, b) => {
                            return (b._id[sortBy] - a._id[sortBy])
                        })
                    }
                    res.json({ code: code.ok, message: msg.ok, data: final })
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
    let contactReq = new aboutModel(data)
    return contactReq.save((err, result) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else {
            res.json({ code: code.created, message: msg.contactReqSent })
        }
    })
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
    contactUs
}