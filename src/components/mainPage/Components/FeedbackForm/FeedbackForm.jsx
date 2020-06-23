import React from "react";
import FormContactInfo from "./FormContactInfo";
import "../../../Media.css";
import "../../MainPage.css";

let FeedbackForm = () => {
  return (
    <div className="contactMe wrapper">
      <div className="titleContact">
        <h2>Ways to contact me</h2>
        <hr />
        <p>
          You have a desire to get acquainted closer or to specify details? Use this form and i will
          surely answer you.
        </p>
      </div>
      <div className="contactWindow">
        <form className="contactForm" id="mailForm">
          <input type="text" id="name" name="name" placeholder="Your beautiful name" />
          <input type="tel" id="phone" name="phone" placeholder="Your number, please" />
          <input type="email" id="email" name="email" placeholder="Your email adress" />
          <textarea id="message" rows="5" placeholder="Leave your message"></textarea>
        </form>
        <FormContactInfo />
      </div>
      <div className="buttonPage">
        <button type="button" id="sendMail">
          Send message
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
