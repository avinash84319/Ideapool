import '../css/Addpost.css'
import Add from './Add'
import React, { useState } from 'react'

function Addpost() {

    const [addindex, setAddindex] = useState(0)
    

    

    return <><div className='addpost-div'>
        <div className='addpost-image'>
            <img src={window.sessionStorage.getItem("image")} className='addpost-image' alt='user' />
        </div>
        <div className='addpost'>
            <div onClick={() => { setAddindex(1) }} className='addpost-title'>Idea to share</div>
        </div>
        <div className='addpost'>
            <div onClick={() => { setAddindex(2) }} className='addpost-media'>Ask for help</div>
        </div>
        <div className='addpost'>
            <div onClick={() => { setAddindex(3) }} className='addpost-media'>Collabrations</div>
        </div>
    </div>
        <Add addindex={addindex} setAddindex={setAddindex}/>
    </>
}


export default Addpost

