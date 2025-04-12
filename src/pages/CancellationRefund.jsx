import React from 'react';

// Import banner image
import bannerImage from '../assets/images/aboutbanner.jpg';

const CancellationRefund = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-64 lg:h-80">
        <img 
          src={bannerImage} 
          alt="Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Cancellation & Refund Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
          <p className="mb-4">
            Our main aim is to offer first-class travel services and maintain a standard that fulfills every customer's needs and requirements. In the same way, we also have a well-configured cancellation policy. You should be well versed in the cancellation policies so that when you are not able to travel for any reason.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Notification of delays and cancellations</h3>
          <p className="mb-4">
            Airflightcart.us offers notifications and updates regularly regarding flights and other relevant points so that travelers can prepare accordingly.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Getting Rebooked</h3>
          <p className="mb-4">
            After cancellation, if you want to rebook the flights, don't worry. Our experienced representatives will, on the spot, start working on it without much questioning. Just go through the Terms and Conditions because there are many when it comes to cancellations as well as re-booking.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Refund Policy</h3>
          <p className="mb-4">
            There is no situation as such in which the flights might get canceled, but in case of bad weather where flights can't fly, you can ask for a refund. But the refund completely depends on airline policies, and we don't have any control over them.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6">Refund Policy</h2>
          <p className="mb-4">
            Our main aim is to offer first-class travel services and maintain a standard that fulfills every customer's needs and requirements. In the same way, we also have a refund policy that is well-configured. You should be well versed in the refund policies so that when you are not able to travel for any reason.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Notification of Refunds</h3>
          <p className="mb-4">
            Airflightcart.us Refund only within 24 hours.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Refund Policy</h3>
          <p className="mb-6">
            There is no situation as such in which the flights might get canceled, but in case of bad weather where flights can't fly, you can ask for a refund. But the refund completely depends on airline policies, and we don't have any control over them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefund;