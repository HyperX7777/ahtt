'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-6 bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-4"
          whileHover={{ color: '#D2B48C' }}
          transition={{ duration: 0.3 }}
        >
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: '#B38E5D' }}
          >
            Get in Touch
          </h2>
          <p className="text-sm" style={{ color: '#F8F8F8' }}>
            <strong>Address:</strong>{' '}
            <a
              href="https://maps.app.goo.gl/msedyNqYUGSpaXu97"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#D2B48C]"
            >
              Kutchery Road, near Meezan Bank Ltd, Mohalla Water Works, Sialkot, Punjab 51310
            </a>
          </p>
          <p className="text-sm" style={{ color: '#F8F8F8' }}>
            <strong>LandLine:</strong>{' '}
            <a href="tel:+92524570059" className="underline hover:text-[#D2B48C]">
              +92-52-4570059
            </a>
          </p>
          <p className="text-sm" style={{ color: '#F8F8F8' }}>
            <strong>Phone:</strong>{' '}
            <a href="tel:+923364449880" className="underline hover:text-[#D2B48C]">
              +92-336-4449880
            </a>
          </p>
          <p className="text-sm" style={{ color: '#F8F8F8' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@anwaaralharmain.com" className="underline hover:text-[#D2B48C]">
              info@anwaaralharmain.com
            </a>
          </p>
        </motion.div>
        {/* Logos Section */}
        <div className="flex justify-center items-center space-x-8 mt-4">
          <motion.img
            src="/IATA.svg"
            alt="IATA Logo"
            className="h-16"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/Ministry.jpg"
            alt="Ministry of Hajj and Umrah Logo"
            className="h-16"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/Tourist.jpg"
            alt="Department of Tourist Services Logo"
            className="h-16"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/Commerce.jpg"
            alt="Sialkot Chamber of Commerce Logo"
            className="h-16"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
