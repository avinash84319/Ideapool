import React, { useState } from 'react'
import axios from 'axios';

const Add = (props) => {
    const { addindex, setAddindex } = props
    const [idea, setIdea] = useState({ title: '', description: '', tags: [], media: { name: 'Select a file' } })
    const [tag, setTag] = useState('')

    const fileToBase64 = async (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (e) => reject(e)
        })

    const sendidea = async () => {

        axios.post('http://localhost:5000/api/addpost', {
            username: window.sessionStorage.getItem("username"),
            addidea: idea,
            image: await fileToBase64(idea.media),
            account_image: window.sessionStorage.getItem("image")
        }).then((res) => {
            console.log(res.data)

            setIdea({ title: '', description: '', tags: [], media: 'Select a file' })
            setAddindex(0)
        }).catch((err) => {
            alert(err.response.data)
        })

    }

    if (addindex === 0) return (<></>)

    if (addindex === 1) {
        return <div className='addpost-form'>
            <input type='text' placeholder='Title' className='addpost-form-title' onChange={(e) => { setIdea({ ...idea, title: e.target.value }) }} value={idea.title} />
            <textarea placeholder='Description' className='addpost-form-description' onChange={(e) => { setIdea({ ...idea, description: e.target.value }) }} value={idea.description} />
            <div className='addpost-form-tags'>
                <input type='text' placeholder='Tags' className='addpost-form-tags-input' onChange={(e) => { setTag(e.target.value) }} value={tag} />
                <button onClick={() => { setIdea({ ...idea, tags: [...idea.tags, tag] }); setTag(""); }} className='addpost-form-tags-button'>Add</button>
            </div>
            <div className='addpost-form-tags'>
                {idea.tags.map((tag, index) => <div onClick={() => {
                    setIdea({ ...idea, tags: idea.tags.filter((t, i) => i !== index) })
                }} key={index} className='addpost-form-tags-tag'>{tag}</div>)}
            </div>
            <div className='addpost-form-end-buttons'>
                <input type="file" id="myFile" name="filename" className='addpost-form-media' onChange={(e) => { setIdea({ ...idea, media: e.target.files[0] }) }} />
                <label id="file-input-label" for="myFile" className='addpost-form-media-label'>{idea.media.name}</label>
                <button onClick={sendidea} className='addpost-form-button'>Post</button>
            </div>
        </div>
    }

    if (addindex === 2) {
        return <div className='addpost-form'>
            <input type='text' placeholder='Question' className='addpost-form-title' />
            <textarea placeholder='Description' className='addpost-form-description' />
            <div className='addpost-form-tags'>
                <input type='text' placeholder='Tags' className='addpost-form-tags-input' />
                <button className='addpost-form-tags-button'>Add</button>
            </div>
            <div className='addpost-form-end-buttons'>
                <input type="file" id="myFile" name="filename" className='addpost-form-media' />
                <label id="file-input-label" for="myFile" className='addpost-form-media-label'>Select a File</label>
                <button className='addpost-form-button'>Post</button>
            </div>
        </div>
    }
}

export default Add