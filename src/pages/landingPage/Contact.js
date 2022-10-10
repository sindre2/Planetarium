import React from "react";
import { Form } from "../../components/formcomponents/Form";
import "../../components/formcomponents/formstyle.css"
const Contact = () => {
  const pageName = "Contact";
  return (
    <div id="container">
      <h1>{pageName}</h1>
      <Form/>
    </div>
  );
};

export default Contact;
