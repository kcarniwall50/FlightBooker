
// Section 1: Imports and Component Start

import React, { useState, useRef, useEffect } from 'react';
import { Search, Phone, ChevronLeft, ChevronRight, Plus, Minus, ArrowRight } from 'lucide-react';

// Import background image and banner
import bgImage from '../assets/images/bg.jpg';
import bannerImage from '../assets/images/banner3.jpg';

const Home = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departure: '11 Apr 2025',
    return: '27 May 2025',
    passengers: 1,
    travelerClass: 'ECONOMY'
  });
  
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPassengers, setShowPassengers] = useState(false);
  const [showClassOptions, setShowClassOptions] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('April 2025');
  const [nextMonth, setNextMonth] = useState('May 2025');
  const [selectedDepartDate, setSelectedDepartDate] = useState({
    day: 11,
    month: 4,
    year: 2025
  });

// Section 2: State and Data  

  const [selectedReturnDate, setSelectedReturnDate] = useState({
    day: 27,
    month: 5,
    year: 2025
  });

  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  // Airport search filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const searchSectionRef = useRef(null);
  const routesSectionRef = useRef(null);

  const flightRoutes = [
    { from: 'RDU', to: 'ORD', fromCity: 'Raleigh Durham', toCity: 'Orlando', departDate: '27 Oct 2024', returnDate: '04 Nov 2024', price: '$274.00', airline: 'Spirit' },
    { from: 'SCL', to: 'PUQ', fromCity: 'Santiago', toCity: 'Punta Arenas', departDate: '27 Oct 2024', returnDate: '04 Nov 2024', price: '$608.00', airline: 'LATAM' },
    { from: 'NYC', to: 'SLC', fromCity: 'New York', toCity: 'Salt Lake City', departDate: '27 Nov 2024', returnDate: '05 Dec 2024', price: '$305.00', airline: 'Spirit' },
    { from: 'MEM', to: 'LAS', fromCity: 'Memphis', toCity: 'Las Vegas', departDate: '20 Nov 2024', returnDate: '30 Nov 2024', price: '$707.00', airline: 'Spirit' },
    { from: 'ORL', to: 'NYC', fromCity: 'Orlando', toCity: 'New York', departDate: '22 Nov 2024', returnDate: '01 Dec 2024', price: '$271.22', airline: 'United' },
    { from: 'ACY', to: 'ORL', fromCity: 'Atlantic City', toCity: 'Orlando', departDate: '02 Dec 2024', returnDate: '08 Dec 2024', price: '$638.00', airline: 'United' },
    { from: 'DFW', to: 'ORD', fromCity: 'Dallas', toCity: 'Orlando', departDate: '01 Dec 2024', returnDate: '10 Dec 2024', price: '$711.33', airline: 'Spirit' },
    { from: 'RIC', to: 'STT', fromCity: 'Richmond', toCity: 'Saint Thomas', departDate: '27 Oct 2024', returnDate: '04 Nov 2024', price: '$669.00', airline: 'Spirit' }
  ];

  // Section 3: Airport Search Functions

  // Airport search using API
  useEffect(() => {
    // Debounce function to limit API calls
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 1) {
        setLoading(true);
        
        // Using the Aviation Stack API (you'll need to replace with your own API key)
        // This is just an example - in a real app, you would use a proper key
        // Free tier has limitations on request volume
        fetch(`https://api.aviationstack.com/v1/airports?access_key=YOUR_API_KEY&search=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            if (data && data.data) {
              setFilteredAirports(data.data.slice(0, 10)); // Limiting results to 10
            } else {
              // Fallback search if API fails or for demo
              fallbackAirportSearch(searchTerm);
            }
          })
          .catch(error => {
            console.error('Error fetching airports:', error);
            // Fallback search if API fails
            fallbackAirportSearch(searchTerm);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setFilteredAirports([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Fallback airport search when API is not available
  const fallbackAirportSearch = (term) => {
    const airports = [
      { airport_name: 'Daytona Beach Regional', iata_code: 'DAB', city_name: 'Daytona Beach', country_name: 'United States', country_iso_code: 'US' },
      { airport_name: 'Zia International', iata_code: 'DAC', city_name: 'Dhaka', country_name: 'Bangladesh', country_iso_code: 'BD' },
      { airport_name: 'Danang International', iata_code: 'DAD', city_name: 'Danang', country_name: 'Vietnam', country_iso_code: 'VN' },
      { airport_name: 'Love Field', iata_code: 'DAL', city_name: 'Dallas', country_name: 'United States', country_iso_code: 'US' },
      { airport_name: 'Damascus International', iata_code: 'DAM', city_name: 'Damascus', country_name: 'Syria', country_iso_code: 'SY' },
      { airport_name: 'Danville Municipal Airport', iata_code: 'DAN', city_name: 'Danville', country_name: 'United States', country_iso_code: 'US' },
      { airport_name: 'Es Salaam International', iata_code: 'DAR', city_name: 'Dar Es Salaam', country_name: 'Tanzania', country_iso_code: 'TZ' },
      { airport_name: 'Datong Airport', iata_code: 'DAT', city_name: 'Datong', country_name: 'China', country_iso_code: 'CN' },
      { airport_name: 'Enrique Malek', iata_code: 'DAV', city_name: 'David', country_name: 'Panama', country_iso_code: 'PA' },
      { airport_name: 'Dachuan Airport', iata_code: 'DAX', city_name: 'Dazhou', country_name: 'China', country_iso_code: 'CN' },
      { airport_name: 'Dayton International', iata_code: 'DAY', city_name: 'Dayton', country_name: 'United States', country_iso_code: 'US' },
      { airport_name: 'Dalbandin Airport', iata_code: 'DBA', city_name: 'Dalbandin', country_name: 'Pakistan', country_iso_code: 'PK' }
    ];
    
    const searchLower = term.toLowerCase();
    const filtered = airports.filter(airport => {
      return (
        airport.iata_code.toLowerCase().includes(searchLower) ||
        airport.airport_name.toLowerCase().includes(searchLower) ||
        airport.city_name.toLowerCase().includes(searchLower) ||
        airport.country_name.toLowerCase().includes(searchLower)
      );
    });
    
    setFilteredAirports(filtered);
    setLoading(false);
  };

  // Section 4: Input Handlers

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
    
    if (name === 'from' || name === 'to') {
      setSearchTerm(value);
      if (name === 'from') {
        setShowFromDropdown(true);
        setShowToDropdown(false);
      } else {
        setShowToDropdown(true);
        setShowFromDropdown(false);
      }
    }
  };
  
  const handleAirportSelect = (airport, fieldName) => {
    // Store both the display value and the code
    const displayValue = `${airport.iata_code || airport.code} - ${airport.city_name || airport.city}, ${airport.country_name || airport.country}`;
    const airportCode = airport.iata_code || airport.code;
    
    setSearchParams(prev => ({ 
      ...prev, 
      [fieldName]: displayValue,
      [`${fieldName}Code`]: airportCode
    }));
    
    setSearchTerm('');
    setShowFromDropdown(false);
    setShowToDropdown(false);
  };
  
  const handlePassengerChange = (type, operation) => {
    setPassengers(prev => {
      const newValue = operation === 'increase' 
        ? prev[type] + 1 
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1);
      
      return { ...prev, [type]: newValue };
    });
    
    // Update total passenger count in searchParams
    const totalPassengers = 
      (operation === 'increase' ? passengers.adults + 1 : passengers.adults) + 
      (type === 'children' 
        ? (operation === 'increase' ? passengers.children + 1 : Math.max(0, passengers.children - 1)) 
        : passengers.children) + 
      (type === 'infants' 
        ? (operation === 'increase' ? passengers.infants + 1 : Math.max(0, passengers.infants - 1)) 
        : passengers.infants);
    
    setSearchParams(prev => ({ ...prev, passengers: totalPassengers }));
  };
  
  const handleClassSelect = (classType) => {
    setSearchParams(prev => ({ ...prev, travelerClass: classType }));
    setShowClassOptions(false);
  };
  
  const scrollToSearch = () => {
    if (searchSectionRef.current) {
      // Scroll to a position slightly above the actual element
      const yOffset = -100; // 100px above the element
      const y = searchSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  // Section 5: Search Submission and Filter ID

  // Generate a dynamic filter ID based on search parameters
  const generateFilterId = () => {
    // This is a simplified example - in a real app, you might want to use a more
    // sophisticated algorithm or a hash function to generate the ID
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${randomStr}${timestamp.toString().slice(-6)}`;
  };
  
  const handleSearchSubmit = () => {
    // Check if we have the minimum required fields
    if (!searchParams.fromCode || !searchParams.toCode || !searchParams.departure) {
      alert('Please select origin, destination, and departure date');
      return;
    }
    
    // Format departure and return dates
    let departDate = '';
    let returnDate = '';
    
    if (selectedDepartDate) {
      const departMonth = selectedDepartDate.month < 10 ? `0${selectedDepartDate.month}` : selectedDepartDate.month;
      const departDay = selectedDepartDate.day < 10 ? `0${selectedDepartDate.day}` : selectedDepartDate.day;
      departDate = `${selectedDepartDate.year}${departMonth}${departDay}`;
    }
    
    if (tripType === 'roundTrip' && selectedReturnDate) {
      const returnMonth = selectedReturnDate.month < 10 ? `0${selectedReturnDate.month}` : selectedReturnDate.month;
      const returnDay = selectedReturnDate.day < 10 ? `0${selectedReturnDate.day}` : selectedReturnDate.day;
      returnDate = `${selectedReturnDate.year}${returnMonth}${returnDay}`;
    }
    
    // Create encoded form data based on the structure from paste.txt
    const formData = new FormData();
    
    // Add the essential form fields
    formData.append('origin_iata', searchParams.fromCode);
    formData.append('destination_iata', searchParams.toCode);
    formData.append('depart_date', selectedDepartDate ? 
      `${selectedDepartDate.year}-${selectedDepartDate.month < 10 ? '0' : ''}${selectedDepartDate.month}-${selectedDepartDate.day < 10 ? '0' : ''}${selectedDepartDate.day}` : '');
    
    if (tripType === 'roundTrip' && selectedReturnDate) {
      formData.append('return_date', 
        `${selectedReturnDate.year}-${selectedReturnDate.month < 10 ? '0' : ''}${selectedReturnDate.month}-${selectedReturnDate.day < 10 ? '0' : ''}${selectedReturnDate.day}`);
      formData.append('one_way', 'false');
    } else {
      formData.append('one_way', 'true');
    }
    
    formData.append('adults', passengers.adults.toString());
    formData.append('children', passengers.children.toString());
    formData.append('infants', passengers.infants.toString());
    
    // Map class to trip_class parameter
    let tripClass = '0'; // Default: Economy
    if (searchParams.travelerClass === 'PREMIUM ECONOMY') tripClass = '1';
    else if (searchParams.travelerClass === 'BUSINESS CLASS') tripClass = '2';
    else if (searchParams.travelerClass === 'FIRST CLASS') tripClass = '3';
    formData.append('trip_class', tripClass);
    
    // Build the URL path for direct access (similar to the previous approach)
    const fromCode = searchParams.fromCode;
    const toCode = searchParams.toCode;
    
    // Generate the dynamic filter ID
    const filterId = generateFilterId();
    
    // Build the URL path with the format [fromCode][departDate][toCode][returnDate][adults][children][infants][classCode]
    let pathPart = `${fromCode}${departDate}${toCode}`;
    if (tripType === 'roundTrip' && returnDate) {
      pathPart += returnDate;
    }
    
    // Add traveler info
    pathPart += `${passengers.adults}${passengers.children}${passengers.infants}`;
    
    // Add class code
    let classCode = '1'; // Default: Economy
    if (searchParams.travelerClass === 'PREMIUM ECONOMY') classCode = '2';
    else if (searchParams.travelerClass === 'BUSINESS CLASS') classCode = '3';
    else if (searchParams.travelerClass === 'FIRST CLASS') classCode = '4';
    
    pathPart += classCode;
    
    // Combine with the filter ID
    const fullPath = `${pathPart}`;
    
    // Create the final search URL with the dynamic filter ID in the path
    const searchUrl = `https://search.airflightcart.us/flights/${fullPath}`;
    console.log('Redirecting to:', searchUrl);
    
    // Log form data for debugging
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    
    // In a real app, you'd use this:
    window.location.href = searchUrl;
    
    // Close any open dropdowns
    setShowCalendar(false);
    setShowPassengers(false);
    setShowClassOptions(false);
  };

  // Section 6: Calendar Logic

  // Generate calendar data
  const generateCalendarData = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const calendarDays = [];
    
    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        month: month,
        year: year
      });
    }
    
    return calendarDays;
  };
  
  // Handle date selection
  const handleDateSelect = (date, isReturnDate = false) => {
    if (!date) return;
    
    // Format the date for display
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const displayDate = `${date.day} ${monthNames[date.month - 1]} ${date.year}`;
    
    if (isReturnDate && tripType === 'roundTrip') {
      setSelectedReturnDate(date);
      setSearchParams(prev => ({ ...prev, return: displayDate }));
    } else {
      setSelectedDepartDate(date);
      setSearchParams(prev => ({ ...prev, departure: displayDate }));
      
      // If return date is before the selected departure date, clear it
      if (selectedReturnDate) {
        const departTimestamp = new Date(date.year, date.month - 1, date.day).getTime();
        const returnTimestamp = new Date(selectedReturnDate.year, selectedReturnDate.month - 1, selectedReturnDate.day).getTime();
        
        if (returnTimestamp < departTimestamp) {
          setSelectedReturnDate(null);
          setSearchParams(prev => ({ ...prev, return: '' }));
        }
      }
    }
  };
  
  // Parse month string to get month and year
  const parseMonthString = (monthStr) => {
    const [month, yearStr] = monthStr.split(' ');
    const monthMap = {
      'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
      'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    
    return {
      month: monthMap[month],
      year: parseInt(yearStr)
    };
  };
  
  // Get calendar days for current and next month
  const currentMonthData = parseMonthString(currentMonth);
  const nextMonthData = parseMonthString(nextMonth);
  
  const currentMonthDays = generateCalendarData(currentMonthData.month, currentMonthData.year);
  const nextMonthDays = generateCalendarData(nextMonthData.month, nextMonthData.year);
  
  // Check if a day is the selected departure or return date
  const isDepartureDate = (day) => {
    if (!selectedDepartDate || !day) return false;
    return (
      day.day === selectedDepartDate.day &&
      day.month === selectedDepartDate.month &&
      day.year === selectedDepartDate.year
    );
  };
  
  const isReturnDate = (day) => {
    if (!selectedReturnDate || !day) return false;
    return (
      day.day === selectedReturnDate.day &&
      day.month === selectedReturnDate.month &&
      day.year === selectedReturnDate.year
    );
  };

  // Change months
  const changeMonth = (direction) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const currentData = parseMonthString(currentMonth);
    
    let newCurrentMonth, newCurrentYear;
    let newNextMonth, newNextYear;
    
    if (direction === 'next') {
      newCurrentMonth = currentData.month + 1;
      newCurrentYear = currentData.year;
      
      if (newCurrentMonth > 12) {
        newCurrentMonth = 1;
        newCurrentYear += 1;
      }
      
      newNextMonth = newCurrentMonth + 1;
      newNextYear = newCurrentYear;
      
      if (newNextMonth > 12) {
        newNextMonth = 1;
        newNextYear += 1;
      }
    } else {
      newCurrentMonth = currentData.month - 1;
      newCurrentYear = currentData.year;
      
      if (newCurrentMonth < 1) {
        newCurrentMonth = 12;
        newCurrentYear -= 1;
      }
      
      newNextMonth = newCurrentMonth + 1;
      newNextYear = newCurrentYear;
      
      if (newNextMonth > 12) {
        newNextMonth = 1;
        newNextYear += 1;
      }
    }
    
    setCurrentMonth(`${months[newCurrentMonth - 1]} ${newCurrentYear}`);
    setNextMonth(`${months[newNextMonth - 1]} ${newNextYear}`);
  };

  // Section 7: Render Part 1 - Hero Section & From/To Inputs

  return (
    <>
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[500px] bg-center bg-cover flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        ref={searchSectionRef}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 pt-8 pb-16">
          <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold mb-4">Book Now. Enjoy Your Trip Later.</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center text-white">
                <div className="bg-red-600 rounded-full p-2 mr-2">
                  <Phone size={24} className="text-white" />
                </div>
                <p className="font-bold">FOR PHONE-ONLY FLIGHT DEALS, CALL <span className="text-red-500">+1-888-928-1369</span></p>
              </div>
            </div>
          </div>

          {/* Flight Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
            <div className="mb-2">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="bg-gray-100 inline-block px-4 py-2 text-lg font-medium">Flights</div>
              </div>
              
              <div className="flex items-center mb-6">
                <label className="inline-flex items-center mr-6">
                  <input 
                    type="radio" 
                    className="form-radio w-4 h-4 text-blue-600" 
                    name="tripType" 
                    value="roundTrip" 
                    checked={tripType === 'roundTrip'} 
                    onChange={() => setTripType('roundTrip')} 
                  />
                  <span className="ml-2">Round Trip</span>
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    className="form-radio w-4 h-4 text-blue-600" 
                    name="tripType" 
                    value="oneWay" 
                    checked={tripType === 'oneWay'} 
                    onChange={() => setTripType('oneWay')} 
                  />
                  <span className="ml-2">One Way</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <div className="text-xs text-gray-500 mb-1 ml-1">FROM</div>
                  <div className="relative flex items-center border border-gray-300 rounded">
                    <span className="absolute left-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M12 21V12m0 0V3m0 9H3m9 0h9"></path>
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      name="from"
                      placeholder="CITY OR AIRPORT" 
                      className="w-full p-2 pl-10 rounded focus:outline-none"
                      value={searchParams.from}
                      onChange={handleInputChange}
                      onClick={() => {
                        setShowFromDropdown(true);
                        setShowToDropdown(false);
                        setShowCalendar(false);
                        setShowPassengers(false);
                      }}
                    />
                  </div>
                  
                  {/* From dropdown */}
                  {showFromDropdown && (
                    <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md max-h-60 overflow-y-auto">
                      {loading ? (
                        <div className="p-3 text-center text-gray-500">Searching airports...</div>
                      ) : filteredAirports.length > 0 ? (
                        filteredAirports.map((airport, index) => (
                          <div 
                            key={index} 
                            className="p-2 hover:bg-blue-50 cursor-pointer flex items-center"
                            onClick={() => handleAirportSelect(airport, 'from')}
                          >
                            <span className="text-blue-500 mr-2">✈</span>
                            <div>
                              <div className="font-semibold">{airport.iata_code || airport.code} - {airport.city_name || airport.city}</div>
                              <div className="text-xs text-gray-500">{airport.airport_name || airport.name}, {airport.country_name || airport.country} {airport.country_iso_code || airport.countryCode}</div>
                            </div>
                          </div>
                        ))
                      ) : searchTerm.length > 0 ? (
                        <div className="p-3 text-center text-gray-500">No airports found matching "{searchTerm}"</div>
                      ) : null}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div className="text-xs text-gray-500 mb-1 ml-1">TO</div>
                  <div className="relative flex items-center border border-gray-300 rounded">
                    <span className="absolute left-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <path d="M12 21V12m0 0V3m0 9H3m9 0h9"></path>
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      name="to"
                      placeholder="CITY OR AIRPORT" 
                      className="w-full p-2 pl-10 rounded focus:outline-none"
                      value={searchParams.to}
                      onChange={handleInputChange}
                      onClick={() => {
                        setShowToDropdown(true);
                        setShowFromDropdown(false);
                        setShowCalendar(false);
                        setShowPassengers(false);
                      }}
                    />
                  </div>
                  
                  {/* To dropdown */}
                  {showToDropdown && (
                    <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md max-h-60 overflow-y-auto">
                      {loading ? (
                        <div className="p-3 text-center text-gray-500">Searching airports...</div>
                      ) : filteredAirports.length > 0 ? (
                        filteredAirports.map((airport, index) => (
                          <div 
                            key={index} 
                            className="p-2 hover:bg-blue-50 cursor-pointer flex items-center"
                            onClick={() => handleAirportSelect(airport, 'to')}
                          >
                            <span className="text-blue-500 mr-2">✈</span>
                            <div>
                              <div className="font-semibold">{airport.iata_code || airport.code} - {airport.city_name || airport.city}</div>
                              <div className="text-xs text-gray-500">{airport.airport_name || airport.name}, {airport.country_name || airport.country} {airport.country_iso_code || airport.countryCode}</div>
                            </div>
                          </div>
                        ))
                      ) : searchTerm.length > 0 ? (
                        <div className="p-3 text-center text-gray-500">No airports found matching "{searchTerm}"</div>
                      ) : null}
                    </div>
                  )}
                </div>


                // Section 8: Render Part 2 - Date Inputs & Calendar

                <div className="relative">
                  <div className="text-xs text-gray-500 mb-1 ml-1">DEPARTURE DATE</div>
                  <div 
                    className="relative flex items-center border border-gray-300 rounded cursor-pointer"
                    onClick={() => {
                      setShowCalendar(!showCalendar);
                      setShowFromDropdown(false);
                      setShowToDropdown(false);
                      setShowPassengers(false);
                    }}
                  >
                    <span className="absolute left-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      name="departure"
                      placeholder="DEPART" 
                      className="w-full p-2 pl-10 rounded focus:outline-none cursor-pointer"
                      value={searchParams.departure}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-xs text-gray-500 mb-1 ml-1">RETURN DATE</div>
                  <div 
                    className="relative flex items-center border border-gray-300 rounded cursor-pointer"
                    onClick={() => {
                      if (tripType === 'roundTrip') {
                        setShowCalendar(!showCalendar);
                        setShowFromDropdown(false);
                        setShowToDropdown(false);
                        setShowPassengers(false);
                      }
                    }}
                  >
                    <span className="absolute left-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      name="return"
                      placeholder="RETURN" 
                      className="w-full p-2 pl-10 rounded focus:outline-none cursor-pointer"
                      value={searchParams.return}
                      onChange={handleInputChange}
                      disabled={tripType === 'oneWay'}
                      readOnly
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="text-xs text-gray-500 mb-1 ml-1">TRAVELLERS & CLASS</div>
                  <div 
                    className="flex relative"
                  >
                    <div 
                      className="relative flex items-center border border-gray-300 rounded-l flex-grow cursor-pointer"
                      onClick={() => {
                        setShowPassengers(!showPassengers);
                        setShowClassOptions(false);
                        setShowFromDropdown(false);
                        setShowToDropdown(false);
                        setShowCalendar(false);
                      }}
                    >
                      <span className="absolute left-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      <input 
                        type="text" 
                        placeholder="PASSENGERS 1" 
                        className="w-full p-2 pl-10 rounded-l focus:outline-none cursor-pointer"
                        value={`Passengers ${searchParams.passengers}, ${searchParams.travelerClass.charAt(0) + searchParams.travelerClass.slice(1).toLowerCase()}`}
                        readOnly
                      />
                    </div>
                    <button 
                      className="bg-blue-700 text-white px-4 py-2 rounded-r hover:bg-blue-800 transition-colors flex items-center justify-center"
                      onClick={handleSearchSubmit}
                    >
                      <Search size={20} />
                    </button>
                  </div>
                  
                  {/* Calendar Dropdown */}
                  {showCalendar && (
                  {/* Calendar Dropdown */}
{showCalendar && (
  <div className="absolute top-full mt-1 left-0 right-0 bg-white shadow-lg rounded-lg z-20 border border-gray-200" style={{ width: '500px', maxWidth: '100vw' }}>
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <button 
        className="p-1 rounded-full hover:bg-gray-200"
        onClick={() => changeMonth('prev')}
      >
        <ChevronLeft size={20} />
      </button>
      <div className="flex space-x-12">
        <div className="text-center font-medium">{currentMonth}</div>
        <div className="text-center font-medium">{nextMonth}</div>
      </div>
      <button 
        className="p-1 rounded-full hover:bg-gray-200"
        onClick={() => changeMonth('next')}
      >
        <ChevronRight size={20} />
      </button>
    </div>
    
    <div className="flex">
      {/* April 2025 */}
      <div className="w-1/2 p-3 border-r border-gray-200">
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="text-xs font-medium">SU</div>
          <div className="text-xs font-medium">MO</div>
          <div className="text-xs font-medium">TU</div>
          <div className="text-xs font-medium">WE</div>
          <div className="text-xs font-medium">TH</div>
          <div className="text-xs font-medium">FR</div>
          <div className="text-xs font-medium">SA</div>
          
          {/* Empty cells for days before April 1st, 2025 (Tuesday) */}
          <div className="invisible text-sm p-1"></div>
          <div className="invisible text-sm p-1"></div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 1, month: 4, year: 2025})}>1</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 2, month: 4, year: 2025})}>2</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 3, month: 4, year: 2025})}>3</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 4, month: 4, year: 2025})}>4</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 5, month: 4, year: 2025})}>5</div>
          
          {/* Continue with other days - wider spacing */}
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 6, month: 4, year: 2025})}>6</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 7, month: 4, year: 2025})}>7</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 8, month: 4, year: 2025})}>8</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 9, month: 4, year: 2025})}>9</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 10, month: 4, year: 2025})}>10</div>
          <div className="text-sm p-2 bg-red-500 text-white rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 11, month: 4, year: 2025})}>11</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 12, month: 4, year: 2025})}>12</div>
          
          {/* Rest of April days */}
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 13, month: 4, year: 2025})}>13</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 14, month: 4, year: 2025})}>14</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 15, month: 4, year: 2025})}>15</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 16, month: 4, year: 2025})}>16</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 17, month: 4, year: 2025})}>17</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 18, month: 4, year: 2025})}>18</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 19, month: 4, year: 2025})}>19</div>
          
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 20, month: 4, year: 2025})}>20</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 21, month: 4, year: 2025})}>21</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 22, month: 4, year: 2025})}>22</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 23, month: 4, year: 2025})}>23</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 24, month: 4, year: 2025})}>24</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 25, month: 4, year: 2025})}>25</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 26, month: 4, year: 2025})}>26</div>
          
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 27, month: 4, year: 2025})}>27</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 28, month: 4, year: 2025})}>28</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 29, month: 4, year: 2025})}>29</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 30, month: 4, year: 2025})}>30</div>
        </div>
      </div>
      
      {/* May 2025 */}
      <div className="w-1/2 p-3">
        <div className="grid grid-cols-7 gap-2 text-center">
          <div className="text-xs font-medium">SU</div>
          <div className="text-xs font-medium">MO</div>
          <div className="text-xs font-medium">TU</div>
          <div className="text-xs font-medium">WE</div>
          <div className="text-xs font-medium">TH</div>
          <div className="text-xs font-medium">FR</div>
          <div className="text-xs font-medium">SA</div>
          
          {/* Empty cells for days before May 1st, 2025 (Thursday) */}
          <div className="invisible text-sm p-2"></div>
          <div className="invisible text-sm p-2"></div>
          <div className="invisible text-sm p-2"></div>
          <div className="invisible text-sm p-2"></div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 1, month: 5, year: 2025}, true)}>1</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 2, month: 5, year: 2025}, true)}>2</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 3, month: 5, year: 2025}, true)}>3</div>
          
          {/* Rest of May days with more spacing */}
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 4, month: 5, year: 2025}, true)}>4</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 5, month: 5, year: 2025}, true)}>5</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 6, month: 5, year: 2025}, true)}>6</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 7, month: 5, year: 2025}, true)}>7</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 8, month: 5, year: 2025}, true)}>8</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 9, month: 5, year: 2025}, true)}>9</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 10, month: 5, year: 2025}, true)}>10</div>
          
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 11, month: 5, year: 2025}, true)}>11</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 12, month: 5, year: 2025}, true)}>12</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 13, month: 5, year: 2025}, true)}>13</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 14, month: 5, year: 2025}, true)}>14</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 15, month: 5, year: 2025}, true)}>15</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 16, month: 5, year: 2025}, true)}>16</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 17, month: 5, year: 2025}, true)}>17</div>
          
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 18, month: 5, year: 2025}, true)}>18</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 19, month: 5, year: 2025}, true)}>19</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 20, month: 5, year: 2025}, true)}>20</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 21, month: 5, year: 2025}, true)}>21</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 22, month: 5, year: 2025}, true)}>22</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 23, month: 5, year: 2025}, true)}>23</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 24, month: 5, year: 2025}, true)}>24</div>
          
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 25, month: 5, year: 2025}, true)}>25</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 26, month: 5, year: 2025}, true)}>26</div>
          <div className="text-sm p-2 bg-blue-500 text-white rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 27, month: 5, year: 2025}, true)}>27</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 28, month: 5, year: 2025}, true)}>28</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 29, month: 5, year: 2025}, true)}>29</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 30, month: 5, year: 2025}, true)}>30</div>
          <div className="text-sm p-2 hover:bg-gray-100 rounded-full cursor-pointer" onClick={() => handleDateSelect({day: 31, month: 5, year: 2025}, true)}>31</div>
        </div>
      </div>
    </div>
  </div>
)}
                  )} 

                  Section 9: Render Part 3 - Passengers & Class Dropdown  

                  {/* Passengers Dropdown */}
                  {showPassengers && (
                    <div className="absolute top-full mt-1 right-0 w-64 bg-white shadow-lg rounded-lg z-20 border border-gray-200">
                      <div className="p-4">
                        {/* Adults */}
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="font-medium">Adults</div>
                            <div className="text-xs text-gray-500">(+17 yrs)</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('adults', 'decrease')}
                              disabled={passengers.adults <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{passengers.adults}</span>
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('adults', 'increase')}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Children */}
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="font-medium">Child</div>
                            <div className="text-xs text-gray-500">(0-17 yrs)</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('children', 'decrease')}
                              disabled={passengers.children <= 0}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{passengers.children}</span>
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('children', 'increase')}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Infants */}
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="font-medium">Infant</div>
                            <div className="text-xs text-gray-500">(upto 2 yrs)</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('infants', 'decrease')}
                              disabled={passengers.infants <= 0}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center">{passengers.infants}</span>
                            <button 
                              className="p-1 border border-gray-300 rounded-md"
                              onClick={() => handlePassengerChange('infants', 'increase')}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Class Selection */}
                        <div 
                          className="relative border border-gray-300 rounded p-2 cursor-pointer mb-4"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowClassOptions(!showClassOptions);
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span>{searchParams.travelerClass}</span>
                            <ChevronRight className={`transition-transform ${showClassOptions ? 'rotate-90' : ''}`} size={16} />
                          </div>
                          
                          {showClassOptions && (
                            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-30">
                              <div 
                                className="p-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleClassSelect('ECONOMY')}
                              >
                                ECONOMY
                              </div>
                              <div 
                                className="p-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleClassSelect('PREMIUM ECONOMY')}
                              >
                                PREMIUM ECONOMY
                              </div>
                              <div 
                                className="p-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleClassSelect('BUSINESS CLASS')}
                              >
                                BUSINESS CLASS
                              </div>
                              <div 
                                className="p-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleClassSelect('FIRST CLASS')}
                              >
                                FIRST CLASS
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <button 
                          className="w-full py-2 bg-blue-700 text-white rounded font-medium"
                          onClick={() => setShowPassengers(false)}
                        >
                          DONE
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

      // Section 10: Render Part 4 - Special Offers & Content Sections    

      {/* Special Offers Section */}
      <div className="mt-12 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
              src={bannerImage} 
              alt="Special offers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-blue-800">Get special offers, and more from Traveler</h3>
            <p className="text-gray-600 mb-6">Subscribe to see secret deals prices drop the moment you sign up!</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Your Email..." 
                className="flex-grow p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-r hover:bg-red-700 transition-colors font-bold">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Explore Our Popular Destination</h2>
          <p className="text-gray-600">Explore your dream domestic and international destinations at the lowest airfare today.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4">
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full w-44 h-44 mx-auto">
              <img src={require('../assets/images/dubai2.jpg')} alt="Dubai" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-xs text-gray-600">FARE STARTING FROM</p>
            <h3 className="text-lg font-bold">Dubai</h3>
            <p className="text-red-600 font-bold">$1,637</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full w-44 h-44 mx-auto">
              <img src={require('../assets/images/europe.jpg')} alt="Europe" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-xs text-gray-600">FARE STARTING FROM</p>
            <h3 className="text-lg font-bold">Europe</h3>
            <p className="text-red-600 font-bold">$1,198</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full w-44 h-44 mx-auto">
              <img src={require('../assets/images/canada.jpg')} alt="Canada" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-xs text-gray-600">FARE STARTING FROM</p>
            <h3 className="text-lg font-bold">Canada</h3>
            <p className="text-red-600 font-bold">$682</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full w-44 h-44 mx-auto">
              <img src={require('../assets/images/uk.jpg')} alt="London" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-xs text-gray-600">FARE STARTING FROM</p>
            <h3 className="text-lg font-bold">London</h3>
            <p className="text-red-600 font-bold">$710</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-full w-44 h-44 mx-auto">
              <img src={require('../assets/images/lasvegas0.jpg')} alt="Las Vegas" className="w-full h-full object-cover" />
            </div>
            <p className="font-semibold text-xs text-gray-600">FARE STARTING FROM</p>
            <h3 className="text-lg font-bold">Las Vegas</h3>
            <p className="text-red-600 font-bold">$148</p>
          </div>
        </div>
      </div>

      // Section 11: Render Part 5 - Flight Routes and Features

      {/* Domestic & International Routes */}
      <div className="container mx-auto px-4 mt-16 bg-gray-50 py-12" ref={routesSectionRef}>
        <h2 className="text-2xl font-bold text-center mb-8">Domestic & International Routes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flightRoutes.map((route, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  {/* Airline logo - Spirit, LATAM, or United */}
                  {route.airline === 'Spirit' && (
                    <img src={require('../assets/images/NK.gif')} alt="Spirit Airlines" className="w-16 h-8 mb-1 object-contain" />
                  )}
                  {route.airline === 'LATAM' && (
                    <img src={require('../assets/images/al_logo_LA.png')} alt="LATAM Airlines" className="w-16 h-8 mb-1 object-contain" />
                  )}
                  {route.airline === 'United' && (
                    <img src={require('../assets/images/al_logo_UA.png')} alt="United Airlines" className="w-16 h-8 mb-1 object-contain" />
                  )}
                  <div>
                    <p className="font-bold text-blue-900">{route.from}</p>
                    <p className="text-sm text-gray-600">{route.fromCity}</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="text-xs text-gray-500">
                    {route.departDate} - {route.returnDate}
                  </div>
                  <div className="relative w-24 h-6 flex items-center justify-center">
                    <img src={require('../assets/images/planeicon.jpg')} alt="Flight Direction" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div>
                    <p className="font-bold text-blue-900">{route.to}</p>
                    <p className="text-sm text-gray-600">{route.toCity}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <p className="text-lg font-bold text-red-600">{route.price}</p>
                <button 
                  className="mt-2 bg-white border border-red-600 rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={scrollToSearch}
                  aria-label="Book this flight"
                >
                  <ArrowRight size={14} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-4">
              <img src={require('../assets/images/afc-1.png')} alt="Safe & Secure" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold mb-2">Safe & Secure</h3>
            <p className="text-sm text-gray-600">Our website is completely safe and secure with enhanced SSL security.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-4">
              <img src={require('../assets/images/afc-2.png')} alt="24/7 Customer Service" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold mb-2">24/7 Customer Service</h3>
            <p className="text-sm text-gray-600">Our team works round the clock. You can reach us through email or the phone number available on the website.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-4">
              <img src={require('../assets/images/afc-3.png')} alt="Customized Travel Plans" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold mb-2">Customized Travel Plans</h3>
            <p className="text-sm text-gray-600">We have customized travel plans as per your likings, budget, and price preference.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <div className="flex justify-center mb-4">
              <img src={require('../assets/images/afc-4.png')} alt="Economical Travel Plans" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold mb-2">Economical Travel Plans</h3>
            <p className="text-sm text-gray-600">We have economical travel plans for domestic and international destinations.</p>
          </div>
        </div>
      </div>

      // Section 12: Render Part 6 - About Section & Component End

      {/* About Airflightcart */}
      <div className="container mx-auto px-4 mt-8 mb-16">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Airflightcart: Cheap Flight Ticket Booking Agency</h2>
            <p className="text-gray-700 mb-4">
              Airflightcart is your one-stop solution for all your travel and airline reservation needs. 
              As a flight search engine, we help you find the cheapest deals on flight tickets for your 
              domestic as well as international travel to almost all major countries of America, 
              Europe, Canada, and Asia.
            </p>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Why choose Airflightcart?</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We have a team of dedicated and experienced travel agents to help you manage your travel with cheap tickets.</li>
              <li>Our 24/7 customer support can help you book flights, change, or cancel flight tickets.</li>
              <li>With Airflightcart, you can book flight tickets at the lowest cost of your round trip. Yes, before you book a flight with any airline, make sure you visit the Airflightcart deals section and choose the deal that suits you the best.</li>
              <li>At Airflightcart, we understand that an emergency can occur at any point in time; therefore, we provide assistance 24/7 for instant flight booking.</li>
            </ol>
            
            <p className="mt-4 text-gray-700">
              Also, if you need any help in browsing the website, feel free to call us at 1-888-928-1369.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img 
              src={require('../assets/images/01one.png')} 
              alt="Flight Service" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;