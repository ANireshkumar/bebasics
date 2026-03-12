// what is model ?
// how the post is going to save 
// we are going to use mongoose to create the post model

// import the mongoose module
const mongoose = require('mongoose');

// create the postmodel schema and export it


module.exports = mongoose.model('Post', postSchema,"posts");

// create the post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
    
    },

    //only this as a spesific mention 
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});