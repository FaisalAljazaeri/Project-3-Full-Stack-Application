//Require necearry NPM pacjage
const express = require("express");
//Require Mongoose Model for Organization
const Post = require('../model/Post')
//Instantiate a Router (min app that only handles routes)
const router = express.Router();




//export the Router 
module.exports = router;