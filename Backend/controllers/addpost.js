const pool=require("../database.js")

const addpost = async(req,res)=>{

    console.log("Adding a post");
    
    const { username, addidea ,image,account_image } = req.body;

    try {
        const newpost = {
            account_username: username,
            account_image: account_image,
            idea_time: new Date().toISOString(),
            idea_title: addidea.title,
            idea_abstract: addidea.description,
            idea_intrests: JSON.stringify(addidea.tags),
            idea_image:image,
            idea_likes: 0,
            idea_comments: 0
        }

        await pool.query(`
        insert into posts(account_username,account_img,idea_time,idea_title,idea_abstract,idea_intrests,idea_image,idea_likes,idea_comments,messages) values(? , ? , ? , ? , ? , ? , ? , ? , ? , ?)
        `,[newpost.account_username,newpost.account_image,newpost.idea_time,newpost.idea_title,newpost.idea_abstract,newpost.idea_intrests,newpost.idea_image,newpost.idea_likes,newpost.idea_comments,JSON.stringify([])])

        res.status(200).send('Post added successfully');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Post addition failed');
    }
}

module.exports = {addpost};