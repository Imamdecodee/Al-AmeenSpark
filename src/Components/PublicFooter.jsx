// components/PublicFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Marketing Pro</h3>
            <p className="text-gray-400">Helping businesses grow through digital marketing strategies.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">SEO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Content Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@marketingpro.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marketing Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;