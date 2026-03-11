//import the express module
const express = require('express');

// creating the express app
const app = express();

// import the post routes
const postRoutes = require('./Routes/postRoustes.js');

// use the post routes
app.use('/posts', postRoutes);

module.exports = app;