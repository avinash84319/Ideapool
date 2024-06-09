const pool = require("../database");


const addimage = async (req, res) => {

    const {username,image} = req.body;

    // check if username is already present

    const [users] = await pool.query(`
    select * from users
    where username=?`,[username])

    if(users.length==0){
        res.status(400).send("user does not exist")
    }

    // if image already exists, update it

    const [images] = await pool.query(`
    select * from uimage
    where username=?`,[username])

    if(images.length!=0){
        pool.query(`
        update uimage
        set image=?
        where username=?`,[image,username])
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    }else(
        pool.query(`
        insert into uimage values
        (?,?)`,[username,image])
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })

    )
}

module.exports = { addimage };