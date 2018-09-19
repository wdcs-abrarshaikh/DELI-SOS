var mongoose = require('mongoose');
var schema = mongoose.Schema;
let schmaName = require('../constants').schemas;
let roles = require('../constants').roles;
let status = require('../constants').status;

var userSchema = new schema({
    name: { type: String, required: true },
    email: {
        type: String, required: () => {
            return (this.isSocialLogin == false) ? true : false

        }
    },
    password: {
        type: String, required: () => {
            return (this.isSocialLogin == false) ? true : false
        }
    },
    location: { type: Object },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.reviews }],
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.restaurants }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.reviews }],
    createdAt: { type: Date, default: Date.now },
    role: { type: String, enum: [roles.ADMIN, roles.USER], default: roles.USER },
    status: { type: String, emnum: [status.active,status.inactive], default: status.active },
    isSocialLogin: { type: Boolean, default: false },
    socialId: {
        type: String, required: () => {
            return (this.isSocialLogin == true) ? true : false
        }
    },
    profilePicture:{type:String}
});

module.exports = mongoose.model(schmaName.users, userSchema)