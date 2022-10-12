import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactLabel,
  TextInput,
} from "./formStyles";

function ErrorEl({ setError }) {
  return (
    <div className="error-msg">
      <h4>Something went wrong, try again</h4>
      <p>Make sure to provide a valid email and phonenumber</p>
      <button className="error-btn" onClick={() => setError(false)}>
        Close
      </button>
    </div>
  );
}

function Success({ setSucces }) {
  return (
    <div className="error-msg succes-btn">
      <h4>succes!!!</h4>
      <button className="error-btn " onClick={() => setSucces(false)}>
        Close
      </button>
    </div>
  );
}

function Form() {
  const [contactInfo, setContactInfo] = useState({
    user_name: "",
    user_email: "",
    phonenumber: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  function formHandler(e) {
    e.preventDefault();

    if (
      contactInfo.user_name === "" ||
      contactInfo.user_email === "" ||
      contactInfo.message === ""
    ) {
      setError(true);
      console.log(error);
      return;
    }

    emailjs
      .sendForm(
        "service_a6jn9cu",
        "template_l9fagah",
        form.current,
        "WL068qR-rnETie1QZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );

    setContactInfo({ name: "", email: "", phonenumber: "" });
    setError(false);
    clear();
    setSucces(true);
  }
  function clear() {
    document.querySelector("#user_name").value = "";
    document.querySelector("#user_email").value = "";
    document.querySelector("#user_phone").value = "";
    document.querySelector("#message").value = "";
    document.querySelector("#user_name").classList.add("green-border");
    document.querySelector("#user_email").classList.add("green-border");
    document.querySelector("#user_phone").classList.add("green-border");
    document.querySelector("#message").classList.add("green-border");
    setTimeout(function () {
      document.querySelector("#user_name").classList.remove("green-border");
      document.querySelector("#user_email").classList.remove("green-border");
      document.querySelector("#user_phone").classList.remove("green-border");
      document.querySelector("#message").classList.remove("green-border");
    }, 5000);
  }
  return (
    <ContactForm ref={form} className="form" onSubmit={(e) => formHandler(e)}>
      <ContactLabel htmlFor="user_name">Name</ContactLabel>
      <ContactInput
        className="marginspace"
        id="user_name"
        placeholder="Please enter your name"
        name="user_name"
        onChange={(e) => handleChange(e)}
      />
      <ContactLabel htmlFor="user_email">Email</ContactLabel>
      <ContactInput
        className="marginspace"
        id="user_email"
        placeholder="Please enter your email"
        name="user_email"
        onChange={(e) => handleChange(e)}
      />
      <ContactLabel htmlFor="phonenumber">Phone Nr</ContactLabel>
      <ContactInput
        className="marginspace"
        id="user_phone"
        placeholder="Please enter your phone"
        name="user_phone"
        onChange={(e) => handleChange(e)}
      />
      <ContactLabel htmlFor="message"></ContactLabel>
      <TextInput
        className="marginspace"
        id="message"
        placeholder="Please enter your Message"
        name="message"
        onChange={(e) => handleChange(e)}
      ></TextInput>
      <ContactButton type="submit">Send Message</ContactButton>
      {error ? <ErrorEl error={error} setError={setError} /> : null}
      {succes ? <Success setSucces={setSucces} /> : null}
    </ContactForm>
  );
}

export { Form };
