import React from 'react'
import "../styles/Footer.css"

import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { Code } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'
const Footer = () => {

  const handleClick = () =>{
    window.location.href = "https://www.linkedin.com/in/azim-damani-3599381b2/"
  }

  const handleLI = () =>{
    window.location.href = "https://www.linkedin.com/in/azim-damani-3599381b2/"
  }
  const handleGit = () =>{
    window.location.href = "https://github.com/azim1410"
  }
  return (
    <div className="footer">
        <div className="socialMedia">
            <Mail onClick={handleClick}/>
            <LinkedIn onClick={handleLI} />
            <GitHub  onClick={handleGit}/>
            <Code />

        </div>
        <p>By &copy; Azim Damani</p>
    </div>
  )
}

export default Footer