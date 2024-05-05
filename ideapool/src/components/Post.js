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
            <div className="post" key={post.postid}>
                <div className="user-details">
                    <img className="account-image" src={post.account_img} alt="account" />
                    <div className="account-info">
                        <span className="account-username">{post.account_username}</span>
                        <span className="idea-time">{post.idea_time}</span>
                    </div>
                    <div className="tags">
                        {post.idea_intrests.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                </div>
                <div className="post-content">
                <div className="post-content-title">
                    <p className="idea-title">{post.idea_title}</p>
                </div>
                <div className="post-content-abstract">
                    <p className="idea-abstract">{post.idea_abstract}</p>
                </div>
                <div className="post-content-image">
                    <img className="idea-image" src={post.idea_image} alt="idea" />
                </div>
                </div>
                <div className="post-stats">
                    <span className="icon"><i className="fas fa-thumbs-up">👍</i> {post.idea_likes}</span>
                    <span className="icon"><i className="fas fa-comment">💬</i> {post.idea_comments}</span>
                    <span className="icon" onClick={()=>{addfav(post.postid)}}><i className="fas fa-share">➕</i>Add to Favorites</span>
                </div>
            </div>


        )
    })
}

export default PostList;