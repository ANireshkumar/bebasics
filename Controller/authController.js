//all function related to authentication will be here

const User = require('../Models/user')
const bcrypt = require('bcrypt');

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