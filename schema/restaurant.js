var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;
var status = require('../constants').status;
var meal = require('../constants').mealTypes;

var restaurantSchema = new schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    mealOffers: { type:[{ type: String, enum: [meal.breakfast, meal.lunch, meal.dinner, meal.all] }], default:meal.all},
    photos: [{ image: String }],
    cuisin: [{
        name:String,
        image:String
         }],
    openTime: { type: Date, required: true },
    closeTime: { type: Date, required: true },
    contactNumber: { type: Number },
    website: { type: String },
    menu: [{ type: String }],
    photoByUser: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId }],
    ratings: { type: Number },
    perPersonCost: { type: Number },
    status: { type: String, enum: [status.active, status.inactive, status.pending], default: status.pending }
})

module.exports = mongoose.model(cnst.restaurants, restaurantSchema)