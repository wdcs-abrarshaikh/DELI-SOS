var userModel = require('../schema/user');
var restModel = require('../schema/restaurant');
var reviewModel = require('../schema/review')
var bcrypt = require('bcrypt');
var util = require('../app util/util');
var code = require('../constants').http_codes;
var msg = require('../constants').messages;
var role = require('../constants').roles;
var status = require('../constants').status;
let schmaName = require('../constants').schemas;
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
    let id = req.params.id
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
                        return res.json({ code: code.ok, message: msg.ok, data: response })
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
    let id = req.params.id
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
                        res.json({ code: code.internalError, message: msg.internalServerError })
                    }
                    else {
                        res.json({ code: code.ok, message: msg.ok, data: response })
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
    reviewModel.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, data) => {
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
    data.postedAt = Date.now()
    let condition = {
        _id: data.restId,
        'photoByUser.userId': { $ne: data.userId }
    }
    let update = {
        $addToSet: { photoByUser: { userId: data.userId, url: data.url, postedAt: data.postedAt } }
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
                            console.log(err)
                            return res.json({ code: code.internalError, message: msg.internalServerError })
                        }
                        else {
                            return res.json({ code: code.ok, message: msg.ok, data: response })
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
    } else {
        request = mongoQuery.userProfileWithReview(obj.id, false)
        userModel.aggregate(request, (err, response) => {
            if (err) {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: response })
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
    userModel.findOne({ _id: obj.id })
        .select({ "follower": 1, "_id": 0 })
        .populate({ path: "follower", select: "_id name profilePicture location locationVisible follower" })
        .exec((err, data) => {
            if (err) {
                res.json({ code: code.ineternalError, message: msg.internalServerError })
            }
            else {
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
        console.log(result.likedBy.indexOf(obj.id) >= 0)
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

function filterRestaurant(req, res) {
    let data = req.body
    console.log(data)
    restModel.aggregate([
        {
            $match: {
                $and: [{
                    $or: [
                        { mealOffers: data.meal },
                        { mealOffers: 'ALL' }
                    ]
                }, {
                    cuisinOffered: { $in: data.cuisins },
                    perPersonCost: { $gte: data.minBudget, $lte: data.maxBudget }
                }
                ]
            }
        },
        {
            $lookup: {
                foreignField: '_id',
                localField: 'reviews',
                from: schmaName.reviews,
                as: 'reviews_details'
            }
        },
        {
            $addFields: {
                'ratings': { $avg: '$reviews_details.rating' },
                'distance': ' '
            }
        },
        {
            $unwind: '$reviews_details'
        },
        {
            $lookup: {
                foreignField: '_id',
                localField: 'reviews_details.userId',
                from: schmaName.users,
                as: 'reviews_details.users_details'
            }
        },
        {
            $group: {
                _id: {
                    "restId": "$_id",
                    name: "$name",
                    ratings: "$ratings",
                    distance: "$distance",
                    cuisins: "$cuisinOffered",
                    userLocation: "$reviews.users_details.location"
                },
                reviews: { $push: '$reviews_details' }
            }
        },
        {

        }
        // {
        //     $project: {
        //         "_id":1,
        //         // "reviews.users_details.location":1
        //     }
        // }
    ], (err, response) => {
        if (err) {
            console.log(err)
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else {
            res.json({ code: code.ok, message: msg.ok, data: response })
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
    filterRestaurant
}