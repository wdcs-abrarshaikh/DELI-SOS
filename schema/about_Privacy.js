var mongoose = require('mongoose');
var schema = mongoose.Schema;
let schmaName = require('../constants').schemas;
let Type = require('../constants').Type;
let Status = require('../constants').status;
var aboutSchema = new schema({
   content: { type: String, required: true },
   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: schmaName.users },
   type: { type: String, enum: [Type.about, Type.privacy, Type.contact] },
   name: { type: String, required: function () { return (this.Type == Type.contact) ? true : false } },
   contactNumber: { type: Number, required: function () { return (this.Type == Type.contact) ? true : false } },
   email: { type: String, required: function () { return (this.Type == Type.contact) ? true : false } },
   //    Description:{type:String,required:function(){ return (this.Type == Type.contact) ? true : false}},
   status: { type: String, enum: [Status.active, Status.inactive], default: Status.active },
   createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model(schmaName.about, aboutSchema)