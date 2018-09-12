var jwt = require('jsonwebtoken')
var generator = require('generate-password')
var config = require('../config')
var nodemailer = require('nodemailer')
var admincnfg = require('../admin/adminConfig')
var usercnfg = require('../user/userConfig')

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

async function verifyAdminToken(req, res, next) {
    let token = req.headers['authorization']

    await jwt.verify(token, admincnfg.secret, (err) => {
        if (err) {
            return res.json({ code: 406, message: "Invalid token" })
        }
        else {
            next();
        }
    })
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

function validateEmail(data) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(data)
}

function validatePassword(data) {
    let regex = /^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$_-])\S{6,16}$/;
    return regex.test(data)
}

function generateToken(data, secret) {
    let obj = {
        id: data._id,
        email: data.email,
        role: data.role
    }
    return jwt.sign(obj, secret, { expiresIn: '1hr' })
}

function generateRandomPassword() {
    return generator.generate({
        length: 10,
        numbers: true
    })
}

async function sendEMail(receiverid, data) {
    let tansporter = await nodemailer.createTransport(config.smtpconfig)

    let mailoption = {

        from: '"CODEZEROS"<codezerostrainee@gmail.com>',
        to: receiverid,
        subject: "DeliSOS Password Reset",
        html: `<html>\
        Your new password for Login is : ${data}\
       <br/><br/>\
       Thank you,\
       <br/>DELI SOS Team.\
        <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
       Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
        contain information that is privileged or exempt from disclosure under applicable law.\
        If you have received this message in error please immediately notify the sender by return e-mail and delete\
      this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
       destroy any printed copy you might have made.\
       </html>`

    }
    return new Promise(function (resolve, reject) {
        tansporter.sendMail(mailoption,(err) => {
            (err) ? reject(false) : resolve(true)
        })
    })

}

module.exports = {
    validateSignUp,
    validateLogin,
    validateEmail,
    validatePassword,
    generateToken,
    generateRandomPassword,
    sendEMail,
    verifyAdminToken,
    verifyUserToken
}