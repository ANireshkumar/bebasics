//import the express module
const express = require('express');

// creating the express app
const app = express();

// importing the morgan middleware for logging
const morgan = require('morgan');

// use morgan middleware for logging
app.use(morgan('dev'));



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