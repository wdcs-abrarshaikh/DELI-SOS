var jwt = require('jsonwebtoken')
var usercnfg = require('./userConfig')

function validateSignUp(req, res, next) {
    let firstName = req.body.firstName.trim(),
        email = req.body.email.trim(),
        password = req.body.password.trim();

    if (firstName && email && password) {
        next();
    }
    else {
        return res.json({ code: 406, message: "invalid request body" })
    }
}

function validateLogin(req, res, next) {
    let email = req.body.email.trim(),
        password = req.body.password.trim();
    if (email && password) {
        next();
    }
    else {
        return res.json({ code: 406, message: "Invalid request body" })
    }
}

async function verifyUserToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, usercnfg.secret, (err) => {
        if (err) {
            return res.json({ code: 406, message: "Invalid Token" })
        }
        else {
            next();
        }
    })
}

module.exports={
    validateSignUp,
    validateLogin,
    verifyUserToken
}