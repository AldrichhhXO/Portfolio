import React, { Component } from 'react'
import './ProjectContainer.css'
import Project from '../../Components/Project/Project'
import ProjectModal from '../../Components/ProjectModal/ProjectModal'

import seven from '../../Images/7yearslater.jpeg'

export default class ProjectContainer extends Component {
    render() {
        return (
            <div className = "Project-Container">
                <h1 className = "Section">Work</h1>
                <Project 
                    projectImg = {seven} />
            </div>
        )
    }
}
