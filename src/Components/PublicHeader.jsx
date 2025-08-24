// components/PublicHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const PublicHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Marketing Pro
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/news" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              News
            </Link>
            <Link to="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/admin">Admin Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;