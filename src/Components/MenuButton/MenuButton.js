import React from 'react'
import './MenuButton.css'

export default function MenuButton() {
    return (
        <div className = "Menu-Container">
            <div className = "Menu-Options">
                <div className = "Menu-Option">About</div>
                <div className = "Menu-Option">Projects</div>
                <div className = "Menu-Option">Contact</div>
            </div>
            <div className = "Hamburger-Wrapper">
                <div className = "Hamburger">
                    <div className = "bar"></div>
                    <div className = "bar"></div>
                    <div className = "bar"></div>
                </div>
            </div>
        </div>
    )
}
