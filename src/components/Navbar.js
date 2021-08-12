import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div className="no-underline">
        <Link to="/"><h1>Web Warrior</h1></Link> 
      </div> 
      <div className="links">
        <Link to="/" className="item">Home</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/projects" className="item">Portfolio Projects</Link>
      </div>
    </nav>
  )
}