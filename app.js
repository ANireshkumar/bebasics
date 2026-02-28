//import the express module
const express = require('express');

// creating the express app
const app = express();

// importing the morgan middleware for logging
const morgan = require('morgan');

// use morgan middleware for logging
app.use(morgan('dev'));

// impot the test router
const testRouter = require('./Routes/testRoutes.js');

app.use('/api/v1/test',testRouter);

// prefex rout /api/v1/test


module.exports = app;