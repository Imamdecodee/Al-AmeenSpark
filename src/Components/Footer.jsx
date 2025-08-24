import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from "../assets/Images/Al-Ameen-logo.png";
import { 
  FaFacebookSquare, 
  FaTwitterSquare, 
  FaGoogle, 
  FaInstagramSquare, 
  FaLinkedin,
  FaPhoneVolume,
  FaHome
} from "react-icons/fa";
import { MdEmail, MdPhoneIphone } from "react-icons/md";
import { RiSparklingFill } from "react-icons/ri";

const Footer = () => {
  const companyLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/service", name: "Service" },
    { path: "/contact", name: "Contact" }
  ];

  const businessLinks = [
    { name: "Project" },
    { name: "Our Team" },
    { name: "Facts" },
    { name: "Customers" }
  ];

  const legalPolicies = [
    { 
      path: "https://docs.google.com/document/d/1nKpxjvpXlHF7SUbRenUYsO6WIqrDZAynkZZ1oPCc1xE/edit?usp=drivesdk", 
      name: "Terms of service" 
    },
    { 
      path: "https://docs.google.com/document/d/1xx77cXwW0_lK9m419PRzGmGT6zm0ixQ3BQ_CjzKxM48/edit?usp=drivesdk", 
      name: "Privacy policy" 
    },
    { 
      path: "https://docs.google.com/document/d/1ceblBfpRwGjYDCV_MK-DDKvf7Ov07TuoQAQAF-3wmaE/edit?usp=drivesdk", 
      name: "Copy Right Policy" 
    },
    { 
      path: "https://docs.google.com/document/d/1pcx3kfQyiDqvkxHgkeha8zdeIALCBr0Xb9j_wlFtc-o/edit?usp=drivesdk", 
      name: "Refund policy" 
    },
    { 
      path: "https://docs.google.com/document/d/1UGgdEo5EB3sdV4pqf6tAP9Q-HxloaslPmWpL5wp_7AY/edit?usp=drivesdk", 
      name: "Cookie Policy" 
    }
  ];

  const contactInfo = [
    { icon: <FaHome />, text: "No,88 ilorin Kwara state" },
    { icon: <MdEmail />, text: "alameenthespark@gmail.com" },
    { icon: <FaPhoneVolume />, text: "+234 917-957-855" },
    { icon: <MdPhoneIphone />, text: "+234 9047-957-855" }
  ];

  const socialIcons = [
    { icon: <FaFacebookSquare />, url: "https://www.facebook.com/share/1DXsaJPc1c/" },
    { icon: <FaTwitterSquare />, url: "https://www.facebook.com/share/1DXsaJPc1c/" },
    { icon: <FaGoogle />, url: "https://www.facebook.com/share/1DXsaJPc1c/" },
    { icon: <FaInstagramSquare />, url: "https://www.facebook.com/share/1DXsaJPc1c/" },
    { icon: <FaLinkedin />, url: "https://www.facebook.com/share/1DXsaJPc1c/" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-column brand-column">
          <div className="logo-wrapper">
            <img src={Logo} alt="Al-Ameen Spark" className="footer-logo" />
          </div>
          <p className="brand-description">
         Al-Ameen Spark is a dynamic digital
          marketing agency based in Ilorin, Nigeria,
          but offer service in a entire world and that
          why weoperate romotely,dedicated to
          helping businesses of all sizes succeed in
          the digital world. Our team of creative
          experts, strategists, and developers work
          collaboratively to deliver innovative,
          value-driven solutions.
          </p>
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                {social.icon}
                <RiSparklingFill className="sparkle" />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h3 className="column-title">Company</h3>
          <ul className="footer-links">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  <RiSparklingFill className="sparkle" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Links */}
        <div className="footer-column">
          <h3 className="column-title">Business</h3>
          <ul className="footer-links">
            {businessLinks.map((link, index) => (
              <li key={index}>
                <span className="footer-link">
                  <RiSparklingFill className="sparkle" />
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3 className="column-title">Get In Touch</h3>
          <ul className="contact-info">
            {contactInfo.map((item, index) => (
              <li key={index} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Policies */}
        <div className="footer-column">
          <h3 className="column-title">Legal Policies</h3>
          <ul className="footer-links">
            {legalPolicies.map((policy, index) => (
              <li key={index}>
                <a 
                  href={policy.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <RiSparklingFill className="sparkle" />
                  {policy.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-section">
        <div className="divider"></div>
        <p className="copyright-text">
          Copyright @ 2025 ILM NEXUS | Powered by Ilm Nexus Digital Skills
        </p>
      </div>
    </footer>
  );
};

export default Footer;