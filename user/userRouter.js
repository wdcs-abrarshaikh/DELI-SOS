var userRouter = require('express').Router();
var validator = require('./userValidator')
var actions = require('./userActions')


userRouter.route('/signUp')
    .post([validator.validateSignUp], (req, res) => {
        actions.signup(req, res)
    });

userRouter.route('/login')
    .post([validator.validateLogin], (req, res) => {
        actions.login(req, res)
    });

userRouter.route('/socialLogin').post([validator.validateBody], (req, res) => {
    actions.socialLogin(req, res)
})
userRouter.route('/forgotPassword').post((req, res) => {
    actions.forgotPassword(req, res)
})

userRouter.route('/getDetail/:id')
    .get([validator.verifyUserToken], (req, res) => {
        actions.getDetail(req, res)
    })

userRouter.route('/addRestaurant')
    .post([validator.validateBody], (req, res) => {
        actions.addRestaurant(req, res)
    })

userRouter.route('/uploadPhoto')
    .post([validator.validateBody], (req, res) => {
        actions.uploadPhoto(req, res)
    })
module.exports = userRouter;
