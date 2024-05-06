const React = require('react');

const Singleusermessages = ({ selectedUser,message,setMessage,messages,sendMessage,setMscreen}) => {

    const Messagestext = (prop) => {
        return prop.messages.map((mess) => {
            if (mess.username === window.sessionStorage.getItem('username')) {
                return <div className='message-text-right' key={mess.text}><div className='message-text-con'>{mess.text}</div></div>
            }
            else {
                return <div className='message-text-left' key={mess.text}><div className='message-text-con'>{mess.text.toString()}</div></div>
            }
        })
    }

    return (
        <div className="messages-div">
            <div className='messages-nav'>
                <div className='messages-nav-back'>
                    <button onClick={()=>{setMscreen(true)}}>🔙</button>
                </div>
            </div>
            <div className="messages-list">
                <><div className='message-div'>
                    <img src="https://via.placeholder.com/150" className='message-image' alt="shit" />
                    <div className='message-name'>{selectedUser}
                    </div>
                </div>
                    <div className='message-text'>
                        <Messagestext messages={messages} />
                    </div>
                    <div className='message-type'>
                        <input type='text' className='message-type' placeholder='Message' value={message.text} onChange={(e)=>{setMessage({...message, text: e.target.value})}} />
                        <button className='message-type-button' type='button' onClick={sendMessage}>✅</button>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Singleusermessages