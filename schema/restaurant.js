var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;

var restaurantSchema = new schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: Object, required: true },
    breakfast: [{ type: Object, required: true }],
    lunch: [{ type: Object, required: true }],
    dinner: [{ type: Object, required: true }],
    photos: [{ type: String, required: true }],
    cuisin: [{ type: Object, required: true }],
    openTime: { type: Date, required: true },
    closeTime: { type: Date, required: true },
    contactNumber: { type: Number, required: true },
    website: { type: String },
    menu: [{ type: String, required: true }],
    photoByUser: [{ type: String }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId }],
    ratings: { type: Number },
    perPersonCost: { type: Number },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' }
})

module.exports = mongoose.model(cnst.restaurants, restaurantSchema)