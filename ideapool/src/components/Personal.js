import '../css/Personal.css';

function Personal(){
    return (
        <div className='personal-profile'>
            <div className='profile-cover'>
                <img src='https://via.placeholder.com/150' className='profile-cover' alt='cover' />
            </div>
            <div className='profile-image'>
                <img src='https://via.placeholder.com/150' className='profile-image-img' alt='user' />
            </div>
            <div className='profile-info'>
                <div className='profile-name'>Avinash Reddy C</div>
                <div className='profile-email'>avihanvaisri@gmail.com</div>
            </div>
        </div>
    )
}

export default Personal;