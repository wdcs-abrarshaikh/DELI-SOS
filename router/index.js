var userRouter  = require('../user/userRouter')
//var adminRouter = require('../admin/adminRouter')




module.exports = function(app){
    app.use('/user',userRouter)
    //app.use('/admin',adminRouter)
}