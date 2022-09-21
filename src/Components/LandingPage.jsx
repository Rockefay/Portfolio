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
          <h6
            onClick={() =>
              window.scrollTo({ top: aboutPosition, behavior: "smooth" })
            }
          >
            About Me
          </h6>
          <h6
            onClick={() =>
              window.scrollTo({ top: projectsPosition, behavior: "smooth" })
            }
          >
            Projects
          </h6>
          <h6
            onClick={() =>
              window.scrollTo({ top: contactPosition, behavior: "smooth" })
            }
          >
            Contact
          </h6>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
