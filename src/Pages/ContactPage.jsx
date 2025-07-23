import React, { useEffect, useState } from 'react';
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaFileAlt
} from 'react-icons/fa';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CallTag from '../Components/CallTag';
import './ContactPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [activeForm, setActiveForm] = useState('contact');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const services = [
    'Social Media Marketing',
    'Brand Strategy',
    'Web Development',
    'SEO Optimization',
    'Content Marketing',
    'Marketing Strategy',
    'Other'
  ];

  return (
    <div className="contact-page">
      <NavBar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <h4 className="hero-subtitle">Get In Touch</h4>
          <h1 className="hero-title">Let's Create Something <span className="highlight">Amazing</span> Together</h1>
          <p className="hero-text">
            Whether you're ready to start a project or just want to explore possibilities, 
            our team is here to help you navigate the digital landscape with confidence.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="container">
          <div className="options-grid">
            <div 
              className={`option-card ${activeForm === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveForm('contact')}
              data-aos="fade-up"
            >
              <FaEnvelope className="option-icon" />
              <h3>Send a Message</h3>
              <p>Get a personalized response within 24 hours</p>
            </div>
            
            <div 
              className={`option-card ${activeForm === 'call' ? 'active' : ''}`}
              onClick={() => setActiveForm('call')}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FaCalendarAlt className="option-icon" />
              <h3>Book a Call</h3>
              <p>Schedule a free 30-minute strategy session</p>
            </div>
            
            <div 
              className={`option-card ${activeForm === 'quote' ? 'active' : ''}`}
              onClick={() => setActiveForm('quote')}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FaFileAlt className="option-icon" />
              <h3>Get a Quote</h3>
              <p>Receive a customized proposal for your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="content-grid">
            {/* Form Column */}
            <div className="form-column" data-aos="fade-right">
              {activeForm === 'contact' && (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="form-title">Send Us a Message</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              )}

              {activeForm === 'call' && (
                <div className="booking-widget" data-aos="fade-right">
                  <h2 className="form-title">Schedule a Free Consultation</h2>
                  {/* Calendly Embed Widget */}
                  <div className="calendly-inline-widget" 
                    data-url="https://calendly.com/alameenspark/free-consultation" 
                    style={{ minWidth: '320px', height: '630px' }}>
                  </div>
                </div>
              )}

              {activeForm === 'quote' && (
                <form className="quote-form" onSubmit={handleSubmit} data-aos="fade-right">
                  <h2 className="form-title">Get a Custom Quote</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Project Budget</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Project Timeline</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Project Details"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Request Quote
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="info-column" data-aos="fade-left">
              <div className="contact-info-card">
                <h2 className="info-title">Contact Information</h2>
                
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+234 9165 769 896</p>
                    <p>+234 9047 957 855</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>alameenthespark@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h3>Office</h3>
                    <p>Rt.88 Ilorin, Kwara State, Nigeria</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaWhatsapp className="info-icon" />
                  <div>
                    <h3>WhatsApp</h3>
                    <p>+234 9165 769 896</p>
                    <a 
                      href="https://wa.me/2349165769896" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>

                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <h2 className="info-title">Our Location</h2>
                <div className="google-map">
                  <iframe 
                    title="Al-Ameen Spark Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.682391018576!2d4.567923315370733!3d8.47989970567225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364f90b9d2a6a9%3A0x9e8cb9e8a5d9e8a5!2sIlorin%2C%20Kwara%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/2349165769896" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      <CallTag />
      <Footer />
    </div>
  );
};

export default ContactPage;