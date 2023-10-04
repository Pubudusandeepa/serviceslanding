import React from "react";
import "./Web.css";
import images from "../../assets/index.js";
const Web = () => {
  return (
    <div className="web_description">
      <div className="web_wrapper_container">
        <div className="background"></div>
        <div className="web_wrapper_description">
          <h2>Build your dream website today</h2>
          <p>
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her.
          </p>
          <button>View Plan & Pricing</button>
        </div>
        <div className="bottom_img">
          <img src={images.bottom} alt="bottom_img" />
        </div>
      </div>
    </div>
  );
};

export default Web;
