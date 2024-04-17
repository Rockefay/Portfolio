import "aos/dist/aos.css";
import React from "react";
import SkillsIcons from "../SkillsIcons";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="container">
        <h2>About Me</h2>
        <div className="content">
          <div className="text" data-aos="zoom-in-down">
            I'm a computer science student and an aspiring web developer. I ventured into
            programming four years ago, but my interest in front-end development emerged just two
            years ago. University has been a rich learning experience, broadening my understanding
            across a multitude of subjects. Eager to gain my first commercial experience, I'm
            actively seeking opportunities to contribute to innovative projects and further refine
            my skills in a professional setting.
          </div>
          <div className="skills" data-aos="zoom-in-down">
            <SkillsIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
