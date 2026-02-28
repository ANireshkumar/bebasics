// router
const express = require('express');

const testRouter = express.Router();

//request handler for the root route
testRouter.get('/',(req,res)=>{
    res.json({message:"Welcome to the Express Server!"});
});

testRouter.post('/',(req,res)=>{
    res.json({message:"POST request received!"});
});

testRouter.put('/',(req,res)=>{
    res.json({message:"PUT request received!"});
});
testRouter.delete('/',(req,res)=>{
    res.json({message:"DELETE request received!"});
});

module.exports = testRouter;
