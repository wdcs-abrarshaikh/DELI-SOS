var service = require("./adminServices")

function signup(req,res){
    service.createAdmin(req,res)
}

function login(req,res){
    service.authenticateAdmin(req,res)
}

function forgotPassword(req,res){
    service.resetPassword(req,res)
}

module.exports={
    signup,
    login,
    forgotPassword
}