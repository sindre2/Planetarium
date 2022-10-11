import React,{useState} from "react";

import "../../components/formcomponents/formtwostyle.css"

import { FormTwo } from "../../components/formtwo/Formtwo";
const Contact2 = () => {
  const pageName = "Contact";

  

  return (
    <div>
      <h1>{pageName}</h1>
      <FormTwo />
     
    </div>
  );
};

export default Contact2;