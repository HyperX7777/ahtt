'use client';

import { motion } from 'framer-motion';

const AboutHeader = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-[#B38E5D] to-[#D2B48C] text-[#FFFFFF] py-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4 text-[#2C2C2C]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl text-[#F8F8F8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Learn more about our mission, vision, and values.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutHeader;
