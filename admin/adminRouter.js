var adminRouter = require("express").Router();
var action = require("./adminActions")
var validate = require("./adminValidator")


adminRouter.route('/signUp')
    .post([validate.validateSignUp], (req, res) => {
        action.signup(req, res)
    })

adminRouter.route('/login')
    .post([validate.validateLogin], (req, res) => {
        action.login(req, res)
    });

// adminRouter.route('/socialLogin')
//     .post([validate.validateSocialLogin], (req, res) => {
//         action.socialLogin(req, res)
//     })

adminRouter.route('/forgotPassword')
    .post([validate.validateBody], (req, res) => {
        action.forgotPassword(req, res)
    });

adminRouter.route('/getUserList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getUserList(req, res)
    });

adminRouter.route('/getUserDetail/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getUserDetail(req, res)
    })

adminRouter.route('/addUser')
    .post([validate.validateSignUp, validate.verifyAdminToken], (req, res) => {
        action.addUser(req, res)
    })

adminRouter.route('/updateUser/:id')
    .put([validate.validateBody, validate.verifyAdminToken], (req, res) => {
        action.updateUser(req, res)
    })

adminRouter.route('/addRestaurant')
    .post([validate.verifyAdminToken, validate.validateRestaurant], (req, res) => {
        action.addRestaurant(req, res)
    })

adminRouter.route('/getRestaurantDetails/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getRestaurantDetails(req, res)
    })

adminRouter.route('/getRestaurantList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getRestaurantList(req, res)
    })

adminRouter.route('/updateRestaurant/:id')
    .put([validate.verifyAdminToken, validate.validateRestaurant], (req, res) => {
        action.updateRestaurant(req, res)
    })

adminRouter.route('/deleteRestaurant/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.deleteRestaurant(req, res)
    })

adminRouter.route('/uploadPhoto')
    .post([validate.validateBody], (req, res) => {
        action.uploadPhoto(req, res)
    })

adminRouter.route('/deletePhoto').post([validate.verifyAdminToken], (req, res) => {
    action.deletePhoto(req, res)
})

adminRouter.route('/approveRestaurantProposal/:restaurant_id').get([validate.validaterestId, validate.verifyAdminToken], (req, res) => {
    let { restaurant_id } = req.params;
    action.approveRestaurantProposal(restaurant_id, res)
})

adminRouter.route('/getAllPendingRestaurant').get([validate.verifyAdminToken], (req, res) => {
    action.getAllPendingRestaurant(req, res)
})

adminRouter.route('/deleteRestaurantPhoto')
    .post([validate.verifyAdminToken], (req, res) => {
        action.deleteRestaurantPhoto(req, res)
    })

adminRouter.route('/deleteUser/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.deleteUser(req, res)
    })

// adminRouter.route('/whatuLike')
//     .post((req, res) => {
//         action.whatuLike(req, res)
//     })

adminRouter.route('/getCuisin')
    .get((req, res) => {
        action.getCuisin(req, res)
    })

adminRouter.route('/searchRestaurant/:name')
    .get((req, res) => {
        action.searchRestaurant(req, res)
    })
adminRouter.route('/noOfRestaurant')
    .get((req, res) => {
        action.noOfRestaurant(req, res)
    })

adminRouter.route('/noOfUsers')
    .get((req, res) => {
        action.noOfUsers(req, res)
    })

adminRouter.route('/noOfReviews')
    .get((req, res) => {
        action.noOfReviews(req, res)
    })

adminRouter.route('/verifyToken')
    .get((req, res) => {
        action.verifyToken(req, res)
    })

adminRouter.route('/about_Us')
    .post([validate.verifyAdminToken], (req, res) => {
        action.about_Us(req, res)
    })

adminRouter.route('/getAbout_Us')
    .get((req, res) => {
        action.getAbout_Us(req, res)
    })

adminRouter.route('/delAbout_Us/:id')
    .put((req, res) => {
        action.delAbout_Us(req, res)
    })

adminRouter.route('/updateAbout_Us/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.updateAbout_Us(req, res)
    })

adminRouter.route('/privacyPolicy')
    .post([validate.verifyAdminToken], (req, res) => {
        action.privacyPolicy(req, res)
    })

adminRouter.route('/getPrivacyPolicy')
    .get((req, res) => {
        action.getPrivacyPolicy(req, res)
    })

adminRouter.route('/updatePrivacyPolicy/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.updatePrivacyPolicy(req, res)
    })

adminRouter.route('/delPrivacyPolicy/:id')
    .put((req, res) => {
        action.delPrivacyPolicy(req, res)
    })

adminRouter.route('/getContactUs')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getContactUs(req, res)
    })

adminRouter.route('/resolveContactUs/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.resolveContactUs(req, res)
    })
module.exports = adminRouter
