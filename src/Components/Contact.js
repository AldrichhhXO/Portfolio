import React from 'react'

import Github from "../Images/GitHub-Mark/PNG/GitHub-Mark-64px.png"
import LinkedIn from "../Images/LinkedIn-Logos/LI-In-Bug.png"
import Gmail from "../Images/gmail.png";

const Contact = () => {


    const LogoLink = (props) => (
        <a href = {props.link} target = "_" rel = "noreferrer">
            <img  
                src = {props.src}
                alt = {props.alt}
                width =  "70px"/>
        </a>
    )

    const GmailLink =  "https://mail.google.com/mail/?view=cm&fs=1&to=aktreboja@gmail.com"

    return (
        <div className = "Contact">
            <LogoLink 
                link = "https://github.com/AldrichhhXO"
                src = {Github}
                alt = "Github" />
            <LogoLink 
                link = {GmailLink}
                src = {Gmail}
                alt = "Gmail"/>
            <LogoLink 
                link = "https://www.linkedin.com/in/aktreboja/"
                src = {LinkedIn}
                alt = "LinkedIn"/>
        </div>
    )
}

export default Contact;

