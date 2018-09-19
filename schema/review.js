var mongoose = require('mongoose');
var schema = mongoose.Schema;
var schmaName = require('../constants').schemas;
var status = require('../constants').status;
var rtng = require('../constants').criteria;

var reviewSchema = new schema({
    restId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    likePlace: { type: String, required: true, enum: [rtng.worst,rtng.bad,rtng.okay,rtng.good,rtng.great] },
    rating: { type: Number, required: true, default: 0 },
    improvementArea: [{ type: String, required: true }],
    status: { type: String, enum: [status.active,status.inactive], default: status.active },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }]

})
module.exports = mongoose.model(schmaName.reviews, reviewSchema)