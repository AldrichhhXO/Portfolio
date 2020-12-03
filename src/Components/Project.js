import React from 'react'

const Project = (props) => {
    return (
        <div name = "Projects" className = "Project">
            <h1 className = "ProjectTitle">{props.projectTitle}</h1>
            <img src = {require(`../Images/${props.image}`)} alt = "ODFDSproject"/>
            <p>{props.description}</p>
            <div className = "Project-Buttons-div">
                <a 
                    className = "Project-Button"
                    href = {props.githubLink}
                    target = "_">Link to Github</a>
                <a 
                    className = "Project-Button cta"
                    href = {props.projectLink }
                    target = "_">Link to website</a>
            </div>
     </div>
    )
}

const gitLink = "https://github.com/jjun44/ODFDS  https://odfds.herokuapp.com "

export default Project;
