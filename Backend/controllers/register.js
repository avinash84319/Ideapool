const User = require('../models/user');

const register = async (req, res) => {

    const { username, password } = req.body;

    try {
        // check if the username already exists
        const userExists = await User
            .findOne({ username })
            .exec();

        if (userExists) {
            return res.status(400).send('Username already exists');
        }
        else {
            // create a new user
            const newUser = new User({ username, password });
            await newUser.save();
            console.log('Registration successful');
            // send a token
            res.status(201).send({ "token":process.env.TOKEN });
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Registration failed');
    }
}

module.exports = { register };