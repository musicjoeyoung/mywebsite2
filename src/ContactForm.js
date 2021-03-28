import React from "react";
import emailjs from "emailjs-com";
import Swing from "react-reveal/Swing";

const ContactForm = () => {
  const nameInput = React.useRef();
  const emailInput = React.useRef();
  const messageInput = React.useRef();

  const clearName = () => (nameInput.current.value = "");
  const clearEmail = () => (emailInput.current.value = "");
  const clearMessage = () => (messageInput.current.value = "");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmuye2u",
        "template_ylslhnd",
        e.target,
        "user_QWoMp5BDY50BJtFhJ8SCA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent! Thanks for reaching out!");
          clearName();
          clearEmail();
          clearMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Swing>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" ref={nameInput} />
        <label>Email</label>
        <input type="email" name="user_email" ref={emailInput} />
        <label>Message</label>
        <textarea name="message" id="messageInput" ref={messageInput} />
        <br />
        <input type="submit" value="Send" id="submitButton" />
      </form>
    </Swing>
  );
};

export default ContactForm;
