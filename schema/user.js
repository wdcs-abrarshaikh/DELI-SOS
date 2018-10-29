var mongoose = require('mongoose');
var schema = mongoose.Schema;
let schmaName = require('../constants').schemas;
let roles = require('../constants').roles;
let status = require('../constants').status;
var bcrypt = require('bcrypt');


var userSchema = new schema({
    name: { type: String, required: true },
    email: {
        type: String, required: function () {
            return (this.isSocialLogin == false) ? true : false
        }
    },
    password: {
        type: String, required: function () {
            return (this.isSocialLogin == false) ? true : false
        }
    },
    location_address: {
        street1: String,
        stree2: String,
        city: String,
        state: String,
        pincode: Number
    },
    locationVisible: { type: Boolean, default: true },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.reviews }],
    follower: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.restaurants }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.reviews }],
    createdAt: { type: Date, default: Date.now },
    role: { type: String, enum: [roles.ADMIN, roles.USER], default: roles.USER },
    status: { type: String, enum: [status.active, status.inactive], default: status.active },
    isSocialLogin: { type: Boolean },
    socialId: {
        type: String, required: function () {
            return (this.isSocialLogin == true) ? true : false
        }
    },
    profilePicture: { type: String, default: ' ' },
    deviceId: {
        type: String, required: function () {
            if (this.role == roles.USER) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    deviceType: {
        type: String, required: function () {
            if (this.role == roles.USER) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    fcmToken: {
        type: String, required: function () {
            if (this.role == roles.USER) {
                return true;
            }
            else {
                return false;
            }
        }
    }
});

User = module.exports = mongoose.model(schmaName.users, userSchema)

User.countDocuments(async function (err, data) {
    if (err) {
        console.log('error while creating admin');
    } else if (data == 0) {
        let obj = {
            "name": process.env.admin_name,
            "email": process.env.admin_email,
            "password": process.env.admin_password,
            "role": roles.ADMIN,
            location: {
                type: "Point",
                coordinates: [process.env.long, process.env.lat]
            },
            location_address: {
                street1: '512 new avanue',
                stree2: 'Dunken',
                city: 'Ahmedabad',
                state: 'Gujarat',
                pincode: 382007
            }
        };

        let updatedPass = await bcrypt.hashSync(obj.password, 11);
        obj.password = updatedPass;
        let user = new User(obj);
        user.save(function (err, result) {
            (err) ? console.log(err) : console.log('admin created successfully.')
        })
    }
})
