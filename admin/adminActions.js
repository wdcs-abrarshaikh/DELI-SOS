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

function getRestaurantDetails(req, res) {
    service.getRestaurantDetails(req, res)
}

function getRestaurantList(req, res) {
    service.getRestaurantList(req, res)
}

function updateRestaurant(req, res) {
    service.updateRestaurant(req, res)
}

function deleteRestaurant(req, res) {
    service.deleteRestaurant(req, res)
}
function uploadPhoto(req, res) {
    service.uploadPhoto(req, res)
}
function deleteRestaurantPhoto(req, res) {
    service.deleteRestaurantPhoto(req, res)
}

function deleteUser(req, res) {
    service.deleteUser(req, res)
}

// function whatuLike(req,res){
//     service.whatuLike(req,res)
// }
function getCuisin(req, res) {
    service.getCuisin(req, res)
}
function searchRestaurant(req, res) {
    service.searchRestaurant(req, res)
}

function approveRestaurantProposal(rest_id, res) {
    service.approveRestaurantProposal(rest_id, res)
}

function getAllPendingRestaurant(req, res) {
    service.getAllPendingRestaurant(req, res)
}

function restaurantCounts(req, res) {
    service.restaurantCounts(req, res)
}

function userCounts(req, res) {
    service.userCounts(req, res)
}

function reviewCounts(req, res) {
    service.reviewCounts(req, res)
}

function verifyToken(req, res) {
    service.verifyToken(req, res)
}

function addAboutUs(req, res) {
    service.addAboutUs(req, res)
}

function aboutUsList(req, res) {
    service.aboutUsList(req, res)
}

function deleteAboutUs(req, res) {
    service.deleteAboutUs(req, res)
}

function updateAboutUs(req, res) {
    service.updateAboutUs(req, res)
}

function addPrivacyPolicy(req, res) {
    service.addPrivacyPolicy(req, res)
}

function privacyPolicyList(req, res) {
    service.privacyPolicyList(req, res)
}

function updatePrivacyPolicy(req, res) {
    service.updatePrivacyPolicy(req, res)
}

function deletePrivacyPolicy(req, res) {
    service.deletePrivacyPolicy(req, res)
}

function getContactRequest(req, res) {
    service.getContactRequest(req, res)
}

// function resolveContactRequest(req, res) {
//     service.resolveContactRequest(req, res)
// }

function addCuisin(req, res) {
    service.addCuisin(req, res)
}

function searchCuisin(req, res) {
    service.searchCuisin(req, res)
}

function getCuisinList(req, res) {
    service.getCuisinList(req, res)
}

function deleteCuisin(req, res) {
    service.deleteCuisin(req, res)
}

function updateCuisin(req, res) {
    service.updateCuisin(req, res)
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
    searchRestaurant,
    approveRestaurantProposal,
    getAllPendingRestaurant,
    restaurantCounts,
    userCounts,
    reviewCounts,
    verifyToken,
    addAboutUs,
    aboutUsList,
    deleteAboutUs,
    updateAboutUs,
    addPrivacyPolicy,
    privacyPolicyList,
    updatePrivacyPolicy,
    deletePrivacyPolicy,
    getContactRequest,
    // resolveContactRequest,
    addCuisin,
    searchCuisin,
    getCuisinList,
    deleteCuisin,
    updateCuisin
}