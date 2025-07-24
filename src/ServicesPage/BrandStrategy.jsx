import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineCampaign, MdOutlineWeb, MdOutlineBrandingWatermark, MdDesignServices, MdGroups, MdSchool } from "react-icons/md";
import { Link } from 'react-router-dom';

const BrandStrategy = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const brandProcess = [
    {
      title: "Brand Discovery",
      description: "We uncover your brand's core identity through strategic workshops and market analysis.",
      icon: "🔍"
    },
    {
      title: "Identity Design",
      description: "We craft visual elements that perfectly represent your brand personality.",
      icon: "🎨"
    },
    {
      title: "Brand Implementation",
      description: "We ensure consistent application across all touchpoints for maximum impact.",
      icon: "🚀"
    }
  ];

  const brandFeatures = [
    "Brand positioning strategy",
    "Visual identity design",
    "Brand voice development",
    "Competitor analysis",
    "Brand guidelines",
    "Messaging framework",
    "Brand audit",
    "Naming strategy"
  ];

  const brandElements = [
    { name: "Logo Design", icon: "✨" },
    { name: "Color Palette", icon: "🎨" },
    { name: "Typography", icon: "🔤" },
    { name: "Brand Voice", icon: "🗣️" },
    { name: "Imagery Style", icon: "🖼️" },
    { name: "Brand Guidelines", icon: "📘" }
  ];

  return (
    <div className="smm-page">
      <NavBar />
      
        {/* Hero Section - Updated with ID for specific image */}
      <header className="smm-hero" id="brand-hero">
        <div className="smm-hero-overlay"></div>
        <div className="smm-hero-content">
          <h1>Brand Strategy & Identity</h1>
          <p>Crafting memorable brand experiences that resonate with your audience</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="smm-container">
        {/* Service Navigation Sidebar */}
        <aside className="smm-sidebar">
          <div className="smm-services-nav">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className={`smm-service-link ${service.path === '/brandstrategy' ? 'active' : ''}`}>
                    <span className="smm-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="smm-contact-card">
            <div className="smm-contact-content">
              <h4>Need a Powerful Brand Identity?</h4>
              <p>Contact our brand specialists today</p>
              <div className="smm-contact-info">
                <MdOutlineCallEnd className="smm-call-icon" />
                <span>+234 9047 957 855</span>
              </div>
            </div>
            <Link to="/request" className="smm-contact-btn">
              Get Started
            </Link>
          </div>
        </aside>

        {/* Service Content */}
        <article className="smm-content">
          <section className="smm-overview">
            <div className="smm-showcase">
              <div className="smm-image-container">
                <div className="smm-main-image brand-showcase-img"></div>
              </div>
              <div className="smm-details">
                <h2>Strategic Brand Solutions</h2>
                <p className="smm-description">
                  Your brand is more than a logo—it's an experience. We help businesses build authentic, 
                  memorable identities that connect with their audience. Our strategy ensures that every 
                  brand element speaks the same language—yours!
                </p>
                
                <div className="smm-features">
                  {brandFeatures.map((feature, index) => (
                    <div className="smm-feature" key={index}>
                      <span className="smm-feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="smm-process">
            <h2 className="smm-process-title">Our Brand Strategy Process</h2>
            <p className="smm-process-subtitle">Building brands that stand out</p>
            
            <div className="smm-process-steps">
              {brandProcess.map((step, index) => (
                <div className="smm-process-card" key={index}>
                  <div className="smm-process-header">
                    <span className="smm-process-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="smm-platforms">
            <h2>Brand Elements We Develop</h2>
            <div className="platform-grid">
              {brandElements.map((element, index) => (
                <div className="platform-card" key={index}>
                  <span className="platform-icon">{element.icon}</span>
                  <h3>{element.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BrandStrategy;