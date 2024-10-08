'use client';

import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <motion.section
      className="py-12 bg-[#F4F4F4]" // Background adjusted to Off-White
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2C2C2C] mb-8">Our Services</h2> {/* Text color adjusted to Dark Gray */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" // Background adjusted to White with hover effect
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            aria-label="Hajj & Umrah services"
          >
            <h3 className="text-2xl font-semibold text-[#B38E5D] mb-4">Hajj & Umrah</h3> {/* Title color adjusted to Gold */}
            <p className="text-[#6F6F6F]">
              For a spiritual journey of Hajj & Umrah, ANWAAR AL HARMAIN TRAVEL & TOURS offers the best services. We have many flexible packages to meet your needs.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
            aria-label="Tickets services"
          >
            <h3 className="text-2xl font-semibold text-[#B38E5D] mb-4">Tickets</h3>
            <p className="text-[#6F6F6F]">
              We provide private cheap rates with good services. Our Prices are reasonable from anywhere.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
            aria-label="Visa services"
          >
            <h3 className="text-2xl font-semibold text-[#B38E5D] mb-4">Visa</h3>
            <p className="text-[#6F6F6F]">
              ANWAAR AL HARMAIN TRAVEL & TOURS' goal is to provide you with professional, competent, and experienced service which will help you accomplish your personal immigration goals.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}
            aria-label="Hotel services"
          >
            <h3 className="text-2xl font-semibold text-[#B38E5D] mb-4">Hotel</h3>
            <p className="text-[#6F6F6F]">
              Savings are based on actual Hot Rate® Hotel bookings made in the previous 12 months as compared with the lowest.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
