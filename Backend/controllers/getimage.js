const pool = require("../database");


const getimage = async (req, res) => {

    const {username} = req.body;

    // check if username is already present

    const [users] = await pool.query(`
    select * from users
    where username=?`,[username])

    if(users.length==0){
        res.status(400).send("user does not exist")
    }
    else(
        pool.query(`select image from uimage where username=?`,[username])
        .then((result)=>{
            res.send(result[0][0]['image'])
        })
        .catch((err)=>{
            res.status(400).send(err)
        })

    )
}

module.exports = { getimage };