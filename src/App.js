import React from 'react';

import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'




import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Contact from './Components/Contact'

import Footer from './Components/Footer'

const ODFDS_Description = " Full stack web application that models basic functionalities" +
" of apps like Doordash and Uber. "

const ODFDS_image = "ODFDS.jpg"

const about = "I am a web developer capable of creating full stack " + 
"applications, primarily focused on deploying scalable and optimized " +
" websites through minimalistic designs"

const App = () => {
  return (
    <Router>
		<div className="App" id = "scrollContainer">
        	<Navbar />
			<h1 className = "Section">About</h1>
				<p className = "About">{about}</p>
			<h1 className = "Section">Contact</h1>
				<Contact />
			<h1 className = "Section">Projects</h1>
			<Project 
				projectTitle = "ODFDS (On Demand Food Delivery Service)"
				image = {ODFDS_image}
				description = {ODFDS_Description}
			/>
			<Footer />
      	</div>
    </Router>
  );
}

export default App;
