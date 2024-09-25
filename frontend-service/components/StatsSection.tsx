'use client';

import { motion } from 'framer-motion';
import { FaPlane, FaBus, FaHotel, FaRoute } from 'react-icons/fa'; // Use these icons for stats

const stats = [
  { icon: <FaPlane />, label: 'Flights booked', value: '700k+' },
  { icon: <FaBus />, label: 'Buses booked', value: '300k+' },
  { icon: <FaHotel />, label: 'Hotels booked', value: '50k+' },
  { icon: <FaRoute />, label: 'Kilometers traveled', value: '20m+' },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-3xl text-[#B38E5D] mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
