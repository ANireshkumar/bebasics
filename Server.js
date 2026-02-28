//import the express module
const express = require('express');

// creating the express app
const app = express();
//import the logger middleware
const logger = require('./Middleware/logger');

// use the logger middleware for all routes
app.use(logger);

//request handler for the root route
app.get('/',(req,res)=>{
    res.json`({message:"Welcome to the Express Server!"})`;
});

app.post('/',(req,res)=>{
    res.json({message:"POST request received!"});
});

app.put('/',(req,res)=>{
    res.json({message:"PUT request received!"});
});
app.delete('/',(req,res)=>{
    res.json({message:"DELETE request received!"});
});





// listening to the request 

app.listen(30001,"localhost",()=>{
    console.log("Server is running on port http://localhost:30001");
});