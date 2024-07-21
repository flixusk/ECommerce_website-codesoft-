import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t min-h-[200px]"> {/* Increased padding and minimum height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Logo and Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-6 lg:space-y-0">
            <img src="/assets/logo_1.png" alt="Company Logo" className="h-10" />
            <nav className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/product" className="text-gray-600 hover:text-gray-900">Product</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            </nav>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 lg:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
