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
            I'm an Applied Computer Science student with a strong foundation in front-end
            development, now expanding into full-stack development. My university journey has
            strengthened my understanding of software engineering and equipped me with a versatile
            skill set. Actively working on real-world projects, I’m driven by creating seamless user
            experiences and developing efficient, scalable back-end systems. Excited to contribute
            to innovative projects, collaborate with experienced teams, and continue growing as a
            software engineer.
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
