import React from "react";
import "../styles/Project.css";

import freelancer from "../img/freelancer.png";
const Project = () => {
  return (
    <div className="projects">
      <div className="mygrid">



        <div className="mycard">
          <img
            className="cardimg"
            src="https://img.freepik.com/premium-vector/fitness-center-logo_25327-170.jpg"
            alt=""
          />
          <h2>Gym Buddy</h2>
          <a href="https://gymapp-byazim-v3.netlify.app/">Try My app Now !!</a>
          <a href="https://github.com/azim1410/react-GymApp-1000Plus-exercises">
            Github code
          </a>
        </div>

        <div className="mycard">
          <img className="cardimg" src={freelancer} alt="" />
          <h2>FreeLancer.NOW</h2>

          {/* <a href="https://gymapp-byazim-v3.netlify.app/">Try My app Now !!</a> */}
          <a href="">Github code</a>
        </div>




        <div className="mycard">
          <img
            className="cardimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjeF9ipcJPmmR362_FglMOmYzfZHzEp8b8Q&usqp=CAU"
            alt=""
          />
          <h2>Brain tumor detection</h2>

          {/* <a href="https://gymapp-byazim-v3.netlify.app/">Try My app Now !!</a> */}
          <a href="https://github.com/azim1410/BrainTumorDetection-CNN-VGG16-?">Github code</a>
        </div>



        <div className="mycard">
          <img
            className="cardimg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyZTEp1F91g-rGUjoNWiU9xvmQWh2B9JXiQ&usqp=CAU"
            alt=""
          />
          <h2>Expense Calculator</h2>

          <a href="https://et-reactapp-by-azim.netlify.app/">
            Try My app Now !!
          </a>
          <a href="https://github.com/azim1410/ET-ReactApp-ByAzim">
            Github code
          </a>
        </div>




        <div className="mycard">
          <img
            className="cardimg"
            src="https://a.storyblok.com/f/47007/1201x628/6142f06af0/how-to-build-a-news-app.png"
            alt=""
          />
          <h2>News App</h2>

          {/* <a href="">Try My app Now !!</a> */}
          <a href="https://github.com/azim1410/NewsAPP">Github code</a>
        </div>




        <div className="mycard">
          <img
            className="cardimg"
            src="https://geekflare.com/wp-content/uploads/2023/03/Joplin.png"
            alt=""
          />
          <h2>Notes App</h2>

          {/* <a href="https://gymapp-byazim-v3.netlify.app/">Try My app Now !!</a> */}
          <a href="https://github.com/azim1410/MERN-NotesReactApp">Github code</a>
        </div>




        <div className="mycard">
          <img
            className="cardimg"
            src="https://play-lh.googleusercontent.com/kXGIaXyePbb9s_xbU5YZY8B9lORPOotUn-0agIN40KsZ9lqj_nGwJn61zdqzhAw6vtA=rw"
            alt=""
          />
          <h2>TextEdit App</h2>

          <a href="https://gymapp-byazim-v3.netlify.app/">Try My app Now !!</a>
          <a href="">Github code</a>
        </div>



        <div className="mycard">
          <img
            className="cardimg"
            src="data:image/png;base64,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"
            alt=""
          />
          <h2>React Js Utils App</h2>

          <a href="https://reactutils.netlify.app/">Try My app Now !!</a>
          <a href="https://github.com/azim1410/UtilsReact">Github code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
