import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaEdit, 
  FaComments, 
  FaSignOutAlt,
  FaImage,
  // FaTrash,
  FaUpload,
  FaUserCog,
  FaEnvelope,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';

// API Configuration
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
// axios.defaults.baseURL = API_BASE_URL;

// Set auth token if exists
const token = localStorage.getItem('adminToken');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// API Service
const api = {
  // Auth
  login: (credentials) => axios.post('/admin/login', credentials),

  // Blog Endpoints
  getBlogs: () => axios.get('/blogs'),
  saveBlog: (blog) => axios.post('/blogs', blog),
  deleteBlog: (id) => axios.delete(`/blogs/${id}`),
  
  // Testimonial Endpoints
  getTestimonials: () => axios.get('/testimonials'),
  saveTestimonial: (testimonial) => axios.post('/testimonials', testimonial),
  deleteTestimonial: (id) => axios.delete(`/testimonials/${id}`),
  
  // Lead Endpoints
  getLeads: () => axios.get('/leads'),
  updateLeadStatus: (id, status) => axios.put(`/leads/${id}`, { status }),
  
  // Team Member Endpoints
  getTeamMembers: () => axios.get('/team'),
  saveTeamMember: (member) => {
    const formData = new FormData();
    Object.keys(member).forEach(key => {
      if (key === 'social') {
        formData.append(key, JSON.stringify(member[key]));
      } else if (member[key] !== null) {
        formData.append(key, member[key]);
      }
    });
    return axios.post('/team', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  deleteTeamMember: (id) => axios.delete(`/team/${id}`),
  
  // Inquiry Endpoints
  getInquiries: () => axios.get('/inquiries'),
  updateInquiryStatus: (id, status) => axios.put(`/inquiries/${id}`, { status }),
  respondToInquiry: (id, response) => axios.post(`/inquiries/${id}/respond`, { response })
};

// Main Dashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [leads, setLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      if (!token) {
        navigate('/admin/login');
        return;
      }
      
      try {
        // Verify token is valid
        await axios.get('/admin/verify');
        fetchData();
      } catch (err) {
        handleLogout();
      }
    };

    verifyAuth();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [
        blogsRes, 
        testimonialsRes, 
        leadsRes, 
        teamRes, 
        inquiriesRes
      ] = await Promise.all([
        api.getBlogs(),
        api.getTestimonials(),
        api.getLeads(),
        api.getTeamMembers(),
        api.getInquiries()
      ]);
      
      setBlogs(blogsRes.data);
      setTestimonials(testimonialsRes.data);
      setLeads(leadsRes.data);
      setTeamMembers(teamRes.data);
      setInquiries(inquiriesRes.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch data');
      if (err.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
            <FaTachometerAlt className="icon" />
            <span>Dashboard</span>
          </li>
          <li className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>
            <FaEdit className="icon" />
            <span>Blog Management</span>
          </li>
          <li className={activeTab === 'testimonials' ? 'active' : ''} onClick={() => setActiveTab('testimonials')}>
            <FaComments className="icon" />
            <span>Testimonials</span>
          </li>
          <li className={activeTab === 'leads' ? 'active' : ''} onClick={() => setActiveTab('leads')}>
            <FaEnvelope className="icon" />
            <span>Lead Submissions</span>
          </li>
          <li className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}>
            <FaUsers className="icon" />
            <span>Team Members</span>
          </li>
          <li className={activeTab === 'inquiries' ? 'active' : ''} onClick={() => setActiveTab('inquiries')}>
            <FaUserCog className="icon" />
            <span>Client Inquiries</span>
          </li>
          <li onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="admin-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <div className="user-info">
            <span>Welcome, Admin</span>
          </div>
        </header>

        <div className="content-area">
          {error && (
            <div className="alert alert-danger">
              {error}
              <button className="btn-close" onClick={() => setError(null)}></button>
            </div>
          )}

          {loading ? (
            <div className="loading-spinner">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <DashboardOverview 
                  blogs={blogs} 
                  testimonials={testimonials} 
                  leads={leads}
                  inquiries={inquiries}
                  teamMembers={teamMembers}
                />
              } />
              <Route path="/blogs" element={
                <BlogManagement 
                  blogs={blogs} 
                  setBlogs={setBlogs} 
                />
              } />
              <Route path="/testimonials" element={
                <TestimonialControl 
                  testimonials={testimonials} 
                  setTestimonials={setTestimonials} 
                />
              } />
              <Route path="/leads" element={
                <LeadDashboard 
                  leads={leads} 
                  setLeads={setLeads} 
                />
              } />
              <Route path="/team" element={
                <TeamControl 
                  teamMembers={teamMembers} 
                  setTeamMembers={setTeamMembers} 
                />
              } />
              <Route path="/inquiries" element={
                <InquiryTracker 
                  inquiries={inquiries} 
                  setInquiries={setInquiries} 
                />
              } />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = ({ blogs, testimonials, leads, inquiries, teamMembers }) => {
  const pendingTestimonials = testimonials.filter(t => !t.approved).length;
  const draftBlogs = blogs.filter(b => b.status === 'draft').length;
  const newLeads = leads.filter(l => l.status === 'new').length;
  const openInquiries = inquiries.filter(i => i.status === 'open').length;

  return (
    <div className="dashboard-overview">
      <div className="stats-cards">
        <div className="stat-card">
          <h3>{blogs.length}</h3>
          <p>Total Articles</p>
        </div>
        <div className="stat-card">
          <h3>{draftBlogs}</h3>
          <p>Draft Articles</p>
        </div>
        <div className="stat-card">
          <h3>{testimonials.length}</h3>
          <p>Total Testimonials</p>
        </div>
        <div className="stat-card">
          <h3>{pendingTestimonials}</h3>
          <p>Pending Approvals</p>
        </div>
        <div className="stat-card">
          <h3>{newLeads}</h3>
          <p>New Leads</p>
        </div>
        <div className="stat-card">
          <h3>{teamMembers.length}</h3>
          <p>Team Members</p>
        </div>
        <div className="stat-card">
          <h3>{openInquiries}</h3>
          <p>Open Inquiries</p>
        </div>
      </div>

      <div className="recent-activity">
        <div className="activity-section">
          <h4>Recent Articles</h4>
          <ul>
            {blogs.slice(0, 3).map(blog => (
              <li key={blog._id}>
                <span className="title">{blog.title}</span>
                <span className={`status ${blog.status}`}>{blog.status}</span>
                <span className="date">{new Date(blog.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="activity-section">
          <h4>Recent Leads</h4>
          <ul>
            {leads.slice(0, 3).map(lead => (
              <li key={lead._id}>
                <span className="title">{lead.name}</span>
                <span className={`status ${lead.status}`}>{lead.status}</span>
                <span className="date">{new Date(lead.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="activity-section">
          <h4>Recent Inquiries</h4>
          <ul>
            {inquiries.slice(0, 3).map(inquiry => (
              <li key={inquiry._id}>
                <span className="title">{inquiry.subject}</span>
                <span className={`status ${inquiry.status}`}>{inquiry.status}</span>
                <span className="date">{new Date(inquiry.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Blog Management Component
const BlogManagement = ({ blogs, setBlogs }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    status: 'draft',
    featuredImage: null
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, featuredImage: e.target.files[0] }));
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content || '',
      status: blog.status,
      featuredImage: null
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('status', formData.status);
      if (formData.featuredImage) {
        formDataToSend.append('featuredImage', formData.featuredImage);
      }

      let savedBlog;
      if (currentBlog) {
        savedBlog = await api.saveBlog(formDataToSend);
        setBlogs(blogs.map(b => b._id === currentBlog._id ? savedBlog.data : b));
      } else {
        savedBlog = await api.saveBlog(formDataToSend);
        setBlogs([...blogs, savedBlog.data]);
      }
      
      setShowModal(false);
      setCurrentBlog(null);
      setFormData({ title: '', content: '', status: 'draft', featuredImage: null });
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving blog');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await api.deleteBlog(id);
        setBlogs(blogs.filter(blog => blog._id !== id));
      } catch (err) {
        setError(err.response?.data?.message || 'Error deleting blog');
      }
    }
  };

  return (
    <div className="blog-management">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="action-bar">
        <button className="btn btn-primary" onClick={() => {
          setCurrentBlog(null);
          setFormData({ title: '', content: '', status: 'draft', featuredImage: null });
          setShowModal(true);
        }}>
          + Add New Article
        </button>
      </div>

      <div className="blog-table">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <span className={`status-badge ${blog.status}`}>
                    {blog.status}
                  </span>
                </td>
                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(blog._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Blog Editor Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5>{currentBlog ? 'Edit Article' : 'Create New Article'}</h5>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group mb-3">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="10"
                  required
                />
              </div>
              
              <div className="form-group mb-3">
                <label>Featured Image</label>
                <div className="file-upload">
                  <label className="upload-btn">
                    <FaUpload className="me-2" />
                    {formData.featuredImage ? formData.featuredImage.name : 'Choose Image'}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
                {currentBlog?.featuredImage && !formData.featuredImage && (
                  <div className="current-image mt-2">
                    <small>Current: {currentBlog.featuredImage.split('/').pop()}</small>
                  </div>
                )}
              </div>
              
              <div className="form-group mb-3">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {currentBlog ? 'Update' : 'Publish'} Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Testimonial Control Component
const TestimonialControl = ({ testimonials, setTestimonials }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    content: '',
    image: null,
    approved: false
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleApprove = async (id) => {
    try {
      const response = await api.saveTestimonial({ approved: true });
      setTestimonials(testimonials.map(t => t._id === id ? response.data : t));
    } catch (err) {
      setError(err.response?.data?.message || 'Error approving testimonial');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await api.deleteTestimonial(id);
        setTestimonials(testimonials.filter(t => t._id !== id));
      } catch (err) {
        setError(err.response?.data?.message || 'Error deleting testimonial');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('approved', formData.approved);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await api.saveTestimonial(formDataToSend);
      setTestimonials([...testimonials, response.data]);
      setShowForm(false);
      setFormData({
        name: '',
        position: '',
        content: '',
        image: null,
        approved: false
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving testimonial');
    }
  };

  return (
    <div className="testimonial-control">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="action-bar">
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Testimonial'}
        </button>
      </div>

      {showForm && (
        <div className="testimonial-form card mb-4">
          <div className="card-body">
            <h5>Add New Testimonial</h5>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Position/Title</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group mb-3">
                <label>Testimonial Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="4"
                  required
                />
              </div>
              
              <div className="form-group mb-3">
                <label>Profile Image</label>
                <div className="file-upload">
                  <label className="upload-btn">
                    <FaImage className="me-2" />
                    {formData.image ? formData.image.name : 'Choose Image'}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>
              
              <div className="form-group form-check mb-3">
                <input
                  type="checkbox"
                  name="approved"
                  checked={formData.approved}
                  onChange={(e) => setFormData({...formData, approved: e.target.checked})}
                  className="form-check-input"
                  id="approveCheck"
                />
                <label className="form-check-label" htmlFor="approveCheck">
                  Approve immediately
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Save Testimonial
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="testimonial-tabs mb-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active">All Testimonials ({testimonials.length})</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Pending Approval ({testimonials.filter(t => !t.approved).length})</button>
          </li>
        </ul>
      </div>

      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial._id} className="testimonial-item card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5>{testimonial.name}</h5>
                  <p className="text-muted">{testimonial.position}</p>
                </div>
                <span className={`badge ${testimonial.approved ? 'bg-success' : 'bg-warning'}`}>
                  {testimonial.approved ? 'Approved' : 'Pending'}
                </span>
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              {testimonial.imageUrl && (
                <div className="testimonial-image mb-3">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name}
                    className="img-thumbnail"
                    style={{ maxWidth: '150px' }}
                  />
                </div>
              )}
              
              <div className="testimonial-actions">
                {!testimonial.approved && (
                  <button 
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleApprove(testimonial._id)}
                  >
                    Approve
                  </button>
                )}
                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(testimonial._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Lead Dashboard Component
const LeadDashboard = ({ leads, setLeads }) => {
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);

  const handleStatusChange = async (id, status) => {
    try {
      const response = await api.updateLeadStatus(id, status);
      setLeads(leads.map(lead => 
        lead._id === id ? response.data : lead
      ));
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating lead status');
    }
  };

  const filteredLeads = filter === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filter);

  return (
    <div className="lead-dashboard">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="action-bar mb-4">
        <div className="filter-controls">
          <button 
            className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('all')}
          >
            All ({leads.length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'new' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('new')}
          >
            New ({leads.filter(l => l.status === 'new').length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'contacted' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('contacted')}
          >
            Contacted ({leads.filter(l => l.status === 'contacted').length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'converted' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('converted')}
          >
            Converted ({leads.filter(l => l.status === 'converted').length})
          </button>
        </div>
      </div>

      <div className="lead-table">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map(lead => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone || 'N/A'}</td>
                <td>{lead.interest}</td>
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                    className={`form-select form-select-sm status-select ${lead.status}`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Team Control Component
const TeamControl = ({ teamMembers, setTeamMembers }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    bio: '',
    image: null,
    social: {
      twitter: '',
      linkedin: ''
    }
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.social) {
      setFormData(prev => ({
        ...prev,
        social: {
          ...prev.social,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await api.saveTeamMember(formData);
      setTeamMembers([...teamMembers, response.data]);
      setShowForm(false);
      setFormData({
        name: '',
        position: '',
        bio: '',
        image: null,
        social: {
          twitter: '',
          linkedin: ''
        }
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving team member');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      try {
        await api.deleteTeamMember(id);
        setTeamMembers(teamMembers.filter(member => member._id !== id));
      } catch (err) {
        setError(err.response?.data?.message || 'Error deleting team member');
      }
    }
  };

  return (
    <div className="team-control">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="action-bar mb-4">
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ Add Team Member'}
        </button>
      </div>

      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Add New Team Member</h5>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="4"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Twitter</label>
                    <input
                      type="url"
                      name="twitter"
                      value={formData.social.twitter}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.social.linkedin}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mb-3">
                <label>Profile Image</label>
                <div className="file-upload">
                  <label className="upload-btn">
                    <FaImage className="me-2" />
                    {formData.image ? formData.image.name : 'Choose Image'}
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Save Team Member
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="team-grid">
        <div className="row">
          {teamMembers.map(member => (
            <div className="col-md-6 col-lg-4 mb-4" key={member._id}>
              <div className="card team-card">
                <div className="card-body">
                  <div className="team-member-header">
                    <img 
                      src={member.imageUrl || 'https://via.placeholder.com/150'} 
                      alt={member.name}
                      className="team-member-image"
                    />
                    <div>
                      <h5>{member.name}</h5>
                      <p className="text-muted">{member.position}</p>
                    </div>
                  </div>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-social-links">
                    {member.social?.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                  <button 
                    className="btn btn-sm btn-outline-danger mt-2"
                    onClick={() => handleDelete(member._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Inquiry Tracker Component
const InquiryTracker = ({ inquiries, setInquiries }) => {
  const [filter, setFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [error, setError] = useState(null);

  const handleStatusChange = async (id, status) => {
    try {
      const response = await api.updateInquiryStatus(id, status);
      setInquiries(inquiries.map(inquiry => 
        inquiry._id === id ? response.data : inquiry
      ));
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating inquiry status');
    }
  };

  const handleSendResponse = async (id) => {
    if (!responseText.trim()) {
      setError('Response cannot be empty');
      return;
    }

    try {
      await api.respondToInquiry(id, responseText);
      setInquiries(inquiries.map(inquiry => 
        inquiry._id === id ? { ...inquiry, response: responseText } : inquiry
      ));
      setResponseText('');
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Error sending response');
    }
  };

  const filteredInquiries = filter === 'all' 
    ? inquiries 
    : inquiries.filter(inquiry => inquiry.status === filter);

  return (
    <div className="inquiry-tracker">
      {error && (
        <div className="alert alert-danger">
          {error}
          <button className="btn-close" onClick={() => setError(null)}></button>
        </div>
      )}

      <div className="action-bar mb-4">
        <div className="filter-controls">
          <button 
            className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('all')}
          >
            All ({inquiries.length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'open' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('open')}
          >
            Open ({inquiries.filter(i => i.status === 'open').length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'in-progress' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('in-progress')}
          >
            In Progress ({inquiries.filter(i => i.status === 'in-progress').length})
          </button>
          <button 
            className={`btn btn-sm ${filter === 'resolved' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setFilter('resolved')}
          >
            Resolved ({inquiries.filter(i => i.status === 'resolved').length})
          </button>
        </div>
      </div>

      <div className="row">
        <div className={`col-md-${selectedInquiry ? '6' : '12'}`}>
          <div className="inquiry-table">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map(inquiry => (
                  <tr key={inquiry._id}>
                    <td>{inquiry.name}</td>
                    <td>{inquiry.subject}</td>
                    <td>
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                        className={`form-select form-select-sm status-select ${inquiry.status}`}
                      >
                        <option value="open">Open</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                    <td>{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => setSelectedInquiry(inquiry)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedInquiry && (
          <div className="col-md-6">
            <div className="card inquiry-detail">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5>{selectedInquiry.subject}</h5>
                <button 
                  className="btn btn-sm btn-close"
                  onClick={() => setSelectedInquiry(null)}
                ></button>
              </div>
              <div className="card-body">
                <div className="inquiry-meta mb-3">
                  <p><strong>From:</strong> {selectedInquiry.name} &lt;{selectedInquiry.email}&gt;</p>
                  <p><strong>Date:</strong> {new Date(selectedInquiry.createdAt).toLocaleString()}</p>
                  <p><strong>Status:</strong> 
                    <span className={`badge ${selectedInquiry.status}`}>
                      {selectedInquiry.status}
                    </span>
                  </p>
                </div>
                <div className="inquiry-content">
                  <h6>Message:</h6>
                  <p>{selectedInquiry.message}</p>
                </div>
                <div className="inquiry-response mt-4">
                  <h6>Response:</h6>
                  {selectedInquiry.response ? (
                    <div className="response-text mb-3">
                      <p>{selectedInquiry.response}</p>
                      <small className="text-muted">
                        Responded on: {new Date(selectedInquiry.updatedAt).toLocaleString()}
                      </small>
                    </div>
                  ) : (
                    <>
                      <textarea 
                        className="form-control mb-2" 
                        rows="4"
                        value={responseText}
                        onChange={(e) => setResponseText(e.target.value)}
                        placeholder="Type your response here..."
                      ></textarea>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleSendResponse(selectedInquiry._id)}
                      >
                        Send Response
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;