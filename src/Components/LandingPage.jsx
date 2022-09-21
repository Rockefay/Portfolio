import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function LandingPage({ aboutPosition, projectsPosition, contactPosition }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="LandingPage">
      <div className="container">
        <div className="content">
          <h1 className="hello" data-aos="zoom-out">
            Hello
          </h1>
          <h2 className="heading" data-aos="zoom-out">
            I'm Krzysztof
          </h2>
        </div>
        <div className="navigate">
          <h6 onClick={() => window.scrollTo(0, aboutPosition)}>About Me</h6>
          <h6 onClick={() => window.scrollTo(0, projectsPosition)}>Projects</h6>
          <h6 onClick={() => window.scrollTo(0, contactPosition)}>Contact</h6>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
