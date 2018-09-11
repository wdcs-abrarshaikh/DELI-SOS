var userModel = require('../schema/userSchema')
var bcrypt = require('bcrypt')
var util = require('../app util/util')
var config = require('./userConfig')

async function createUser(req, res) {
    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: 406, message: 'email already registered' });
    }
    else {
        if (util.validateEmail(data.email)
            && util.validatePassword(data.password)) {
            let user = new userModel(data)
            user.role = 'USER'
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

async function authenticateUser(req, res) {
    let data = req.body;
    await userModel.findOne({ email: data.email,role:'USER' }, (err, result) => {
        if (err) {
            return res.json({ code: 500, message: "Internal Server error" })
        }
        else if (!result) {
            return res.json({ code: 404, message: "No such user is registered" })
        }
        else {
            if (bcrypt.compareSync(data.password, result.password)) {
                let token = util.generateToken(result,config.secret)
                return res.json({ code: 200, message: "Logged in", token: token })
            }
            else {
                return res.json({ code: 406, message: "Invalid password" })
            }
        }
    })
}

module.exports = {
    createUser,
    authenticateUser
}