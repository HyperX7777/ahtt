'use client';

import { motion } from 'framer-motion';
import { FaPlane, FaBus, FaHotel, FaRoute } from 'react-icons/fa'; // Icons for the stats

const stats = [
  { icon: <FaPlane className="text-4xl md:text-5xl" />, label: 'Flights booked', value: '700k+' },
  { icon: <FaBus className="text-4xl md:text-5xl" />, label: 'Buses booked', value: '300k+' },
  { icon: <FaHotel className="text-4xl md:text-5xl" />, label: 'Hotels booked', value: '50k+' },
  { icon: <FaRoute className="text-4xl md:text-5xl" />, label: 'Kilometers traveled', value: '20m+' },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            aria-label={stat.label}
          >
            <div className="text-[#B38E5D] mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
