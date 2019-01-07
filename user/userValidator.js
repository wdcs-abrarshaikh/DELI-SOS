var jwt = require('jsonwebtoken')
var code = require('../constants').http_codes;
var msg = require('../constants').messages;
var util = require('../app util/util')
var userModel = require('../schema/user')

function validateSignUp(req, res, next) {
    if (req.body.name && req.body.password && req.body.email && req.body.deviceId && req.body.deviceType && req.body.fcmToken) {
        var name = req.body.name.trim(),
            email = req.body.email.trim(),
            password = req.body.password.trim();
        deviceId = req.body.deviceId.trim();
        deviceType = req.body.deviceType.trim();
        fcmToken = req.body.fcmToken.trim();

        if (name && email && password && deviceId && deviceType && fcmToken) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateLatLong(long, lat) {
    console.log(`lat==>${lat}  long==>${long}`)
    if ((long > -180 && lat < 180) && (lat > -90 && lat < 90)) {
        return true
    } else {
        return false
    }
}

function validateLogin(req, res, next) {
    if (req.body.email && req.body.password && req.body.deviceId && req.body.deviceType && req.body.fcmToken && req.body.longitude && req.body.latitude) {
        var email = req.body.email.trim(),
            password = req.body.password.trim(),
            deviceId = req.body.deviceId.trim(),
            deviceType = req.body.deviceType.trim(),
            fcmToken = req.body.fcmToken.trim()
        if (!validateLatLong(parseFloat(req.body.longitude), parseFloat(req.body.latitude))) {
            return res.json({ code: code.badRequest, message: msg.invalidLatLong })
        }
        if (email && password && deviceId && deviceType && fcmToken) {
            req.body.location = {
                type: 'Point',
                coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateSocialLogin(req, res, next) {
    if (req.body.name && req.body.socialId && req.body.deviceId && req.body.deviceType && req.body.fcmToken && req.body.latitude && req.body.longitude) {
        let name = req.body.name.trim(),
            socialId = req.body.socialId.trim(),
            isSocialLogin = req.body.isSocialLogin,
            deviceId = req.body.deviceId.trim(),
            deviceType = req.body.deviceType.trim(),
            fcmToken = req.body.deviceType.trim()
        if (!validateLatLong(parseFloat(req.body.longitude), parseFloat(req.body.latitude))) {
            return res.json({ code: code.badRequest, message: msg.invalidLatLong })
        }
        if (name && socialId && deviceId && deviceType && fcmToken) {
            req.body.location = {
                type: 'Point',
                coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

async function verifyUserToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, process.env.user_secret, (err) => {
        if (err) {
            return res.json({ code: code.unAuthorized, message: msg.invalidToken })
        }
        else {
            let obj = util.decodeToken(token)
            userModel.findOne({ $and: [{ _id: obj.id }, { blackListedTokens: { $in: token } }] }).then((data) => {
                if (data) {
                    return res.json({ code: code.unAuthorized, message: msg.tokenExpired })
                }
                else {
                    next();
                }
            }).catch((err) => {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            })
        }
    })
}
/*

*/


async function validateBody(req, res, next) {
    let data = req.body
    let flag = false
    if (!data) {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
    for (let k in data) {
        if (typeof (data[k]) === 'object') {
            for (let j in data[k]) {
                if (!data[k][j].trim()) {
                    flag = true;
                }
            }
        }
        else if (typeof (data[k]) === 'array') {
            if (data[k].length == 0) {
                flag = true;
            }
        }
        else {
            if (!data[k].trim()) {
                flag = true;
            }
        }
    }
    if (flag == true) {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
    else {
        next();
    }
}

function validateRestaurant(req, res, next) {
    let rest = req.body
    if (rest.name && rest.description && rest.latitude &&
        rest.longitude && rest.cuisinOffered && rest.openTime &&
        rest.closeTime) {

        let name = rest.name.trim(),
            description = rest.description.trim(),
            latitude = rest.latitude.trim(),
            longitude = rest.latitude.trim(),
            openTime = rest.openTime.trim(),
            closeTime = rest.closeTime.trim();

        let len = rest.cuisinOffered;
        let cusinlen = len.length;
        if (cusinlen == 0) {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
        if (name && description && latitude && longitude && openTime && closeTime) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }


    }
    else { return res.json({ code: code.badRequest, message: msg.invalidBody }) }
}

function validateReview(req, res, next) {
    let data = req.body
    if (data.restId && data.userId && data.content && data.likePlace && data.rating && data.improvementArea) {
        var restId = data.restId.trim(),
            userId = data.userId.trim(),
            content = data.content.trim(),
            likePlace = data.likePlace.trim(),
            improvementArea = data.improvementArea.length
        if (restId && userId && content && likePlace && improvementArea > 0) {
            next();
        }
        else {
            res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateProfile(req, res, next) {
    let { name, email, profilePicture, locationVisible } = req.body;
    if (name || email || profilePicture || locationVisible) {
        next()
    }
    else {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateChangePassword(req, res, next) {
    if (req.body.oldPassword && req.body.newPassword) {
        let oldPass = req.body.oldPassword.trim(),
            newPass = req.body.newPassword.trim()
        if (oldPass && newPass) {
            next()
        }
        else {
            res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateUserId(req, res, next) {
    if (!req.params.userId) {
        res.json({ code: code.badRequest, message: msg.idMissing })
    }
    else {
        next()
    }
}

function validateChangeLocation(req, res, next) {
    if (req.body.latitude && req.body.longitude) {
        if (!validateLatLong(parseFloat(req.body.longitude), parseFloat(req.body.latitude))) {
            return res.json({ code: code.badRequest, message: msg.invalidLatLong })
        }
        else {
            req.body.location = {
                type: 'Point',
                coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
            next()
        }
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidLatLong })
    }
}

function validateUpload(req, res, next) {
    if (req.body.restId && req.body.userId && req.body.url.length > 0) {
        next()
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

module.exports = {
    validateSignUp,
    validateLogin,
    verifyUserToken,
    validateBody,
    validateSocialLogin,
    validateRestaurant,
    validateReview,
    validateProfile,
    validateChangePassword,
    validateUserId,
    validateChangeLocation,
    validateUpload
}
