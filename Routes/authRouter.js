//import express 

const express = require('express');
const { register , login , logout} = require('../Controller/authController');

// create router
const router = express.Router();

//set up routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

//export router
module.exports = router;