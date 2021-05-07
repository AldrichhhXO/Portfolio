import React from 'react';
import './CSS/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import About from './Components/About/About'
import Introduction from './Components/Introduction/Introduction'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'
import ProjectContainer from './Containers/ProjectContainer/ProjectContainer'
import ContactMe from './Components/ContactMe/ContactMe'

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
					<ContactMe />
					<Footer />
				</div>
			</div>
		</Router>
		)
	}
}

export default App;
