// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="bg-gray-100 h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold text-green-600 mb-4"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Anwaar Al Harmain Travel and Tours
        </motion.h1>
        <p className="text-xl text-gray-700 mb-8">
          Your trusted partner for a blessed Umrah journey.
        </p>
        <a
          href="/services"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Explore Our Packages
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
