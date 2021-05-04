import React from 'react'
import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer(props) {
    return (
        <div className = "Footer">
            <p className = "Footer-Name">Designed & Built by Aldrich Reboja</p>
            <div className = "Contact-Container">
                <a href = "https://www.linkedin.com/in/aktreboja/" target = "_blank" rel ="noopener noreferrer"><FontAwesomeIcon icon = {faLinkedinIn} size = "1x"  className = "ContactIcon"/></a>
                <a href = "https://github.com/AldrichhhXO" target = "_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon = {faGithub} size = "1x"  className = "ContactIcon"/></a>
                <a href = "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJVDnrCfMBwTGDQRJZpGkVPMSJPGmQzcFdvcQDvkMcGjZwpmSfbTPQWMJrZPTkBvzcdl" target = "_blank"  rel = "noopener noreferrer"><FontAwesomeIcon size = "1x" icon = {faEnvelope} className = "ContactIcon"/></a>
            </div>
        </div>
    )
}
