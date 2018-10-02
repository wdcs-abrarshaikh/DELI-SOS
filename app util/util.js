var generator = require('generate-password')
var nodemailer = require('nodemailer')
var jwt = require('jsonwebtoken')
var cloudinary = require('cloudinary')
var fs = require('fs')
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
})

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
    return jwt.sign(obj, secret, { expiresIn: '24hr' })
}

function decodeToken(token){
    return jwt.decode(token)
}

function generateRandomPassword() {
    return generator.generate({
        length: 10,
        numbers: true
    })
}

function sendEMail(receiverid, data) {

    let tansporter = nodemailer.createTransport({
        service: process.env.mail_service,
        auth: {
            user: process.env.userId,
            pass: process.env.pass
        }
    })

    let mailoption = {

        from: `DELI SOS<${process.env.userId}>`,
        to: receiverid,
        subject: "DELI SOS forgot Password",
        html: `<html>\
                Hello user,<br>
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
        tansporter.sendMail(mailoption, (err) => {
            (err) ? reject(err) : resolve(true)
        })
    })

}

function uploadPhoto(req) {
    return new Promise((resolve, reject) => {
        var binary = new Buffer(req.body.file, 'base64')
        fs.writeFile("img/test.jpg", binary, 'binary', async () => {
            await cloudinary.uploader.upload('img/test.jpg', (result) => {
                (result) ? resolve(result.url) : reject('error')
            })
        })
    })
}

module.exports = {
    validateEmail,
    validatePassword,
    generateToken,
    generateRandomPassword,
    sendEMail,
    uploadPhoto,
    decodeToken
}