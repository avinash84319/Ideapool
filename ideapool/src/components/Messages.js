import '../css/Messages.css'
import Messageuserlist from './Messageuserlist'
import Singleusermessages from './Singleusermessages'
import React, {useState,useEffect, useMemo} from 'react'



function Messages({socket,room,name,setName,setRoom,friends}){

    const usersList=friends
    const [mscreen, setMscreen] = useState(true)
    const [selectedUser, setSelectedUser] = useState("avinash")
    const [message, setMessage] = useState({ "username":window.sessionStorage.getItem('username'), "text": "" });
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const name = window.sessionStorage.getItem('username');
        let room_arr=[name,selectedUser].sort()
        let room=room_arr[0]+room_arr[1]

        setRoom(room);
        setName(name);

        console.log(name, room);

        socket.emit('join', { name, room }, (error) => {
        if(error) { 
            console.log(error);
        }
        });

    }, [room,name,setName,setRoom,selectedUser,socket]); 

    useMemo(() => {
        socket.on('message', message => {
        console.log("received message", message);
        setMessages(messages => [ ...messages, message ]);
        });
    }, [socket]); 

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
        socket.emit('sendMessage', message,room , () => setMessage({ "username":window.sessionStorage.getItem('username'), "text": "" }));
        }
    }

    if (mscreen){
        return <Messageuserlist usersList={usersList} setSelectedUser={setSelectedUser} setMscreen={setMscreen} />
    }
    else{
        return <Singleusermessages selectedUser={selectedUser} message={message} setMessage={setMessage} messages={messages} sendMessage={sendMessage} setMscreen={setMscreen} />
    }
}


export default Messages