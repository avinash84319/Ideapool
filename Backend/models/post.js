const mongoose = require('mongoose');

const postschema=new mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    account_username:{
        type:String,
        required:true
    },
    account_image:{
        type:String,
    },
    idea_time:{
        type:String,
        required:true
    },
    idea_title:{
        type:String,
        required:true
    },
    idea_abstract:{
        type:String,
        required:true
    },
    idea_intrests:{
        type:[],
        required:true
    },
    idea_image:{
        type:String,
    },
    idea_likes:{
        type:Number,
        required:true
    },
    idea_comments:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('posts',postschema)