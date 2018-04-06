var express = require('express');
var app = express();
var db = require('./db');

var OrganizationController = require('./Controllers/OrganizationController');
app.use('/organizations', OrganizationController);

module.exports = app;