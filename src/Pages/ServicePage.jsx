import React, { useEffect } from 'react';
import { 
  FaRocket, 
  FaPalette, 
  FaLaptopCode, 
  FaSearch, 
  FaPenFancy,
  FaChessKnight,
  FaAd,
  FaEnvelope,
  FaChartLine,
  FaQuoteLeft
} from 'react-icons/fa';
import { MdOutlineWebhook } from "react-icons/md";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ServicePage.css';
import Logo from "../assets/Images/Al-Ameen-logo.png";
import testimonial1 from "../assets/miqdad.jpg";
import testimonial2 from "../assets/testimonial1.webp";
import client1 from "../assets/partner1.png";
import client2 from "../assets/partner2.png";
import client3 from "../assets/Client2.png";
import client4 from "../assets/partner3.png";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const services = [
    {
      title: "Social Media Marketing",
      description: "Data-driven strategies to amplify your brand across all platforms",
      icon: <FaRocket className="service-icon" />,
      features: [
        "Content strategy & calendar",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Performance analytics"
      ],
      results: "300% average engagement increase",
      path: "/socialmediamarketing"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding that differentiates you in competitive markets",
      icon: <FaPalette className="service-icon" />,
      features: [
        "Brand positioning",
        "Visual identity design",
        "Brand voice development",
        "Competitor analysis",
        "Brand guidelines"
      ],
      results: "2x brand recognition",
      path: "/brandstrategy"
    },
    {
      title: "Web Development",
      description: "High-performance websites designed for conversions",
      icon: <FaLaptopCode className="service-icon" />,
      features: [
        "Custom website design",
        "E-commerce solutions",
        "Mobile optimization",
        "CMS integration",
        "Ongoing maintenance"
      ],
      results: "40% faster load times",
      path: "/webdevelopment"
    },
    {
      title: "SEO Optimization",
      description: "Increase organic traffic with our proven search engine strategies",
      icon: <FaSearch className="service-icon" />,
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO audits",
        "Link building",
        "Local SEO"
      ],
      results: "5x more organic traffic",
      path: "/seo"
    },
    {
      title: "Content Marketing",
      description: "Strategic content that resonates with your audience and drives action",
      icon: <FaPenFancy className="service-icon" />,
      features: [
        "Content strategy",
        "Blog writing",
        "Video production",
        "Infographics",
        "Content distribution"
      ],
      results: "3x lead generation",
      path: "/contentmarketing"
    },
    {
      title: "Marketing Strategy",
      description: "Data-backed marketing plans for sustainable business growth",
      icon: <FaChessKnight className="service-icon" />,
      features: [
        "Market research",
        "Customer journey mapping",
        "Campaign planning",
        "ROI analysis",
        "Omnichannel strategy"
      ],
      results: "4x marketing efficiency",
      path: "/marketingstrategy"
    }
  ];

  const testimonials = [
    {
      quote: "Al-Ameen Spark transformed our social media presence. Our engagement increased by 350% in just 3 months!",
      name: "ImaamDecoder",
      position: "CEO, ilm-Nexus.",
      image: testimonial1
    },
    {
      quote: "The website they built for us converted 40% better than our old one. Truly impressive work!",
      name: "Oluwaseun Adebayo",
      position: "Founder, Nigerian Eats",
      image: testimonial2
    }
  ];

  const clients = [client1, client2, client3, client4];

  return (
    <div className="services-page">
      <NavBar />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <h4 className="hero-subtitle">Our Premium Services</h4>
          <h1 className="hero-title">Digital Solutions That Drive <span className="highlight">Real Results</span></h1>
          <p className="hero-text">
            Every service we offer is designed to deliver measurable business growth. 
            We combine cutting-edge strategies with flawless execution to help your brand 
            stand out and succeed in the digital world.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-primary">
              Get Started Today
            </Link>
            <Link to="/portfolio" className="cta-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our <span className="highlight">Core Services</span></h2>
            <p className="section-description">
              Comprehensive digital marketing solutions tailored to your business objectives
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link to={service.path} className="service-link">
                  <div className="service-icon-container">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-results">
                    <FaChartLine className="results-icon" />
                    <span>{service.results}</span>
                  </div>
                  
                  <div className="service-cta">
                    Learn More →
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Specialized <span className="highlight">Add-Ons</span></h2>
            <p className="section-description">
              Enhance your marketing strategy with these powerful services
            </p>
          </div>
          
          <div className="addons-grid">
            <div className="addon-card" data-aos="fade-up">
              <div className="addon-icon">
                <FaAd />
              </div>
              <h3 className="addon-title">Paid Advertising</h3>
              <p className="addon-description">
                Targeted campaigns on Google, Facebook, Instagram and LinkedIn that convert
              </p>
            </div>
            
            <div className="addon-card" data-aos="fade-up" data-aos-delay="100">
              <div className="addon-icon">
                <FaEnvelope />
              </div>
              <h3 className="addon-title">Email Marketing</h3>
              <p className="addon-description">
                Automated email sequences that nurture leads and boost customer retention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Trusted By <span className="highlight">Innovative Brands</span></h2>
            <p className="section-description">
              We're proud to partner with forward-thinking companies across industries
            </p>
          </div>
          
          <div className="clients-grid">
            {clients.map((client, index) => (
              <img 
                key={index} 
                src={client} 
                alt="Client Logo" 
                className="client-logo"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Client <span className="highlight">Success Stories</span></h2>
            <p className="section-description">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                className="testimonial-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.quote}</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallTag />
      <Footer />
    </div>
  );
};

export default ServicePage;