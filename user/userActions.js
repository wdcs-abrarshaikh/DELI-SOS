
var service = require('./userServices')


function signup(req, res) {
    service.createUser(req, res)
}

function login(req, res) {
    service.authenticateUser(req, res)

}

function forgotPassword(req, res) {
    service.resetPassword(req, res)
}

function getDetail(req, res) {
    service.fetchDetail(req, res)
}

function socialLogin(req,res){
    service.manageSocialLogin(req,res)
}
module.exports = {
    signup,
    login,
    forgotPassword,
    getDetail,
    socialLogin
}