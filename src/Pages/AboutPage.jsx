import React from 'react';
import { 
  FaGlobeAmericas, 
  FaLightbulb, 
  FaChartLine, 
  FaHandshake,
  FaSearch,
  FaPenAlt,
  FaCode,
  FaRocket,
  FaSyncAlt
} from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import CallTag from '../Components/CallTag';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPage.css';

const AboutPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const stats = [
    { value: "150+", label: "Global Clients", icon: <FaGlobeAmericas /> },
    { value: "95%", label: "Client Retention", icon: <RiTeamFill /> },
    { value: "300%", label: "Average Growth", icon: <FaChartLine /> },
    { value: "5M+", label: "Digital Impressions", icon: <FaLightbulb /> }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "We deliver best-in-class solutions that exceed expectations",
      icon: <FaLightbulb />
    },
    {
      title: "Integrity",
      description: "Transparent, ethical practices in all client relationships",
      icon: <FaHandshake />
    },
    {
      title: "Innovation",
      description: "Pioneering cutting-edge digital strategies",
      icon: <FaChartLine />
    },
    {
      title: "Collaboration",
      description: "Your success is our shared mission",
      icon: <RiTeamFill />
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "Comprehensive brand audit and market research to uncover unique opportunities",
      icon: <FaSearch />
    },
    {
      number: "02",
      title: "Define",
      description: "Strategic roadmap development with measurable KPIs and success metrics",
      icon: <FaPenAlt />
    },
    {
      number: "03",
      title: "Design",
      description: "Creative solutions tailored to your brand identity and audience psychology",
      icon: <FaPenAlt />
    },
    {
      number: "04",
      title: "Develop",
      description: "Implementation using cutting-edge technologies and platforms",
      icon: <FaCode />
    },
    {
      number: "05",
      title: "Deploy",
      description: "Precision launch with multi-channel optimization",
      icon: <FaRocket />
    },
    {
      number: "06",
      title: "Drive",
      description: "Continuous optimization based on real-time analytics and performance data",
      icon: <FaSyncAlt />
    }
  ];

  return (
    <div className="about-page">
      <NavBar />
      
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up" data-aos-delay="300">
          <h4 className="hero-subtitle">Global Digital Marketing Leaders</h4>
          <h1 className="hero-title">Redefining Digital Excellence</h1>
          <p className="hero-text">
            Al-Ameen Spark is an award-winning digital marketing agency headquartered in Ilorin, Nigeria, 
            with a global client base across 3 continents. We combine local market expertise with 
            international best practices to deliver exceptional results.
          </p>
          <Link to="/contact" className="hero-cta">
            Partner With Us →
          </Link>
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
                data-aos-delay={index * 100}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content" data-aos="fade-right">
              <h2 className="section-title">Our Vision</h2>
              <p className="mission-text">
                To become the most trusted <br /> global partner for digital transformation, 
                empowering businesses to thrive in an increasingly digital world through 
                innovative, ethical, and results-driven marketing solutions.
              </p>
            </div>
            <div className="mission-content" data-aos="fade-left">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                We deliver measurable business growth through cutting-edge digital strategies 
                that combine data-driven insights, creative excellence, and technological 
                innovation—all tailored to each client's unique needs and market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision and client interaction
            </p>
          </div>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div 
                className="value-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our 6-D Process</h2>
            <p className="section-subtitle">
              A proven framework that delivers consistent, measurable results
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div 
                className="process-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-icon">{step.icon}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="team-cta" data-aos="fade-up">
        <div className="container">
          <h2 className="cta-title">Meet Our Global Team</h2>
          <p className="cta-text">
            Our diverse team of strategists, creatives, and technologists brings together 
            expertise from across Africa, Europe, and North America to deliver world-class solutions.
          </p>
          <Link to="/team" className="cta-button">
            Learn About Our Team
          </Link>
        </div>
      </section>

      <CallTag />
      <Footer />
    </div>
  );
};

export default AboutPage;