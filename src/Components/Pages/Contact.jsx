import React from "react";
import { BsFilePdfFill } from "react-icons/bs";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import "./Contact.scss";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-me-text" data-aos="fade-right">
        Contact Me
      </div>
      <div className="contact-details" data-aos="fade-left">
        <div className="contact-item">
          <SiGmail className="contact-icon" />
          <a href="mailto: kr.purgat@gmail.com">kr.purgat@gmail.com</a>
        </div>
        <div className="contact-item">
          <SiLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/krzysztof-purgat-448047251/">Linkedin</a>
        </div>
        <div className="contact-item">
          <BsFilePdfFill className="contact-icon" />
          <a href="https://drive.google.com/file/d/1z7L2grOPaII2YWOOVAncsOyo6AdpuOuN/view?usp=sharing">
            CV
          </a>
        </div>
        <div className="contact-item">
          <SiGithub className="contact-icon" />
          <a href="https://github.com/Rockefay">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
