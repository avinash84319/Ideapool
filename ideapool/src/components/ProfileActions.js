import '../css/ProfileActions.css'
import axios from 'axios';

function ProfileActions() {

  let base64String=""
  let imageBase64Stringsep=""

  function imageUploaded() {
    // let file = document.querySelector(
    //   'input[type=file]')['files'][0];

    // let reader = new FileReader();
    // console.log("next");

    // reader.onload = function () {
    //   base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    //   imageBase64Stringsep = base64String;

    //   if (window.confirm(" change progfile pic ")){
    //     axios.post("http://localhost:5000/api/changepic",{"username":window.sessionStorage.getItem("username"),"image":imageBase64Stringsep})
    //     .then((res)=>{
    //       console.log(res.data);
    //     }).catch((err)=>{
    //       console.log(err)
    //       alert(err)
    //     })
    //   }

    // }
    // reader.readAsDataURL(file);
    alert("comming soon")
  }


  return (<>
    <div className='profile-actions'>
      <button className='profile-actions-buttons'>Edit Profile</button>
      <button className='profile-actions-buttons'>Change Password</button>
      <button className='profile-actions-buttons'>Delete Account</button>
    </div>
    <div className='profile-actions'>
    <input type='file' placeholder='Title' className='addpost-form-title' />
    <button className='profile-actions-buttons' onClick={imageUploaded} >Add Image</button>
    </div>
    </>
  )
}

export default ProfileActions;