var userRouter  = require('../user/userRouter')
var adminRouter = require('../admin/adminRouter')

var express = require('express');





module.exports = function(app){
    console.log(process.cwd())
    app.use('/apiDocs',express.static(process.cwd()+'/api/dist'))
    app.use('/user',userRouter)
    app.use('/admin',adminRouter)

}