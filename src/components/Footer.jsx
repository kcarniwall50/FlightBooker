import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, FileText, Settings, Map } from 'lucide-react';

// Import images from assets folder
import paymentIcon1 from '../assets/icons/05.png';
import paymentIcon2 from '../assets/icons/06.png';
import paymentIcon3 from '../assets/icons/07.png';
import paymentIcon4 from '../assets/icons/08.png';

const Footer = () => {
  // Function to handle website click
  const handleWebsiteClick = (e) => {
    e.preventDefault();
    // Use window.location for more compatibility with hosting environments
    window.location.href = "/";
  };

  return (
    <footer className="mt-8">
      {/* Main Footer */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto p-4">
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-5">QUICK LINKS</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <span className="mr-1">›</span>
                <Link to="/about" className="hover:underline">About Us</Link>
              </div>
              <div className="flex items-center">
                <span className="mr-1">›</span>
                <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
              </div>
              <div className="flex items-center">
                <span className="mr-1">›</span>
                <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </div>
              <div className="flex items-center">
                <span className="mr-1">›</span>
                <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              </div>
              <div className="flex items-center">
                <span className="mr-1">›</span>
                <Link to="/cancellation-refund" className="hover:underline">Cancellation & Refund Policy</Link>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-5">CONTACT INFO</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <Home className="mr-2 flex-shrink-0 mt-1" size={18} />
                <span>10540 Little Patuxent Pkwy ste, 300 Columbia, MD 21044, USA</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a 
                  href="tel:+1-888-928-1369" 
                  className="hover:underline cursor-pointer"
                >
                  +1-888-928-1369
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a 
                  href="mailto:info@airflightcart.us" 
                  className="hover:underline cursor-pointer"
                >
                  info@airflightcart.us
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🌐</span>
                <a 
                  href="/" 
                  onClick={handleWebsiteClick}
                  className="hover:underline cursor-pointer"
                >
                  airflightcart.us
                </a>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-5">DISCLAIMER</h3>
            <p className="text-sm leading-relaxed">
              Air Flight Cart is a travel reservations portal in the United States. We don't have any subsidiary or sister company. We are working as independent travel agents to sell travel products and services. Our company is not responsible for any kind of loss or damage by using this website or by browsing the Air Flight Cart.
            </p>
          </div>
        </div>
      </div>

      {/* White Strip with Payment Methods */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-center">
          <div className="flex space-x-4">
            <img src={paymentIcon1} alt="American Express" className="h-8" />
            <img src={paymentIcon2} alt="MasterCard" className="h-8" />
            <img src={paymentIcon3} alt="Discover" className="h-8" />
            <img src={paymentIcon4} alt="Visa" className="h-8" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 text-white py-3 text-center text-sm">
        Copyright © 2024 Airflightcart.us is a unit of Airflightcart LLC. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;