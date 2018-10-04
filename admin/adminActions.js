var service = require("./adminServices")

function signup(req, res) {
    service.createAdmin(req, res)
}

function login(req, res) {
    service.authenticateAdmin(req, res)
}
// function socialLogin(req, res) {
//     service.manageSocialLogin(req, res)
// }

function forgotPassword(req, res) {
    service.resetPassword(req, res)
}

function getUserList(req, res) {
    service.getUsers(req, res)
}

function getUserDetail(req, res) {
    service.getUserDetail(req, res)
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
function uploadPhoto(req,res){
    service.uploadPhoto(req,res)
}
function deleteRestaurantPhoto(req,res){
    service.deleteRestaurantPhoto(req,res)
}

function deleteUser(req,res){
    service.deleteUser(req,res)
}

// function whatuLike(req,res){
//     service.whatuLike(req,res)
// }
function getCuisin(req,res){
    service.getCuisin(req,res)
}
function searchRestaurant(req,res){
    service.searchRestaurant(req,res)
}

module.exports = {
    signup,
    login,
    forgotPassword,
    getUserList,
    getUserDetail,
    addUser,
    updateUser,
    // socialLogin,
    addRestaurant,
    getRestaurantDetails,
    getRestaurantList,
    updateRestaurant,
    deleteRestaurant,
    uploadPhoto,
    deleteRestaurantPhoto,
    deleteUser,
    // whatuLike,
    getCuisin,
    searchRestaurant
}