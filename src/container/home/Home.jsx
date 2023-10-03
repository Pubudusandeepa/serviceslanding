import React from "react";
import "./Home.css";
import images from "../../assets/index.js";
const Home = () => {
  return (
    <section className="home_section home_background home_half">
      <div className="background_overlay"></div>
      <div className="home_wrapper ">
        <div className="home_content">
          <h2>We help startups launch their products</h2>
          <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
          <div className="home_video_icon"></div>
        </div>
      </div>
      <div className="bottom_img">
        <img src={images.bottom} alt="" />
      </div>
    </section>
  );
};

export default Home;
