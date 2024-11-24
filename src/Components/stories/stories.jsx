import React from "react";
import "./stories.css";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.png";

function Stories() {
  return (
    <>
      <div className="story-container">
        <div className="story">
          <h2>Our Story & Services</h2>
          <h1>Our Culinary Journey And Services</h1>
          <p>
            Rooted in passion, we create unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button>Explore</button>
        </div>
        <div className="services">
          <div className="card">
            <img src={image3} alt="Catering Icon" />
            <h3>Catering</h3>
            <p>Delight your guests with our flavors and presentation</p>
          </div>
          <div className="card">
            <img src={image1} alt="Fast Delivery Icon" />
            <h3>Fast Delivery</h3>
            <p>We deliver your order promptly to your door</p>
          </div>
          <div className="card">
            <img src={image2} alt="Online Ordering Icon" />
            <h3>Online Ordering</h3>
            <p>Explore menu & order with ease using our online ordering</p>
          </div>
          <div className="card">
            <img src={image4} alt="Gift Cards Icon" />
            <h3>Gift Cards</h3>
            <p>Give the gift of exceptional dining with Foodi gift cards</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
