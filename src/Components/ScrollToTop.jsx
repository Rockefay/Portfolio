import "aos/dist/aos.css";
import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import "./ScrollToTop.scss";

function ScrollToTop({ scroll }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (scroll)
    return (
      <div className="ScrollToTop" data-aos="fade-up" onClick={scrollTop}>
        <BsArrowUpCircle className="scroll-arrow" />
      </div>
    );
  else return;
}

export default ScrollToTop;
