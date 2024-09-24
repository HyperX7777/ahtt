'use client';

import { motion } from 'framer-motion';

const CompanyOverview = () => {
  return (
    <motion.section
      className="py-16 bg-[#F4F4F4]"  // Using Off-White for the background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#2C2C2C]"  // Dark Gray for the title
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed mb-6 text-[#3B3B3B]"  // Charcoal for the text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
        >
          Anwaar Al Harmain Travel and Tours has been dedicated to providing exceptional travel services to those undertaking the sacred journey of Umrah. Our company is rooted in the principles of trust, integrity, and service excellence, ensuring that your pilgrimage is as comfortable and meaningful as possible.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed text-[#3B3B3B]"  // Charcoal for the text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
        >
          With years of experience in the industry, we have built a reputation for reliability and quality, making us one of the most respected names in Umrah travel services. Our team is committed to offering personalized services that cater to your specific needs, ensuring a seamless and spiritually fulfilling experience.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CompanyOverview;
