// importing the express module
const express = require('express');

// creating new router object
const postRouter = express.Router();


postRouter.post('/', (req, res) => {
console.log(req.body);
});

module.exports = postRouter;