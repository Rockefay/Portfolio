import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./LandingPage.scss";
import Links from "./Links";

function LandingPage() {
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
        <Links />
      </div>
    </div>
  );
}

export default LandingPage;
