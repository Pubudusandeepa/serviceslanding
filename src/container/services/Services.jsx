import React from "react";
import "./Service.css";
import images from "../../assets/index.js";
const Services = () => {
  return (
    <div className="section section__padding">
      <div className="section_wrapper">
        <div className="section_description">
          <h2>OUR SERVICES</h2>
          <div className="lines"></div>
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>
        <div className="section_blocks">
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.diamond} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.monitor} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.pig} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.libry} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.paper} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="section_block">
            <div className="section_logo">
              <img src={images.icons.plane} alt="diamonds" />
            </div>

            <h2>Digital Design</h2>
            <div className="section_content">
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
