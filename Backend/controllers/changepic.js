const pool = require("../database.js")

const changepic = async(req,res)=>{
  
    const { username, image } = req.body;
    var base64String = image;
    //converting to blob
    var blob = new Buffer.from(base64String, 'base64');

    console.log(username,image);


    try {
        // check if the username exists
        const [[user]] = await pool.query(`select * from users where username=?`,[username]) //prepared query


        if (!user) {
            return res.status(400).send('User not found');
        }
        else {
            // changing image 
            const [result]= await pool.query(`update users set image=? where username=?`,[blob,username])
            console.log(result);
            res.status(200).send('change successful');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send('change failed');
    }
}

module.exports = {changepic};