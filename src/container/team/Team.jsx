import React from "react";
import "./Team.css";
import images from "../../assets/index.js";
const Team = () => {
  return (
    <div className="people_section">
      <div className="people_section_wrapper">
        <div className="people_description">
          <h2>BEHIND THE PEOPLE</h2>
          <div className="people_redline"></div>
          <p>
            It is a long established fact that create category leading brand
            experiences a reader will be distracted by the readable content of a
            page when looking at its layout.
          </p>
        </div>
        <div className="section_peoples">
          <div className="section_people_details">
            <img src={images.team.mate1} alt="" />
            <div className="team_postion">
              <h3>Frank Johnson</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="section_people_details">
            <img src={images.team.mate2} alt="" />
            <div className="team_postion">
              <h3>Frank Johnson</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="section_people_details">
            <img src={images.team.mate3} alt="" />
            <div className="team_postion">
              <h3>Frank Johnson</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="section_people_details">
            <img src={images.team.mate4} alt="" />
            <div className="team_postion">
              <h3>Frank Johnson</h3>
              <p>CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
