var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;
var ntfctnType = require('../constants').notificationsTypes;
var schmaName = require('../constants').schemas;
var notificationSchema = new schema({

    notificationType: { type: String, required: true, enum: [ntfctnType.reviewPosted,ntfctnType.reviewLiked, ntfctnType.follow, ntfctnType.followedBack] },

    restId: {
        type: mongoose.Schema.Types.ObjectId, ref: schmaName.restaurants, required: function () {
            return (this.notificationType == ntfctnType.review) ? true : false
        }
    },

    reviewId: {
        type: mongoose.Schema.Types.ObjectId, ref: schmaName.reviews, required: function () {
            return (this.notificationType == ntfctnType.review) ? true : false
        }
    },

    sender: { type: mongoose.Schema.Types.ObjectId, ref: schmaName.users, required: true },

    receiver: [{ type: mongoose.Schema.Types.ObjectId, ref: schmaName.users, required: true }],

    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model(cnst.notifications, notificationSchema)