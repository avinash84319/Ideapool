import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';
function Contact(){
    const email = "avihanvaisri@gmail.com";
    const [body,setBody]=useState("");
    const [name,setName]=useState("");
    const [pn,setPn]=useState("");

    const update=(e)=>{
        e.preventDefault();
        window.open(`mailto:${email}?subject=Contact Us&body=Name:${name} Phone No:${pn} Message:${body}`);
    }

    return<>
    <Navbar />
    <div className="con-main">
        <form className="con-main-form">
            <h1 className="con-form-h1">NAME</h1>
            <input className="con-form-inp" name="name" onChange={(e)=>{setName(e.target.value)}}></input>
            <h1 className="con-form-h1">PHONE NO</h1>
            <input className="con-form-inp" name="pn" onChange={(e)=>{setPn(e.target.value)}}></input>
            <h1 className="con-form-h1">MESSAGE</h1>
            <textarea className="con-form-inm" name="message" onChange={(e)=>{setBody(e.target.value)}}></textarea>
            <br />
            <input className="con-form-btn" onClick={update} type='submit'></input>
        </form>
        <div className="con-main-info">
            <h1 className="con-info-h1">CONTACT US</h1>
            <p className="con-info-p">We would like to here from you</p>
            <SocialIcon className="con-info-icon" url="https://github.com/avinash84319" />
            <SocialIcon className="con-info-icon" url="https://www.instagram.com/avirdy_23/" />
            <SocialIcon className="con-info-icon" url="https://www.linkedin.com/in/avinash-reddy-c-857057235/" />
        </div>
    </div>
    </>
}

export default Contact;