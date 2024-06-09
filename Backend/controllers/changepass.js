const pool = require("../database.js")

const changepass = async(req,res)=>{
  
    const { username,oldpassword,password } = req.body;

    try {
        // check if the username exists
        const [[user]] = await pool.query(`select * from users where username=?`,[username]) //prepared query

        if (!user) {
            return res.status(400).send('User not found');
        }
        if (user.password === oldpassword) {
            // update the password
            const [result]=await pool.query(`update users set password=? where username=?`,[password,username]) //prepared query

            if (result.affectedRows === 0) {
                return res.status(500).send('changepass failed');
            }
            res.send('Password changed successfully');
        }
        else {
            return res.status(400).send('Old password is incorrect');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('changepass failed');
    }
}

module.exports = {changepass};