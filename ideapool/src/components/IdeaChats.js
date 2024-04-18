import '../css/IdeaChats.css';
import IdeaCard from './IdeaCard';
import SingleChat from './SingleChat';

function IdeaChats(props) {

    const idea = props.selectedidea;

    const mapfunc=(idea)=>{

        if(idea.messages.lenght===0 || idea.messages==="[]"){
            return <div></div>
        }

        return idea.messages.map((comment) => (
            <SingleChat singlemessage={comment} />
            ))
    }

    return (
        <div className='ideachats'>
            <IdeaCard key={idea.id} idea={idea} />
            <div className='message-type'><input type='text' className='message-type' placeholder='Add a comment'></input></div>
            <div className='idea-comments'>
            {mapfunc(idea)}
            </div>
        </div>
    );
}   

export default IdeaChats;