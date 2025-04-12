import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handlePhoneClick = (e) => {
    // No need to prevent default for tel links - let the browser handle it natively
    // The browser will show the "pick an app" dialog automatically
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Airflightcart Logo" 
            className="h-10"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-600 font-semibold py-2 uppercase">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 font-semibold py-2 uppercase">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/travel" className="text-gray-800 hover:text-blue-600 font-semibold py-2 uppercase">
                Travel
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-semibold py-2 uppercase">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Phone Number */}
        <a 
          href="tel:+1-888-928-1369" 
          className="hidden md:flex items-center bg-yellow-50 rounded-md px-3 py-2 hover:bg-yellow-100 transition-colors cursor-pointer"
        >
          <div className="mr-2">
            <img 
              src="/customer-support.png" 
              alt="Customer Support" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 font-medium">CALL 24/7 FOR OUR BEST DEALS</span>
            <span className="text-green-600 font-bold text-lg">+1-888-928-1369</span>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-800 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
            <Link to="/travel" className="text-gray-800 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>TRAVEL</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link>
            <a 
              href="tel:+1-888-928-1369" 
              className="flex items-center py-2 border-t border-gray-200 mt-2 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img 
                src="/customer-support.png" 
                alt="Customer Support" 
                className="w-8 h-8 rounded-full object-cover mr-2" 
              />
              <span className="text-green-600 font-bold">+1-888-928-1369</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;