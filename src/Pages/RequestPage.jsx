import React, { useEffect } from 'react';
import './RequestPage.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAccessTime, MdOutlineEmail, MdOutlinePerson } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { FaChevronDown, FaPenFancy } from 'react-icons/fa';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';

const RequestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = React.useState({
    fullname: "",
    email: "",
    time: "",
    service: "",
    mobile: "",
    date: "",
    endtime: "",
    description: "",
    guests: "",
    package: ""
  });

  const services = [
    "Social Media Marketing",
    "Brand Strategy",
    "Web Development",
    "SEO Optimization",
    "Content Marketing"
  ];

  const packages = [
    { name: "Starter Package", price: "NGN 50,000" },
    { name: "Growth Package", price: "NGN 80,000" },
    { name: "Premium Package", price: "NGN 120,000" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="request-page">
      <NavBar />

      {/* Hero Section */}
      <section className="request-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Service Reservation</h1>
          <p>Home <span>/ Booking</span></p>
        </div>
      </section>

      {/* Form Section */}
      <section className="request-form-section">
        <div className="container">
          <div className="form-header" data-aos="fade-up">
            <h2>Reserve a Service</h2>
            <p>Call us +234 917-957-855 or complete the form below</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Info Row */}
            <div className="form-row" data-aos="fade-up">
              <div className="input-group">
                <label>
                  <MdOutlinePerson className="input-icon" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <MdOutlineEmail className="input-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Contact Info Row */}
            <div className="form-row" data-aos="fade-up">
              <div className="input-group">
                <label>
                  <FiPhone className="input-icon" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <BsPeople className="input-icon" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  placeholder="Number of attendees"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Service Selection Row */}
            <div className="form-row" data-aos="fade-up">
              <div className="input-group">
                <label>
                  <FaChevronDown className="input-icon" />
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>
                  <HiOutlineCalendarDateRange className="input-icon" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Time Selection Row */}
            <div className="form-row" data-aos="fade-up">
              <div className="input-group">
                <label>
                  <MdAccessTime className="input-icon" />
                  Start Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <MdAccessTime className="input-icon" />
                  End Time
                </label>
                <input
                  type="time"
                  name="endtime"
                  value={formData.endtime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Package Selection */}
            <div className="package-section" data-aos="fade-up">
              <h3>Select a Package</h3>
              <div className="package-grid">
                {packages.map((pkg, index) => (
                  <div 
                    key={index}
                    className={`package-card ${formData.package === pkg.name ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, package: pkg.name})}
                  >
                    <div className="package-badge"></div>
                    <div className="package-info">
                      <p>{pkg.name}</p>
                      <h4>{pkg.price}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="description-group" data-aos="fade-up">
              <label>
                <FaPenFancy className="input-icon" />
                Project Description
              </label>
              <textarea
                name="description"
                placeholder="Tell us about your project..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn" data-aos="fade-up">
              Book Your Service Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestPage;