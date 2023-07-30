import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Code } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import "../styles/Home.css";
import Project from "./Project";
import ImpProj from "./ImpProj";
import Experience from "./Experience";

const Home = () => {
  const handleClick = () =>{
    window.location.href = "https://www.linkedin.com/in/azim-damani-3599381b2/"
  }

  const handleLI = () =>{
    window.location.href = "https://www.linkedin.com/in/azim-damani-3599381b2/"
  }
  const handleGit = () =>{
    window.location.href = "https://github.com/azim1410"
  }

  const handleLeetcode = () =>{
    window.location.href = "https://leetcode.com/azim_damani"
  }
 


  return (
    <div className="home">
      <div className="about">
        <h1>Hey, I am Azim Damani</h1>

        <div className="prompt">
          <p>
            <h2>A Full-Stack Developer</h2>
          </p>
        </div>
        <div className="socialMedia">
          <Mail onClick={handleClick} />
          <LinkedIn onClick={handleLI}/>
          <GitHub onClick={handleGit}/>
          <Code onClick={handleLeetcode}/>
        </div>
      </div>

      <div className="projects">
        <ImpProj />
      </div>

      <div className="experience">
        <Experience />
      </div>
      
    </div>
  );
};

export default Home;
