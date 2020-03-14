//Require necearry NPM pacjage
const express = require("express");
//Require Mongoose Model for Organization
const Post = require('../model/Post')
//Instantiate a Router (min app that only handles routes)
const router = express.Router();


/**
 * @method GET
 * @route  /api/posts
 * @action  INDEX
 * @desc    Get All posts 
 */
router.get('/api/posts', (req, res) => {
    Post.find()
    // Return all post as an Array
    .then((post) => {
      res.status(200).json({ post });
      console.log(posts)
    })
    // Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
  });




//export the Router 
module.exports = router;