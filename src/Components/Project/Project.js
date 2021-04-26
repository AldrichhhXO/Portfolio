import React from 'react'

const Project = (props) => {
    return (
        <div name = "Projects" className = "Project" id = "Project1">


            <div className = "Project-Description">
               <div className = "Project-Description-Options">
                   <h1>7YearsLater</h1>
                   <button>Click For more</button>
               </div>
            </div>

            {/*
            <h1 className = "ProjectTitle">{props.projectTitle}</h1>
            <img src = {require(`../../Images/${props.image}`)} alt = "ODFDSproject"/>
            <p>{props.description}</p>
            <div className = "Project-Buttons-div">
                <a 
                    className = "Project-Button"
                    href = {props.githubLink}
                    target = "_blank" rel = "noopener noreferrer">Link to Github</a>
                <a 
                    className = "Project-Button cta"
                    href = {props.projectLink }
                    target = "_blank" rel = "noopener noreferrer">Link to website</a>
            </div>

            */}
     </div>
    )
}

export default Project;
