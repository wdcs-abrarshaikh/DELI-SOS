
var service = require('./userServices')


function signup(req,res){
    service.createUser(req,res)
}

function login(req,res){
    service.authenticateUser(req,res)

}

module.exports = {
    signup,
    login
    
}