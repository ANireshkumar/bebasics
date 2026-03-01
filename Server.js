// import the app
const app = require('./app.js');


// import the mangoose
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/testdb')
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error:', err));


// listening to the request 

app.listen(30001,"localhost",()=>{
    console.log("Server is running on port http://localhost:30001");
})