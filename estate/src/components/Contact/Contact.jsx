import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="con-wrapper">
      <div className="paddings innerWidth con-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe to receive regular updates and offers from us.
          </span>
          <button className="con-button button">
            <a href="mailto:smasherbro5302@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
