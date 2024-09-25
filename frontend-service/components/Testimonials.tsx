'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { quote: "The best Umrah experience I've ever had! Highly recommended.", name: "Ali Ahmed" },
  { quote: "Amazing service and support throughout the journey.", name: "Fatima Zahra" },
  { quote: "Truly a blessed experience. Everything was perfectly organized.", name: "Omar Khalid" },
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-16 bg-[#F4F4F4]" // Background adjusted to Off-White
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#2C2C2C] mb-8" // Text color adjusted to Dark Gray
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#FFFFFF] rounded-lg shadow-lg" // Background adjusted to White
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 120, delay: index * 0.2 }}
            >
              <p className="text-[#6F6F6F] italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p> {/* Text color adjusted to Warm Gray */}
              <p className="text-[#B38E5D] font-semibold text-right">- {testimonial.name}</p> {/* Name color adjusted to Gold */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
