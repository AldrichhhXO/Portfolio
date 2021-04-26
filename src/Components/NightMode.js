import React, {useState} from 'react'


const NightMode = (props) => {
    let [mode, setMode] = useState("Night");
    /**
         * Event Handler for night mode.
         * @param  e 
     */
    let switchLightMode = (e) => {
        
        if (mode == "Night") {
            let body = document.getElementsByClassName("App");
            body[0].style.backgroundColor = "rgba(20,20,20, 0.7)";

            let navbar = document.getElementsByClassName("Navbar");
            navbar[0].style.backgroundColor = "rgba(50,50,50,1)";
            let sections = document.getElementsByClassName("Section");
            for (let i = 0; i < sections.length; i++) {
                sections[i].style.color  = "white";
            }

            let project = document.getElementsByClassName("Project");
            project[0].style.backgroundColor = "rgba(110,110,110, 1)";

            setMode("Day")
        }
        else if (mode == "Day") {
            let body = document.getElementsByClassName("App");
            body[0].style.backgroundColor = "white";
            setMode("Night")
        }
    }

    return (

        <label className = "switch">
                <input type = "checkbox" />
                <span className = "slider round" onClick = {switchLightMode}>
                    
                </span>

                     {/*
        <div className = "nightmode-container">
            <button onClick = {switchLightMode}>NightMode</button>
        </div>
         */}
        </label>



    )
}

export default NightMode;