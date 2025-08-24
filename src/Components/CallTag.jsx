import React from 'react';
import { FaLightbulb, FaChartLine, FaHandshake } from 'react-icons/fa';
import './CallTag.css';

const CallTag = () => {
  const benefits = [
    {
      icon: <FaLightbulb className="benefit-icon" />,
      title: "Innovative Strategies",
      description: "Data-driven approaches tailored to your business goals"
    },
    {
      icon: <FaChartLine className="benefit-icon" />,
      title: "Proven Results",
      description: "300% average growth for our clients in 2023"
    },
    {
      icon: <FaHandshake className="benefit-icon" />,
      title: "Dedicated Partnership",
      description: "Your success is our top priority"
    }
  ];

  return (
    <div className="cta-card">
      <div className="cta-content">
        <div className="cta-header">
          <h2 className="cta-title" >Ready to Transform Your Digital Presence?</h2>
          <p className="cta-subtitle">
            Let's bring your ideas to life with our proven framework:
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon-container">
                {benefit.icon}
              </div>
              <div className="benefit-text">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-footer">
          <p className="cta-message">
            Whether you're launching a new brand or scaling an existing one, 
            Al-Ameen Spark delivers measurable results. Our clients see an average 
            of <strong>3x ROI</strong> within the first 6 months.
          </p>
          <button className="cta-button">
            Start Your Project Today →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallTag;