import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "../Alert";
import "./Contact.scss";

function Contact() {
  const [alert, setAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          setAlert(true);
          setTimeout(() => setAlert(false), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="Contact">
        <h3>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <Alert alert={alert} />
    </>
  );
}

export default Contact;
