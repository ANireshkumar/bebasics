//all function related to authentication will be here

const User = require('../Models/user')
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authController = {
    register: async (req, res) => {
        //logic for registering a user
        
        try {
            const { username, email, password } = req.body;

            // Check if the user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            //hash password
            const hashpassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({ username, email, password: hashpassword });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    },
    login: async(req, res) => {
        //logic for logging in a user
        try {
            //get the details of the user from the request body
            const { email, password } = req.body;
            //find the user in the database
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            //compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            // Generate a JWT token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            //if the password matches, send a success response
            res.status(200).json({ message: 'Login successful', token });

        } catch (error) {
            res.status(500).json({ message: 'Error logging in user', error });
        }

    },
    logout: async(req, res) => {

        //logic for logging out a user
        try {
        } catch (error) {
            res.status(500).json({ message: 'Error logging out user', error });
        }
    }
};
module.exports = authController;