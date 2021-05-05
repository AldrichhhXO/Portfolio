import React from 'react'
import './Project.css'
import seven from '../../Images/7yearslater.jpeg'

import ProjectModal from '../../Components/ProjectModal/ProjectModal'

const Project = (props) => {
    return (
        <div className = "Project">
            <img src = {seven} />
            <div className = "Project-Description">
                    <p className = "Project-Title">7yearslater</p>

                    
                    <p className = "Project-Text">A wedding based Web Application that consists of a backend, allowing users to RSVP an lqwksdjvchqsldkjchb</p>
                    <div className = "Stack-Container">
                        <p className = "Stack">ReactJS</p>
                        <p className = "Stack">Node.JS</p>
                        <p className = "Stack">Express</p>
                        <p className = "Stack">MySQL</p>
                    </div>
                    
                </div>
     </div>
    )
}

export default Project;
