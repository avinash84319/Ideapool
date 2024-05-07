import React from 'react';
import '../css/Profile.css';
import Navbar from '../components/Navbar';
import Personal from '../components/Personal';
import Bio from '../components/Bio';
import ProfileActions from '../components/ProfileActions';

function Profile() {

  return (
    <div>
    <Navbar />
    <div className='profile'>
    <div className='personal'><Personal /></div>
    <div className='personal-bio'><Bio /></div>
    <div className='personal-actions'><ProfileActions /></div>
    </div>
    </div>
  )
}

export default Profile;