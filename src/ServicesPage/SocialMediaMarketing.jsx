import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineCampaign, MdOutlineWeb, MdOutlineBrandingWatermark, MdDesignServices, MdGroups, MdSchool } from "react-icons/md";
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const smmProcess = [
    {
      title: "Strategy Development",
      description: "We analyze your brand, competitors, and audience to create a customized social media roadmap.",
      icon: "📊"
    },
    {
      title: "Content Creation",
      description: "Our team designs engaging, platform-specific content that resonates with your target audience.",
      icon: "🎨"
    },
    {
      title: "Community Growth",
      description: "We implement growth tactics to expand your reach and foster meaningful engagement.",
      icon: "📈"
    }
  ];

  const smmFeatures = [
    "Platform-specific strategy",
    "Content calendar management",
    "Audience growth tactics",
    "Performance analytics",
    "Paid social advertising",
    "Influencer partnerships",
    "Crisis management",
    "ROI tracking"
  ];

  return (
    <div className="smm-page">
      <NavBar />
      
      {/* Hero Section */}
      <header className="smm-hero">
        <div className="smm-hero-overlay"></div>
        <div className="smm-hero-content">
          <h1>Social Media Marketing</h1>
          <p>Amplify your brand's voice and connect with your audience</p>
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
                  <Link to={service.path} className={`smm-service-link ${service.path === '/socialmediamarketing' ? 'active' : ''}`}>
                    <span className="smm-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="smm-contact-card">
            <div className="smm-contact-content">
              <h4>Ready to Grow Your Social Presence?</h4>
              <p>Contact our social media experts today</p>
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
                <div className="smm-main-image"></div>
              </div>
              <div className="smm-details">
                <h2>Strategic Social Media Solutions</h2>
                <p className="smm-description">
                  We don't just post—we position. At Al-Ameen Spark, we craft data-driven social 
                  media strategies that attract, engage, and convert. From content planning to 
                  audience growth, we help you build a powerful online presence that aligns with 
                  your brand goals.
                </p>
                
                <div className="smm-features">
                  {smmFeatures.map((feature, index) => (
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
            <h2 className="smm-process-title">Our Social Media Approach</h2>
            <p className="smm-process-subtitle">A results-driven methodology</p>
            
            <div className="smm-process-steps">
              {smmProcess.map((step, index) => (
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
            <h2>Platforms We Specialize In</h2>
            <div className="platform-grid">
              {[
                { name: "Instagram", icon: "📸" },
                { name: "Facebook", icon: "👍" },
                { name: "Twitter", icon: "🐦" },
                { name: "LinkedIn", icon: "💼" },
                { name: "TikTok", icon: "🎵" },
                { name: "YouTube", icon: "▶️" }
              ].map((platform, index) => (
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

export default SocialMediaMarketing;