import React from "react";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import "./SkillsIcons.scss";

function SkillsIcons() {
  return (
    <div className="SkillsIcons">
      <div className="item">
        <SiHtml5 />
        <p>HTML</p>
      </div>
      <div className="item">
        <SiCss3 />
        <p>CSS</p>
      </div>
      <div className="item">
        <SiSass />
        <p>SASS</p>
      </div>
      <div className="item">
        <SiGit />
        <p>Git</p>
      </div>
      <div className="item">
        <SiJavascript />
        <p>JavaScript</p>
      </div>
      <div className="item">
        <SiTypescript />
        <p>Type Script</p>
      </div>
      <div className="item">
        <SiReact />
        <p>React</p>
      </div>
      <div className="item">
        <SiRedux />
        <p>Redux</p>
      </div>
    </div>
  );
}

export default SkillsIcons;
