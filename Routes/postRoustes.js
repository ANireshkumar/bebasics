// importing the express module
const express = require('express');

// creating new router object
const postRouter = express.Router();

// importing controller methods
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require('../Controller/postController.js');

// routes
postRouter.post('/', createPost);
postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);

module.exports = postRouter;