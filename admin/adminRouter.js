var adminRouter = require("express").Router();
var action = require("./adminActions")
var validate = require("../app util/util")


adminRouter.route('/signUp')
    .post([validate.validateSignUp], (req, res) => {
        action.signup(req, res)
    })

adminRouter.route('/login')
    .post([validate.validateLogin], (req, res) => {
        action.login(req, res)
    });

adminRouter.route('/forgotPassword')
    .post((req, res) => {
        action.forgotPassword(req, res)
    });
module.exports = adminRouter