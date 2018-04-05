
// mongoose is the ORM for MongoDB
var mongoose = require('mongoose');

var Locations = new mongoose.Schema({
    postal: Number,
    city: String,
    state: String,
    zip: Number,
    country: String
});
var OrganizationSchema = new mongoose.Schema({
    name: String,
    addresses: [Locations]
});

// creating the actual model
mongoose.model('Organization', OrganizationSchema);

// export the model for use in the controller
module.exports = mongoose.model('Organization');