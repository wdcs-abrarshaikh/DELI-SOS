var mongoose = require('mongoose')
var schema = mongoose.Schema;

var userSchema = new schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    maritalStatus: { type: String, enum: ["MARRIED", "UNMARRIED"] },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
    role:{type:String,enum:['ADMIN','USER']}
})

module.exports = mongoose.model('users', userSchema)
