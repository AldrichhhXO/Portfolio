import React from 'react';
import './CSS/App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import About from './Components/About/About'
import MenuButton from './Components/MenuButton/MenuButton'

import Introduction from './Components/Introduction/Introduction'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Loader from './Components/Loader/Loader'
import ProjectModal from './Components/ProjectModal/ProjectModal'

import Contacts from './Components/Contacts/Contacts'

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
		
		document.addEventListener('scroll', (e) => {	
			let section = document.getElementsByClassName("About-Container")[0]
			let picture = document.getElementsByClassName("Introduction-Component")[0]
			let position = window.scrollY
			let sectionPosition = picture.getBoundingClientRect().bottom
			console.log("SectionPosition: ", sectionPosition)
			console.log("Window Bottom: ", window.innerHeight + window.scrollY)
			if (sectionPosition > position) {
				section.classList.add("Fade-Component")
			}
		})
	}

	render() {
		if (!this.state.loading) return <Loader />
		else return (	
		<Router>
			<div className="App" id = "scrollContainer">
			<Introduction />
				<div className = "main-section">
					<About />	
					<h1 className = "Section">Work</h1>
					<ProjectContainer />
				</div>
			</div>
		</Router>
		)
	}
}

export default App;
