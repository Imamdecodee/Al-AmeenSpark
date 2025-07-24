import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineCampaign, MdOutlineWeb, MdOutlineBrandingWatermark, MdDesignServices, MdGroups, MdSchool } from "react-icons/md";
import { Link } from 'react-router-dom';

const CommunityManagement = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const communityProcess = [
    {
      title: "Community Strategy",
      description: "We establish your brand's voice and community goals to build an engagement plan.",
      icon: "📊"
    },
    {
      title: "Active Engagement",
      description: "We manage interactions, spark conversations, and keep your community active.",
      icon: "💬"
    },
    {
      title: "Growth & Analysis",
      description: "We expand your community while analyzing engagement for continuous improvement.",
      icon: "📈"
    }
  ];

  const communityFeatures = [
    "Daily community engagement",
    "Content moderation",
    "Crisis management",
    "Community guidelines",
    "User feedback collection",
    "Brand advocacy programs",
    "Event organization",
    "Performance reporting"
  ];

  const communityPlatforms = [
    { name: "Facebook Groups", icon: "👥" },
    { name: "Discord", icon: "💻" },
    { name: "Slack", icon: "💬" },
    { name: "Instagram", icon: "📸" },
    { name: "Twitter", icon: "🐦" },
    { name: "LinkedIn", icon: "💼" }
  ];

  return (
    <div className="smm-page">
      <NavBar />
      
      {/* Hero Section - Updated with ID for specific image */}
      <header className="smm-hero" id="comm-hero">
        <div className="smm-hero-overlay"></div>
        <div className="smm-hero-content">
          <h1>Community Management & Engagement</h1>
          <p>Building loyal communities through meaningful interactions</p>
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
                  <Link to={service.path} className={`smm-service-link ${service.path === '/communitymanagement' ? 'active' : ''}`}>
                    <span className="smm-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="smm-contact-card">
            <div className="smm-contact-content">
              <h4>Need Community Management?</h4>
              <p>Contact our community specialists today</p>
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
                <div className="smm-main-image community-showcase-img"></div>
              </div>
              <div className="smm-details">
                <h2>Strategic Community Solutions</h2>
                <p className="smm-description">
                  Loyal communities are built—not found. We help brands foster meaningful relationships
                  with their audience through intentional engagement, moderation, and value-driven 
                  interactions that build trust and loyalty.
                </p>
                
                <div className="smm-features">
                  {communityFeatures.map((feature, index) => (
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
            <h2 className="smm-process-title">Our Community Management Process</h2>
            <p className="smm-process-subtitle">Building engaged, loyal communities</p>
            
            <div className="smm-process-steps">
              {communityProcess.map((step, index) => (
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
            <h2>Platforms We Manage</h2>
            <div className="platform-grid">
              {communityPlatforms.map((platform, index) => (
                <div className="platform-card" key={index}>
                  <span className="platform-icon">{platform.icon}</span>
                  <h3>{platform.name}</h3>
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

export default CommunityManagement;