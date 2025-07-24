import React from 'react';
import './ServicesStyle.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { MdOutlineCallEnd, MdOutlineSchool, MdOutlineWeb, MdOutlineCampaign, MdOutlineBrandingWatermark, MdDesignServices, MdGroups } from "react-icons/md";
import { Link } from 'react-router-dom';

const Training = () => {
  const services = [
    { name: "Social Media Marketing", path: "/socialmediamarketing", icon: <MdOutlineCampaign /> },
    { name: "Web Design & Development", path: "/webdevelopment", icon: <MdOutlineWeb /> },
    { name: "Brand Strategy and Identity", path: "/brandstrategy", icon: <MdOutlineBrandingWatermark /> },
    { name: "Content Marketing", path: "/contentmarketing", icon: <MdDesignServices /> },
    { name: "Training and Consulting", path: "/training", icon: <MdOutlineSchool /> },
    { name: "Community Management", path: "/communitymanagement", icon: <MdGroups /> }
  ];

  const trainingProcess = [
    {
      title: "Needs Assessment",
      description: "We evaluate your current skills and business objectives through comprehensive discovery sessions.",
      icon: "📊"
    },
    {
      title: "Custom Program Design",
      description: "We develop tailored training sessions and materials to address your specific requirements.",
      icon: "✍️"
    },
    {
      title: "Implementation & Support",
      description: "We conduct interactive workshops and provide ongoing guidance for continuous improvement.",
      icon: "👨‍🏫"
    }
  ];

  const trainingBenefits = [
    "Customized learning paths",
    "Industry expert instructors",
    "Practical, hands-on exercises",
    "Ongoing performance support",
    "Actionable strategies",
    "Measurable skill development"
  ];

  return (
    <div className="training-page">
      <NavBar />
      
      {/* Hero Section */}
      <header className="training-hero">
        <div className="training-hero-overlay"></div>
        <div className="training-hero-content">
          <h1>Training & Consulting</h1>
          <p>Empowering your team with knowledge for digital excellence</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="training-container">
        {/* Service Navigation Sidebar */}
        <aside className="training-sidebar">
          <div className="training-services-nav">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className={`training-service-link ${service.path === '/training' ? 'active' : ''}`}>
                    <span className="training-service-icon">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="training-contact-card">
            <div className="training-contact-content">
              <h4>Ready to Upskill Your Team?</h4>
              <p>Contact our training specialists today</p>
              <div className="training-contact-info">
                <MdOutlineCallEnd className="training-call-icon" />
                <span>+234 9047 957 855</span>
              </div>
            </div>
            <Link to="/request" className="training-contact-btn">
              Schedule Consultation
            </Link>
          </div>
        </aside>

        {/* Service Content */}
        <article className="training-content">
          <section className="training-overview">
            <div className="training-showcase">
              <div className="training-image-container">
                <div className="training-main-image"></div>
              </div>
              <div className="training-details">
                <h2>Knowledge That Drives Results</h2>
                <p className="training-description">
                  We empower teams, founders, and aspiring marketers with actionable knowledge. 
                  Through hands-on training and personalized consulting, we help you build the 
                  digital competence to lead your growth journey. Our programs combine industry 
                  expertise with practical application for maximum impact.
                </p>
                
                <div className="training-benefits">
                  {trainingBenefits.map((benefit, index) => (
                    <div className="training-benefit" key={index}>
                      <span className="training-benefit-check">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="training-process">
            <h2 className="training-process-title">Our Training Methodology</h2>
            <p className="training-process-subtitle">A structured approach to skill development</p>
            
            <div className="training-process-steps">
              {trainingProcess.map((step, index) => (
                <div className="training-process-card" key={index}>
                  <div className="training-process-header">
                    <span className="training-process-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="training-testimonials">
            <h2>Success Stories</h2>
            <div className="testimonial-cards">
              <div className="testimonial-card">
                <p>"The training transformed our marketing team's approach to digital strategy."</p>
                <div className="testimonial-author">
                  <span className="author-name">Sarah Johnson</span>
                  <span className="author-role">Marketing Director</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>"Practical, engaging, and immediately applicable to our business needs."</p>
                <div className="testimonial-author">
                  <span className="author-name">Michael Adebayo</span>
                  <span className="author-role">Startup Founder</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Training;