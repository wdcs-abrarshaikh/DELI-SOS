var userRouter = require('express').Router();
var validator = require('../app util/util')
var actions = require('./userActions')


userRouter.route('/signUp')
    .post([validator.validateSignUp], (req, res) => {
        actions.signup(req, res)
    });

userRouter.route('/login')
    .post([validator.validateLogin], (req, res) => {
        actions.login(req, res)
    });

module.exports = userRouter;
