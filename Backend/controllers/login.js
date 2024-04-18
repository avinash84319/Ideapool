const pool = require("../database.js")

const login = async(req,res)=>{
  
    const { username, password } = req.body;

    try {
        // check if the username exists
        const [[user]] = await pool.query(`select * from users where username=?`,[username]) //prepared query


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