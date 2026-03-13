

// importing the express module
const express = require('express');

// creating new router object
const postRouter = express.Router();

//importing the post method

const {createPost} = require('../Controller/postController.js');

postRouter.post('/', createPost);   

module.exports = postRouter;