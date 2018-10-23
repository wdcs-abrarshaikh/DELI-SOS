var userRouter  = require('../user/userRouter')
var adminRouter = require('../admin/adminRouter')
const path = require('path')
var express = require('express');





module.exports = function(app){
    let distDir='../public/dist/pluto'
    app.use('/',express.static(process.cwd()+'/public/dist/pluto'))
    app.use(express.static(path.join(__dirname, distDir)))
    app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
    });

    app.use('/apiDocs',express.static(process.cwd()+'/api/dist'))
    app.use('/user',userRouter)
    app.use('/admin',adminRouter)

}