//import the express module
const express = require('express');

// creating the express app
const app = express();

//request handler for the root route
app.get('/',(req,res)=>{
    res.send("Hello World");
});


// listening to the request 

app.listen(30001,"localhost",()=>{
    console.log("Server is running on port 30001");
});