'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPlane, FaHotel, FaPassport, FaKaaba } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [flightData, setFlightData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    travelClass: 'Economy',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlightData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add functionality to handle search submission
    console.log('Search flights:', flightData);
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#f4f4f4] min-h-screen py-16">
        <section className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-[#2C2C2C] mb-12">Travel Bookings Made Easy</h1>
          {/* Search Form */}
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Flying From</label>
                <input
                  type="text"
                  name="from"
                  value={flightData.from}
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
                  value={flightData.to}
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
                  value={flightData.departureDate}
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
                  value={flightData.returnDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Passengers</label>
                <input
                  type="number"
                  name="passengers"
                  value={flightData.passengers}
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
                  value={flightData.travelClass}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First">First Class</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  className="w-full bg-[#B38E5D] text-white py-3 rounded-lg hover:bg-[#D2B48C] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Search Flights
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* Options: Flights, Hotels, Visa, Umrah Packages */}
        <section className="container mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Flights */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaPlane className="text-3xl text-[#B38E5D] mb-4" />
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Flights</h3>
            </motion.div>
            {/* Hotels */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaHotel className="text-3xl text-[#B38E5D] mb-4" />
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Hotels</h3>
            </motion.div>
            {/* Visa */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaPassport className="text-3xl text-[#B38E5D] mb-4" />
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Visa</h3>
            </motion.div>
            {/* Umrah Packages */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaKaaba className="text-3xl text-[#B38E5D] mb-4" />
              <h3 className="text-xl font-semibold text-[#2C2C2C]">Umrah Packages</h3>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
