import '../css/SingleChat.css'

function SingleChat(props) {

    const singlemessage = props.singlemessage;

    if (singlemessage["message-comments"] == null) {
        return <div></div>
    }
    else {
        return (
            <div className='singlechat'>
                <div className='singlechat-user'>
                    <img className='singlechat-user-img' src={singlemessage["user-img"]} alt='user-img'></img>
                    <div className='singlechat-user-name'>{singlemessage["user"]}</div>
                    <div className='singlechat-message-time'>{singlemessage["message-time"]}</div>
                </div>
                <div className='singlechat-message'>{singlemessage["message"]}</div>
                <div className='singlechat-buttons'>
                    <span className="icon"><i class="fas fa-thumbs-up">👍</i>{singlemessage["message-likes"]}</span>
                    <span className="icon" onClick={() => {
                        if (document.getElementById('singlechat-input-' + singlemessage["message-id"]).style.display === "block") {
                            document.getElementById('singlechat-input-' + singlemessage["message-id"]).style.display = "none"
                        }
                        else {
                            document.getElementById('singlechat-input-' + singlemessage["message-id"]).style.display = "block"
                        }
                    }}><i class="fas fa-comment">💬</i></span>
                </div>
                <div className='singlechat-input' id={'singlechat-input-' + singlemessage["message-id"]}>
                    <div className='message-type'><input type='text' className='message-type' placeholder='Add a comment'></input></div>
                </div>
                <div className='singlechat-message-comments'>
                    {singlemessage["message-comments"].map((comment) => (
                        <SingleChat key={comment["message-id"]} singlemessage={comment} />
                    ))}
                </div>
            </div>
        );
    }
}

export default SingleChat;