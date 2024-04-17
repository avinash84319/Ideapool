const Post = require('../models/post')

const getpost = async (req, res) => {

    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {getpost}