var express = require("express")
var app = express();
var mongoose = require("mongoose")
var bodyParser = require('body-parser')
var env = require('dotenv').config()
app.use(bodyParser.json({extended:true,limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}))
mongoose.connect(process.env.dbUrl)

require('./router')(app)

app.listen(process.env.port,()=>{
    console.log(`server listening on ${process.env.port}`)
})