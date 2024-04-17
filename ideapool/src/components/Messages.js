import '../css/Messages.css'
import {useState} from 'react'

function Messages(){

    var messageList=[{"name":"persona","messages":[{"side":1,"text":"hello"}]},{"name":"personb","messages":[{"side":1,"text":"hello what is your name"},{"side":2,"text":"avinash"}]}]
    const [mscreen,setMscreen]=useState(1)
    const [mscreenindex,setMscreenindex]=useState(0)

    const Messagestext=(prop)=>{
        return prop.messageList[mscreenindex].messages.map((mess)=>{
            if(mess.side===1){
                return <div className='message-text-right' key={mess.text}><div className='message-text-con'>{mess.text}</div></div>
            }
            else{
                return <div className='message-text-left' key={mess.text}><div className='message-text-con'>{mess.text}</div></div>
            }
        })
    }

    const Messageslist=(prop)=>{
        if(mscreen){
            return prop.messageList.map((mess)=>{
                return <div onClick={()=>{Selectmes(mess.name)}} key={mess.name} className='message-div'><img src="https://via.placeholder.com/150" className='message-image' alt="shit"/><div className='message-name'>{mess.name}</div></div>
            })}
        else{
            return <><div className='message-div'><img src="https://via.placeholder.com/150" className='message-image' alt="shit" /><div className='message-name'>{prop.messageList[mscreenindex].name}</div></div><div className='message-text'><Messagestext messageList={prop.messageList} /></div><div className='message-type'><input type='text' className='message-type' placeholder='Message'></input></div></>
        }
    }

    const Selectmes=(name)=>{
        console.log(name)
        let index=0
        for(let i=0;i<messageList.length;i++){
            if(messageList[i].name===name){
                index=i
                break
            }
        }
        setMscreenindex(index)
        setMscreen(0)
    }

    const Backclick=()=>{
        if (mscreen){
            setMscreen(0)
        }
        else{
            setMscreen(1)
        }
    }

    return <div className='messages-div'>
        <div className='messages-nav'>
            <div className='messages-nav-back'>
                <button onClick={Backclick}>🔙</button>
            </div>
        </div>
        <div className='messages-list'>
            <Messageslist messageList={messageList} />
        </div>
    </div>
}


export default Messages