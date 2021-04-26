import React from 'react'
import './ProjectModal.css'

import ODFDS from '../../Images/ODFDS.png'

const ProjectModal = (props) => {
    return (
        <div className = "Project-Modal-Container">
            <div className = "Project-Modal">
                <img className = "Project-Modal-Image" src = {ODFDS}/>
                <div className = "Project-Modal-Description">
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
                    <button className = "Modal-Button">View Code</button>
                    <button className = "Modal-Button Emphasized">View Site</button>
                </div>
                
            </div>
    </div>
    )
}

export default ProjectModal;