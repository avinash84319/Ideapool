import Addpost from './Addpost';
import IdeaChats from './IdeaChats';

function IdeaPageOtherContent(props) {

    const tabselected = props.tabselected;

    if (tabselected === 0) return (
        <div className='ideas-page-other-content'>
            <Addpost />
        </div>
    );

    if (tabselected === 1) return (
        <div className='ideas-page-other-content'>
            <div className='addpost-form'>
                <input type='text' placeholder='Title' className='addpost-form-title'  />
                <textarea placeholder='Description' className='addpost-form-description' />
                <div className='addpost-form-tags'>
                    <input type='text' placeholder='Tags' className='addpost-form-tags-input'/>
                    <button className='addpost-form-tags-button'>Add</button>
                </div>
                <div className='addpost-form-end-buttons'>
                    <input type="file" id="myFile" name="filename" className='addpost-form-media' />
                    <label id="file-input-label" for="myFile" className='addpost-form-media-label'>Select a File</label>
                    <button className='addpost-form-button'>Post</button>
                </div>
            </div>
        </div>
    );

    if (tabselected === 2) return (
        <IdeaChats />
    );
}

export default IdeaPageOtherContent;