import React, { useState } from "react";
import "./Header.css";
import images from "../../assets/index.js";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="header_section">
      <nav className="nav_bar">
        <div
          className="container"
          style={{ backgroundColor: colorChange ? "black" : "" }}
        >
          <div className="logo">
            <h2>Simplify</h2>
          </div>
          <div className="nav_list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="buttons">
            <button>Try it Free</button>
          </div>
          <div
            className="shadow"
            style={{ backgroundColor: colorChange ? "black" : "" }}
          >
            {isClicked ? (
              <div className="small_menu">
                <div className="logo_small">
                  <h2>Simplify</h2>
                  <div className="small_logo" onClick={() => toggleClicked()}>
                    <img src={images.icons.list} alt="navsmall" />
                  </div>
                </div>
                <div className="nav_list_mini">
                  <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="buttons_mini">
                  <button>Try it Free</button>
                </div>
              </div>
            ) : (
              <div className="small_nav">
                <div className="logo_mini">
                  <h2>Simplify</h2>
                </div>
                <div className="small_logo" onClick={() => toggleClicked()}>
                  <img src={images.icons.list} alt="navsmall" />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
