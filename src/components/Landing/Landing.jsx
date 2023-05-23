import React from "react";
import "./Landing.css";
import LandingButton from "./LandingButton/LandingButton";

const Landing = () => {
  return (
    <div className="landing">
      <div className="row">
        <div className="col-lg-6 order-lg-2">
          <div className="landing-right-section-content">
            <img
              src="/avatar.webp"
              alt="Gif"
            />
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="landing-left-section-content">
            Discover A New Era Of React
          </div>
          <div className="landing-right-section-button col-12">
            <LandingButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
