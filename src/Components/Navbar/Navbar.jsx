import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for navbar styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Your Logo</div>
        <div className="desktop">
          <ul className="navbar-nav">
            <div className="navigation">
                <div className="col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <li className="nav-item">Home</li>

                </div>
                <div className="col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <li className="nav-item">About us</li>

                </div>

                <div className="col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <li className="nav-item">Services</li>
                </div>
                   <div className="col-1 col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <li className="nav-item">Testimoinals</li>
                </div>   
                
                <div className="col-2 col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <li className="nav-item">Careers</li>
                </div>
            </div>
            {/* Add more menu items as needed */}
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">Who we are</li>
          <li className="nav-item">Services</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
