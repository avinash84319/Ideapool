import '../css/IdeaChats.css';
import IdeaCard from './IdeaCard';
import SingleChat from './SingleChat';

function IdeaChats() {

    const idea={
        id:1,
        heading:'Idea-Heading-1',
        description:'Idea-Description-1',
        interests:10,
        likes:20,
        comments:30,
        comments_content:[{
            "message-id": "1",
            "user-img": "https://www.w3schools.com/howto/img_avatar.png",
            "user": "John",
            "message-time": "12:00",
            "message": "Hello",
            "message-likes": "10",
            "message-comments":[{"message-id": "2","user-img": "https://www.w3schools.com/howto/img_avatar.png","user": "bosdika","message-time": "12:00","message": "Good buy","message-likes": "10","message-comments":[{}]}]
        },
        {
            "message-id": "3",
            "user-img": "https://www.w3schools.com/howto/img_avatar.png",
            "user": "brodadika",
            "message-time": "12:00",
            "message": "what idea is this",
            "message-likes": "10",
            "message-comments":[{"message-id": "4","user-img": "https://www.w3schools.com/howto/img_avatar.png","user": "avinash","message-time": "12:00","message": "Cant you read","message-likes": "10","message-comments":[{}]}]
        }]
    }

    return (
        <div className='ideachats'>
            <IdeaCard key={idea.id} idea={idea} />
            <div className='message-type'><input type='text' className='message-type' placeholder='Add a comment'></input></div>
            <div className='idea-comments'>
            {idea.comments_content.map((comment) => (
            <SingleChat singlemessage={comment} />
            ))}
            </div>
        </div>
    );
}   

export default IdeaChats;