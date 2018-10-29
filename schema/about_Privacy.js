var mongoose = require('mongoose');
var schema = mongoose.Schema;
let schmaName = require('../constants').schemas;
let Type = require('../constants').Type;
let Status = require('../constants').status;
var aboutSchema = new schema({
   content:{type:String,required: true },
   createdBy:{type: mongoose.Schema.Types.ObjectId},
   type:{type:String,enum:[Type.about,Type.privacy,Type.contact]},
//    Name:{type:String,required:function(){ return (this.Type == Type.contact) ? true : false}},
   contactNo:{type:String,required:function(){ return (this.Type == Type.contact) ? true : false}},
//    Email:{type:String,required:function(){ return (this.Type == Type.contact) ? true : false}},
//    Description:{type:String,required:function(){ return (this.Type == Type.contact) ? true : false}},
   status:{type:String,enum:[Status.active,Status.inactive],default:Status.active}
});

module.exports = mongoose.model(schmaName.about, aboutSchema)