import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import Proviz from '../assets/images/proviz.png'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved theme preference from localStorage when the component mounts
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="navContainer">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <img src={Proviz} alt="Logo" />
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Dark/Light Mode Button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? '🌙' : '🌞'}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
