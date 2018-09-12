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

adminRouter.route('/getUserList')
    .get([validate.verifyAdminToken], (req, res) => {
        action.getUserList(req, res)
    });
adminRouter.route('/gerUserDetails/:id')
    .get([validate.verifyAdminToken], (req, res) => {
        action.gerUserDetails(req, res)
    })

module.exports = adminRouter