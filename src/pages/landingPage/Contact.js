import React from "react";
import { Form } from "../../components/formcomponents/Form";
import "../../components/formcomponents/formstyle.css"
const Contact = () => {
  const pageName = "Contact";

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  
  function formHandler(e) {
    e.preventDefault();

    if (name.length === 0) {
      let nameInput = document.querySelector(".name-input");
      let nameTitle = document.querySelector(".name-title");
      nameInput.classList.add("contact__form-error");
      nameTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let nameInput = document.querySelector(".name-input");
      let nameTitle = document.querySelector(".name-title");
      nameInput.classList.remove("contact__form-error");
      nameTitle.classList.remove("contact__form-error-text");
    }

    if (!validateEmail(email) ) {
      let emailInput = document.querySelector(".email-input");
      let emailTitle = document.querySelector(".email-title");
      emailInput.classList.add("contact__form-error");
      emailTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let emailInput = document.querySelector(".email-input");
      let emailTitle = document.querySelector(".email-title");
      emailInput.classList.remove("contact__form-error");
      emailTitle.classList.remove("contact__form-error-text");
    }

    if (msg.length === 0) {
      let msgInput = document.querySelector(".msg-input");
      let msgTitle = document.querySelector(".msg-title");
      msgInput.classList.add("contact__form-error");
      msgTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let msgInput = document.querySelector(".msg-input");
      let msgTitle = document.querySelector(".msg-title");
      msgInput.classList.remove("contact__form-error");
      msgTitle.classList.remove("contact__form-error-text");
    }
   
    emailjs.sendForm(serviceId, tempId, e.target, userId)
    .then(res => {
        console.log(res)
    }).catch(err => console.log(err))

    setName("");
    setEmail("");
    setMsg("");
  }
  return (
    <div id="container">
      <h1>{pageName}</h1>
      <Form contactInfo={contactInfo} setContactInfo={setContactInfo}/>
    </div>
  );
};

export default Contact;
