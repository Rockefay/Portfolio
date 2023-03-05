import "aos/dist/aos.css";
import React from "react";
import "./Alert.scss";

function Alert({ alert }) {
  if (alert)
    return (
      <div className="Alert" data-aos="fade-down">
        Message sent
      </div>
    );
  else return;
}

export default Alert;
