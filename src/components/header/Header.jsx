import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
