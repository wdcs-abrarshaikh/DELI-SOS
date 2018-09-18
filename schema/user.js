var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;

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
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.reviews }],
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.users }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.users }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.restaurants }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.reviews }],
    createdAt: { type: Date, default: Date.now },
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
    status: { type: String, emnum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    isSocialLogin: { type: Boolean, default: false },
    socialId: {
        type: String, required: () => {
            return (this.isSocialLogin == true) ? true : false
        }
    }
});

module.exports = mongoose.model(cnst.users, userSchema)