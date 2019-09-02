var jwt = require('jsonwebtoken')
var code = require('../constants').http_codes;
var msg = require('../constants/admin_const').messages;
var validate = require('../user/userValidator')

function validateSignUp(req, res, next) {
    if (req.body.name && req.body.password && req.body.email) {
        var name = req.body.name.trim(),
            email = req.body.email.trim(),
            password = req.body.password.trim();

        if (name && email && password) {
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

function validateLogin(req, res, next) {
    if (req.body.password && req.body.email) {
        let email = req.body.email.trim(),
            password = req.body.password.trim();
        if (email && password) {
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
    if (req.body.name && req.body.isSocialLogin && req.body.socialId) {
        let name = req.body.name.trim(),
            socialId = req.body.socialId.trim()
        isSocialLogin = req.body.isSocialLogin

        if (name && isSocialLogin == true && socialId) {
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
async function verifyAdminToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, process.env.admin_secret, (err) => {
        if (err) {
            return res.json({ code: code.badRequest, message: msg.invalidToken })
        }
        else {
            next();
        }
    })
}

async function validateBody(req, res, next) {
    let data = req.body
    let flag = false
    if (!data) {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
    else {
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
}

function isEmpty(arr) {
    for (var key in arr) {
        if (arr.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function validateRestaurant(req, res, next) {
    let rest = req.body
    if (rest.name && rest.description && rest.latitude &&
        rest.longitude && rest.cuisinOffered && rest.openTime &&
        rest.closeTime) {

        if (!validate.validateLatLong(parseFloat(req.body.longitude), parseFloat(req.body.latitude))) {
            return res.json({ code: code.badRequest, message: msg.invalidLatLong })
        }

        let name = rest.name.trim(),
            description = rest.description.trim(),
            openTime = rest.openTime.trim(),
            closeTime = rest.closeTime.trim(),
            len = rest.cuisinOffered;
        cusinlen = len.length;
        if (cusinlen == 0) {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
        if (name && description && openTime && closeTime) {
            next();
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else { return res.json({ code: code.badRequest, message: msg.invalidBody }) }

}


function validaterestId(req, res, next) {
    let { restaurant_id } = req.params
    if (restaurant_id) {
        next();
    }
    else {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateCuisin(req, res, next) {
    // console.log("syghshddijdjsid nasj",req.body.name)   
    // console.log("syghshddijdjsid",req.body.image)   
    let data = req.body
    if (data.name && data.image) {
        req.body.cuisin =

            { name: data.name, image: data.image }
        // console.log("syghshddijdjsid",req.body.cuisin)   
        next();
    }
    else { res.json({ code: code.badRequest, message: msg.invalidBody }) }
}

module.exports = {
    validateSignUp,
    validateLogin,
    verifyAdminToken,
    validateBody,
    // validateSocialLogin,
    validateRestaurant,
    validaterestId,
    validateCuisin
}
