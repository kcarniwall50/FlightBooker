import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Phone } from 'lucide-react';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import MobilePopup from './components/MobilePopup';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CancellationRefund from './pages/CancellationRefund';
import TermsConditions from './pages/TermsConditions';

// 404 Not Found Page Component
const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center py-20">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-8">The page you are looking for does not exist or has been moved.</p>
      <a 
        href="/" 
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return to Home
      </a>
    </div>
  );
};

const App = () => {
  // State for mobile popup visibility
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Mobile width threshold - changed to 450px as requested
  const MOBILE_THRESHOLD = 450;

  // Effect to track window resize and update showMobilePopup
  useEffect(() => {
    // Set initial width on component mount
    setWindowWidth(window.innerWidth);
    
    // Handler for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Function to show the popup for small screens after a delay
    const showPopupForMobile = () => {
      if (windowWidth < MOBILE_THRESHOLD) {
        // Show popup after 5 seconds on mobile
        const popupTimer = setTimeout(() => {
          setShowMobilePopup(true);
        }, 5000);
        
        // Cleanup timer
        return () => clearTimeout(popupTimer);
      }
    };
    
    // Call the function to setup popup
    const cleanupFn = showPopupForMobile();
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanupFn) cleanupFn();
    };
  }, [windowWidth]);
  
  // Function to toggle mobile popup
  const toggleMobilePopup = () => {
    setShowMobilePopup(!showMobilePopup);
  };
  
  // Function to close mobile popup
  const closeMobilePopup = () => {
    setShowMobilePopup(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-refund" element={<CancellationRefund />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Mobile Popup Button - Only visible on small screens */}
        {windowWidth < MOBILE_THRESHOLD && !showMobilePopup && (
          <button 
            onClick={toggleMobilePopup}
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-40 flex items-center justify-center mobile-float-button"
            aria-label="Show reservations options"
          >
            <Phone size={24} />
          </button>
        )}
        
        {/* Mobile Popup Component - Now also works for desktop when width < 450px */}
        <MobilePopup 
          isVisible={showMobilePopup} 
          onClose={closeMobilePopup} 
        />
      </div>
    </Router>
  );
};

export default App;
