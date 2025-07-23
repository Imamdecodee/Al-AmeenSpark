import React, { useEffect } from 'react';
import './HomePage.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaRocket, 
  FaChartLine, 
  FaPalette, 
  FaPenFancy, 
  FaChalkboardTeacher, 
  FaUsers,
  FaLinkedin, 
  FaFacebookSquare,
  FaRegLightbulb,
  FaTrophy,
  FaHandshake
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  const services = [
    {
      title: "Social Media Marketing",
      description: "Data-driven strategies to amplify your brand across platforms with measurable results",
      icon: <FaRocket className="service-icon" />,
      stats: "300%+ average engagement increase"
    },
    {
      title: "Web Design & Development",
      description: "High-performance websites designed for conversions and user experience",
      icon: <FaChartLine className="service-icon" />,
      stats: "40% faster load times"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding that differentiates you in competitive markets",
      icon: <FaPalette className="service-icon" />,
      stats: "2x brand recognition"
    },
    {
      title: "Content Marketing",
      description: "Strategic content that resonates with your audience and drives action",
      icon: <FaPenFancy className="service-icon" />,
      stats: "5x more leads"
    },
    {
      title: "Training & Consulting",
      description: "Empower your team with cutting-edge digital marketing skills",
      icon: <FaChalkboardTeacher className="service-icon" />,
      stats: "90% satisfaction rate"
    },
    {
      title: "Community Management",
      description: "Build loyal brand communities that advocate for your business",
      icon: <FaUsers className="service-icon" />,
      stats: "4x retention rates"
    }
  ];

  const teamMembers = [
    {
      name: "Muhammad Bada",
      position: "Founder & CEO",
      expertise: "Digital Strategy",
      image: "founder.jpg",
      social: {
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Nafisat Odedeyi",
      position: "Chief Operating Officer",
      expertise: "Operations & Growth",
      image: "SML.jpg",
      social: {
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      name: "Rejoice Ogine",
      position: "Head of Strategy",
      expertise: "Marketing Innovation",
      image: "S.E.O.jpg",
      social: {
        linkedin: "#",
        facebook: "#"
      }
    }
  ];

  const stats = [
    { value: "150+", label: "Clients Served", icon: <FaHandshake /> },
    { value: "95%", label: "Client Retention", icon: <RiCustomerService2Fill /> },
    { value: "300%", label: "Average Growth", icon: <FaChartLine /> },
    { value: "50+", label: "Projects Completed", icon: <FaTrophy /> }
  ];

  const clients = [
    "client1.svg", "client2.svg", "client3.svg", "client4.svg", "client5.svg"
  ];

  return (
    <div className="homepage">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content" data-aos="fade-up">
          <h4 className="hero-subtitle">Digital Excellence Starts Here</h4>
          <h1 className="hero-title">
            <span className="highlight">Ignite</span> Your Brand's 
            <span className="highlight"> Digital</span> Potential
          </h1>
          <p className="hero-text">
            Al-Ameen Spark delivers cutting-edge digital marketing solutions that drive 
            measurable growth and establish market dominance for your brand.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-primary">
              Get Started Today
            </Link>
            <Link to="/request" className="cta-secondary">
              Request Service
            </Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <p className="section-subtitle">Trusted by innovative brands</p>
          <div className="client-logos">
            {clients.map((client, index) => (
              <img 
                key={index} 
                src={`/src/assets/clients/${client}`} 
                alt="Client Logo" 
                className="client-logo"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our <span className="highlight">Services</span></h2>
            <p className="section-description">
              Comprehensive digital solutions tailored to your business objectives
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
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-stats">
                  <FaRegLightbulb className="stats-icon" />
                  <span>{service.stats}</span>
                </div>
                <Link to="/service" className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                className="stat-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Meet Our <span className="highlight">Leadership</span></h2>
            <p className="section-description">
              The visionary minds driving digital transformation for our clients
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                className="team-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div 
                  className="team-photo"
                  style={{ backgroundImage: `url(/src/assets/Images/${member.image})` }}
                ></div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-expertise">{member.expertise}</p>
                  <div className="team-social">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon" />
                    </a>
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebookSquare className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" data-aos="fade-up">
          <h2 className="cta-title">Ready to Transform Your Digital Presence?</h2>
          <p className="cta-text">
            Schedule a free consultation with our team to discuss your project and discover 
            how we can help your business grow exponentially.
          </p>
          <Link to="/contact" className="cta-button">
            Book Your Free Strategy Session
          </Link>
        </div>
      </section>

      <CallTag />
      <Footer />
    </div>
  );
};

export default HomePage;