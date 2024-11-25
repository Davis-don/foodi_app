import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
        <div className="left-header">
        <h5>
          <span className="secondary-color text-light p-1">F</span>oodi
        </h5>
      </div>
          <p>Savor the artistry where every dish is a culinary masterpiece</p>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Main Menu</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Menus</a>
            </li>
            <li>
              <a href="#">Reservation</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="mailto:example@email.com">example@email.com</a>
            </li>
            <li>
              <a href="tel:+64 958 248 966">+64 958 248 966</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="social-media">
          <li className="facebookicon">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
        </ul>

        <p className="copyright-text">
          Copyright © 2023 Dscode | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
