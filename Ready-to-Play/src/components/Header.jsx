import React from "react";
import "./Header.css";
import logo from '../assets/Resources/Logo.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* Logo and Text */}
      <div className="logo-section">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <span className="title1">Ready-to-Play</span>
      </div>

      {/* Navigation Buttons */}
      <nav className="nav">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/venue">
          <button>Venue Finder</button>
        </Link>
        <Link to="/brainrot">
          <button>Brainrot</button>
        </Link>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </nav>

      {/* Login and Sign Up Buttons */}
      <div className="auth">
        {/* <button>Login</button> */}
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
