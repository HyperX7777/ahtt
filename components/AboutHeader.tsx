'use client';

import { motion } from 'framer-motion';

const AboutHeader = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">Learn more about our mission, vision, and values.</p>
      </div>
    </motion.section>
  );
};

export default AboutHeader;