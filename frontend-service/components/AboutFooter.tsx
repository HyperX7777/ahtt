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
          className="text-3xl font-bold mb-6"
          style={{ color: '#B38E5D' }}
          whileHover={{ scale: 1.05, color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-3"
          style={{ color: '#F8F8F8' }}
          whileHover={{ scale: 1.02, color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          If you have any questions or need further information, feel free to contact us.
        </motion.p>
        <motion.p
          className="mb-2"
          style={{ color: '#F8F8F8' }}
          whileHover={{ scale: 1.02, color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          <strong>Address:</strong> Near Meezan Bank Kutchary Road, Sialkot.
        </motion.p>
        <motion.p
          className="mb-2"
          style={{ color: '#F8F8F8' }}
          whileHover={{ scale: 1.02, color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          <strong>LandLine:</strong> +92-52-4570059
        </motion.p>
        <motion.p
          className="mb-2"
          style={{ color: '#F8F8F8' }}
          whileHover={{ scale: 1.02, color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          <strong>Email:</strong> info@anwaaralharmain.com
        </motion.p>
      </div>
      {/* Logos Section */}
      <div className="container mx-auto mt-6 flex justify-end items-center space-x-6">
        <motion.img
          src="/Commerce.jpg"
          alt="Sialkot Chamber of Commerce Logo"
          className="h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/IATA.jpg"
          alt="IATA Logo"
          className="h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/Ministry.jpg"
          alt="Ministry of Hajj and Umrah Logo"
          className="h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/Tourist.jpg"
          alt="Department of Tourist Services Logo"
          className="h-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
