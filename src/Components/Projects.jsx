import "aos/dist/aos.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { adventProjects, cardGameImages } from "../consts";
import "./Projects.scss";

function Projects() {
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
        <div className="content project1" data-aos="fade-up">
          <div className="text">
            <h3>Card Game</h3>
            <div>
              Project created using React library. Application allows you to play a game based on
              Solitaire and compare your score with other players.
            </div>
            <div className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              <a href="https://github.com/Rockefay/Card-Game">Code on GitHub</a>
            </div>
          </div>
          <div className="images">
            <Carousel
              showStatus={false}
              showThumbs={false}
              swipeable={true}
              emulateTouch={true}
              className="carousel"
            >
              {cardGameImages.map((image) => {
                return (
                  <div key={image}>
                    <img src={image} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="content project2" data-aos="fade-up">
          <div className="text">
            <h3>Advent of JavaScript</h3>
            <div>
              The project contains 24 challenges. Each challenge includes HTMS and CSS files and the
              main task is to write JavaScript code to give functionality to the site. Link to the
              project:&nbsp;
              <a href="https://www.adventofjs.com/">www.adventofjs.com</a>
            </div>
            <div className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                ></path>
              </svg>
              <a href="https://github.com/Rockefay/Advent-of-JavaScript">Code on GitHub</a>
            </div>
          </div>
          <div className="images">
            <img src="Images\adventofjs.jpg" alt="" />
          </div>
          <div className="text">Some of the challanges:</div>
          <div className="gallery">
            <Carousel
              showStatus={false}
              showThumbs={false}
              swipeable={true}
              emulateTouch={true}
              className="carousel"
            >
              {adventProjects.map((project) => {
                return (
                  <div className="item" key={project.src}>
                    <img src={project.src} alt="" />
                    <div>{project.description}</div>
                  </div>
                );
              })}
            </Carousel>
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
