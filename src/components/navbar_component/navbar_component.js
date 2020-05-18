import React from "react";
import "./navbar_component.scss";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const handleMenuClick = (e) => {
    let tabs = document.querySelector(".tabs");
    if (tabs.style.display === "flex") {
      tabs.removeAttribute("style");
    } else {
      tabs.style.display = "flex";
    }
  };

  return (
    <div className="navbarComponent">
      <ul className="mainNav d-flex align-items-center">
        <li className="brandContainer">
          <Link to="/">
            <div className="brand">
              <div className="logo">
                <img src="images/logo.svg" alt="" />
              </div>
              <h5 className="text-secondary">DataSmart</h5>
            </div>
          </Link>
          <li className="menuContainer" onClick={(e) => handleMenuClick(e)}>
            <div className="menu">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </li>
        </li>
        <li>
          <ul className="tabs">
            <li>
              <Link to="/" className="text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/servicesPage" className="text-secondary">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/productsPage" className="text-secondary">
                Our Products
              </Link>
            </li>

            <li>
              <Link to="/contactPage" className="text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
