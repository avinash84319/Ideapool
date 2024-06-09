const pool = require("../database.js")

const deleteacc = async(req,res)=>{
  
    const { username, password } = req.body;

    try {
        // check if the username exists
        const [[user]] = await pool.query(`select * from users where username=?`,[username]) //prepared query
        console.log(user)

        if (!user) {
            return res.status(400).send('User not found');
        }
        if (user.password === password) {
            // delete the account
            const [result]=await pool.query(`delete from users where username=? and password=?`,[username,password]) //prepared query

            if (result.affectedRows === 0) {
                return res.status(500).send('deleteacc failed');
            }
            res.send('account deleted successfully');
        }
        else {
            return res.status(400).send('Password is incorrect');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('deleteacc failed');
    }
}

module.exports = {deleteacc};