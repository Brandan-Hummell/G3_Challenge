var express = require('express');
var app = express();
var db = require('./db');

var OrganizationController = require('./organization/OrganizationController');
app.use('/organizations', OrganizationController);

module.exports = app;