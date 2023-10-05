import React from "react";
import "./Getstart.css";
import images from "../../assets/index.js";
const Getstart = () => {
  return (
    <div className="getstart_section">
      <div className="getstart_wrapper">
        <div className="section_background"></div>
        <div className="getstart_contents">
          <h2>Let's Get Started</h2>
          <div className="red_line"></div>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="getstart_button">
            <button>Get Start-></button>
          </div>
        </div>
        <div className="getstart_bottomimg">
          <img src={images.bottom} alt="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Getstart;
