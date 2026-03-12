// import the mongoose module
const mongoose = require('mongoose');

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
    // specific mention
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
});

// export the model AFTER schema creation
module.exports = mongoose.model('Post', postSchema, "posts");