    //import the express module
    const express = require('express');

    // creating the express app
    const app = express();

    //after the schema added
    //parse the request body as json
    app.use(express.json());

    // import the post routes
    const postRoutes = require('./Routes/postRoustes.js');

    // use the post routes
    app.use('/posts', postRoutes);


    module.exports = app;