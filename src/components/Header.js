import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                className="header--image"
                src={require('../images/troll.png')}
                alt="description"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h2 className="header--project">CL</h2>
        </header>
    )
}