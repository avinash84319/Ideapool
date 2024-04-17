import '../css/Post.css';


const PostList = (prop) => {
    return prop.posts.map((post) => {
        return (
            <div class="post" key={post.id}>
                <div class="user-details">
                    <img class="account-image" src={post.account_image} alt="account" />
                    <div class="account-info">
                        <span class="account-username">{post.account_username}</span>
                        <span class="idea-time">{post.idea_time}</span>
                    </div>
                    <div class="tags">
                        {post.idea_intrests.map((tag, index) => <span key={index} class="tag">{tag}</span>)}
                    </div>
                </div>
                <div class="post-content">
                <div class="post-content-title">
                    <p class="idea-title">{post.idea_title}</p>
                </div>
                <div class="post-content-abstract">
                    <p class="idea-abstract">{post.idea_abstract}</p>
                </div>
                <div class="post-content-image">
                    <img class="idea-image" src={post.idea_image} alt="idea" />
                </div>
                </div>
                <div class="post-stats">
                    <span class="icon"><i class="fas fa-thumbs-up">👍</i> {post.idea_likes}</span>
                    <span class="icon"><i class="fas fa-comment">💬</i> {post.idea_comments}</span>
                    <span className="icon"><i class="fas fa-share">➕</i>Add to Favorites</span>
                </div>
            </div>


        )
    })
}

export default PostList;