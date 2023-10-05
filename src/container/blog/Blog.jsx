import React from "react";
import images from "../../assets/index.js";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog_section">
      <div className="blog_section_wrapper">
        <div className="blog_section_description">
          <h2>BLOG</h2>
          <div className="red_line"></div>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean class at a euismod mus ipsum vel
            ex finibus semper luctus quam.
          </p>
        </div>
        <div className="blog_section_cards">
          <div className="blog_ssection_card">
            <img src={images.blog.blg1} alt="blog1" />
            <p>UI & UX Design</p>
            <div className="section_card_details">
              <h3>Doing a cross country road trip</h3>
              <p>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <button>Read More -></button>
            </div>
          </div>
          <div className="blog_ssection_card">
            <img src={images.blog.blg2} alt="blog1" />
            <p>UI & UX Design</p>
            <div className="section_card_details">
              <h3>Doing a cross country road trip</h3>
              <p>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <button>Read More -></button>
            </div>
          </div>
          <div className="blog_ssection_card">
            <img src={images.blog.blg3} alt="blog1" />
            <p>UI & UX Design</p>
            <div className="section_card_details">
              <h3>Doing a cross country road trip</h3>
              <p>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <button>Read More -></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
