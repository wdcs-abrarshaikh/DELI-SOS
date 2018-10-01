var userModel = require('../schema/user');
var restModel = require('../schema/restaurant');
var reviewModel = require('../schema/review')
var bcrypt = require('bcrypt');
var util = require('../app util/util');
var code = require('../constants').http_codes;
var msg = require('../constants').messages;
var role = require('../constants').roles;
var status = require('../constants').status;

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
    userModel.findOneAndUpdate({ email: data.email, role: role.USER },
        { $set: { deviceId: data.deviceId, deviceType: data.deviceType, fcmToken: data.fcmToken } },
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
                    ; return res.json({ code: code.notImplemented, message: msg.mailNotSent })
                })
            }
        })
}

function fetchDetail(req, res) {
    let id = req.params.id
    userModel.findOne({ _id: id, status: status.active }, (err, result) => {
        if (err) {
            return res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            return res.json({ code: code.ok, message: msg.ok, data: result })
        }
    })
}

function manageSocialLogin(req, res) {
    let data = req.body
    let user = new userModel(data)
    userModel.findOneAndUpdate({ socialId: data.socialId },
        { $set: { deviceId: data.deviceId, deviceType: data.deviceType, fcmToken: data.fcmToken } },
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
    util.uploadPhoto(req).then((data) => {
        return res.json({ code: code.created, message: msg.imageUploaded, url: data })
    }).catch((err) => {
        return res.json({ code: code.internalError, message: msg.internalServerError })
    })
}

function addRestaurant(req, res) {
    let rest = new restModel(req.body)
    rest.save((err, data) => {
        return (err) ? res.json({ code: code.internalError, message: msg.internalServerError }) :
            res.json({ code: code.created, message: msg.restRequestSent, data: data })
    })
}

function getRestaurantDetail(req, res) {
    let id = req.params.id
    restModel.findOne({ _id: id, status: status.active }, (err, data) => {
        if (err) {
            return res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            return res.json({ code: code.ok, message: msg.ok, data: data })
        }
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
            else if(!data){
                return res.json({code:code.notFound,message:msg.restNotFound})
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

function addPhotoByUser(req, res) {
    let data = req.body.data,
        id = req.body.restId
    data.postedAt = Date.now()
    return restModel.findOneAndUpdate({ _id: id }, { $push: { photoByUser: data } }, (err, result) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!result) {
            res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            res.json({ code: code.created, message: msg.imageUploaded })
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
    let userId = req.params.userId,
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
    let userId = req.params.userId,
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

async function showFavourites(req, res) {
    let userId = req.params.userId
    return userModel.findById({ _id: userId }).select("favourites").populate("favourites").exec((err, data) => {
        if (err) {
            res.json({ code: code.ineternalError, message: msg.internalServerError })
        }
        else {
            res.json({ code: code.ok, message: msg.ok, data: data })
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
    showFavourites
}