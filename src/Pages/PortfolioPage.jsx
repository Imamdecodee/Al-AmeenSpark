import React, { useEffect } from 'react';
import { 
  FaArrowRight,
  FaChartLine,
  FaQuoteLeft
} from 'react-icons/fa';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PortfolioPage.css';
import client1 from "../assets/Images/founder.jpg";
import client2 from "../assets/Images/founder.jpg";

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const caseStudies = [
    {
      id: "social-media-case",
      service: "Social Media Marketing",
      title: "Halal Cosmetics Brand Growth",
      challenge: "Low engagement (1.2%) and stagnant follower growth",
      solution: "Content strategy + influencer partnerships",
      results: [
        "320% engagement increase",
        "15K new followers in 3 months",
        "22% conversion rate from campaigns"
      ],
      image: client1,
      testimonial: {
        text: "Al-Ameen Spark transformed our Instagram into a sales machine!",
        name: "Aisha Mohammed",
        position: "CEO, PureHalal Cosmetics"
      }
    },
    {
      id: "web-dev-case",
      service: "Web Development",
      title: "E-Commerce Platform Revamp",
      challenge: "High bounce rate (78%) and poor mobile experience",
      solution: "Mobile-first redesign + checkout optimization",
      results: [
        "Bounce rate reduced to 32%",
        "40% faster load times",
        "2.5x more mobile conversions"
      ],
      image: client2,
      testimonial: {
        text: "Our sales tripled after the new website launched. Worth every penny!",
        name: "Obinna Okeke",
        position: "Founder, NaijaFoods"
      }
    }
  ];

  const clients = [client1, client2, client1, client2];

  return (
    <div className="pf-container">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pf-hero">
        <div className="pf-hero-content" data-aos="fade-up">
          <h1 className="pf-hero-title">
            Case Studies That <span className="pf-highlight">Speak Volumes</span>
          </h1>
          <p className="pf-hero-text">
            Real problems solved with data-driven strategies. See how we've helped 
            brands like yours achieve remarkable growth.
          </p>
          <div className="pf-hero-cta">
            <Link to="/contact" className="pf-cta-primary">
              Get Your Free Audit
            </Link>
            <Link to="/services" className="pf-cta-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pf-case-studies">
        <div className="pf-container-inner">
          <div className="pf-section-header" data-aos="fade-up">
            <h2 className="pf-section-title">
              Featured <span className="pf-highlight">Case Studies</span>
            </h2>
            <p className="pf-section-description">
              Detailed breakdowns of our most impactful projects
            </p>
          </div>
          
          <div className="pf-case-studies-grid">
            {caseStudies.map((caseStudy, index) => (
              <div 
                className="pf-case-study-card" 
                key={index}
                id={caseStudy.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="pf-case-media">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="pf-case-image"
                  />
                  <div className="pf-case-badge">
                    {caseStudy.service}
                  </div>
                </div>
                
                <div className="pf-case-content">
                  <h3 className="pf-case-title">{caseStudy.title}</h3>
                  
                  <div className="pf-before-after">
                    <div className="pf-challenge">
                      <h4>Challenge</h4>
                      <p>{caseStudy.challenge}</p>
                    </div>
                    <div className="pf-solution">
                      <h4>Our Solution</h4>
                      <p>{caseStudy.solution}</p>
                    </div>
                  </div>
                  
                  <div className="pf-results">
                    <h4>Key Results</h4>
                    <ul className="pf-results-list">
                      {caseStudy.results.map((result, i) => (
                        <li key={i}>
                          <FaChartLine className="pf-result-icon" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <blockquote className="pf-testimonial">
                    <FaQuoteLeft className="pf-quote-icon" />
                    <p>{caseStudy.testimonial.text}</p>
                    <cite>
                      — {caseStudy.testimonial.name}, {caseStudy.testimonial.position}
                    </cite>
                  </blockquote>
                  
                  <Link 
                    to={`/services#${caseStudy.service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="pf-service-link"
                  >
                    See Service Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="pf-clients-section">
        <div className="pf-container-inner">
          <div className="pf-section-header" data-aos="fade-up">
            <h2 className="pf-section-title">
              Trusted By <span className="pf-highlight">Industry Leaders</span>
            </h2>
          </div>
          <div className="pf-clients-grid">
            {clients.map((client, index) => (
              <img 
                key={index} 
                src={client} 
                alt="Client Logo" 
                className="pf-client-logo"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <CallTag />
      <Footer />
    </div>
  );
};

export default PortfolioPage;