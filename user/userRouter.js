var userRouter = require('express').Router();
var validator = require('./userValidator')
var actions = require('./userActions')


userRouter.route('/signUp')
.post([validator.check], (req, res) => {
        actions.signup(req, res)
    });


module.exports = userRouter;
