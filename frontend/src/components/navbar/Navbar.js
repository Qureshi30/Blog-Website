import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar" >
    <div className="navbar__logo">Logo</div>
    <ul className="navbar__menu">
      <li className="navbar__item">
        <Link to="/" className="navbar__link">Home</Link>
      </li>
      <li className="navbar__item">
        <Link to="/dashboard" className="navbar__link">About Us</Link>
      </li>
    </ul>
    <Link to="/create" className="navbar__button">Create</Link>
  </nav>
  )
}

export default Navbar;
