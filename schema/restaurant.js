var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;
var status = require('../constants').status;
var meal = require('../constants').mealTypes;

var restaurantSchema = new schema({
    name: { type: String , required: true },
    description: { type: String ,required: true},
    address: {
        street1: String,
        stree2: String,
        city: String,
        state: String,
        pincode: Number
    },
    // latitude: { type: String, required: true },
    // longitude: { type: String, required: true },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    mealOffers: { type: [{ type: String, enum: [meal.breakfast, meal.lunch, meal.dinner, meal.all] }], default: meal.all },
    photos: [{ type: String }],
    cuisinOffered:[String],
    openTime: { type: String, required: true },
    closeTime: { type: String, required: true },
    contactNumber: { type: Number,default:0 },
    website: { type: String,default:''},
    menu: [{ type: String}],
    photoByUser: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: cnst.users },
        url: { type: String },
        postedAt: { type: Date }
    }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.reviews }],
    ratings: { type: Number },
    perPersonCost: { type: Number },
    status: { type: String, enum: [status.active, status.inactive, status.pending], default: status.pending },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: cnst.users },
    editedBy: { type: mongoose.Schema.Types.ObjectId, ref: cnst.users }
  }, {
        versionKey: false
    })

module.exports = mongoose.model(cnst.restaurants, restaurantSchema)
