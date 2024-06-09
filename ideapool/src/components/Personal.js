import '../css/Personal.css';

function Personal(){
    return (
        <div className='personal-profile'>
            <div className='profile-cover'>
                <img src='https://via.placeholder.com/150' className='profile-cover' alt='cover' />
            </div>
            <div className='profile-image'>
                <img src={window.sessionStorage.getItem("image")} className='profile-image-img' alt='user' />
            </div>
            <div className='profile-info'>
                <div className='profile-name'>{window.sessionStorage.getItem("username")}</div>
            </div>
        </div>
    )
}

export default Personal;