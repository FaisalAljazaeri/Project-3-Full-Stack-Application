//Require necearry NPM pacjage
const express = require("express");

//Require Mongoose Model for Users
const User = require("../model/User");

//Instantiate a Router (min app that only handles routes)
const router = express.Router();

/**
 * @method : GET
 * @route : /api/user
 * @action :  index
 * @desc    : get all user
 */
router.get("/api/users", (req, res) => {
    User.find()
        .then(user => {
            res.status(200).json({ users: user });
        })
        //catch any errors that may accours
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

/**
 * @method : GET
 * @route : /api/user/id
 * @action :  Show
 * @desc    : get an user by user ID
 */
router.get("/api/users/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                res.status(200).json({ users: user });
            } else {
                // if we coudn't find a document with matching ID
                res.status(404).json({
                    error: {
                        name: "DocumentNotFoundError ",
                        message: "The  providednId dosen't match any documents"
                    }
                });
            }
        })
        //catch any errors that may accours
        .catch(error => {
            res.status(500).json({ error: error });
        });
});
/**
 * @method POST
 * @route   /api/users
 * @action  CREATE
 * @desc    Create a new user
 */
router.post("/api/users", (req, res) => {
    // Add the user recieved from the request body to the database
    User.create(req.body.user)
        .then(user => res.status(201).json({ user }))
        .catch(error => res.status(500).json({ error }));
});

/**
 * @method PATCH
 * @route   /api/users/id
 * @action  UPDATE
 * @desc    Update a user by ID
 */
router.patch("/api/users/:id", (req, res) => {
    // Find the user with the passed ID
    User.findById(req.params.id)
        .then(user => {
            // Check if a user is found by the passed ID
            if (user) {
                // Update the existing user with the new data from the request body
                return user.update(req.body.user);
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
/**
 * @method  : delete
 * @route   : /api/users/id
 * @action  : Destory
 * @desc    : delete an user by user ID
 */
router.delete("/api/users/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                //pass the result of mongooes's ".delete" method to thee next ".then"
                user.remove();
            } else {
                // if we coudn;t find a document with matching ID
                res.status(404).json({
                    error: {
                        name: "DocumentNotFoundError ",
                        message: "The  providednId dosen't match any documents"
                    }
                });
            }
        })
        //another then
        .then(() => {
            // if the deletion succeeded , return 204 and no JSON
            res.status(204).end();
        })
        .catch(error => {
            res.status.json({ error: error });
        });
});

//export the Router
module.exports = router;
