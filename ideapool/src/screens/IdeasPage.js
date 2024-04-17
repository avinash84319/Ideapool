import React, { useState } from 'react';
import '../css/IdeasPage.css';
import Navbar from "../components/Navbar";
import Ideas from "../components/Ideas";
import IdeaPageOtherContent from "../components/IdeaPageOtherContent";

function IdeasPage() {

    const [tabselected, setTabSelected] = useState(2);

    return (
        <div>
            <Navbar />
            <div className="ideas-page">
                <div className="ideas-page-list"><Ideas /></div>
                <div className='ideas-page-other'>
                    <div className='ideas-page-other-header'>
                        <div onClick={() => {setTabSelected(0)}} className='ideas-page-other-header-button'>New Idea</div>
                        <div onClick={() => {setTabSelected(1)}} className='ideas-page-other-header-button'>Edit Idea</div>
                        <div onClick={() => {setTabSelected(2)}} className='ideas-page-other-header-button'>Idea Chats</div>
                    </div>
                    <IdeaPageOtherContent tabselected={tabselected} />
                </div>
            </div>
        </div>
    );
}

export default IdeasPage;