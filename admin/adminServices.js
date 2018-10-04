var userModel = require('../schema/user');
var restModel = require('../schema/restaurant');
var bcrypt = require('bcrypt');
var util = require('../app util/util');
var code = require('../constants').http_codes;
var msg = require('../constants').messages;
var role = require('../constants').roles;
var status = require('../constants').status;
var validate = require('./adminValidator')

async function createAdmin(req, res) {
    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: code.badRequest, message: msg.emailAlreadyRegistered });
    }
    else {
        if (util.validateEmail(data.email)
            && util.validatePassword(data.password)) {
            let user = new userModel(data)
            user.role = role.ADMIN
            user.password = bcrypt.hashSync(data.password, 11)
            user.save((err, data) => {
                return (err) ?
                    res.json({ code: code.internalError, message: msg.internalServerError }) :
                    res.json({ code: code.created, message: msg.registered, data: data })
            });
        }
        else {
            return res.json({ code: code.badRequest, message: msg.invalidEmailPass })
        }
    }
}

async function authenticateAdmin(req, res) {
    let data = req.body;
    await userModel.findOne({ email: data.email, role: role.ADMIN }, (err, result) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.adminNotFound })
        }
        else {
            if (bcrypt.compareSync(data.password, result.password)) {
                let token = util.generateToken(result, process.env.admin_secret)
                return res.json({ code: code.ok, message: msg.loggedIn, token: token,data:result })
            }
            else {
                return res.json({ code: code.badRequest, message: msg.invalidPassword })
            }
        }
    })
}

async function manageSocialLogin(req, res) {
    let data = req.body
    let user = new userModel(data)
    await userModel.findOne({ socialId: data.socialId }, (err, data) => {
        if (err) {
            return json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            user.isSocialLogin = true
            user.role = role.ADMIN
            user.save((err, result) => {
                if (err) {
                    return res.json({ code: code.internalError, message: msg.internalServerError })
                }
                else {
                    let token = util.generateToken(result, process.env.admin_secret)
                    return res.json({ code: code.ok, message: msg.loggedIn, token: token })
                }
            })
        }
        else {
            let token = util.generateToken(data, process.env.admin_secret)
            return res.json({ code: code.ok, message: msg.loggedIn, token: token })
        }
    })
}

async function resetPassword(req, res) {
    let newpass = util.generateRandomPassword().toUpperCase()
    let hash = bcrypt.hashSync(newpass, 11)

    await userModel.findOneAndUpdate({ email: req.body.email, role: role.ADMIN }, { password: hash }, { new: true }, async (err, result) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.emailNotFound })
        }
        else {
            await util.sendEMail(result.email, newpass).then((data) => {
                return (data == true) ? res.json({ code: code.ok, message: `password sent on ${result.email}` })
                    : res.json({ code: code.notImplemented, message: msg.mailNotSent })
            }).catch((err) => {
                return res.json({ code: code.notImplemented, message: msg.mailNotSent })
            })
        }
    })
}

async function getUsers(req, res) {
    userModel.find({ role: role.USER }, (err, result) => {
        return (err) ? res.json({ code: code.internalError, message: internalServerError })
            : res.json({ code: code.ok, message: msg.ok, data: result })
    })
}

async function getUserDetail(req, res) {
    let id = req.params.id
    userModel.findOne({ _id: id }, (err, result) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!result) {
            return res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            return res.json({ code: code.ok, message: msg.ok, data: result })
        }
    })
}

async function createUser(req, res) {
    console.log(req.body)
    let data = req.body;
    if (await userModel.findOne({ email: data.email })) {
        return res.json({ code: code.badRequest, message: msg.emailAlreadyRegistered });
    }
    else {
        console.log(util.validatePassword(data.password))
        if (util.validateEmail(data.email)
            && util.validatePassword(data.password)) {
                
            let user = new userModel(data)
            user.password = bcrypt.hashSync(data.password, 11)
            user.save((err, data) => {
                return (err) ?
                    res.json({ code: code.internalError, message: msg.internalServerError }) :
                    res.json({ code: code.created, message: msg.registered, data: data })
            });
        }
        else{
            return res.json({code:code.badRequest,message:msg.invalidEmailPass})
        }
    }
}

