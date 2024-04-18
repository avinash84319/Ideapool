import '../css/Post.css';
import axios from 'axios';

const PostList = (prop) => {

    function addfav(id){
        
        axios.post('http://localhost:5000/api/addfav', {
                username: window.sessionStorage.getItem("username"),
                postid: id
            }).then((res) => {
                console.log(res);
                window.alert("post added to favs")
            }).catch((err) => {
                alert(err.response.data);
            });

    }


    return prop.posts.map((post) => {
        return (
            <div class="post" key={post.postid}>
                <div class="user-details">
                    <img class="account-image" src={post.account_img} alt="account" />
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
                    <span className="icon" onClick={()=>{addfav(post.postid)}}><i class="fas fa-share">➕</i>Add to Favorites</span>
                </div>
            </div>


        )
    })
}

export default PostList;