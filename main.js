var express = require("express")
var app = express();
var mongoose = require("mongoose")
var config = require('./config')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
mongoose.connect(config.dbUrl)

require('./router')(app)

app.listen(config.port,()=>{
    console.log(`server listening on ${config.port}`)
})