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

adminRouter.route('/socialLogin')
    .post([validate.validateSocialLogin], (req, res) => {
        action.socialLogin(req, res)
    })

adminRouter.route('/forgotPassword')
    .post([validate.validateBody], (req, res) => {
        action.forgotPassword(req, res)
    });

adminRouter.route('/getUserList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getUserList(req, res)
    });

adminRouter.route('/gerUserDetails/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.gerUserDetails(req, res)
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
    .post([validate.validateBody, validate.verifyAdminToken], (req, res) => {
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
    .put([validate.validateBody, validate.verifyAdminToken], (req, res) => {
        action.updateRestaurant(req, res)
    })

adminRouter.route('/deleteRestaurant/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.deleteRestaurant(req, res)
    })

adminRouter.route('/uploadPhoto')
    .post((req, res) => {
        action.addRestaurantPhoto(req, res)
    })

adminRouter.route('/deleteRestaurantPhoto')
    .post([validate.verifyAdminToken], (req, res) => {
        action.deleteRestaurantPhoto(req, res)
    })
module.exports = adminRouter