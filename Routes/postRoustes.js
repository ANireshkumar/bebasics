// importing the post 
const Post = require('../Models/posts.js');

// importing the express module
const express = require('express');

// creating new router object
const postRouter = express.Router();

postRouter.post('/', async (req, res) => {
  try {
    // get the data from the request body
    const { title, content } = req.body;

    // create a new post
    const newPost = new Post({
      title,
      content,
    });

    // save the post to the database
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully' });

  } catch (err) {
    console.log('Error creating post:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});   

module.exports = postRouter;