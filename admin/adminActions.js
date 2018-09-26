var service = require("./adminServices")

function signup(req, res) {
    service.createAdmin(req, res)
}

function login(req, res) {
    service.authenticateAdmin(req, res)
}
function socialLogin(req, res) {
    service.manageSocialLogin(req, res)
}

function forgotPassword(req, res) {
    service.resetPassword(req, res)
}

function getUserList(req, res) {
    service.getUsers(req, res)
}

function gerUserDetails(req, res) {
    service.getUserDetails(req, res)
}

function addUser(req, res) {
    service.createUser(req, res)
}

function updateUser(req, res) {
    service.updateUserDetail(req, res)
}

function addRestaurant(req, res) {
    service.addRestaurant(req, res)
}

function getRestaurantDetails(req,res){
    service.getRestaurantDetails(req,res)
}

function getRestaurantList(req,res){
    service.getRestaurantList(req,res)
}

function updateRestaurant(req,res){
    service.updateRestaurant(req,res)
}

function deleteRestaurant(req,res){
    service.deleteRestaurant(req,res)
}
function addPhoto(req,res){
    service.addPhoto(req,res)
}
function deletePhoto(req,res){
    service.deletePhoto(req,res)
}
module.exports = {
    signup,
    login,
    forgotPassword,
    getUserList,
    gerUserDetails,
    addUser,
    updateUser,
    socialLogin,
    addRestaurant,
    getRestaurantDetails,
    getRestaurantList,
    updateRestaurant,
    deleteRestaurant,
    addPhoto,
    deletePhoto
}