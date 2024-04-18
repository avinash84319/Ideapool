const pool = require("../database");


const register = async (req, res) => {

    const {username,password} = req.body;

    // check if username is already present

    const [users] = await pool.query(`
    select * from users
    where username=?`,[username])

    if(users.length>0){
        res.status(400).send("user already exists")
    }
    else(
        pool.query(`
        insert into users values
        (?,?)`,[username,password])
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })

    )
}

module.exports = { register };