import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./pics/logo2.png" alt="" />
          <span className="secondaryText">
            Our estate website offers a comprehensive <br/>collection of properties
            for sale or rent,<br/>ranging from apartments to luxury homes.
          </span>
        </div>
        {/* Right Side */}
        <div className=" flexColStart f-right">
          <div className="test">
            <span className="primaryText">Information</span>
            <span className="secondaryText">Mumbai, Maharashtra, India</span>
          </div>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
