import React from "react";

import "./specialDishes.css";
import prev from "../../Assets/images/prev.png";
import previous from "../../assets/images/previous.png";
import next from "../../assets/images/next.png";
import { FiHeart } from "react-icons/fi";
import Vegetable from "../../assets/images/Vegetable salad.png";
import Egg from "../../assets/images/Egg salad.png";
import FattoushImage from "../../assets/images/Fattoush-salad.png";
function SpecialDishes() {
  return (
    <div className="menu-section">
      <div className="header-carousel">
        <div className="header-title">
          <h4 className="subheader">SPECIAL DISHES</h4>
          <h2 className="main-header">
            Standout Dishes <br /> From Our Menu{" "}
          </h2>
        </div>
        <div className="carousel-buttons">
          <button className="prev-btn">
            <img src={previous} alt="Previous" className="prev-icon" />
            <img src={prev} alt="Arrow" className="prev-arrow" />
          </button>

          <button className="next-btn">
            <img src={next} alt="Next" />
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <img
            src={FattoushImage}
            alt="Fattoush Salad"
            className="dish-image"
          />
          <h3 className="dish-title">Fattoush Salad</h3>
          <p className="dish-description">Description of the item</p>
          <div className="price-rating">
            <span className="price">$24.00</span>
            <span className="rating">
              <i className="star-icon">⭐</i> 4.9
            </span>
          </div>
          <button className="favorite-btn">
            <i className="heart-icon">
              <FiHeart />
            </i>
          </button>
        </div>
        <div className="card">
          <img src={Vegetable} alt="Vegetable Salad" className="dish-image" />
          <h3 className="dish-title">Vegetable Salad</h3>
          <p className="dish-description">Description of the item</p>
          <div className="price-rating">
            <span className="price">$26.00</span>
            <span className="rating">
              <i className="star-icon">⭐</i> 4.6
            </span>
          </div>
          <button className="favorite-btn">
            <i className="heart-icon">
              <FiHeart />
            </i>
          </button>
        </div>

        <div className="card">
          <img src={Egg} alt="Egg Salad" className="dish-image" />
          <h3 className="dish-title">Egg Salad</h3>
          <p className="dish-description">Description of the item</p>
          <div className="price-rating">
            <span className="price">$26.00</span>
            <span className="rating">
              <i className="star-icon">⭐</i> 4.6
            </span>
          </div>
          <div className="heart-container">
            <button className="favorite-btn">
              <i className="heart-icon">
                <FiHeart />
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialDishes;
