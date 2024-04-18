import React, { useEffect, useState } from 'react';
import '../css/IdeasPage.css';
import Navbar from "../components/Navbar";
import Ideas from "../components/Ideas";
import IdeaPageOtherContent from "../components/IdeaPageOtherContent";
import { Filecontext } from '../contexts/filecontext';
import axios from "axios"



function IdeasPage() {

    const [tabselected, setTabSelected] = useState(2);

    const [sindex, setSindex] = useState(0);

    const [ideas, setIdeas] = useState([{id:"1",messages:[]}]);

    useEffect(() => {
        // get fav posts

        console.log("useeffect")
        axios.post("http://localhost:5000/api/getfavposts",{
            "username":"avinash"
        })
            .then((response) => {
                setIdeas(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return (
        <div>
            <Navbar />
            <div className="ideas-page">
                <Filecontext.Provider value={{ ideas, sindex ,setSindex}}>
                    <div className="ideas-page-list"><Ideas /></div>
                    <div className='ideas-page-other'>
                        <div className='ideas-page-other-header'>
                            <div onClick={() => { setTabSelected(0) }} className='ideas-page-other-header-button'>New Idea</div>
                            <div onClick={() => { setTabSelected(1) }} className='ideas-page-other-header-button'>Edit Idea</div>
                            <div onClick={() => { setTabSelected(2) }} className='ideas-page-other-header-button'>Idea Chats</div>
                        </div>
                        <IdeaPageOtherContent tabselected={tabselected} />
                    </div>
                </Filecontext.Provider>
            </div>
        </div>
    );
}

export default IdeasPage;