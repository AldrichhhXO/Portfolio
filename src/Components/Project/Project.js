import React from 'react'
import './Project.css'
import seven from '../../Images/7yearslater.jpeg'

import ProjectModal from '../../Components/ProjectModal/ProjectModal'

const Project = (props) => {
    return (
        <div className = "Project">
            <img src = {seven} />
            <div className = "Project-Description">
                <h1>7yearslater</h1>
                <p>Frontend focused web app</p>
                <p>Constructed a backend to allow for the guests to RSVP</p>
            </div>
     </div>
    )
}

export default Project;
