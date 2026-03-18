//all function related to authentication will be here

const authController = {
    register: async (req, res) => {
        //logic for registering a user
        res.status(201).json({ message: 'User registered successfully' });
        try {
            
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