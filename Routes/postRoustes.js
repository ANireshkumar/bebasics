// importing the express module
const express = require('express');

// creating new router object
const postRouter = express.Router();


postRouter.get('/', (req, res) => {
    res.send('This is the post route');
});

module.exports = postRouter;