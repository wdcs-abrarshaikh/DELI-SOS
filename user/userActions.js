
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

function socialLogin(req, res) {
    service.manageSocialLogin(req, res)
}

function addRestaurant(req, res) {
    service.addRestaurant(req, res)
}

function getRestaurantDetail(req, res) {
    service.getRestaurantDetail(req, res)
}

function deleteRestaurantPhoto(req, res) {
    service.deleteRestaurantPhoto(req, res)
}
function uploadPhoto(req,res){
    service.uploadPhoto(req,res)
}
function deletePhotoByUser(req, res) {
    service.deletePhotoByUser(req, res)
}

function addReview(req,res){
    service.addReview(req,res)
}

function updateReview(req,res){
    service.updateReview(req,res)
}
module.exports = {
    signup,
    login,
    forgotPassword,
    getDetail,
    socialLogin,
    addRestaurant,
    getRestaurantDetail,
    uploadPhoto,
    deleteRestaurantPhoto,
    addReview,
    updateReview,
    deletePhotoByUser
}