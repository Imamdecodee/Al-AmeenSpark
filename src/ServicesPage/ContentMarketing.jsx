import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineCampaign, MdOutlineWeb, MdOutlineBrandingWatermark, MdDesignServices, MdGroups, MdSchool } from "react-icons/md";
import { Link } from 'react-router-dom';

const ContentMarketing = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const contentProcess = [
    {
      title: "Content Strategy",
      description: "We research your audience and industry to craft a strong content roadmap that aligns with your business goals.",
      icon: "📝"
    },
    {
      title: "Content Creation",
      description: "Our team produces high-quality, engaging content tailored to your brand voice and audience preferences.",
      icon: "✍️"
    },
    {
      title: "Distribution & Optimization",
      description: "We ensure your content reaches the right audience and continuously optimize for better performance.",
      icon: "🚀"
    }
  ];

  const contentFeatures = [
    "Blog posts & articles",
    "SEO-optimized content",
    "Email newsletters",
    "E-books & whitepapers",
    "Case studies",
    "Video scripts",
    "Infographics",
    "Content performance analysis"
  ];

  return (
    <div className="smm-page">
      <NavBar />
      
        {/* Hero Section - Updated with ID for specific image */}
      <header className="smm-hero" id="cont-hero">
        <div className="smm-hero-overlay"></div>
        <div className="smm-hero-content">
          <h1>Content Marketing</h1>
          <p>Tell your brand story with compelling content that converts</p>
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
                  <Link to={service.path} className={`smm-service-link ${service.path === '/contentmarketing' ? 'active' : ''}`}>
                    <span className="smm-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="smm-contact-card">
            <div className="smm-contact-content">
              <h4>Need Powerful Content That Converts?</h4>
              <p>Contact our content specialists today</p>
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
                <div className="smm-main-image content-showcase-img"></div>
              </div>
              <div className="smm-details">
                <h2>Strategic Content Solutions</h2>
                <p className="smm-description">
                  Content is the voice of your brand. At Al-Ameen Spark, we create meaningful, 
                  strategic content that informs, entertains, and converts. From blogs to campaigns, 
                  our content marketing is built to tell your story and grow your influence.
                </p>
                
                <div className="smm-features">
                  {contentFeatures.map((feature, index) => (
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
            <h2 className="smm-process-title">Our Content Marketing Process</h2>
            <p className="smm-process-subtitle">A strategic approach to content creation</p>
            
            <div className="smm-process-steps">
              {contentProcess.map((step, index) => (
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
            <h2>Content Types We Specialize In</h2>
            <div className="platform-grid">
              {[
                { name: "Blog Content", icon: "📰" },
                { name: "SEO Articles", icon: "🔍" },
                { name: "Email Campaigns", icon: "✉️" },
                { name: "Whitepapers", icon: "📄" },
                { name: "Video Content", icon: "🎥" },
                { name: "Social Media Content", icon: "📱" }
              ].map((type, index) => (
                <div className="platform-card" key={index}>
                  <span className="platform-icon">{type.icon}</span>
                  <h3>{type.name}</h3>
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

export default ContentMarketing;