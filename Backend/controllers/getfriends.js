const pool=require("../database.js")

const getfriends = async (req, res) => {
    console.log("Getting friends from the database")

    const { username } = req.body

    try{
    let [result] = await pool.query("select * from friends where username=?",[username])

    for (let i=0;i<result.length;i++){
        result[i]={name:result[i].friend_username}
    }

    res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err)
    }

}

module.exports = {getfriends};