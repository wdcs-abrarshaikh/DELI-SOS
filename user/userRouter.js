var userRouter = require('express').Router();
var validate = require('./userValidator')
var actions = require('./userActions')


userRouter.post('/uploadPhoto', (req, res) => {
    actions.uploadPhoto(req, res)
});

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
    .post([validate.validateRestaurant, validate.verifyUserToken], (req, res) => {
        actions.addRestaurant(req, res)
    })

userRouter.route('/getRestaurantDetail/:id')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getRestaurantDetail(req, res)
    })

userRouter.route('/getRestaurantList')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getRestaurantList(req, res)
    })

userRouter.route('/addReview')
    .post([validate.validateReview, validate.verifyUserToken], (req, res) => {
        actions.addReview(req, res)
    })

userRouter.route('/updateReview/:id')
    .put([validate.validateReview, validate.verifyUserToken], (req, res) => {
        actions.updateReview(req, res)
    })

userRouter.route('/deleteReview/:id')
    .get([validate.verifyUserToken], (req, res) => {
        actions.deleteReview(req, res)
    })

userRouter.route('/getAllReviews/:restId')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getAllReviews(req, res)
    })

userRouter.route('/addPhotoByUser')
    .post([validate.validateUpload, validate.verifyUserToken], (req, res) => {
        actions.addPhotoByUser(req, res)
    })

userRouter.route('/deletePhotoByUser')
    .post([validate.validateBody, validate.verifyUserToken], (req, res) => {
        actions.deletePhotoByUser(req, res)
    })

userRouter.route('/addToFavourites/:restId')
    .get([validate.verifyUserToken], (req, res) => {
        actions.addToFavourites(req, res)
    })

userRouter.route('/removeFavourite/:restId')
    .get([validate.verifyUserToken], (req, res) => {
        actions.removeFavourite(req, res)
    })

userRouter.route('/showFavourites')
    .get([validate.verifyUserToken], (req, res) => {
        actions.showFavourites(req, res)
    })

userRouter.route('/showProfile')
    .get([validate.verifyUserToken], (req, res) => {
        actions.showProfile(req, res)
    })

userRouter.route('/updateProfile')
    .put([validate.validateProfile, validate.verifyUserToken], (req, res) => {
        actions.updateProfile(req, res)
    })

userRouter.route('/changePassword')
    .post([validate.validateChangePassword, validate.verifyUserToken], (req, res) => {
        actions.changePassword(req, res)
    });

userRouter.route('/getNearByRestaurant/:userId')
    .get([validate.validateUserId, validate.verifyUserToken], (req, res) => {
        actions.getNearByRestaurant(req, res)
    });

userRouter.route('/followUser/:userId')
    .get([validate.validateUserId, validate.verifyUserToken], (req, res) => {
        actions.followUser(req, res)
    })

userRouter.route('/unfollowUser/:userId')
    .get([validate.validateUserId, validate.verifyUserToken], (req, res) => {
        actions.unfollowUser(req, res)
    })

userRouter.route('/getFollowingList')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getFollowingList(req, res)
    })

userRouter.route('/getFollowerList')
    .get([validate.verifyUserToken], (req, res) => {
        actions.getFollowerList(req, res)
    })

userRouter.route('/searchFollower/:name')
    .get([validate.verifyUserToken], (req, res) => {
        actions.searchFollower(req, res)
    })

userRouter.route('/searchFollowing/:name')
    .get([validate.verifyUserToken], (req, res) => {
        actions.searchFollowing(req, res)
    })

userRouter.route('/changeLocation')
    .put([validate.validateChangeLocation, validate.verifyUserToken], (req, res) => {
        actions.changeLocation(req, res)
    })

userRouter.route('/likeUnlikeReview/:reviewId')
    .get([validate.verifyUserToken], (req, res) => {
        actions.likeUnlikeReview(req,res)
    })
module.exports = userRouter;
