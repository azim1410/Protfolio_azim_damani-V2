import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reorder } from '@mui/icons-material'
import "../styles/Navbar.css"


const Navbar = () => {
const[expandNavbar, setExpandNavbar]=useState(false);

  return (
    <div className="navbar">
        

        <div className="links">
            <div className="link"><Link to="/">Home</Link></div>
            <div className="link"><Link to="/projects">Projects</Link></div>
            <div className="link"><Link to="/experiences">Experience</Link></div>
        </div>
    </div>
  )
}

export default Navbar