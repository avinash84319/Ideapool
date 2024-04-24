const pool=require("../database.js")

const getmessages = async (req, res) => {
    console.log("Getting messages from the database")

    const { postid } = req.body

    try{
    let [result] = await pool.query("select * from messages where postid=?",[postid])

    for(var i=0;i<result.length;i++){
        result[i].message_comments=JSON.parse(result[i].message_comments)
    }
    res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err)
    }

}

module.exports = {getmessages};