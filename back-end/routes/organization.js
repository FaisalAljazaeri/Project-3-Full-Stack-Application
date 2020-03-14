//Require necearry NPM pacjage
const express = require("express");

//Require Mongoose Model for Organization
const Organization = require('../model/Organization')

//Instantiate a Router (min app that only handles routes)
const router = express.Router();


  

/**
 * @method POST
 * @route   /api/organizations
 * @action  CREATE
 * @desc    Create a new organizations
 */
router.post("/api/organizations", (req, res) => {
    // Add the organizations recieved from the request body to the database
    Organization.create(req.body.organization)
        .then(organization => res.status(201).json({ organization }))
        .catch(error => res.status(500).json({ error }));
});






//export the Router 
module.exports = router;