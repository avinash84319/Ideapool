import '../css/SingleChat.css'

function SingleChat(props) {

    const singlemessage = props.singlemessage;
    const comment2=props.comment2;
    const  setComment2=props.setComment2;
    const submitMessage2=props.submitMessage2;

    if (singlemessage["message_comments"] === null || singlemessage["message_comments"]==="[]" || singlemessage["message_comments"]===undefined) {
        return <div className='singlechat'>
        <div className='singlechat-user'>
            <img className='singlechat-user_img' src={singlemessage["user_img"]} alt='user_img'></img>
            <div className='singlechat-user_name'>{singlemessage["user"]}</div>
            <div className='singlechat-message_time'>{singlemessage["message_time"]}</div>
        </div>
        <div className='singlechat-message'>{singlemessage["message"]}</div>
        <div className='singlechat-buttons'>
            <span className="icon"><i className="fas fa-thumbs-up">👍</i>{singlemessage["message_likes"]}</span>
            <span className="icon" onClick={() => {
                if (document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display === "block") {
                    document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display = "none"
                }
                else {
                    document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display = "block"
                }
            }}><i className="fas fa-comment">💬</i></span>
        </div>
        <div className='singlechat-input' id={'singlechat-input-' + singlemessage["message_id"]}>
            <div className='message-type'>
            <input type='text' className='message-type' placeholder='Add a comment' value={comment2} onChange={(e)=>{setComment2(e.target.value)}}></input>
            <button className='comment-button' onClick={()=>{submitMessage2(singlemessage)}}>ADD</button>
            </div>
        </div>
    </div>
    }
    else {
        return (
            <div className='singlechat'>
                <div className='singlechat-user'>
                    <img className='singlechat-user_img' src={singlemessage["user_img"]} alt='user_img'></img>
                    <div className='singlechat-user_name'>{singlemessage["user"]}</div>
                    <div className='singlechat-message_time'>{singlemessage["message_time"]}</div>
                </div>
                <div className='singlechat-message'>{singlemessage["message"]}</div>
                <div className='singlechat-buttons'>
                    <span className="icon"><i className="fas fa-thumbs-up">👍</i>{singlemessage["message_likes"]}</span>
                    <span className="icon" onClick={() => {
                        if (document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display === "block") {
                            document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display = "none"
                        }
                        else {
                            document.getElementById('singlechat-input-' + singlemessage["message_id"]).style.display = "block"
                        }
                    }}><i className="fas fa-comment">💬</i></span>
                </div>
                <div className='singlechat-input' id={'singlechat-input-' + singlemessage["message_id"]}>
                    <div className='message-type'>
                    <input type='text' className='message-type' placeholder='Add a comment' value={comment2} onChange={(e)=>{setComment2(e.target.value)}}></input>
                    <button className='comment-button' onClick={()=>{submitMessage2(singlemessage)}}>ADD</button>
                    </div>
                </div>
                <div className='singlechat-message-comments'>
                    {singlemessage["message_comments"].map((comment) => (
                        <SingleChat key={comment["message_id"]} singlemessage={comment} comment2={comment2} setComment2={setComment2} submitMessage2={submitMessage2}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default SingleChat;