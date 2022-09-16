import React from "react";

function Projects() {
  return (
    <div className="Projects">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="1"
          d="M0,288L60,282.7C120,277,240,267,360,261.3C480,256,600,256,720,261.3C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <h2>Projects</h2>
        <div className="content">
          <div className="text">
            <h3>Card Game</h3>
            <div>
              Project created using React library. Application allows you to
              play a game based on Solitaire and compare your score with other
              players.
            </div>
          </div>
          <div className="images">
            <img src="Images\Card_Game1.png" alt="" />
            <div className="arows">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
