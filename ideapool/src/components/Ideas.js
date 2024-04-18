import '../css/Ideas.css';
import IdeaCard from './IdeaCard';
import React,{useContext} from 'react';
import { Filecontext } from '../contexts/filecontext';

function Ideas() {
    
    const {ideas,sindex,setSindex} = useContext(Filecontext)
    console.log(sindex);

    const f=(da)=>{
        console.log("clicked")
        setSindex(da)
    }

    function Mapidea({ideas,f}){
        if (ideas.length === 0) return <div>No Ideas in Favorites</div>
        return ideas.map((idea,index) => (
                <IdeaCard key={index} index={index} idea={idea} f={f} />
                ))
        
    }

    return (
        <div className='ideas'>
            <Mapidea ideas={ideas} f={f} />
        </div>
    )
}

export default Ideas;