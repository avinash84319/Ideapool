const pool=require("../database.js")

const addrecmessage = async(req,res)=>{

    console.log("Adding a rec message");
    
    const { username, prevmessageid, message} = req.body;

    try {
        const newmessage = {
            user: username,
            user_img: "https://via.placeholder.com/150",
            message_time: new Date().toISOString(),
            message:message,
            message_likes: 0,
            message_comments: [],
            postid:null
        }

        const [obj]=await pool.query(`
        insert into messages(user_img,user,message_time,message,message_likes,message_comments,postid) values(? , ? , ? , ? , ? , ? , ? )
        `,[newmessage.user_img,newmessage.user,newmessage.message_time,newmessage.message,newmessage.message_likes,JSON.stringify(newmessage.message_comments),newmessage.postid])


        // change the message_comments in prev message

        let [objtochange] = await pool.query(`select * from messages where message_id=?`,[prevmessageid])
        
        objtochange=objtochange[0]
        console.log(obj.insertId)
        let newmc = JSON.parse(objtochange.message_comments)
        console.log(newmc)
        newmc.push(parseInt(obj.insertId))
        console.log(newmc)

        await pool.query(`update messages set message_comments=? where message_id=?`,[JSON.stringify(newmc),prevmessageid])

        res.status(200).send('Rec Message added successfully');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Rec Message addition failed');
    }
}

module.exports = {addrecmessage};