import React from 'react';
import './CSS/App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import MenuButton from './Components/MenuButton/MenuButton'

import Introduction from './Components/Introduction/Introduction'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import Loader from './Components/Loader/Loader'

import ProjectModal from './Components/ProjectModal/ProjectModal'

import ProjectContainer from './Containers/ProjectContainer/ProjectContainer'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		
		setTimeout(() => {
			this.setState({loading: true})
		}, 1400)
		
	}

	render() {
		if (!this.state.loading) return <Loader />
		else return (	
		<Router>
			<div className="App" id = "scrollContainer">
			<Introduction />
				{/*
				<MenuButton />
				
				*/}
				<div className = "main-section">
					<h1 className = "Section">About</h1>
						<p className = "About">{about}</p>
					<h1 className = "Section">Projects</h1>

					<ProjectContainer />
					<h1 className = "Section">Contact</h1>	
					<Contact />
				</div>
			</div>
		</Router>
		)
	}

  

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
