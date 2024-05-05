import '../css/Messages.css'
import Messageuserlist from './Messageuserlist'
import Singleusermessages from './Singleusermessages'
import React, {useState,useEffect} from 'react'



function Messages({socket,room,name}){

    const usersList=[{"name":"person1"},{"name":"person2"}]
    const [mscreen, setMscreen] = useState(false)
    const [selectedUser, setSelectedUser] = useState("avinash")
    const [message, setMessage] = useState({ "side":1, "text": "" });
    const [messages, setMessages] = useState([{ "side": 1, "text": "hello what is your name" }, { "side": 2, "text": "avinash" }]);


    useEffect(() => {
        socket.on('message', message => {
        console.log("received message", message);
        setMessages(messages => [ ...messages, message ]);
        });

    }, [message]); 

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
        socket.emit('sendMessage', message,room , () => setMessage({ "side": 1, "text": "" }));
        }
    }

    if (mscreen){
        return <Messageuserlist usersList={usersList} />
    }
    else{
        return <Singleusermessages selectedUser={selectedUser} message={message} setMessage={setMessage} messages={messages} sendMessage={sendMessage} />
    }
}


export default Messages