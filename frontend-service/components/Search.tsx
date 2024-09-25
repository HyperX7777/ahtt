'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Search() {
  const [selectedTab, setSelectedTab] = useState('Flights');
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'Economy',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Search:', searchData);
    // Add specific search handling here based on the selected tab (Flights, Hotels, etc.)
  };

  const renderSearchForm = () => {
    switch (selectedTab) {
      case 'Flights':
        return (
          <>
            <div>
              <label className="block text-gray-700">Flying From</label>
              <input
                type="text"
                name="from"
                value={searchData.from}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City or Airport"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Flying To</label>
              <input
                type="text"
                name="to"
                value={searchData.to}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City or Airport"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={searchData.departureDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Return Date (Optional)</label>
              <input
                type="date"
                name="returnDate"
                value={searchData.returnDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Passengers</label>
              <input
                type="number"
                name="passengers"
                value={searchData.passengers}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Class</label>
              <select
                name="travelClass"
                value={searchData.travelClass}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
            </div>
          </>
        );
      case 'Hotels':
        return (
          <>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={searchData.city || ''}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Check-in Date</label>
              <input
                type="date"
                name="checkinDate"
                value={searchData.checkinDate || ''}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Check-out Date</label>
              <input
                type="date"
                name="checkoutDate"
                value={searchData.checkoutDate || ''}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </>
        );
      case 'Visa':
        return (
          <div>
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={searchData.country || ''}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Visa for Country"
              required
            />
          </div>
        );
      case 'Umrah Packages':
        return (
          <div>
            <label className="block text-gray-700">Package Type</label>
            <select
              name="packageType"
              value={searchData.packageType || ''}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="Economy">Economy</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="container mx-auto px-6">
      <h1 className="text-4xl font-bold text-center text-[#2C2C2C] mb-12">Travel Bookings Made Easy</h1>

      <div className="flex justify-center mb-8 space-x-4">
        {['Flights', 'Hotels', 'Visa', 'Umrah Packages'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${
              selectedTab === tab ? 'bg-[#B38E5D] text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        className="bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderSearchForm()}
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              className="w-full bg-[#B38E5D] text-white py-3 rounded-lg hover:bg-[#D2B48C] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search {selectedTab}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
