import React, { useState } from 'react';
import { X, Phone, Calendar, CreditCard, UserPlus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import the images from assets folder
import callingCusImg from '../assets/images/calling-cus.png';
import airlineGenericImg from '../assets/images/airline-gnric-pullu.png';
import airlineTicketImg from '../assets/images/Airline-Ticket.png';

const MobilePopup = ({ isVisible, onClose }) => {
  const [showActionPopup, setShowActionPopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');

  // List of options to show in the popup
  const options = [
    { id: 'call', icon: <Phone size={24} />, text: 'Call Us', action: 'tel:+1-888-928-1369' },
    { id: 'booking', icon: <Calendar size={24} />, text: 'New Booking', action: '/booking' },
    { id: 'changes', icon: <CreditCard size={24} />, text: 'Changes', action: '/changes' },
    { id: 'cancel', icon: <X size={24} className="text-red-500" />, text: 'Cancellation', action: '/cancellation' },
    { id: 'customer', icon: <UserPlus size={24} />, text: 'Customer Service', action: '/customer-service' },
    { id: 'help', icon: <HelpCircle size={24} />, text: '24/7 Helpline', action: 'tel:+1-888-928-1369' }
  ];

  const handleOptionClick = (option) => {
    // For telephone links
    if (option.action.startsWith('tel:')) {
      setPopupAction(option.action);
      setShowActionPopup(true);
    } 
    // For navigation links
    else {
      // Close the popup and redirect (handled by Link component)
      onClose();
    }
  };

  // Handle action confirmation
  const handleActionConfirm = () => {
    window.location.href = popupAction;
    setShowActionPopup(false);
  };

  // Handle action cancellation
  const handleActionCancel = () => {
    setShowActionPopup(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Airlines Reservations and Bookings</h2>
        <button 
          onClick={onClose} 
          className="p-1 rounded-full hover:bg-blue-700"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
      </div>

      {/* Airlines Logo and Title */}
      <div className="p-6 flex flex-col items-center">
        <div className="flex items-center mb-6">
          <img 
            src={airlineTicketImg} 
            alt="Airlines Ticket" 
            className="h-12 logo-img"
          />
          <h3 className="text-blue-800 font-bold text-xl ml-2">24/7 Reservations & Support</h3>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {options.map(option => (
            option.action.startsWith('tel:') ? (
              <div
                key={option.id}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-colors"
                onClick={() => handleOptionClick(option)}
              >
                <div className="mb-2">{option.icon}</div>
                <span className="text-center">{option.text}</span>
              </div>
            ) : (
              <Link
                key={option.id}
                to={option.action}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-colors"
                onClick={() => handleOptionClick(option)}
              >
                <div className="mb-2">{option.icon}</div>
                <span className="text-center">{option.text}</span>
              </Link>
            )
          ))}
        </div>

        {/* Airplane Image */}
        <div className="my-6">
          <img 
            src={airlineGenericImg} 
            alt="Airplane" 
            className="max-w-full h-auto logo-img"
            style={{ maxHeight: '150px' }}
          />
        </div>

        {/* Customer Service Image and Call Button */}
        <div className="relative mb-4">
          <img 
            src={callingCusImg} 
            alt="Customer Service" 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg logo-img"
          />
        </div>

        <div className="text-center mb-2">
          <p className="text-gray-700 font-medium">No Hold - Call Answered in 5 Sec</p>
        </div>

        {/* Call Us Button */}
        <div className="mt-2 w-full max-w-md bg-blue-700 text-white rounded-full p-3 flex items-center justify-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <Phone size={24} className="text-blue-700" />
          </div>
          <p className="text-xl font-bold">1-888-928-1369</p>
        </div>
        
        <p className="mt-3 text-gray-600 text-sm">24/7 Helpline</p>
      </div>

      {/* Action Confirmation Popup */}
      {showActionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-3">Open Pick an app?</h3>
            <p className="mb-4">https://www.airflightcart.us wants to open this application.</p>
            
            <div className="flex items-center mb-4">
              <input 
                type="checkbox" 
                id="always-allow" 
                className="mr-2"
              />
              <label htmlFor="always-allow" className="text-sm text-gray-700">
                Always allow www.airflightcart.us to open links of this type in the associated app
              </label>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={handleActionConfirm}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Open Pick an app
              </button>
              <button 
                onClick={handleActionCancel}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePopup;