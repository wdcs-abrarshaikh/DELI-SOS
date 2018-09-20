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

userRouter.route('/socialLogin').post([validate.validateBody], (req, res) => {
    actions.socialLogin(req, res)
})
userRouter.route('/forgotPassword').post([validate.verifyUserToken],(req, res) => {
    actions.forgotPassword(req, res)
})

userRouter.route('/getUserDetail/:id')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getDetail(req, res)
    })

userRouter.route('/addRestaurant')
    .post([validate.validateBody,validate.verifyUserToken], (req, res) => {
        actions.addRestaurant(req, res)
    })

userRouter.route('/uploadPhoto')
    .post([validate.validateBody,validate.verifyUserToken], (req, res) => {
        actions.uploadPhoto(req, res)
    })

userRouter.route('/getRestaurantDetail/:id').get([validate.verifyUserToken],(req,res)=>{
    actions.getRestaurantDetail(req,res)
})
module.exports = userRouter;
