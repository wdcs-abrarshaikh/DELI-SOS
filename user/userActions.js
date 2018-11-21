
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

function getRestaurantList(req, res) {
    service.getRestaurantList(req, res)
}

function uploadPhoto(req, res) {
    service.uploadPhoto(req, res)
}

function addPhotoByUser(req, res) {
    service.addPhotoByUser(req, res)
}

function deletePhotoByUser(req, res) {
    service.deletePhotoByUser(req, res)
}

function addReview(req, res) {
    service.addReview(req, res)
}

function updateReview(req, res) {
    service.updateReview(req, res)
}

function deleteReview(req, res) {
    service.deleteReview(req, res)
}

function getAllReviews(req, res) {
    service.getAllReviews(req, res)
}

function addToFavourites(req, res) {
    service.addToFavourites(req, res)
}

function removeFavourite(req, res) {
    service.removeFavourite(req, res)
}

function showFavourites(req, res) {
    service.showFavourites(req, res)
}

function showProfile(req, res) {
    service.showProfile(req, res)
}

function updateProfile(req, res) {
    service.updateProfile(req, res)
}

function changePassword(req, res) {
    service.changePassword(req, res)
}

function getNearByRestaurant(req, res) {
    service.getNearByRestaurant(req, res)
}

function followUser(req, res) {
    service.followUser(req, res)
}

function getFollowingList(req, res) {
    service.getFollowingList(req, res)
}

function getFollowerList(req, res) {
    service.getFollowerList(req, res)
}

function unfollowUser(req,res){
    service.unfollowUser(req,res)
}

function searchFollower(req,res){
    service.searchFollower(req,res)
}

function searchFollowing(req,res){
    service.searchFollowing(req,res)
}

function changeLocation(req,res){
    service.changeLocation(req,res)
}

function likeUnlikeReview(req,res){
    service.likeUnlikeReview(req,res)
}

function getCuisinList(req,res){
    service.getCuisinList(req,res)
}

function filterRestaurants(req,res){
    service.filterRestaurants(req,res)
}

function searchRestaurants(req,res){
    service.searchRestaurants(req,res)
}

function getAboutUs(req,res){
    service.getAboutUs(req,res)
}

function contactUs(req,res){
    service.contactUs(req,res)
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
    addReview,
    updateReview,
    addPhotoByUser,
    deletePhotoByUser,
    deleteReview,
    getAllReviews,
    addToFavourites,
    removeFavourite,
    showFavourites,
    showProfile,
    updateProfile,
    changePassword,
    getRestaurantList,
    getNearByRestaurant,
    followUser,
    getFollowingList,
    getFollowerList,
    unfollowUser,
    searchFollower,
    searchFollowing,
    changeLocation,
    likeUnlikeReview,
    getCuisinList,
    filterRestaurants,
    searchRestaurants,
    getAboutUs,
    contactUs
}