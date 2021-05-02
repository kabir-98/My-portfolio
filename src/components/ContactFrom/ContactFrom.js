import React from "react";
import { useForm } from "@formspree/react";

const ContactFrom = () => {
  const [state, handleSubmit] = useForm("mpzkqlob");
  if (state.succeeded) {
    return <p>Your Message is sent!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form row g-3 p-4 mt-5 ml-5"
    >
      <div class="col-12">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          name="_replyto"
          placeholder="example@gmail.com"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Subject</label>
        <input
          type="text"
          class="form-control"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div class="col-md-12">
        <label class="form-label">Message</label>
        <textarea class="form-control" name="message" rows="6"></textarea>
      </div>
      <div class="col-12 mt-3">
        <button
          onClick='alert("Your Message is sent!")'
          type="submit"
          class="btn btn-primary"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactFrom;
