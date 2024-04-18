const pool=require("../database.js")

const getposts = async (req, res) => {
    console.log("Getting Posts from the database")

    try{
    let [result] = await pool.query("select * from posts")

    for(var i=0;i<result.length;i++){
        result[i].idea_intrests=JSON.parse(result[i].idea_intrests)
    }
    res.status(200).send(result)
    }
    catch(err){
        res.status(500).send(err)
    }

}

module.exports = {getposts};