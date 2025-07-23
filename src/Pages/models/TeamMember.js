const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: String,
  social: {
    twitter: String,
    linkedin: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);