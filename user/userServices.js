var userModel = require('./userSchema')
var bcrypt = require('bcrypt')
var validate = require('./userValidator')

async function createUser(req,res) {

    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: 406, message: 'email already registered' });
    }
    if (validate.validateEmail(data.email)) {
        let user = new userModel(data)
        user.password = bcrypt.hashSync(data.password, 11)
        user.save((err, data) => {
            return (err) ?
                res.json({ code: 500, message: "Internal server error" }) :
                res.json({ code: 201, message: "successfully registered", data: data })
        });
    }
    else {
        return res.json({ code: 406, message: "invalid email" })
    }
}

module.exports = {
    createUser
}