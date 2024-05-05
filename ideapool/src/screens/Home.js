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
        const name = window.sessionStorage.getItem('username');
        const room = "1234"

        setRoom(room);
        setName(name);

        console.log(name, room);

        socket.emit('join', { name, room }, (error) => {
        if(error) { 
            console.log(error);
        }
        });

    }, []); 

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
                    <Messages socket={socket} room={room} name={name}/>
                </div>
            </div>

        </div>
    );
}

export default Home;