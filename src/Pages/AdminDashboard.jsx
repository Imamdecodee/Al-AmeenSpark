import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaEdit, 
  FaComments, 
  FaSignOutAlt,
  FaImage,
  FaTrash,
  FaUpload,
  FaCalendarAlt
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashbord.css';

// Mock API Service
const api = {
  getBlogs: () => Promise.resolve([
    { id: 1, title: 'Getting Started with React', status: 'published', date: '2023-05-15' },
    { id: 2, title: 'Advanced Node Patterns', status: 'draft', date: '2023-06-20' }
  ]),
  getTestimonials: () => Promise.resolve([
    { id: 1, name: 'John Doe', position: 'CEO, TechCorp', content: 'Great service!', approved: true },
    { id: 2, name: 'Jane Smith', position: 'CTO, Innovate', content: 'Highly recommended', approved: false }
  ]),
  saveBlog: (blog) => Promise.resolve(blog),
  saveTestimonial: (testimonial) => Promise.resolve(testimonial),
  deleteBlog: (id) => Promise.resolve(),
  deleteTestimonial: (id) => Promise.resolve()
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [blogsData, testimonialsData] = await Promise.all([
        api.getBlogs(),
        api.getTestimonials()
      ]);
      setBlogs(blogsData);
      setTestimonials(testimonialsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Implement logout logic
    navigate('/login');
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
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
          <li onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="admin-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        </header>

        <div className="content-area">
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <Routes>
              <Route path="/" element={<DashboardOverview blogs={blogs} testimonials={testimonials} />} />
              <Route path="/blogs" element={<BlogManagement blogs={blogs} setBlogs={setBlogs} />} />
              <Route path="/testimonials" element={<TestimonialControl testimonials={testimonials} setTestimonials={setTestimonials} />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = ({ blogs, testimonials }) => {
  const pendingTestimonials = testimonials.filter(t => !t.approved).length;
  const draftBlogs = blogs.filter(b => b.status === 'draft').length;

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
      </div>

      <div className="recent-activity">
        <div className="activity-section">
          <h4>Recent Articles</h4>
          <ul>
            {blogs.slice(0, 3).map(blog => (
              <li key={blog.id}>
                <span className="title">{blog.title}</span>
                <span className={`status ${blog.status}`}>{blog.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="activity-section">
          <h4>Recent Testimonials</h4>
          <ul>
            {testimonials.slice(0, 3).map(testimonial => (
              <li key={testimonial.id}>
                <span className="name">{testimonial.name}</span>
                <span className={`approval ${testimonial.approved ? 'approved' : 'pending'}`}>
                  {testimonial.approved ? 'Approved' : 'Pending'}
                </span>
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
    try {
      const savedBlog = await api.saveBlog({
        ...formData,
        id: currentBlog?.id || Date.now(),
        date: new Date().toISOString()
      });
      
      if (currentBlog) {
        setBlogs(blogs.map(b => b.id === currentBlog.id ? savedBlog : b));
      } else {
        setBlogs([...blogs, savedBlog]);
      }
      
      setShowModal(false);
      setCurrentBlog(null);
      setFormData({ title: '', content: '', status: 'draft', featuredImage: null });
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await api.deleteBlog(id);
        setBlogs(blogs.filter(blog => blog.id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  return (
    <div className="blog-management">
      <div className="action-bar">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
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
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>
                  <span className={`status-badge ${blog.status}`}>
                    {blog.status}
                  </span>
                </td>
                <td>{blog.date}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(blog.id)}>
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
              <div className="form-group">
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
              
              <div className="form-group">
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
              
              <div className="form-group">
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
              </div>
              
              <div className="form-group">
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleApprove = async (id) => {
    try {
      const testimonial = testimonials.find(t => t.id === id);
      const updatedTestimonial = await api.saveTestimonial({
        ...testimonial,
        approved: true
      });
      setTestimonials(testimonials.map(t => t.id === id ? updatedTestimonial : t));
    } catch (error) {
      console.error('Error approving testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await api.deleteTestimonial(id);
        setTestimonials(testimonials.filter(t => t.id !== id));
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTestimonial = await api.saveTestimonial({
        ...formData,
        id: Date.now()
      });
      setTestimonials([...testimonials, newTestimonial]);
      setShowForm(false);
      setFormData({
        name: '',
        position: '',
        content: '',
        image: null,
        approved: false
      });
    } catch (error) {
      console.error('Error saving testimonial:', error);
    }
  };

  return (
    <div className="testimonial-control">
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
                  <div className="form-group">
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
                  <div className="form-group">
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
              
              <div className="form-group">
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
              
              <div className="form-group">
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
              
              <div className="form-group form-check">
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

      <div className="testimonial-tabs">
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
          <div key={testimonial.id} className="testimonial-item card mb-3">
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
              
              <div className="testimonial-actions">
                {!testimonial.approved && (
                  <button 
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleApprove(testimonial.id)}
                  >
                    Approve
                  </button>
                )}
                <button 
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(testimonial.id)}
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

export default AdminDashboard;