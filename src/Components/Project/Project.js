import React from 'react'
import './Project.css'
import seven from '../../Images/7yearslater.jpeg'

const Project = (props) => {
    return (
        <div className = "Project">
             <img src = {seven} alt = "7YearsLater"/>
            <a className = "Project-Description" href = "https://www.7yearslater.com" rel = "noopenner noreferrer" target = "_blank">
                    <p className = "Project-Title">7yearslater</p>

                    
                    <p className = "Project-Text">A Frontend focused web application</p>
                    <p className = "Project-Text">Constructed a backend to allow users to complete their RSVP's for the event, as well as the ability for the end user to manage the logistics of the event.</p>
                    <div className = "Stack-Container">
                        <p className = "Stack">ReactJS</p>
                        <p className = "Stack">Node.JS</p>
                        <p className = "Stack">Express</p>
                        <p className = "Stack">MySQL</p>
                    </div>
                    
            </a>
           
     </div>
    )
}

export default Project;
