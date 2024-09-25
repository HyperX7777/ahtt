'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-8 bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container mx-auto text-left">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#B38E5D] hover:text-[#D2B48C] transition-transform transform hover:scale-105"
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-3 text-[#F8F8F8] hover:text-[#D2B48C] transition-transform transform hover:scale-102"
          transition={{ duration: 0.3 }}
        >
          If you have any questions or need further information, feel free to contact us.
        </motion.p>
        <motion.p
          className="mb-2 text-[#F8F8F8] hover:text-[#D2B48C] transition-transform transform hover:scale-102"
          transition={{ duration: 0.3 }}
        >
          <strong>Address:</strong> Near Meezan Bank Kutchary Road, Sialkot.
        </motion.p>
        <motion.p
          className="mb-2 text-[#F8F8F8] hover:text-[#D2B48C] transition-transform transform hover:scale-102"
          transition={{ duration: 0.3 }}
        >
          <strong>LandLine:</strong> +92-52-4570059
        </motion.p>
        <motion.p
          className="mb-2 text-[#F8F8F8] hover:text-[#D2B48C] transition-transform transform hover:scale-102"
          transition={{ duration: 0.3 }}
        >
          <strong>Email:</strong> info@anwaaralharmain.com
        </motion.p>
      </div>

      {/* Logos Section */}
      <div className="container mx-auto mt-6 flex justify-end items-center space-x-6">
        {['/Commerce.jpg', '/IATA.jpg', '/Ministry.jpg', '/Tourist.jpg'].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-10 object-contain hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
