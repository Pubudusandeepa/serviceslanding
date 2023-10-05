import React from "react";
import "./Getintouch.css";
const Getintouch = () => {
  return (
    <div className="getintouch_section">
      <div className="getintouch_wrapper">
        <div className="getintouch_introduction">
          <h2>GET IN TOUCH</h2>
          <div className="red_line"></div>
          <p>
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with faucibus sapien odio
            measurable results.
          </p>
        </div>
        <div className="getintouch_formsection">
          <div className="getintouch_address">
            <ul>
              <li>
                <h3>Office Address 1:</h3>
                <p>4461 Cedar Street Moro, AR 72368</p>
              </li>
              <li>
                <h3>Office Address 2:</h3>
                <p>
                  2467 Swick Hill Street <br />
                  New Orleans, LA 70171
                </p>
              </li>
              <li>
                <h3>Working Hours:</h3>
                <p>9:00AM To 6:00PM</p>
              </li>
            </ul>
          </div>
          <div className="getintouch_form">
            <div className="name_section">
              <input type="text" placeholder="Your name*" />
              <input type="text" placeholder="Your email*" />
            </div>
            <input type="text" placeholder="Your Subject" />
            <div className="message_section">
              <input type="text" placeholder="Your Message" />
            </div>
            <div className="getintouch_button">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
