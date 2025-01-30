import React from "react";
import {
    SiCplusplus, SiCsharp,
    SiCss3, SiDocker,
    SiGit,
    SiHtml5,
    SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPostman, SiPython,
    SiReact,
    SiRedux,
    SiSass,
    SiTypescript,
} from "react-icons/si";
import "./SkillsIcons.scss";
import {FaJava} from "react-icons/fa";
import {DiMsqlServer} from "react-icons/di";

function SkillsIcons() {
    return (
        <div className="SkillsIcons">
            <div className="item">
                <SiHtml5/>
                <p>HTML</p>
            </div>
            <div className="item">
                <SiCss3/>
                <p>CSS</p>
            </div>
            <div className="item">
                <SiSass/>
                <p>SASS</p>
            </div>
            <div className="item">
                <SiJavascript/>
                <p>JavaScript</p>
            </div>
            <div className="item">
                <SiTypescript/>
                <p>Type Script</p>
            </div>
            <div className="item">
                <SiReact/>
                <p>React</p>
            </div>
            <div className="item">
                <SiRedux/>
                <p>Redux</p>
            </div>
            <div className="item">
                <SiNodedotjs/>
                <p>Node.js</p>
            </div>
            <div className="item">
                <SiPython/>
                <p>Python</p>
            </div>
            <div className="item">
                <FaJava/>
                <p>Java</p>
            </div>
            <div className="item">
                <SiCplusplus/>
                <p>C++</p>
            </div>
            <div className="item">
                <SiCsharp/>
                <p>C#</p>
            </div>
            <div className="item">
                <SiMongodb />
                <p>MongoDB</p>
            </div>
            <div className="item">
                <SiMysql />
                <p>MySQL</p>
            </div>
            <div className="item">
                <DiMsqlServer />
                <p>SQL Server</p>
            </div>
            <div className="item">
                <SiPostgresql />
                <p>PostgreSQL</p>
            </div>
            <div className="item">
                <SiDocker />
                <p>Docker</p>
            </div>
            <div className="item">
                <SiGit/>
                <p>Git</p>
            </div>
            <div className="item">
                <SiPostman />
                <p>Postman</p>
            </div>
        </div>
    );
}

export default SkillsIcons;
