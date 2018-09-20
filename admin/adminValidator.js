var jwt = require('jsonwebtoken')
var admincnfg = require('./adminConfig')
var code = require('../constants').http_codes;
var msg = require('../constants').messages;

function validateSignUp(req, res, next) {
    let name = req.body.name.trim(),
        email = req.body.email.trim(),
        password = req.body.password.trim();

    if (name && email && password) {
        next();
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

function validateLogin(req, res, next) {
    let email = req.body.email.trim(),
        password = req.body.password.trim();
    if (email && password) {
        next();
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

async function verifyAdminToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, admincnfg.secret, (err) => {
        if (err) {
            return res.json({ code: code.badRequest, message: msg.invalidToken })
        }
        else {
            next();
        }
    })
}

function validateBody(req, res, next) {
    let data = req.body
    let flag = false
    for (let k in data) {
        if (!data[k].trim()) {
            flag = true;
        }
    }
    if (flag == true) {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
    else {
        next();
    }
}

module.exports = {
    validateSignUp,
    validateLogin,
    verifyAdminToken,
    validateBody
}