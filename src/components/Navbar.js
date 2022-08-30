import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [resBtn, setResBtn] = useState(false);
  const resHandler = () => setResBtn(!resBtn);

  return (
    <>
      <nav className="nav">
        <NavLink exact to="/" className="nav-logo">
          <img src={logo} className="site-logo" alt="logo" />
        </NavLink>
        <div className="nav-cont">
          <ul className={resBtn ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" onClick={resHandler}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                className="nav-links"
                onClick={resHandler}
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                onClick={resHandler}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={resHandler}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={resHandler}>
            {resBtn ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
