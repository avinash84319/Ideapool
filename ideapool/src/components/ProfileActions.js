import '../css/ProfileActions.css'
import axios from 'axios';
import { useState } from 'react';

function ProfileActions() {

  const [image, setImage] = useState('')

  const fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (e) => reject(e)
    })

  const imageUploaded = async () => {

    await axios.post("http://localhost:5000/api/addimage", {
      "username": window.sessionStorage.getItem("username"),
      "image": await fileToBase64(image)
    })
      .then((res) => {
        console.log(res.data);
        alert("Image uploaded successfully")
      }
      ).catch((err) => {
        console.log(err)
        alert(err)
      })

  }


  function changep() {
    let oldpass = prompt("Enter old password");
    let newpass = prompt("Enter new password");
    let confirmpass = prompt("Confirm new password");

    if (newpass === confirmpass) {
      axios.post("http://localhost:5000/api/changepass", { "username": window.sessionStorage.getItem("username"), "oldpassword": oldpass, "password": newpass })
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err)
          alert(err)
        })
    }
    else {
      alert("Passwords do not match")
    }
  }

  function deletea() {
    let password = prompt("Enter your password to delete your account");
    if (window.confirm("Are you sure you want to delete your account?")) {
      axios.post("http://localhost:5000/api/deleteacc", { "username": window.sessionStorage.getItem("username"), "password": password })
        .then((res) => {
          console.log(res.data);
          window.sessionStorage.clear();
          window.location.href = '/';
        }).catch((err) => {
          console.log(err)
          alert(err)
        })
    }
  }


  return (<>
    <div className='profile-actions'>
      <button className='profile-actions-buttons' onClick={changep} >Change Password</button>
      <button className='profile-actions-buttons' onClick={deletea} >Delete Account</button>
    </div>
    <div className='profile-actions'>
      <input type='file' id="thatfile" style={{ "display": "none" }} placeholder='Title' className='addpost-form-title' onChange={(e) => { setImage(e.target.files[0]) }} />
      <label id="file-input-label" for="thatfile" className='profile-actions-buttons'>Select a File</label>
      <button className='profile-actions-buttons' onClick={imageUploaded}>Change Profile Pic</button>
    </div>
  </>
  )
}

export default ProfileActions;