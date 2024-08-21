'use client';

import { motion } from 'framer-motion';

const CompanyOverview = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Anwaar Al Harmain Travel and Tours has been dedicated to providing exceptional travel services to those undertaking the sacred journey of Umrah. Our company is rooted in the principles of trust, integrity, and service excellence, ensuring that your pilgrimage is as comfortable and meaningful as possible.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          With years of experience in the industry, we have built a reputation for reliability and quality, making us one of the most respected names in Umrah travel services. Our team is committed to offering personalized services that cater to your specific needs, ensuring a seamless and spiritually fulfilling experience.
        </p>
      </div>
    </motion.section>
  );
};

export default CompanyOverview;