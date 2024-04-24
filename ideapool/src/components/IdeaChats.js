import React,{useState} from 'react'
import axios from 'axios'
import '../css/IdeaChats.css';
import IdeaCard from './IdeaCard';
import SingleChat from './SingleChat';

function IdeaChats(props) {
    const idea = props.selectedidea;
    const sindex=props.sindex;
    const rerenderpost=props.rerenderpost;

    const [comment,setComment] = useState("")

    const [comment2,setComment2] = useState("")

        const submitMessage2=(singlemessage)=>{

            rerenderpost(sindex)                    // when comment is added we call this function to reload posts and set post to view using index

        axios.post('http://localhost:5000/api/addrecmessage',{
            username:window.sessionStorage.getItem("username"),
            prevmessageid:singlemessage.message_id,
            message:comment2,
        }).then((res)=>{
            console.log(res.data)
            window.alert("comment added")
            setComment2("")
        }).catch((err)=>{
            alert(err.response.data)
        })
    }

    const mapfunc=(idea,comment2,submitMessage2)=>{
        if(idea.messages.lenght===0 || idea.messages==="[]"){
            return <div></div>
        }

        return idea.messages.map((comment) => (
            <SingleChat singlemessage={comment} comment2={comment2} setComment2={setComment2} submitMessage2={submitMessage2}/>
            ))
    }

    const submitMessage=()=>{

        rerenderpost(sindex)                     // when comment is added we call this function to reload posts and set post to view using index

        axios.post('http://localhost:5000/api/addmessage',{
            username:window.sessionStorage.getItem("username"),
            message:comment,
            postid:idea.postid
        }).then((res)=>{
            console.log(res.data)
            window.alert("comment added")
            setComment("")
        }).catch((err)=>{
            alert(err.response.data)
        })
    }

    return (
        <div className='ideachats'>
            <IdeaCard key={idea.postid} idea={idea} />
            <div className='message-type'>
            <input type='text' className='message-type' placeholder='Add a comment' value={comment} onChange={(e)=>{setComment(e.target.value)}}></input>
            <button className='comment-button' onClick={()=>{submitMessage()}}>ADD</button>
            </div>
            <div className='idea-comments'>
            {mapfunc(idea,comment2,submitMessage2)}
            </div>
        </div>
    );
}   

export default IdeaChats;