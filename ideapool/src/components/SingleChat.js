import '../css/SingleChat.css'

function SingleChat(props) {

    const singlemessage = props.singlemessage;

    if (singlemessage["message_comments"] == null) {
        return <div></div>
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
                    <div className='message-type'><input type='text' className='message-type' placeholder='Add a comment'></input></div>
                </div>
                <div className='singlechat-message-comments'>
                    {singlemessage["message_comments"].map((comment) => (
                        <SingleChat key={comment["message_id"]} singlemessage={comment} />
                    ))}
                </div>
            </div>
        );
    }
}

export default SingleChat;