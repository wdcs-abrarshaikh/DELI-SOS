var jwt = require('jsonwebtoken')
var admincnfg = require('./adminConfig')
var code = require('../constants').http_codes;
var msg = require('../constants').messages;

function validateSignUp(req, res, next) {
    let firstName = req.body.firstName.trim(),
        email = req.body.email.trim(),
        password = req.body.password.trim();

    if (firstName && email && password) {
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

module.exports = {
    validateSignUp,
    validateLogin,
    verifyAdminToken
}