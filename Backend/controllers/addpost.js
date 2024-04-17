const Post = require('../models/post')

const addpost = async(req,res)=>{

    const { username, addidea } = req.body;

    try {
        const newpost = new Post({
            id: 1,
            account_username: username,
            account_image: "https://via.placeholder.com/150",
            idea_time: new Date().toISOString(),
            idea_title: addidea.title,
            idea_abstract: addidea.description,
            idea_intrests: addidea.tags,
            idea_image: "https://via.placeholder.com/150",
            idea_likes: 0,
            idea_comments: 0
        })

        await newpost.save();

        res.status(200).send('Post added successfully');
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Post addition failed');
    }
}

module.exports = {addpost};