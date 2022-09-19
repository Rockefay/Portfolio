import React, { useState } from "react";
import { cardGameImages } from "../consts";

function Projects() {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (direction) => {
    if (direction === "forward") {
      if (imageIndex < cardGameImages.length - 1) setImageIndex(imageIndex + 1);
      else setImageIndex(0);
    } else {
      if (imageIndex > 0) setImageIndex(imageIndex - 1);
      else setImageIndex(cardGameImages.length - 1);
    }
  };

  return (
    <div className="Projects">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
            <img src={cardGameImages[imageIndex]} alt="" />
            <div className="arows">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                onClick={() => changeImage("back")}
              >
                <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                onClick={() => changeImage("forward")}
              >
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <h3>Advent of JavaScript</h3>
            <div>
              The project contains 24 columns. Each challenge includes HTMS and
              CSS files and the main task is to write JavaScript code to give
              functionality to the site.
            </div>
          </div>
          <div className="images">
            <img src="Images\adventofjs.jpg" alt="" />
          </div>
          <div className="text">Some of the challanges:</div>
        </div>
        <div className="gallery">
          <div className="item">
            <img src="Images\Budget.png" alt="" />
            <div>Simple budget calculator</div>
          </div>
          <div className="item">
            <img src="Images\Weather.png" alt="" />
            <div>Weather app using an API</div>
          </div>
          <div className="item">
            <img src="Images\Dynamic_Table.png" alt="" />
            <div>Table of data with sorting and editing</div>
          </div>
          <div className="item">
            <img src="Images\Food_Order.png" alt="" />
            <div>Food Order app</div>
          </div>
          <div className="item">
            <img src="Images\Form_Validator.png" alt="" />
            <div>Form Validator</div>
          </div>
          <div className="item">
            <img src="Images\Password_Generator.png" alt="" />
            <div>Password Generator</div>
          </div>
          <div className="item">
            <img src="Images\Rock_Paper_Scissors1.png" alt="" />
            <div>Rock, Paper, Scissors game</div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fillOpacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,154.7C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Projects;
