var express = require("express")
var app = express();
var mongoose = require("mongoose")
var config = require('./config')
var bodyParser = require('body-parser')
mongoose.connect(config.dbUrl)
app.use(bodyParser.json())

require('./router')(app)

app.listen(config.port,()=>{
    console.log(`server listening on ${config.port}`)
})