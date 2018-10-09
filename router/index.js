var userRouter  = require('../user/userRouter')
var adminRouter = require('../admin/adminRouter')

var express = require('express');





module.exports = function(app){
    app.use('/',express.static(process.cwd()+'/public/dist/pluto'))
    app.use('/apiDocs',express.static(process.cwd()+'/api/dist'))
    app.use('/user',userRouter)
    app.use('/admin',adminRouter)

}