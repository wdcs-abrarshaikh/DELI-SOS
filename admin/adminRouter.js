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
    
//  adminRouter.route('/getAllRestaurant')
//       .get((req, res) => {
//         action.getAllRestaurant(req, res)
//     })



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

// adminRouter.route('/getCuisin')
//     .get((req, res) => {
//         action.getCuisin(req, res)
//     })

adminRouter.route('/searchRestaurant/:name')
    .get([validate.verifyAdminToken], (req, res) => {
        action.searchRestaurant(req, res)
    })
adminRouter.route('/restaurantCounts')
    .get([validate.verifyAdminToken], (req, res) => {
        action.restaurantCounts(req, res)
    })

adminRouter.route('/userCounts')
    .get([validate.verifyAdminToken], (req, res) => {
        action.userCounts(req, res)
    })

adminRouter.route('/reviewCounts')
    .get([validate.verifyAdminToken], (req, res) => {
        action.reviewCounts(req, res)
    })

adminRouter.route('/verifyToken')
    .get([validate.verifyAdminToken], (req, res) => {
        action.verifyToken(req, res)
    })

adminRouter.route('/addAboutUs')
    .post([validate.verifyAdminToken], (req, res) => {
        action.addAboutUs(req, res)
    })

adminRouter.route('/aboutUsList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.aboutUsList(req, res)
    })

adminRouter.route('/deleteAboutUs/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.deleteAboutUs(req, res)
    })

adminRouter.route('/updateAboutUs/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.updateAboutUs(req, res)
    })

adminRouter.route('/addPrivacyPolicy')
    .post([validate.verifyAdminToken], (req, res) => {
        action.addPrivacyPolicy(req, res)
    })

adminRouter.route('/privacyPolicyList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.privacyPolicyList(req, res)
    })

adminRouter.route('/updatePrivacyPolicy/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.updatePrivacyPolicy(req, res)
    })

adminRouter.route('/deletePrivacyPolicy/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.deletePrivacyPolicy(req, res)
    })

adminRouter.route('/getContactRequest')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getContactRequest(req, res)
    })

// adminRouter.route('/resolveContactRequest/:id')
//     .put([validate.verifyAdminToken], (req, res) => {
//         action.resolveContactRequest(req, res)
//     })

adminRouter.route('/addCuisin')
    .post([validate.verifyAdminToken, validate.validateCuisin], (req, res) => {
        action.addCuisin(req, res)
    })
adminRouter.route('/searchCuisin')
    .get([validate.verifyAdminToken], (req, res) => {
        action.searchCuisin(req, res)
    })
adminRouter.route('/getCuisinList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getCuisinList(req, res)
    })
adminRouter.route('/deleteCuisin/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.deleteCuisin(req, res)
    })
adminRouter.route('/updateCuisin/:id')
    .put([validate.verifyAdminToken, validate.validateCuisin], (req, res) => {
        action.updateCuisin(req, res)
    })

adminRouter.route('/deleteRestaurantReq/:id')
    .put([validate.verifyAdminToken], (req, res) => {
        action.deleteRestaurantReq(req, res)
    })
module.exports = adminRouter
