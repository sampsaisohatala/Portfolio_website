import React from 'react';
import "./Contact.css";

function Contact(){
    return(
        <div className="contact_container">
            <div className="content_section">
                <div className="text_div">
                <h1>Contact info</h1>
                <p><span style={{fontWeight: 800, color:"red"}}>Don't be a stranger </span> just say hello. </p>
            </div>
                <IconRow/>           
            </div>       
        </div>
    )
}

export default Contact;

function IconRow(){
    return(
        <div className="icon_row">
            <a className="contact_link" href="https://www.linkedin.com/in/sampsa-isoh%C3%A4t%C3%A4l%C3%A4-aa184b158/">
            <img className="icon" src={require('../Images/linkedin.png')} alt="Contact me"/>
                <h4>LinkedIn</h4>
            </a>
            <a className="contact_link" href="https://github.com/sampsaisohatala">
            <img className="icon" src={require('../Images/github.png')} alt="Contact me"/>
                <h4>GitHub</h4>
            </a>
            <a className="contact_link" href="https://www.instagram.com/samppsssa/?hl=fi">
            <img className="icon" src={require('../Images/instagram.png')} alt="Contact me"/>
                <h4>Instagram</h4>
            </a>
            <a className="contact_link" href="mailto:sampsa.isohatala@gmail.com">
            <img className="icon" src={require('../Images/email.png')} alt="Contact me"/>
                <h4>Email</h4>
            </a> 
        </div>
    )   
}