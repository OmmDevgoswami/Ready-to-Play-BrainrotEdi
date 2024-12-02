import React from 'react';
import './tooltip.css'; 
import Chatbot from '../assets/Resources/chatbot.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='ownership'>&copy; {new Date().getFullYear()} Ready-to-Play </p>
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span><i className="fa fa-facebook"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><i className="fa fa-twitter"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span><i className="fa fa-instagram"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span><i className="fa fa-github"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span><i className="fa fa-youtube"></i></span> {/* Corrected to span */}
        </li>
      </ul>
      
      <div className='bot'><Link to="/brainrot"><img className="logo" src={Chatbot} alt="chatbot" /> </Link> </div>
    </footer>
  );
};

export default Footer;
