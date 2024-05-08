const mysql = require('mysql2');

const pool= mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10
}).promise()

/* 
create table posts(postid int auto_increment primary key,account_username varchar(20),account_img text,idea_time text,idea_title text,idea_abstract text,idea_intrests text,idea_image text,idea_likes int,idea_comments text,messages text);
create table users(username varchar(20),password text);
create table messages(message_id int auto_increment primary key,user_img text,user text,message_time text,message text,message_likes int,message_comments text,postid int);
create table favs(username text,postid int);
create table friends(username text,friend_username text);
*/


module.exports= pool;