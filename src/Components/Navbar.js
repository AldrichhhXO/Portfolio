import React, {useEffect} from 'react'



import {Link} from 'react-router-dom'


const Navbar  = () => {

    useEffect(() => {
        console.log("Rendered");
    })

    const scrollToElement = (num) => {

        let bodyRect = document.body.getBoundingClientRect();
        let elements = document.getElementsByClassName("Section");
        let element = elements[num];
        let elemRect = element.getBoundingClientRect();
        
        const offset = elemRect.top - bodyRect.top;
        alert(offset);
        console.log(bodyRect, offset);

        //console.log(`.${sectionName}`);

       
        
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
        

        
    }

    return (
        <nav className = "Navbar">
            <div className = "Navbar-Title">
                <h1>Aldrich Reboja</h1>
            </div>
            <div className = "Navbar-Links">
                <Link to ="Projects" onClick = {() => scrollToElement(1)}>Contact</Link>
                <Link to = "Contact" onClick = {() => scrollToElement(2)}>Projects</Link>
            </div>
        
            
        </nav>
    )
}

export default Navbar;