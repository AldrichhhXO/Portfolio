import React from 'react'
import './ProjectModal.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

import ODFDS from '../../Images/ODFDS.png'

const ProjectModal = (props) => {

    const closeModal = (e) => {
        e.preventDefault()
        let modal = document.getElementById("Project-Modal")
        modal.classList.add("Project-Modal-Hide")
    }

    return (
        <div className = "Project-Modal-Container" id ="Project-Modal">
            <div className = "Project-Modal">
                <FontAwesomeIcon onClick = {closeModal} icon = {faTimes} size = "2x" className = "Close-Button" />
                <img className = "Project-Modal-Image" src = {ODFDS}/>
                <div className = "Project-Modal-Description">
                    <h1>ODFDS</h1>
                    <p>A frontend focused web application.  </p>
                    <p>Utilizes clustering to help optimize load times with numerous images.</p>
                    <p>Produced a simple backend capable of recording the user's RSVP information, as well as allowing the client to view/manage the information stored in a database.</p>
                    <p>Languages and Frameworks used: </p>
                    <ul>
                        <li>React.JS</li>
                        <li>Express</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div className = "Modal-Buttons">
                    <a href = {props.codeLink} target= "_blank" rel = "noopener noreferrer"><button className = "Modal-Button">View Code</button></a>
                    <a href = {props.siteLink} target = "_blank" rel = "noopener noreferrer"><button className = "Modal-Button Emphasized">View Site</button></a>
                </div>
            </div>
    </div>
    )
}

export default ProjectModal;