import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left Side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" width={120} alt="" />
          <span className="secondaryText">
            Our vision is to make all everyone find <br />
            the best place to live for them.
          </span>
        </div>

        {/* Right side */}

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Dubai United Arab Emirates</span>

          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
