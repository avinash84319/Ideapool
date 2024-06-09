const pool = require("../database.js")

async function deparser(da){                  // recursive function to recursivly add messages inside messages
    // console.log(da)

    if(da.length==0){
        return []
    }
    else{

        for(var i=0;i<da.length;i++){
            let id=JSON.parse(da[i].message_comments)
            da[i].message_comments=[]
            let messarr=[]
            for(var j=0;j<id.length;j++){
                let [messages] = await pool.query("select * from messages where message_id=?",[id[j]])
                let returns = await deparser(messages)
                messarr=[...messarr,...returns]
            }
            if(da[i].message_comments=[]){
                da[i].message_comments=messarr
            }
            else{
            da[i].message_comments=[da[i].message_comments,...messarr]
            }
        }

        // console.log(da)
        return da
    }
}

const getfavposts = async (req,res)=>{

    console.log("getting fav posts")

    const {username} = req.body;
    
    try{
        let [result] = await pool.query("select * from posts where postid in (select postid from favs where username=?)",[username])

        // console.log(result)
        for(var i=0;i<result.length;i++){
            result[i].idea_intrests=JSON.parse(result[i].idea_intrests)
            let [messages] = await pool.query("select * from messages where postid=?",[result[i].postid])
            // console.log(messages)
            result[i].messages= await deparser(messages)
        }
        
        console.log(result)
        res.status(200).send(result)
    }catch(err){
        console.log(err)
        res.status(500).send(err)
    }

}

module.exports={getfavposts}