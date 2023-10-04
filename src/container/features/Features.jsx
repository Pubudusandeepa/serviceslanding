import React from "react";
import "./Features.css";
import images from "../../assets/index.js";
const Features = () => {
  return (
    <div className="feature_section">
      <div className="features_container">
        <div className="feature_left">
          <h2>
            A digital web design studio creating modern & engaging online
            experiences
          </h2>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia.
          </p>
          <div className="future_list">
            <ul>
              <li>We put a lot of effort in design.</li>
              <li>The most important ingredient of successful website.</li>
              <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
              <li>Submit Your Organization.</li>
            </ul>
          </div>
          <div className="feature_button">
            <button>Learn More-></button>
          </div>
        </div>
        <div className="feature_right">
          <img src={images.online} alt="online" />
        </div>
      </div>
    </div>
  );
};

export default Features;
