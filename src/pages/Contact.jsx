import React, { useState } from 'react';

// Import banner image
import bgBanner from '../assets/images/bgbanner.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // For now, just reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner with title */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <h1 className="text-4xl font-bold text-white relative z-10">Contact Us</h1>
      </div>

      {/* Contact Form and Map Section */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 my-6">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Get In Touch With Us !</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 bg-white rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 bg-white rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 bg-white rounded"
                required
              />
            </div>
            
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Write Here..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 bg-white rounded resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Map Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-2 border border-gray-200 h-full">
            <div className="mb-2 p-2 bg-gray-100">
              <p className="text-sm">10540 Little Patuxent Pkwy #300</p>
              <p className="text-sm">Columbia, MD 21044, USA</p>
              <a href="#" className="text-sm text-blue-600">View larger map</a>
            </div>
            <div className="h-96 bg-gray-200 relative">
              {/* In a real application, this would be replaced with an actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.5376546576833!2d-76.86249!3d39.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7df50c8d95df9%3A0x4a727cdf6c6d93f!2s10540%20Little%20Patuxent%20Pkwy%20%23300%2C%20Columbia%2C%20MD%2021044!5e0!3m2!1sen!2sus!4v1617301234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
