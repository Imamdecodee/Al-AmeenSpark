import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaRobot, FaChartLine, FaTicketAlt } from 'react-icons/fa';
import { BsFillPersonFill, BsFillEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

const EventDetails = () => {
    
  useEffect(() => {
    const eventDate = new Date("July 20, 2025 10:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const gap = eventDate - now;

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((gap % (1000 * 60)) / 1000);

      const countdownEl = document.getElementById("countdown");
      if (countdownEl) {
        countdownEl.innerHTML = `
          <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        `;
      }

      if (gap < 0) {
        clearInterval(timer);
        if (countdownEl) countdownEl.innerHTML = '<div class="alert alert-info">This event has started!</div>';
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Ethics Researcher",
      bio: "Leading expert in ethical AI frameworks at TechEthics Labs",
      image: "https://via.placeholder.com/300x300?text=Dr.+Sarah+Chen"
    },
    {
      name: "Mark Johnson",
      title: "CTO, NeuralCore",
      bio: "Pioneer in practical ML applications with 15+ patents",
      image: "https://via.placeholder.com/300x300?text=Mark+Johnson"
    },
    {
      name: "Priya Patel",
      title: "Head of Product, QuantumLeap",
      bio: "Product leader specializing in emerging tech commercialization",
      image: "https://via.placeholder.com/300x300?text=Priya+Patel"
    },
    {
      name: "Alex Wong",
      title: "Blockchain Architect",
      bio: "Built decentralized systems for Fortune 500 companies",
      image: "https://via.placeholder.com/300x300?text=Alex+Wong"
    }
  ];

  const agenda = [
    {
      time: "09:00 - 10:00",
      title: "Registration & Networking",
      type: "networking"
    },
    {
      time: "10:00 - 10:45",
      title: "Keynote: The Future of Ethical AI",
      speaker: "Dr. Sarah Chen",
      type: "keynote"
    },
    {
      time: "11:00 - 12:30",
      title: "Technical Deep Dive: ML Model Governance",
      speaker: "Mark Johnson",
      type: "workshop"
    },
    {
      time: "13:30 - 15:00",
      title: "Hands-on Lab: Building Responsible AI",
      type: "lab"
    }
  ];

  return (
    <div className="tech-event-details">
      <NavBar />
      
      {/* Hero Header */}
      <header className="tech-event-header text-center">
        <div className="container py-5">
          <div className="tech-event-badge mb-3">AI & TECH CONFERENCE</div>
          <h1 className="display-4 fw-bold mb-3">Ethical Tech Summit 2025</h1>
          <p className="lead mb-4">Where Innovation Meets Responsibility</p>
          
          <div className="event-meta d-flex justify-content-center gap-4 mb-4">
            <div className="d-flex align-items-center">
              <FaCalendarAlt className="me-2" />
              <span>July 20-22, 2025</span>
            </div>
            <div className="d-flex align-items-center">
              <FaMapMarkerAlt className="me-2" />
              <span>San Francisco & Virtual</span>
            </div>
          </div>
          
          <div id="countdown" className="countdown-container mb-4"></div>
          
          <a href="#register" className="btn btn-primary btn-lg">
            <FaTicketAlt className="me-2" />
            Reserve Your Spot
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-5">
        <div className="row">
          {/* Left Column - Event Details */}
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h2 className="section-title mb-4">About The Summit</h2>
                <p className="lead">
                  The Ethical Tech Summit brings together leading technologists, researchers, and 
                  policymakers to address the most pressing challenges in responsible technology development.
                </p>
                
                <h4 className="mt-4">Key Themes</h4>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-primary">AI Governance</span>
                  <span className="badge bg-primary">Data Ethics</span>
                  <span className="badge bg-primary">Responsible Innovation</span>
                  <span className="badge bg-primary">Tech Policy</span>
                </div>
                
                <h4 className="mt-4">Why Attend?</h4>
                <ul className="tech-feature-list">
                  <li>
                    <FaLaptopCode className="feature-icon" />
                    <span>Hands-on technical workshops with industry experts</span>
                  </li>
                  <li>
                    <FaRobot className="feature-icon" />
                    <span>Exclusive access to emerging technology demos</span>
                  </li>
                  <li>
                    <FaChartLine className="feature-icon" />
                    <span>Practical frameworks for implementing ethical tech</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Agenda Section */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h2 className="section-title mb-4">Event Agenda</h2>
                <div className="tech-agenda">
                  {agenda.map((item, index) => (
                    <div key={index} className={`agenda-item ${item.type}`}>
                      <div className="agenda-time">{item.time}</div>
                      <div className="agenda-content">
                        <h5>{item.title}</h5>
                        {item.speaker && <p className="text-muted">{item.speaker}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Speakers Section */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="section-title mb-4">Featured Speakers</h2>
                <div className="row">
                  {speakers.map((speaker, index) => (
                    <div key={index} className="col-md-6 mb-4">
                      <div className="tech-speaker-card">
                        <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                        <div className="speaker-info">
                          <h5>{speaker.name}</h5>
                          <p className="speaker-title">{speaker.title}</p>
                          <p className="speaker-bio">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{top: '20px'}}>
              <div className="card-body">
                <h2 className="section-title mb-4" id="register">Register Now</h2>
                <form className="tech-registration-form">
                  <div className="mb-3">
                    <label className="form-label">
                      <BsFillPersonFill className="me-2" />
                      Full Name
                    </label>
                    <input type="text" className="form-control" required />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">
                      <BsFillEnvelopeFill className="me-2" />
                      Email Address
                    </label>
                    <input type="email" className="form-control" required />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">
                      <BsTelephoneFill className="me-2" />
                      Phone Number
                    </label>
                    <input type="tel" className="form-control" />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Ticket Type</label>
                    <select className="form-select">
                      <option>General Admission ($199)</option>
                      <option>VIP Pass ($499)</option>
                      <option>Student Ticket ($99)</option>
                      <option>Virtual Access ($149)</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Complete Registration
                  </button>
                </form>
                
                <div className="alert alert-info mt-3">
                  <h5>What's Included:</h5>
                  <ul className="small">
                    <li>Full access to all sessions</li>
                    <li>Workshop materials</li>
                    <li>Networking opportunities</li>
                    <li>Lunch & refreshments</li>
                  </ul>
                </div>
                
                <div className="alert alert-warning small mt-3">
                  <strong>Early Bird Special:</strong> Save 20% when you register before June 1, 2025.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Event Location</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">In-Person</h5>
                  <p className="card-text">
                    <strong>San Francisco Tech Center</strong><br />
                    123 Innovation Way, San Francisco, CA<br />
                    <small className="text-muted">Parking and public transport available</small>
                  </p>
                  <a href="#" className="btn btn-outline-primary">View Map</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Virtual Attendance</h5>
                  <p className="card-text">
                    <strong>Live Stream Access</strong><br />
                    All sessions will be streamed in HD with interactive Q&A<br />
                    <small className="text-muted">Links provided after registration</small>
                  </p>
                  <a href="#" className="btn btn-outline-primary">Virtual Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;