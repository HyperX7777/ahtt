'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-[#B38E5D] to-[#D2B48C] text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Ready to Start Your Journey?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-8 text-[#F8F8F8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Contact us today to plan your Umrah pilgrimage with the best travel partner in the industry.
        </motion.p>
        <Link href="/contact">
          <motion.button
            className="bg-white text-[#B38E5D] py-3 px-6 rounded-lg hover:bg-[#F8F8F8] transition-all"
            whileHover={{ scale: 1.05, backgroundColor: '#D2B48C' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default CallToAction;
