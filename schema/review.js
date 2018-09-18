var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;

var reviewSchema = new schema({
    restId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    likePlace: { type: String, required: true, enum: ['WORST', 'BAD', 'OKAY', 'GOOD', 'GREAT'] },
    rating: { type: Number, required: true, default: 0 },
    improvementArea: [{ type: String, required: true }],
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: cnst.users }],

})
module.exports = mongoose.model(cnst.reviews, reviewSchema)