import React from 'react'
import "../styles/impproj.css"
import phone from "../img/phone.png"
import gymimg from "../img/gymimg.jpg"
import laptop from "../img/laptop.png"
import freelancer from "../img/freelancer.png"
import { useNavigate } from 'react-router-dom'
const ImpProj = () => {
    const navigate = useNavigate()
  return (
    <div className="impproj">
        <h1>Projects</h1>

        {/* proj 2 */}
        <div class="project">
          <div class="laptop">
            <img src={laptop} alt="" />
            <div class="laptopscreen">
              <img src={freelancer} alt="" class="laptopapp" />
            </div>
          </div>
          <div class="projectdetails">
            <h1 class="projecttitle">FreeLancer.NOW</h1>
            <p class="projectdesc">
              <h3>A MERN application where user can Freelance</h3>
              <h3>Find clients, Chat with clients and make the deal</h3>
              <h3>Freatures: Full Authentication with Jwt tokens,
                Payment integration , Messaging facility, Maintainance of Gigs </h3>
            <h3>Technologies used: ReactJS, MongoDB, Express, NodeJS, ReactQuery, Stripe, Vite.</h3>
              <h4>Work in Progress</h4>
            </p>
            <form action="https://github.com/azim1410/FreeLancerNow-frontend">
                <button onclick="" class="projectbutton">View more</button>
            </form>
          </div>
        </div>

        {/* proj1 */}
        <div class="project">
          <div class="phone">
            <img src={phone} alt="" />
            <div class="phonescreen">
              <img src={gymimg} alt="" class="phoneapp" />
            </div>
          </div>
          <div class="projectdetails">
            <h1 class="projecttitle">Gym Buddy</h1>
            <p class="projectdesc">
                <h3>Reactjs app which helps the user to decide their workout using 1000+ exercises..</h3>
                <h3>functionality to search exercises based on the specific muscle group.</h3>
                <h3>Technologies used: ReactJS , Material UI , RapidAPI.</h3>
                <a href="https://github.com/azim1410/react-GymApp-1000Plus-exercises" class="link">Github link</a>
            </p>
            <form action="https://gymapp-byazim-v3.netlify.app/">
                <button onclick="" class="projectbutton">View more</button>
            </form>
            

          </div>


        </div>

        <div className="viewmore">
        <button className='projectbutton' onClick={() => navigate('/projects')}>View More of My projects</button>
        </div>

    </div>
  )
}

export default ImpProj