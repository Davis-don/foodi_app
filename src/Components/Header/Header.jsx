import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="overall-header-section">
      <h1>Header</h1>
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import { BsBasket3 } from "react-icons/bs";
import { MdWifiCalling1 } from "react-icons/md";
function Header() {
  return (
    <div className="overall-header-section">
      <div className="left-header">
        <h5>
          <span className="secondary-color  text-light p-1">F</span>oodi
        </h5>
      </div>
      <div className="center-header">
        <ul className="list-unstyled">
          <li>Home</li>
          <li>
            Menu
            <select className="select-option">
              <option></option>
            </select>
          </li>
          <li>
            Services
            <select className="select-option">
              <option></option>
            </select>
          </li>
          <li>Offers</li>
        </ul>
      </div>
      <div className="right-header">
        <ul className="list-unstyled">
          <li>
            <FaSearch />
          </li>
          <li>
            <BsBasket3 />
          </li>
          <li>
            <div className="text-light button-header-contact">
              <MdWifiCalling1 />
              Contact{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
