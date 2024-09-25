'use client';

import { motion } from 'framer-motion';

const values = [
  { title: 'Integrity', description: 'We uphold the highest standards of integrity in all our actions.' },
  { title: 'Excellence', description: 'We strive for excellence in everything we do.' },
  { title: 'Customer Focus', description: 'We prioritize our customers and aim to exceed their expectations.' },
];

const CoreValues = () => {
  return (
    <motion.section
      className="py-16 bg-[#F4F4F4]" // Off-White background for a clean look
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-[#2C2C2C]" // Dark Gray for the title, responsive
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#B38E5D]">{value.title}</h3> {/* Gold for the titles */}
              <p className="text-[#3B3B3B] leading-relaxed">{value.description}</p> {/* Charcoal for the description */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValues;
