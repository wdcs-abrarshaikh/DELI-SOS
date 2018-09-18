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
    .post([validate.validateBody],(req, res) => {
        action.socialLogin(req, res)
    })

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

adminRouter.route('/addUser')
    .post([validate.validateSignUp], (req, res) => {
        action.addUser(req, res)
    })

adminRouter.route('/updateUser/:id')
    .put([validate.validateBody], (req, res) => {
        action.updateUser(req, res)
    })
module.exports = adminRouter