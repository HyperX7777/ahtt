'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <motion.section
      className="py-16 bg-green-600 text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8">Contact us today to plan your Umrah pilgrimage with the best travel partner in the industry.</p>
        <Link href="/contact">
          <motion.button
            className="bg-white text-green-600 py-3 px-6 rounded-lg hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default CallToAction;