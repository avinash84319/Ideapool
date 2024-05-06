import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/Post";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";
import "../css/Home.css";
import Addpost from "../components/Addpost";
import axios from "axios";
const io = require('socket.io-client');
const ENDPOINT = 'http://localhost:5000';
let socket = io(ENDPOINT);

function Home() {

    const [posts, setPosts] = React.useState([]);
    const [name, setName] = React.useState('');
    const [room, setRoom] = React.useState('');
    const [friends, setFriends] = React.useState([]);

    useEffect(() => {
        console.log("getting posts")
        axios.get("http://localhost:5000/api/getposts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        console.log("getting friends")
        axios.post("http://localhost:5000/api/getfriends",{username:window.sessionStorage.getItem('username')})
            .then((response) => {
                setFriends(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    

    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-feed">
                    <Addpost />
                    <PostList posts={posts} />
                </div>
                <div className="home-message">
                    <Messages socket={socket} room={room} name={name} setName={setName} setRoom={setRoom} friends={friends} />
                </div>
            </div>

        </div>
    );
}

export default Home;