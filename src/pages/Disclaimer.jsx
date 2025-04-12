import React from 'react';

// Import banner image
import bannerImage from '../assets/images/aboutbanner.jpg';

const Disclaimer = () => {
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
          <h1 className="text-white text-4xl font-bold">Disclaimer</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Disclaimer</h2>
          
          <p className="mb-4">
            Air Flight Cart offers a wide range of travel products and services, such as flights, hotel stays, vacation packages, cruises, and other travel-related needs, all under one roof. We primarily act merely as agents of our primary suppliers of travel products and services and accept reservations or bookings on their behalf.
          </p>
          
          <p className="mb-4">
            We want to clearly state that we won't be responsible or accountable in any way for breach of contract due to any of the actions of our primary suppliers, either intentionally or unintentionally, that may result in any loss, damage, delay, or injury to you or any of your group members or travel companions. If any of our primary suppliers, however, fails to provide the service for which you and/or your group members have already made the payment, then it will be the sole responsibility of the defaulting supplier to provide a refund, either from insurance covering such defaults, if any, or from another responsible third party, unless the same was caused by Air Flight Cart.
          </p>
          
          <p className="mb-4 font-semibold">
            We will not guarantee any of such supplier's rates, bookings, reservations, connections, scheduling, or handling of personal effects unless we ourselves don't see the term(guaranteed" or that it has been specifically written on your invoice, itinerary, or tickets.
          </p>
          
          <p className="mb-4">
            Our primary suppliers will not be responsible or accountable in any way for unwarranted or unforeseen circumstances or situations beyond their control, which may cause you or your group members any loss, damage, or injury due to construction or mechanical failures or difficulties, diseases, terrorist activities, local laws and promulgations, adverse climatic conditions, criminal acts, abnormal developments or conditions, or any other omissions or actions.
          </p>
          
          <p className="mb-4">
            You and/or your group members will be responsible for your own travel documentation, such as a valid passport, visa, other entry requirements, vaccinations, and safety and security conditions at each destination during the proposed travel duration, and our primary suppliers can't be held responsible for these.
          </p>
          
          <p className="mb-4">
            Air Flight Cart offers a wide range of travel products and services, such as flights, hotel stays, vacation packages, cruises, and other travel-related needs, all under one roof. We primarily act merely as agents of our primary suppliers of travel products and services and accept reservations or bookings on their behalf. We highly recommend you and/or your group members to keep updated with the timely inputs and information from the Travel Advisory Section of the U.S. State Department and also the Public Health Service for information on medical requirements or emergencies.
          </p>
          
          <p className="mb-4">
            You and/or your group members will be responsible for all risks involved during the duration of travel, whether expected or unexpected. We, however, highly recommend purchasing suitable trip insurance adequately providing cover and protection against the risks involved.
          </p>
          
          <p className="mb-4">
            Air Flight Cart will consider it to be consent from you when deciding to retain bookings, reservations, or tickets after they have been finally issued and ticketed. We will also consider it to be an agreement on your part to convey the same to your group members, if any.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;