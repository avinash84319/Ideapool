const Messageuserlist = ({ usersList,setSelectedUser,setMscreen }) => {

    return <div className="messages-div">
    <div className='messages-nav'>
            <div className='messages-nav-back'>
                <button onClick={()=>{setMscreen(false)}}>🔙</button>
            </div>
        </div>
    <div className='messages-list'>
    {usersList.map((mess) => {
        return <div key={mess.name} className='message-div' onClick={()=>{setSelectedUser(mess.name);setMscreen(false)}} >
            <img src="https://via.placeholder.com/150" className='message-image' alt="shit" />
            <div className='message-name' >
                {mess.name}
            </div>
        </div>
    })}
    </div>
    </div>
}

export default Messageuserlist  