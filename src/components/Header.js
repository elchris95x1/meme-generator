import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="src\images\troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h2 className="header--project">CL</h2>
        </header>
    )
}