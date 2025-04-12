import React from 'react';

// Import banner image
import aboutBanner from '../assets/images/aboutbanner.jpg';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner with title */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="text-4xl font-bold text-white relative z-10">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">About Us</h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            We at Air Flight Cart are a well-known name in the airline ticket booking industry. The feature that distinguishes our Air Ticket Booking service is our strategy, which pays attention to every possible part of ticket booking. Our rates are very competitive, and our service level is simply unrivaled. Our air ticket booking systems have been developed to electronically process your every need using cutting-edge software. We charge a small processing fee on airline tickets purchased by our customers. We assist with the purchase of airline tickets on both domestic and foreign flights on major airlines. Both of our customers get prompt and efficient service.
          </p>
          
          <p>
            We are dedicated to doing business in a professional and ethical way. Our travel experts are motivated and driven by our guiding values, which allow us to serve a large range of customers. We have carved out a niche in the travel industry, giving us a strong presence among our suppliers and customers. We assume that traveling is an adventure in and of itself. As a result, it should be simple and straightforward.
          </p>
          
          <p>
            We are continuously striving to make traveling a one-of-a-kind experience, and our fully automated travel solutions are just what you require. When working with travelers, lead time and timelines are crucial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
