import React from "react";
import "../../index.css";

export default function ContactUsPage() {
  return (
    <div className="contact-page">
      {/* contact us container starts here */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Enter Your Message"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
      {/* contact us container ends here */}
    </div>
  );
}
