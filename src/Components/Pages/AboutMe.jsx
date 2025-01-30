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
                        I'm an Applied Computer Science student with a strong foundation in front-end development, now
                        expanding my expertise as a full-stack developer. My university journey has deepened my
                        understanding of software development, equipping me with a versatile skill set. Passionate about
                        crafting seamless user experiences and building efficient back-end systems, I'm eager to apply
                        my knowledge in a professional setting. Currently seeking my first opportunity in the industry,
                        I'm excited to contribute to innovative projects, collaborate with experienced developers, and
                        continue growing as a software engineer.
                    </div>
                    <div className="skills" data-aos="zoom-in-down">
                        <SkillsIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
