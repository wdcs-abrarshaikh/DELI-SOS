var userRouter = require('express').Router();
var validate = require('./userValidator')
var actions = require('./userActions')


userRouter.route('/signUp')
    .post([validate.validateSignUp], (req, res) => {
        actions.signup(req, res)
    });

userRouter.route('/login')
    .post([validate.validateLogin], (req, res) => {
        actions.login(req, res)
    });

userRouter.route('/socialLogin')
    .post([validate.validateSocialLogin], (req, res) => {
        actions.socialLogin(req, res)
    })

userRouter.route('/forgotPassword')
    .post([validate.validateBody], (req, res) => {
        actions.forgotPassword(req, res)
    })

userRouter.route('/getUserDetail/:id')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getDetail(req, res)
    })

userRouter.route('/addRestaurant')
    .post([validate.verifyUserToken], (req, res) => {
        actions.addRestaurant(req, res)
    })

userRouter.route('/getRestaurantDetail/:id')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getRestaurantDetail(req, res)
    })

userRouter.route('/uploadphoto')
    .post([validate.validateBody],(req, res) => {
        actions.uploadPhoto(req, res)
    })

userRouter.route('/deleteRestaurantPhoto')
    .post([validate.validateBody, validate.verifyUserToken], (req, res) => {
        actions.deleteRestaurantPhoto(req, res)
    })

userRouter.route('/deletePhotoByUser')
    .post([validate.validateBody, validate.verifyUserToken], (req, res) => {
        actions.deletePhotoByUser(req, res)
    })

userRouter.route('/addReview')
    .post([validate.validateBody, validate.verifyUserToken], (req, res) => {
        actions.addReview(req, res)
    })

userRouter.route('/updateReview/:id')
    .put([validate.validateBody, validate.verifyUserToken], (req, res) => {
        actions.updateReview(req, res)
    })

    // userRouter.route('/deleteuser/:id')
    // .get([validate.verifyUserToken], (req, res) => {
    //     actions.deleteuser(req, res)
    // })



module.exports = userRouter;
