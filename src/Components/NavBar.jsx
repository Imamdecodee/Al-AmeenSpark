import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiSparklingFill } from 'react-icons/ri';
import Logo from "../assets/Images/Al-Ameen-logo.png";
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/service", name: "Service" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact", name: "Contact" },
    { path: "/event", name: "Event" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo-wrapper">
            <img src={Logo} alt="Al-Ameen Spark" className="logo" />
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-text">{item.name}</span>
                <RiSparklingFill className="spark-icon" />
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <button className="cta-button">
             <a href="/login"> Admin</a>
            </button>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        className={`mobile-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavBar;