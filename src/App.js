import React from 'react';
import './CSS/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


import ProjectModal from './Components/ProjectModal/ProjectModal'

import ProjectContainer from './Containers/ProjectContainer/ProjectContainer'

const App = () => {
  return (
    <Router>
		<div className="App" id = "scrollContainer">
			<ProjectModal />	
		
			<div className = "main-section">
				<h1 className = "Section">About</h1>
					<p className = "About">{about}</p>
				<h1 className = "Section">Projects</h1>

				<ProjectContainer />

				{/*
				<Project 
					projectTitle = "7YearsLater"
					image = {ODFDS_image}
					githubLink = "https://github.com/jjun44/ODFDS"
					projectLink = "https://odfds.herokuapp.com"
					description = {ODFDS_Description}
				/>
				<Project 
					projectTitle = "Ball Up | NBA Stat Tracker"
					image = {BallUp_Image}
					githubLink = {"https://github.com/AldrichhhXO/NBAStatTracker"}
					projectLink = {"https://www.yahoo.com"}
					description = {ball_Up_desc}
					githubLink = "https://github.com/AldrichhhXO/NBAStatTracker"
				/>
				*/}
				<h1 className = "Section">Contact</h1>	
				<Contact />
			</div>
      	</div>
    </Router>
  );
}

const ODFDS_Description = " Full stack web application that models basic functionalities" +
" of apps like Doordash and Uber. "
const ODFDS_image = "ODFDS.jpg"
const BallUp_Image = "Webpage.png"
const about = "I am a web developer capable of creating full stack " + 
"applications, primarily focused on deploying scalable and optimized " +
" websites through minimalistic designs"
const ball_Up_desc = "Frontend application that displays basic stats on NBA players."
export default App;
