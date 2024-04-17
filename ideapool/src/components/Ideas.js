import '../css/Ideas.css';
import IdeaCard from './IdeaCard';

function Ideas() {

    const ideas_content=[
    {
        id:1,
        heading:'Idea-Heading-1',
        description:'Idea-Description-1',
        interests:10,
        likes:20,
        comments:30
    },
    {
        id:2,
        heading:'Idea-Heading-2',
        description:'Idea-Description-2',
        interests:11,
        likes:21,
        comments:31
    },
    {
        id:3,
        heading:'Idea-Heading-3',
        description:'Idea-Description-3',
        interests:12,
        likes:22,
        comments:32
    },
    {
        id:4,
        heading:'Idea-Heading-4',
        description:'Idea-Description-4',
        interests:13,
        likes:23,
        comments:33
    }]

    
    return (
        <div className='ideas'>
            {ideas_content.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
            ))}
        </div>
    )
}

export default Ideas;