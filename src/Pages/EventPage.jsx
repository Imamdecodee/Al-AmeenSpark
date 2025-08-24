import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../Pages/EventPage.css'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaRegNewspaper, FaRegComments, FaSearch } from 'react-icons/fa';
import { MdTrendingUp, MdInsights } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';

const EventPage = () => {
  // Event data
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample data - in a real app, this would come from an API
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "Digital Marketing Summit 2025",
      date: "July 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual & In-Person (NYC)",
      category: "conference",
      description: "Learn cutting-edge strategies from industry leaders with hands-on workshops.",
      speakers: [
        "Sarah Chen (Google Analytics)",
        "Mark Johnson (Meta Ads)",
        "Priya Patel (Content Strategy)"
      ],
      image: "/images/dm-summit.jpg",
      featured: true
    },
    {
      id: 2,
      title: "SEO Masterclass Workshop",
      date: "August 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual Event",
      category: "workshop",
      description: "Master the latest SEO techniques with practical implementation guides.",
      speakers: [
        "Alex Wong (Technical SEO)",
        "Nadia K. (Local SEO)"
      ],
      image: "/images/seo-workshop.jpg",
      featured: false
    }
  ]);

  const [pastEvents, setPastEvents] = useState([
    {
      id: 3,
      title: "Social Media Strategies 2024",
      date: "March 10, 2024",
      category: "webinar",
      highlights: [
        "1,200+ attendees",
        "20+ strategy sessions",
        "Live Q&A"
      ],
      resources: [
        { type: "video", title: "Keynote: Future of Social", link: "#" },
        { type: "slides", title: "Presentation Slides", link: "#" }
      ],
      image: "/images/social-2024.jpg"
    }
  ]);

  const [newsPosts, setNewsPosts] = useState([
    {
      id: 1,
      title: "Google's Latest Algorithm Update: What Marketers Need to Know",
      date: "June 15, 2025",
      excerpt: "Breaking down the impacts of the June 2025 core update on search rankings.",
      category: "seo",
      image: "/images/google-update.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Rise of AI in Content Marketing",
      date: "June 10, 2025",
      excerpt: "How generative AI is transforming content creation workflows.",
      category: "content",
      image: "/images/ai-content.jpg",
      featured: false
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'conference', name: 'Conferences' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'seo', name: 'SEO' },
    { id: 'content', name: 'Content Marketing' }
  ];

  // Filter events based on active tab and search term
  const filteredEvents = activeTab === 'upcoming' 
    ? upcomingEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (activeCategory === 'all' || event.category === activeCategory)
      )
    : pastEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (activeCategory === 'all' || event.category === activeCategory)
      );

  const filteredNews = newsPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === 'all' || post.category === activeCategory)
  );

  
  return (
    <div className="event-page">
      <NavBar />
      
      {/* Hero Section */}
      <header className="event-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Marketing Events & Insights</h1>
              <p className="lead">
                Stay ahead with industry-leading events and the latest digital marketing news
              </p>
              <div className="d-flex gap-3">
                <a href="#events" className="btn btn-primary btn-lg">
                  <FaCalendarAlt className="me-2" /> View Events
                </a>
                <a href="#news" className="btn btn-outline-light btn-lg">
                  <FaRegNewspaper className="me-2" /> Latest News
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="stats-bar py-4 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <MdTrendingUp className="display-4 text-primary mb-2" />
              <h3>120+</h3>
              <p className="mb-0">Events Yearly</p>
            </div>
            <div className="col-md-3">
              <FaUsers className="display-4 text-primary mb-2" />
              <h3>15K+</h3>
              <p className="mb-0">Marketers</p>
            </div>
            <div className="col-md-3">
              <MdInsights className="display-4 text-primary mb-2" />
              <h3>300+</h3>
              <p className="mb-0">Industry Experts</p>
            </div>
            <div className="col-md-3">
              <FaRegComments className="display-4 text-primary mb-2" />
              <h3>24/7</h3>
              <p className="mb-0">Community Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-5">
        <div className="container">
          <div className="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>Marketing Events</h2>
            <div className="tabs">
              <button 
                className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button 
                className={`btn ${activeTab === 'past' ? 'btn-primary' : 'btn-outline-primary'} ms-2`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="search-box input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search events..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-filter">
                <BiCategory className="me-2" />
                <select 
                  className="form-select" 
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="row">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div className="col-lg-6 mb-4" key={event.id}>
                  <div className="card event-card h-100">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img src={event.image} className="img-fluid rounded-start" alt={event.title} />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <span className={`badge ${event.featured ? 'bg-warning' : 'bg-primary'} mb-2`}>
                            {event.category}
                          </span>
                          <h3 className="card-title">{event.title}</h3>
                          <div className="event-meta mb-3">
                            <p className="mb-1"><FaCalendarAlt className="me-2" /> {event.date} | {event.time}</p>
                            <p className="mb-1"><FaMapMarkerAlt className="me-2" /> {event.location}</p>
                          </div>
                          <p className="card-text">{event.description}</p>
                          {event.speakers && (
                            <div className="speakers mb-3">
                              <h6>Featured Speakers:</h6>
                              <ul className="list-unstyled">
                                {event.speakers.map((speaker, i) => (
                                  <li key={i} className="d-flex align-items-start mb-1">
                                    <span className="badge bg-light text-dark me-2">{i+1}</span>
                                    {speaker}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="d-flex justify-content-between align-items-center">
                            <a href={`/event-details/${event.id}`} className="btn btn-sm btn-outline-primary">
                              Details
                            </a>
                            {activeTab === 'upcoming' && (
                              <a href="./register" className="btn btn-sm btn-primary">
                                Register
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No events found matching your criteria</h4>
                <button 
                  className="btn btn-link"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* News/Blog Section */}
      <section id="news" className="py-5 bg-light">
        <div className="container">
          <div className="section-header mb-5">
            <h2>Latest Marketing News</h2>
            <p className="lead">Insights, trends and updates from our team</p>
          </div>

          <div className="row">
            {/* Featured News Post */}
            {newsPosts.filter(post => post.featured).map(post => (
              <div className="col-lg-6 mb-4" key={post.id}>
                <div className="card featured-news-card h-100">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{post.category}</span>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="text-muted small">{post.date}</p>
                    <p className="card-text">{post.excerpt}</p>
                    <a href={`/news/${post.id}`} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Regular News Posts */}
            <div className="col-lg-6">
              <div className="row">
                {newsPosts.filter(post => !post.featured).map(post => (
                  <div className="col-md-6 mb-4" key={post.id}>
                    <div className="card news-card h-100">
                      <img src={post.image} className="card-img-top" alt={post.title} />
                      <div className="card-body">
                        <span className="badge bg-secondary mb-2">{post.category}</span>
                        <h4 className="card-title">{post.title}</h4>
                        <p className="text-muted small">{post.date}</p>
                        <p className="card-text">{post.excerpt}</p>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a href={`/news/${post.id}`} className="btn btn-sm btn-outline-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <a href="/news" className="btn btn-outline-primary">
              View All News Articles
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2>Ready to Elevate Your Marketing?</h2>
          <p className="lead mb-4">
            Join our community of 15,000+ marketers getting ahead with our events and insights
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#events" className="btn btn-light btn-lg">
              Browse Events
            </a>
            <a href="#news" className="btn btn-outline-light btn-lg">
              Read Latest News
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPage;
