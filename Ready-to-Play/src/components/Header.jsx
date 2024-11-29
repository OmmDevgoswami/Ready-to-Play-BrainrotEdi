import React from "react";
import "./Header.css";
import logo from "./assets/Resources/ready_to_play_logo.jpg"; 

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
        <span className="title1">Ready to Play</span>
      </div>

      {/* Navigation Buttons */}
      <nav className="nav">
        <button>About</button>
        <button>Brainrot</button>
        <button>Venue Finder</button>
        <button>Booking</button>
      </nav>

      {/* Login and Sign Up Buttons */}
      <div className="auth">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
