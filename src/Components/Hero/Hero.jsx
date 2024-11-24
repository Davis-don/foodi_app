import React from "react";
import "./hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlay } from "react-icons/fa";
import heroimg from "../../assets/hero-img.png";
import heroimg1 from "../../assets/hero-small-1.png";

function Hero() {
  return (
    <div className="overall-hero-section">
      <div className="left-hero container">
        <h2>
          Dive into Delights of Delectable <span>Food</span>
        </h2>
        <p>
          Where each plate Waves a story of Culinary Mastery and passionate
          Craftmanship
        </p>

        <div className="bottom-section-hero">
          <div className="div-button-hero text-light">Order now</div>
          <div className="watch-video-container">
            Watch video{" "}
            <span className="play-icon-container rounded-circle">
              <FaPlay />
            </span>
          </div>
        </div>
      </div>
      <div className="right-hero">
        <div className="circular-container-hero rounded-circle"></div>
        <img className="hero-img-big" src={heroimg} alt="cooker" />
        {/* <div className="bottom-cards-section">
        <div className="card-hero card" >
          <img src={heroimg} alt="small" />
        </div>


        <div className="card-hero card">
        
        </div>


        </div> */}
      </div>
    </div>
  );
}

export default Hero;
