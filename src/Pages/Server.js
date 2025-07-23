require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/admin-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const Blog = require('./models/Blog');
const Testimonial = require('./models/Testimonial');
const Lead = require('./models/Lead');
const TeamMember = require('./models/TeamMember');
const Inquiry = require('./models/Inquiry');
const Admin = require('./models/Admin');

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Auth Middleware
const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded._id);
    
    if (!admin) {
      return res.status(401).send('Invalid token.');
    }

    req.admin = admin;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
};

// Admin Routes
app.post('/api/admin/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if admin exists
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).send('Admin already registered.');
    }

    // Create new admin
    admin = new Admin({
      username,
      email,
      password
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();

    // Create token
    const token = jwt.sign(
      { _id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.header('Authorization', `Bearer ${token}`).send({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).send('Invalid credentials.');
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials.');
    }

    // Create token
    const token = jwt.sign(
      { _id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.header('Authorization', `Bearer ${token}`).send({
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/admin/verify', authenticate, async (req, res) => {
  res.send(req.admin);
});

// Blog Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.send(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/blogs', authenticate, upload.single('featuredImage'), async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = new Blog({
      title,
      content,
      status,
      featuredImage,
      author: req.admin.username
    });

    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/blogs/:id', authenticate, upload.single('featuredImage'), async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const featuredImage = req.file ? `/uploads/${req.file.filename}` : req.body.featuredImage;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { 
        title, 
        content, 
        status, 
        featuredImage,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    res.send(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/blogs/:id', authenticate, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).send('Blog not found');
    }

    res.send({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Testimonial Routes
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.send(testimonials);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/testimonials', authenticate, upload.single('image'), async (req, res) => {
  try {
    const { name, position, content, approved } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const testimonial = new Testimonial({
      name,
      position,
      content,
      approved: approved === 'true',
      imageUrl
    });

    await testimonial.save();
    res.status(201).send(testimonial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/testimonials/:id/approve', authenticate, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!testimonial) {
      return res.status(404).send('Testimonial not found');
    }

    res.send(testimonial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/testimonials/:id', authenticate, async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).send('Testimonial not found');
    }

    res.send({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Lead Routes
app.get('/api/leads', authenticate, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.send(leads);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/leads/:id', authenticate, async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).send('Lead not found');
    }

    res.send(lead);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Team Member Routes
app.get('/api/team', async (req, res) => {
  try {
    const team = await TeamMember.find().sort({ name: 1 });
    res.send(team);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/team', authenticate, upload.single('image'), async (req, res) => {
  try {
    const { name, position, bio, twitter, linkedin } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const teamMember = new TeamMember({
      name,
      position,
      bio,
      imageUrl,
      social: {
        twitter,
        linkedin
      }
    });

    await teamMember.save();
    res.status(201).send(teamMember);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.delete('/api/team/:id', authenticate, async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).send('Team member not found');
    }

    res.send({ message: 'Team member deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Inquiry Routes
app.get('/api/inquiries', authenticate, async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.send(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.put('/api/inquiries/:id', authenticate, async (req, res) => {
  try {
    const { status } = req.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!inquiry) {
      return res.status(404).send('Inquiry not found');
    }

    res.send(inquiry);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/inquiries/:id/respond', authenticate, async (req, res) => {
  try {
    const { response } = req.body;

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { 
        response,
        status: 'resolved',
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!inquiry) {
      return res.status(404).send('Inquiry not found');
    }

    // Here you would typically send an email with the response
    // For now, we'll just return the updated inquiry
    res.send(inquiry);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));