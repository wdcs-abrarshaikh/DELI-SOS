var service = require("./adminServices")

function signup(req, res) {
    service.createAdmin(req, res)
}

function login(req, res) {
    service.authenticateAdmin(req, res)
}
function socialLogin(req,res){
    service.manageSocialLogin(req,res)
}

function forgotPassword(req, res) {
    service.resetPassword(req, res)
}

function getUserList(req, res) {
    service.getUsers(req, res)
}

function gerUserDetails(req, res) {
    service.getDetails(req, res)
}

function addUser(req,res){
    service.createUser(req,res)
}

function updateUser(req,res){
    service.updateUserDetail(req,res)
}
module.exports = {
    signup,
    login,
    forgotPassword,
    getUserList,
    gerUserDetails,
    addUser,
    updateUser,
    socialLogin
}