import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineWeb, MdDesignServices, MdOutlineBrandingWatermark, MdOutlineCampaign, MdGroups, MdSchool } from "react-icons/md";
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const processSteps = [
    {
      title: "Discovery Phase",
      description: "We analyze your goals, target audience, and design preferences to create a comprehensive strategy.",
      icon: "🔍"
    },
    {
      title: "Design & Development",
      description: "Our team crafts responsive, high-performance websites with intuitive user experiences.",
      icon: "💻"
    },
    {
      title: "Testing & Launch",
      description: "We rigorously test and optimize before deploying your digital solution.",
      icon: "🚀"
    }
  ];

  return (
    <div className="webdev-page">
      <NavBar />
      
      {/* Hero Section */}
      <header className="webdev-hero">
        <div className="webdev-hero-overlay"></div>
        <div className="webdev-hero-content">
          <h1>Web Design & Development</h1>
          <p>Crafting digital experiences that drive results</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="webdev-container">
        {/* Service Navigation Sidebar */}
        <aside className="webdev-sidebar">
          <div className="webdev-services-nav">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className={`webdev-service-link ${service.path === '/webdevelopment' ? 'active' : ''}`}>
                    <span className="webdev-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="webdev-contact-card">
            <div className="webdev-contact-content">
              <h4>Ready to start your project?</h4>
              <p>Get in touch with our experts</p>
              <div className="webdev-contact-info">
                <MdOutlineCallEnd className="webdev-call-icon" />
                <span>+234 9047 957 855</span>
              </div>
            </div>
            <Link to="/request" className="webdev-contact-btn">
              Chat With Us
            </Link>
          </div>
        </aside>

        {/* Service Content */}
        <article className="webdev-content">
          <section className="webdev-overview">
            <div className="webdev-showcase">
              <div className="webdev-image-container">
                <div className="webdev-main-image"></div>
              </div>
              <div className="webdev-details">
                <h2>Digital Excellence Through Design</h2>
                <p className="webdev-description">
                  Your website is the cornerstone of your digital presence. We create responsive, 
                  user-centric websites that perfectly embody your brand while delivering exceptional 
                  performance and results. From initial concept to final launch, we ensure every 
                  pixel and line of code serves a purpose.
                </p>
                
                <div className="webdev-features">
                  {[
                    "Custom responsive design",
                    "SEO-optimized architecture",
                    "E-commerce integration",
                    "Performance optimization",
                    "Ongoing maintenance",
                    "Analytics integration"
                  ].map((feature, index) => (
                    <div className="webdev-feature" key={index}>
                      <span className="webdev-feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="webdev-process">
            <h2 className="webdev-process-title">Our Development Process</h2>
            <p className="webdev-process-subtitle">A structured approach to digital excellence</p>
            
            <div className="webdev-process-steps">
              {processSteps.map((step, index) => (
                <div className="webdev-process-card" key={index}>
                  <div className="webdev-process-header">
                    <span className="webdev-process-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
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

export default WebDevelopment;