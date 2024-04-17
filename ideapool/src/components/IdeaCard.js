function IdeaCard(props){

    const idea=props.idea;

    return (
        <div className='idea'>
            <div className='idea-image'>
            <img src="https://via.placeholder.com/150" alt='Idea' />
            </div>
            <div className='idea-header'>
            <h2>{idea.heading}</h2>
            </div>
            <div className='idea-abstract'>
            <p>{idea.description}</p>
            </div>
            <div className='idea-buttons'>
                <span className="icon"><i class="fas fa-thumbs-up">🤔</i>{idea.interests}</span>
                <span className="icon"><i class="fas fa-thumbs-up">👍</i>{idea.likes}</span>
                <span className="icon"><i class="fas fa-comment">💬</i>{idea.comments}</span>
                <span className="icon"><i class="fas fa-share">➕</i>Add to Favorites</span>
            </div>
        </div>
    )
}

export default IdeaCard;