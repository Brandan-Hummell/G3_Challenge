var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_db');

module.exports = mongoose;