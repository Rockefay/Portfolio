import "aos/dist/aos.css";
import React from "react";

function ScrollToTop({ scroll }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (scroll)
    return (
      <div className="ScrollToTop" data-aos="fade-up" onClick={scrollTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M12.001 1.993C6.486 1.994 2 6.48 2 11.994c.001 5.514 4.487 10 10 10 5.515 0 10.001-4.486 10.001-10s-4.486-10-10-10.001zM12 19.994c-4.41 0-7.999-3.589-8-8 0-4.411 3.589-8 8.001-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8.001 8z"></path>
          <path d="m12.001 8.001-4.005 4.005h3.005V16h2v-3.994h3.004z"></path>
        </svg>
      </div>
    );
  else return;
}

export default ScrollToTop;
