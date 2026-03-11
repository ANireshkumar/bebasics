// import the app
const app = require('./app.js');

// import the dotenv module to load environment variables from the .env file
require('dotenv').config();


// import the mangoose
const mongoose = require('mongoose');

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error:', err));


// listening to the request 

app.listen(30001,"localhost",()=>{
    console.log("Server is running on port http://localhost:30001");
})