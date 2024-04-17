const User = require('../models/user');

const login = async(req,res)=>{
  
    const { username, password } = req.body;

    try {
        // check if the username exists
        const user = await User
            .findOne({ username
            })
            .exec();

        if (!user) {
            return res.status(400).send('User not found');
        }
        else {
            // check if the password is correct
            if (user.password !== password) {
                return res.status(400).send('Invalid password');
            }
            else {
                // send a token
                res.status(200).send({ "token": process.env.TOKEN });
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Login failed');
    }
}

module.exports = {login};