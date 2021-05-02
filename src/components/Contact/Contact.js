/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactFrom from "../ContactFrom/ContactFrom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="p-5 contact-details">
      <h1>Contact me</h1>
      <div className="row">
        <div className="col-md-5">
          <ContactFrom></ContactFrom>
        </div>
      </div>
    </div>
  );
};

export default Contact;
