var mongoose = require('mongoose');
var schema = mongoose.Schema;
var cnst = require('../constants').schemas;

var notificationSchema = new schema({

})

module.exports = mongoose.model(cnst.notifications, notificationSchema)