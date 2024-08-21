'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const UmrahCalculator = () => {
  // State for form fields
  const [adults, setAdults] = useState(1);
  const [infants, setInfants] = useState(0);
  const [city, setCity] = useState('Makkah');
  const [daysInMakkah, setDaysInMakkah] = useState(0);
  const [daysInMadinah, setDaysInMadinah] = useState(0);

  // WhatsApp message template
  const handleWhatsAppRedirect = () => {
    const message = `Umrah Booking Request:
    \nAdults: ${adults}
    \nInfants: ${infants}
    \nCity: ${city}
    \nDays in Makkah: ${daysInMakkah}
    \nDays in Madinah: ${daysInMadinah}`;

    window.open(`https://wa.me/923364449880?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-green-600 text-center mb-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Umrah Calculator
      </motion.h1>

      {/* Image Section */}
      <motion.div
        className="text-center mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/umrah-image.jpg" alt="Umrah" width={600} height={400} className="rounded-lg" />
      </motion.div>

      {/* Form Section */}
      <div className="space-y-4">
        {/* Number of Adults */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Adults:</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className="border rounded px-4 py-2"
            min="1"
          />
        </div>

        {/* Number of Infants */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Infants:</label>
          <input
            type="number"
            value={infants}
            onChange={(e) => setInfants(parseInt(e.target.value))}
            className="border rounded px-4 py-2"
            min="0"
          />
        </div>

        {/* Select City */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">City:</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border rounded px-4 py-2"
          >
            <option value="Makkah">Makkah</option>
            <option value="Madinah">Madinah</option>
          </select>
        </div>

        {/* Days in Makkah */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Days in Makkah:</label>
          <input
            type="number"
            value={daysInMakkah}
            onChange={(e) => setDaysInMakkah(parseInt(e.target.value))}
            className="border rounded px-4 py-2"
            min="0"
          />
        </div>

        {/* Days in Madinah */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Days in Madinah:</label>
          <input
            type="number"
            value={daysInMadinah}
            onChange={(e) => setDaysInMadinah(parseInt(e.target.value))}
            className="border rounded px-4 py-2"
            min="0"
          />
        </div>

        {/* Book Now Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UmrahCalculator;
