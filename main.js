var express = require("express")
var app = express();
var mongoose = require("mongoose")
var bodyParser = require('body-parser')
var env = require('dotenv').config()
app.use(bodyParser.json())
mongoose.connect(process.env.dbUrl)

require('./router')(app)

app.listen(process.env.port,()=>{
    console.log(`server listening on ${process.env.port}`)
})