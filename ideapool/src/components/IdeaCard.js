function IdeaCard(props){

    const idea=props.idea;
    const index=props.index;
    const f=props.f;

    return (
        <div className='idea' onClick={()=>{f(index)}} >
            <div className='idea-image'>
            <img src={idea.idea_image} alt='Idea' />
            </div>
            <div className='idea-header'>
            <h2>{idea.idea_title}</h2>
            </div>
            <div className='idea-abstract'>
            <p>{idea.idea_abstraction}</p>
            </div>
            <div className='idea-buttons'>
                <span className="icon"><i className="fas fa-thumbs-up">👍</i>{idea.idea_likes}</span>
                <span className="icon"><i className="fas fa-comment">💬</i>{idea.idea_comments}</span>
                <span className="icon"><i className="fas fa-share">-</i>Remove from Favorites</span>
            </div>
        </div>
    )
}

export default IdeaCard;