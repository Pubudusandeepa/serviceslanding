import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="pricing_section">
      <div className="pricing_wrapper">
        <div className="pricing_description">
          <h2>OUR PRICING</h2>
          <div className="bottom_line"></div>
          <p>
            Call to action pricing table is really crucial to your for your
            business website. Make your bids stand-out with amazing options.
          </p>
        </div>
        <div className="pricing_contents">
          <div className="pricing_content">
            <div className="pricing_content_pricing">
              <h3>ECONOMY</h3>
              <h2>$9.90</h2>
              <p>BILLING PER MONTH</p>
            </div>
            <div className="pricing_content_features">
              <ul>
                <li>
                  Bandwidth: <span></span>1GB
                </li>
                <li>
                  Onlinespace: <span>50MB</span>
                </li>
                <li>
                  Support: <span>No</span>
                </li>
                <li>
                  <span>1</span> Domain
                </li>
                <li>
                  <span>No</span> Hidden Fees
                </li>
              </ul>
            </div>
            <div className="pricing_content_button">
              <button>Join Now</button>
            </div>
          </div>
          <div className="pricing_content">
            <div className="pricing_content_pricing">
              <h3>DELUXE</h3>
              <h2>$19.90</h2>
              <p>BILLING PER MONTH</p>
            </div>
            <div className="pricing_content_features">
              <ul>
                <li>
                  Bandwidth: <span>10GB</span>
                </li>
                <li>
                  Onlinespace: <span>500MB</span>
                </li>

                <li>
                  Support: <span>Yes</span>
                </li>
                <li>
                  <span>10</span> Domain
                </li>
                <li>
                  <span>No</span> Hidden Fees
                </li>
              </ul>
            </div>
            <div className="pricing_content_button">
              <button>Join Now</button>
            </div>
          </div>
          <div className="pricing_content">
            <div className="pricing_content_pricing">
              <h3>ULTIMATE</h3>
              <h2>$29.90</h2>
              <p>BILLING PER MONTH</p>
            </div>
            <div className="pricing_content_features">
              <ul>
                <li>
                  Bandwidth: <sapn>100GB</sapn>
                </li>
                <li>
                  Onlinespace: <span>2 GB</span>
                </li>
                <li>
                  Support: <span>Yes</span>
                </li>
                <li>
                  <span>Unlimited </span>Domain
                </li>
                <li>
                  <span>No</span> Hidden Fees
                </li>
              </ul>
            </div>
            <div className="pricing_content_button">
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
