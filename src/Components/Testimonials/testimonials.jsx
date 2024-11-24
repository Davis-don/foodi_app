import React from "react";
import "./testimonial.css";
import ChefImage from "../../assets/chefImage.jpg";
import Customer1 from "../../assets/h1.jpg";
import Customer2 from "../../assets/h2.jpg";
import Customer3 from "../../assets/h3.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="chef-section">
        <div className="chef-image-wrapper">
          <span className="emoji-left">😊</span>
          <img src={ChefImage} alt="Chef" className="chef-image" />
          <span className="emoji-right">🍕</span>
          <div className="chef-badge">
            <span>Our Best Chef 😊</span>
          </div>
        </div>
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-title">What Our Customers Say About Us</h3>
        <p className="testimonial-quote">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable.”
        </p>
        <div className="customer-feedback">
          <div className="avatars">
            <img src={Customer1} alt="Customer 1" className="avatar" />
            <img src={Customer2} alt="Customer 2" className="avatar" />
            <img src={Customer3} alt="Customer 3" className="avatar" />
          </div>
          <div className="rating">
            <div>
              <h4 className="text">Customer Feedback</h4>
            </div>
            <span className="stars">⭐</span>
            <span>4.9</span>
            <span>(18.6k Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
