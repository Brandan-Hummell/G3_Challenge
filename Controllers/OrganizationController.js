var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true }));
router.use(bodyParser.json());

var Organization = require('../Models/organization');

//Create new organizations
router.post('/', function (req, res){
    // requires the sub document parameters to be included in the post
    Organization.create({
        name: req.body.name,
        addresses: [{
            postal: req.body.postal,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            country: req.body.country
        }]
    }, 
    //error handling - returns status 500 if there is an error with the post
    function (err, organization) {
        if (err) return res.status(500).send("There was an error when adding an organization to the database");
        res.status(200).send(organization);
    });
});

//Update a single organization entry
router.put('/:id', function (req, res) {
    
    Organization.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, organization) {
        //error handling - returns status 500 if there is an error with updating the organization
        if (err) return res.status(500).send("There was an error when updating the organization.");
        //if the organization does not exist, returns a 404 error
        if (!organization) return res.status(404).send("There is no organization with that ID.");
        res.status(200).send(organization);
    });
});

//Delete an organization from the database using the ID
router.delete('/:id', function(req, res){

    Organization.findByIdAndRemove(req.params.id, function(err, organization){
        //error handling - returns status 500 if there is an error with deleting the organization
        if (err) return res.status(500).send("There was an error when attempting to delete the organization.");
        //if the organization does not exist, returns a 404 error
        if (!organization) return res.status(404).send("No such organization was found.");
        res.status(200).send("The organization " + organization.name + " was removed successfully.");
    });
});

//Read route for all organizations
router.get('/', function(req, res) {
    Organization.find({}, function(err, organizations) {
        //if there is an error, flag a 500 status code
        if (err) return res.status(500).send("There was an error when attempting to return the organizations.");
        //if there is no error, return a 200 code and list out the organizations
        res.status(200).send(organizations);
    });
});

//Find a single organization from the DB 
router.get('/:id', function(req, res){
    
    Organization.findById(req.params.id, function(err, organization) {
        if (err) return res.status(500).send("There was an error encountered while trying to find the specified organization");
        // if no organization is found with the ID, send a 404 status code to indicate that no organization with that ID exists to be found.
        if (!organization) return res.status(404).send("No Organization found.");
        res.status(200).send(organization);
    });
});

//exports this controller to be used in app.js
module.exports = router;