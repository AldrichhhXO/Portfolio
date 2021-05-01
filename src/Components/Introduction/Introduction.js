import React from 'react'
import './Introduction.css'

import Contacts from '../Contacts/Contacts'

export default function Introduction() {
    return (
        <div className = "Introduction-Component">
            <div className = "Introduction-Text">
                <h1>Hello, I'm Aldrich Reboja</h1>
                <h3>Full Stack Software Engineer</h3>
            </div>
            <Contacts />
        </div>
    )
}
