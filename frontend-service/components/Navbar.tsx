'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaPlaneDeparture, FaCalculator, FaUsers, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gradient-to-r from-white to-gray-100 shadow-lg py-4" // Added padding for better spacing
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <Image src="/AHTT.png" alt="Anwaar Al Harmain Logo" width={60} height={60} className="cursor-pointer" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {[
            { href: '/', label: 'Home', icon: FaHome },
            { href: '/services', label: 'Services', icon: FaPlaneDeparture },
            { href: '/umrah-calculator', label: 'Umrah Calculator', icon: FaCalculator },
            { href: '/about', label: 'About Us', icon: FaUsers },
            { href: '/contact', label: 'Contact Us', icon: FaPhoneAlt },
          ].map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.3 }} // Staggering effect
              className="hover:text-yellow-500 transition duration-300" // Smooth color transition on hover
            >
              <Link href={link.href} className="flex items-center text-gray-800">
                <link.icon className="mr-2" /> {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Umrah Login Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Link href="https://www.anwaaralharmain.com/apps/login.php" passHref>
            <button
              className="py-2 px-4 rounded transition duration-300 hover:bg-[#D2B48C]" // Gold hover effect
              style={{
                backgroundColor: '#B38E5D', // Gold
                color: '#FFFFFF', // White
              }}
            >
              Umrah Login
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
