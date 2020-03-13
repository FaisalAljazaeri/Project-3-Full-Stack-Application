//Require necearry NPM pacjage
const express = require("express");

//Require Mongoose Model for Users
const User = require("../model/User");

//Instantiate a Router (min app that only handles routes)
const router = express.Router();

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

//export the Router
module.exports = router;
