import React from "react";
import SkillsIcons from "./SkillsIcons";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="container">
        <h2>About Me</h2>
        <div className="content">
          <div className="text">
            I'm a computer science student and an aspiring front-end developer.
            I started my journey witch programing three years ago, but I
            discovered front-end a year ago. Currently I am looking for my first
            job in which I will improve my skills and get first experience.
          </div>
          <div className="skills">
            <SkillsIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
