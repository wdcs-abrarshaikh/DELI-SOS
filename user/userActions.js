
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

function addPhoto(req, res) {
    service.addPhoto(req, res)
}

function deletePhoto(req, res) {
    service.deletePhoto(req, res)
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
    addPhoto,
    deletePhoto,
    addReview,
    updateReview
}