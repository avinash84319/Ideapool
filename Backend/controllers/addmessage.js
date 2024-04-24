const pool=require("../database.js")

const addmessage = async(req,res)=>{

    console.log("Adding a message");
    
    const { username, message ,postid} = req.body;

    try {
        const newmessage = {
            user: username,
            user_img: "https://via.placeholder.com/150",
            message_time: new Date().toISOString(),
            message:message,
            message_likes: 0,
            message_comments: [],
            postid:postid
        }

        await pool.query(`
        insert into messages(user_img,user,message_time,message,message_likes,message_comments,postid) values(? , ? , ? , ? , ? , ? , ? )
        `,[newmessage.user_img,newmessage.user,newmessage.message_time,newmessage.message,newmessage.message_likes,JSON.stringify(newmessage.message_comments),newmessage.postid])

        res.status(200).send('Message added successfully');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Message addition failed');
    }
}

module.exports = {addmessage};