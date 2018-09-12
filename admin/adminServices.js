var userModel = require('../schema/userSchema')
var bcrypt = require('bcrypt')
var util = require('../app util/util')
var config = require('./adminConfig')


async function createAdmin(req, res) {
    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: 406, message: 'email already registered' });
    }
    else {
        if (util.validateEmail(data.email)
            && validate.validatePassword(data.password)) {
            let user = new userModel(data)
            user.role = 'ADMIN'
            user.password = bcrypt.hashSync(data.password, 11)
            user.save((err, data) => {
                return (err) ?
                    res.json({ code: 500, message: "Internal server error" }) :
                    res.json({ code: 201, message: "successfully registered", data: data })
            });
        }
        else {
            return res.json({ code: 406, message: "invalid email or password" })
        }
    }
}

async function authenticateAdmin(req, res) {
    let data = req.body;
    await userModel.findOne({ email: data.email, role: 'ADMIN' }, (err, result) => {
        if (err) {
            return res.json({ code: 500, message: "Internal Server error" })
        }
        else if (!result) {
            return res.json({ code: 404, message: "No such admin is registered" })
        }
        else {
            if (bcrypt.compareSync(data.password, result.password)) {
                let token = util.generateToken(result, config.secret)
                return res.json({ code: 200, message: "Logged in", token: token })
            }
            else {
                return res.json({ code: 406, message: "Invalid password" })
            }
        }
    })
}

async function resetPassword(req, res) {
    let newpass = util.generateRandomPassword().toUpperCase()
    let hash = bcrypt.hashSync(newpass, 11)

    await userModel.findOneAndUpdate({ email: req.body.email, role: 'ADMIN' }, { password: hash }, { new: true }, async (err, result) => {
        if (err) {
            return res.json({ code: 500, message: "Internal server error" })
        }
        else if (!result) {
            return res.json({ code: 404, message: "no such email is registered" })
        }
        else {
            let data = await util.sendEMail(result.email, newpass)
            return (data == true) ? res.json({ code: 200, message: `password sent on ${result.email}` })
                : res.json({ code: 501, message: "something went wrong while sending mail" })
        }
    })
}

async function getUsers(req, res) {
    userModel.find({ role: "USER" }, (err, result) => {
        return (err) ? res.json({ code: "500", message: "Internal server error" })
            : res.json({ code: "200", message: "ok", data: result })
    })
}

async function getDetails(req, res) {
    let id = req.params.id
    userModel.findOne({ _id: id }, (err, result) => {
        if (err) {
            return res.json({ code: "500", message: "Intenal server error" })
        }
        else if (!result) {
            return res.json({ code: "404", message: "No such user found" })
        }
        else {
            return res.json({ code: "200", message: "ok", data: result })
        }
    })
}
module.exports = {
    createAdmin,
    authenticateAdmin,
    resetPassword,
    getUsers,
    getDetails
}