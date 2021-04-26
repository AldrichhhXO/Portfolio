import React, { Component } from 'react'
import './ProjectContainer.css'

import Project from '../../Components/Project/Project'

export default class ProjectContainer extends Component {
    render() {

    const ODFDS_Description = " Full stack web application that models basic functionalities" + " of apps like Doordash and Uber. "
    const ODFDS_image = "ODFDS.jpg"

        return (
            <div className = "Project-Container">
                <Project 
					projectTitle = "7YearsLater"
					image = {ODFDS_image}
					githubLink = "https://github.com/jjun44/ODFDS"
					projectLink = "https://odfds.herokuapp.com"
					description = {ODFDS_Description}
				/>
                                <Project 
					projectTitle = "7YearsLater"
					image = {ODFDS_image}
					githubLink = "https://github.com/jjun44/ODFDS"
					projectLink = "https://odfds.herokuapp.com"
					description = {ODFDS_Description}
				/>

            </div>
        )
    }
}
