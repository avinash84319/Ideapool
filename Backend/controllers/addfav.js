const pool=require('../database');

const addfav=async(req,res)=>{

    const {username,postid}=req.body;

    try{

        // check if username is present

    const [users] = await pool.query(`
    select * from users
    where username=?`,[username])

    //check if post is present

    const [post]= await pool.query(`
    select * from posts
    where postid=?`,[postid])

    if(users.length==0){
        res.status(400).send("user doesnt exist")
    }
    else if(post.length==0){
        res.status(400).send("post doesnt exists")
    }
    else(
        pool.query(`
        insert into favs values
        (?,?)`,[username,postid])
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })

    )
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports={addfav};