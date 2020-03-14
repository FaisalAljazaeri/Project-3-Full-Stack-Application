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



/**
 * @method DELETE
 * @route   /api/organizations/id
 * @action  DESTROY
 * @desc    Delete An organization by organization ID
 */
router.delete("/api/organizations/:id", (req, res) => {
    // Find the organization with the passed ID
    Organization.findById(req.params.id)
        .then(organization => {
            // Check if a organization is found by the passed ID
            if (organization) {
               // pass the result of Mongoose's  .delete method to next.then statment
                return organization.delete();
            } else {
                // If no user was found by the passed ID, send an error message as response
                res.status(404).json({
                    error: {
                        name: "DocumentNotFoundError",
                        message: "The provided ID doesn't match any documents"
                    }
                });
            }
        })
        .then(() => {
            // If the update succeeded, return 204 and no JSON response
            res.status(204).end();
        })
        .catch(error => res.status(500).json({ error }));
});






//export the Router 
module.exports = router;