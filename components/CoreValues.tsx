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
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold text-green-600 mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValues;