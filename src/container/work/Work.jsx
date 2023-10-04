import React from "react";
import "./Work.css";
import images from "../../assets/index.js";
const Work = () => {
  return (
    <div className="section__work">
      <div className="word_wrapper">
        <div className="work_description">
          <h2>WORK PROCESS</h2>
          <div className="red_line"></div>
          <p>
            In an ideal world this website wouldn’t exist, a client would
            acknowledge the importance of having web copy before the Proin vitae
            ipsum vel ex finibus semper design starts.
          </p>
        </div>
        {/* <div className="arrow_builder">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div> */}
        <div className="work_process">
          <div className="single_work_process">
            <img src={images.icons.edit} alt="edit" />
            <h3>Tell us what you need</h3>
            <p>The Big Oxmox advised her not to do so.</p>
          </div>
          <div className="single_work_process">
            <img src={images.icons.id} alt="id" />
            <h3>Tell us what you need</h3>
            <p>The Big Oxmox advised her not to do so.</p>
          </div>
          <div className="single_work_process">
            <img src={images.icons.aim} alt="aim" />
            <h3>Tell us what you need</h3>
            <p>The Big Oxmox advised her not to do so.</p>
          </div>
        </div>
        <div className="work_button">
          <button>Get Started-></button>
        </div>
      </div>
    </div>
  );
};

export default Work;
