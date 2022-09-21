import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { adventProjects, cardGameImages } from "../consts";

function Projects({ setPosition }) {
  const component = useRef();
  useEffect(() => {
    setPosition(component.current?.getBoundingClientRect().top);
  }, [setPosition]);

  return (
    <div className="Projects" ref={component}>
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
              Project created using React library. Application allows you to
              play a game based on Solitaire and compare your score with other
              players.
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
              The project contains 24 challenges. Each challenge includes HTMS
              and CSS files and the main task is to write JavaScript code to
              give functionality to the site. Link to the project:&nbsp;
              <a href="https://www.adventofjs.com/">www.adventofjs.com</a>
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
