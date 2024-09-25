'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const partners = [
  { logo: '/path/to/partner1.png', alt: 'Partner 1' }, 
  { logo: '/path/to/partner2.png', alt: 'Partner 2' }, 
  { logo: '/path/to/partner3.png', alt: 'Partner 3' },
  { logo: '/path/to/partner4.png', alt: 'Partner 4' },
  { logo: '/path/to/partner5.png', alt: 'Partner 5' },
  { logo: '/path/to/partner6.png', alt: 'Partner 6' },
  { logo: '/path/to/partner7.png', alt: 'Partner 7' },
  // Add more partner logos as needed
];

const FeaturedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Featured Partners</h2>
        <p className="text-gray-600 mb-6 text-lg">Domestic & International</p>
        
        <div className="relative flex items-center justify-center overflow-hidden">
          <button onClick={prevPartner} className="absolute left-0 z-10 p-3 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
            <FaChevronLeft />
          </button>

          <div className="flex space-x-8 px-4 overflow-hidden">
            {partners.slice(currentIndex, currentIndex + 5).map((partner, index) => (
              <motion.div
                key={index}
                className="p-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>

          <button onClick={nextPartner} className="absolute right-0 z-10 p-3 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration:300">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPartners;
