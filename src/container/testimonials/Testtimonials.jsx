import React from "react";
import "./Testimonials.css";
import images from "../../assets/index.js";
const Testtimonials = () => {
  return (
    <div className="testimonials_sections">
      <div className="testimonials_wrapper">
        <div className="testimonials_description">
          <h3>WHAT THEY'VE SAID</h3>
          <div className="red_line"></div>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious pulvinar metus
            molestie sed Semikoli.
          </p>
        </div>
        <div className="testimonials_cards">
          <div className="testimonials_card">
            <img src={images.test.user1} alt="user1" />
            <div className="testimonial_description">
              <p>
                “I feel confident imposing change on myself. It's a lot more fun
                progressing than looking back. That's why scelerisque pretium
                dolor, sit amet vehicula erat pelleque need throw curve balls.”
              </p>
            </div>
            <div className="testimonials_titles">
              <h3>RUBEN REED -</h3>
              <p>Charleston</p>
            </div>
          </div>
          <div className="testimonials_card">
            <img src={images.test.user2} alt="user1" />
            <div className="testimonial_description">
              <p>
                “I feel confident imposing change on myself. It's a lot more fun
                progressing than looking back. That's why scelerisque pretium
                dolor, sit amet vehicula erat pelleque need throw curve balls.”
              </p>
            </div>
            <div className="testimonials_titles">
              <h3>MICHAEL P. HOWLETT -</h3>
              <p>Worcester</p>
            </div>
          </div>
          <div className="testimonials_card">
            <img src={images.test.user3} alt="user1" />
            <div className="testimonial_description">
              <p>
                “I feel confident imposing change on myself. It's a lot more fun
                progressing than looking back. That's why scelerisque pretium
                dolor, sit amet vehicula erat pelleque need throw curve balls.”
              </p>
            </div>
            <div className="testimonials_titles">
              <h3>THERESA D. SINCLAIR -</h3>
              <p>Lynchburg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testtimonials;
