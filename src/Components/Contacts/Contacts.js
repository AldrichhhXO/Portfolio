import React from 'react'

import './Contacts.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Contacts(props) {

    return (
        <div className = "Contacts-Container">
            <a href = "https://www.linkedin.com/in/aktreboja/" target = "_blank" rel ="noopener noreferrer"><FontAwesomeIcon icon = {faLinkedinIn} size = "2x"  className = "ContactIcon"/></a>
            <a href = "https://github.com/AldrichhhXO" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faGithub} size = "2x"  className = "ContactIcon"/></a>
            <a href = "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJVDnrCfMBwTGDQRJZpGkVPMSJPGmQzcFdvcQDvkMcGjZwpmSfbTPQWMJrZPTkBvzcdl" target = "_blank"  rel = "noopener noreferrer"><FontAwesomeIcon size = "2x" icon = {faEnvelope} className = "ContactIcon"/></a>
            <div className = "Top-Bar"></div>
        </div>
    )
}
