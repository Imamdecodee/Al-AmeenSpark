import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Carosale from '../Components/Carosale';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaLaptopCode, FaRobot, FaChartLine } from 'react-icons/fa';

const EventPage = () => {
  // Tech event data
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Revolution Summit 2025",
      date: "July 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco Convention Center",
      category: "Artificial Intelligence",
      description: "Explore cutting-edge AI advancements with industry leaders and hands-on workshops.",
      speakers: [
        "Dr. Sarah Chen (Generative AI Ethics)",
        "Mark Johnson (LLM Applications)",
        "Priya Patel (Computer Vision Breakthroughs)"
      ],
      tracks: [
        "Machine Learning Engineering",
        "AI Product Management",
        "Responsible AI Development"
      ],
      image: "https://via.placeholder.com/600x300?text=AI+Summit"
    },
    {
      id: 2,
      title: "Web3 & Blockchain Expo",
      date: "August 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Virtual Event",
      category: "Blockchain",
      description: "Master decentralized technologies through expert talks and live coding sessions.",
      speakers: [
        "Alex Wong (Smart Contract Security)",
        "Nadia K. (DeFi Innovations)",
        "David Liu (Web3 Infrastructure)"
      ],
      image: "https://via.placeholder.com/600x300?text=Web3+Expo"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Cloud Native Conference 2024",
      date: "March 10, 2024",
      highlights: [
        "1,200+ attendees",
        "40+ technical sessions",
        "Hands-on labs"
      ],
      resources: [
        { type: "video", title: "Keynote: Future of Cloud", link: "#" },
        { type: "repo", title: "Workshop Code", link: "#" }
      ],
      image: "https://via.placeholder.com/400x250?text=Cloud+Native"
    },
    // Additional past events...
  ];

  const techTrends = [
    {
      title: "Quantum Computing",
      description: "Practical applications beyond theoretical research",
      icon: <FaRobot className="display-4 text-primary mb-3" />
    },
    {
      title: "Edge AI",
      description: "Bringing intelligence to IoT devices",
      icon: <FaLaptopCode className="display-4 text-primary mb-3" />
    },
    {
      title: "Data Mesh",
      description: "Next-gen distributed data architecture",
      icon: <FaChartLine className="display-4 text-primary mb-3" />
    }
  ];

  return (
    <div className="event-page">
      <NavBar />
      
      {/* Tech Hero Section */}
      <header className="tech-hero text-white text-center">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">Digital Transformation Events</h1>
          <p className="lead mb-4">
            Where technology leaders shape the future
          </p>
          <div className="mission-statement p-3 bg-dark bg-opacity-50 rounded">
            <p>
              Our events bridge the gap between emerging technologies and practical implementation, 
              featuring hands-on learning with industry pioneers.
            </p>
          </div>
          <a href="#upcoming" className="btn btn-primary btn-lg mt-3">
            Explore Tech Events <FaCalendarAlt className="ms-2" />
          </a>
        </div>
      </header>

      {/* Tech Value Proposition */}
      <section className="container py-5">
        <h2 className="text-center mb-5">2025 Tech Focus Areas</h2>
        <div className="row">
          {techTrends.map((trend, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  {trend.icon}
                  <h3>{trend.title}</h3>
                  <p>{trend.description}</p>
                  <a href="#" className="btn btn-outline-primary">View Sessions</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Tech Events */}
      <section id="upcoming" className="container py-5">
        <h2 className="section-title mb-4">Upcoming Tech Events</h2>
        <div className="row">
          {upcomingEvents.map(event => (
            <div className="col-md-6 mb-4" key={event.id}>
              <div className="card h-100 shadow-sm">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{event.category}</span>
                  <h3 className="card-title">{event.title}</h3>
                  
                  <div className="event-meta mb-3">
                    <p className="mb-1"><FaCalendarAlt className="me-2" /> {event.date} | {event.time}</p>
                    <p className="mb-1"><FaMapMarkerAlt className="me-2" /> {event.location}</p>
                  </div>
                  
                  <p className="card-text">{event.description}</p>
                  
                  <div className="speakers mb-3">
                    <h5 className="h6">Featured Speakers:</h5>
                    <ul className="list-unstyled">
                      {event.speakers.map((speaker, i) => (
                        <li key={i} className="d-flex align-items-start mb-1">
                          <span className="badge bg-light text-dark me-2">{i+1}</span>
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {event.tracks && (
                    <div className="tracks">
                      <h5 className="h6">Technical Tracks:</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {event.tracks.map((track, i) => (
                          <span key={i} className="badge bg-secondary">{track}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="d-flex justify-content-between mt-4">
                    <a href={`/event-details/${event.id}`} className="btn btn-primary">
                      Full Agenda
                    </a>
                    <a href="#register" className="btn btn-outline-primary">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Event Resources */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="section-title mb-4">Tech Resource Library</h2>
          <p className="lead text-center mb-5">
            Access recordings, code samples, and presentations from past events
          </p>
          
          <div className="row">
            {pastEvents.map(event => (
              <div className="col-md-4 mb-4" key={event.id}>
                <div className="card h-100">
                  <img src={event.image} className="card-img-top" alt={event.title} />
                  <div className="card-body">
                    <h3 className="h5 card-title">{event.title}</h3>
                    <p className="text-muted small">{event.date}</p>
                    
                    <div className="event-highlights mb-3">
                      <h4 className="h6">Event Stats:</h4>
                      <ul className="list-unstyled">
                        {event.highlights.map((highlight, i) => (
                          <li key={i} className="d-flex align-items-start mb-1">
                            <span className="badge bg-light text-dark me-2">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="resources">
                      <h4 className="h6">Available Resources:</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {event.resources.map((resource, i) => (
                          <a 
                            key={i} 
                            href={resource.link} 
                            className={`btn btn-sm ${resource.type === 'video' ? 'btn-danger' : 'btn-dark'}`}
                          >
                            {resource.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Testimonials */}
      <section className="container py-5">
        <h2 className="section-title mb-4">What Tech Professionals Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>"The AI Summit gave me practical frameworks we implemented directly in our product pipeline."</p>
                  <footer className="blockquote-footer mt-2">Jamal R., <cite>ML Engineer at TechCorp</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>"The Web3 workshops helped our team accelerate our blockchain integration by 3 months."</p>
                  <footer className="blockquote-footer mt-2">Lisa T., <cite>CTO at FinTech Startup</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>"The hands-on cloud labs were exactly what my engineering team needed to upskill."</p>
                  <footer className="blockquote-footer mt-2">David K., <cite>Director of Engineering</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech CTA */}
      <section id="register" className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="display-5 mb-3">Join the Tech Evolution</h2>
          <p className="lead mb-4">
            Network with innovators and gain cutting-edge technical skills
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/events" className="btn btn-light btn-lg">
              View All Tech Events
            </a>
            <a href="#upcoming" className="btn btn-outline-light btn-lg">
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      <Carosale />
      <Footer />
    </div>
  );
};

export default EventPage;