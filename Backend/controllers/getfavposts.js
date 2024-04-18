const pool = require("../database.js")

const getfavposts = async (req,res)=>{

    console.log("getting fav posts")

    const {username} = req.body;

    console.log(username);
    
    try{
        let [result] = await pool.query("select * from posts where postid in (select postid from favs where username=?)",[username])
        
        for(var i=0;i<result.length;i++){
            result[i].idea_intrests=JSON.parse(result[i].idea_intrests)
            result[i].messages=JSON.parse(result[i].messages)
        }

        console.log(result)
        res.status(200).send(result)
    }catch(err){
            res.status(500).send(err)
    }

}

module.exports={getfavposts}