async function updateUserDetail(req, res) {
    let id = req.params.id;
    await userModel.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true }, (err, data) => {
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else {
            res.json({ code: code.ok, message: msg.updated, data: data })
        }
    })
}

async function addRestaurant(req, res) {
    req.body.location = {
        type:"Point",
        coordinates:[req.body.longitude,req.body.latitude]
    }
    let rest = new restModel(req.body)
    rest.status = status.active;
    rest.save((err, data) => {
        console.log(err)
        return (err) ? res.json({ code: code.internalError, message: msg.internalServerError }) :
            res.json({ code: code.created, message: msg.restAddSucessfully, data: data })
    })
}

async function getRestaurantDetails(req, res) {
    let id = req.params.id
    await restModel.findById({ _id: id }, (err, data) => {
        if (err) {
            return res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            return res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            return res.json({ code: code.ok, message: msg.ok, data: data })
        }
    })
}

async function getRestaurantList(req, res) {
    restModel.find((err, result) => {
        return (err) ? res.json({ code: code.internalError, message: internalServerError })
            : res.json({ code: code.ok, message: msg.ok, data: result })
    })
}

async function updateRestaurant(req, res) {
    let id = req.params.id;
    console.log(typeof(obj))
    await restModel.findByIdAndUpdate({ _id: id }, { $set: req.body }, { new: true }, (err, data) => {
        console.log(err)
        if (err) {
            res.json({ code: code.internalError, message: msg.internalServerError })
        }
        else if (!data) {
            res.json({ code: code.notFound, message: msg.restNotFound })
        }
        else {
            res.json({ code: code.ok, message: msg.updated, data: data })
        }
    })
}

async function deleteRestaurant(req, res) {
    restModel.findByIdAndUpdate({ _id: req.params.id },
        { $set: { status: status.inactive } }, { new: true }, (err, data) => {
            console.log(err)
            if (err) {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else if (!data) {
                return res.json({ code: code.notFound, message: msg.restNotFound })
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

async function uploadPhoto(req, res) {
    util.uploadPhoto(req).then((data) => {
        return res.json({ code: code.created, message: msg.imageUploaded, url: data })
    }).catch((err) => {
        return res.json({ code: code.internalError, message: msg.internalServerError })
    })

}
async function deleteRestaurantPhoto(req, res) {
    url = req.body.url
    id = req.body.restId
    restModel.findOneAndUpdate({ _id: id }, { $pull: { photos: url } }, (err, data) => {
        
        return (err) ? res.json({ code: code.internalError, message: msg.internalServerError }) :
            res.json({ code: code.ok, message: msg.imageDeleted })
    })
}

async function approveRestaurantProposal(rest_id, res) {
    restModel.findByIdAndUpdate({ _id: rest_id },
        { $set: { status: status.active } }, { new: true }, (err, data) => {
            if (err) {
                return res.json({ code: code.internalError, message: msg.internalServerError })
            }
            else if (!data) {
                return res.json({ code: code.notFound, message: msg.restNotFound })
            }
            else {
                return res.json({ code: code.ok, message: msg.ok, data: data })
            }
        })
}

module.exports = {
    createAdmin,
    authenticateAdmin,
    resetPassword,
    getUsers,
    getUserDetail,
    createUser,
    updateUserDetail,
    manageSocialLogin,
    addRestaurant,
    getRestaurantDetails,
    getRestaurantList,
    updateRestaurant,
    deleteRestaurant,
    uploadPhoto,
    deleteRestaurantPhoto,
    approveRestaurantProposal
}