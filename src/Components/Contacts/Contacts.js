import React from 'react'

import './Contacts.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Contacts() {

    

    return (
        <div className = "Contacts-Container">
            <div className = "Top-Bar"></div>
            <a href = "https://www.linkedin.com/in/aktreboja/" target = "_blank" rel ="noopener noreferrer"><FontAwesomeIcon icon = {faLinkedinIn} color = "white" className = "ContactIcon"/></a>
            <a href = "https://github.com/AldrichhhXO" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faGithub} color = "white" className = "ContactIcon"/></a>
            <a href = "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJVDnrCfMBwTGDQRJZpGkVPMSJPGmQzcFdvcQDvkMcGjZwpmSfbTPQWMJrZPTkBvzcdl" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faEnvelope} color = "white " className = "ContactIcon"/></a>
            <div className = "Top-Bar"></div>
        </div>
    )
}
