import React from "react";
import "./Social.css";
import images from "../../assets/index.js";
const Social = () => {
  return (
    <div className="social_section">
      <div className="social_wrapper">
        <div className="social_icons">
          <img src={images.icons.facebook} alt="facebook" />
          <img src={images.icons.google} alt="google" />
          <img src={images.icons.linkedin} alt="" />
          <img src={images.icons.twitter} alt="twitter" />
        </div>
        <div className="social_phone">
          <img src={images.icons.phone} alt="phone" />
          <p>+91 123 4556 789</p>
        </div>
        <div className="social_email">
          <img src={images.icons.email} alt="email" />
          <p>Support@info.com</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
