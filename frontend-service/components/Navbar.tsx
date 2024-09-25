'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaPlaneDeparture, FaKaaba, FaPhoneAlt, FaUsers, FaCalculator } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gradient-to-r from-white to-gray-100 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
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
            >
              <Link href={link.href} className="flex items-center text-black hover:text-yellow-500 transition duration-300">
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
              className="py-2 px-4 ml-4 rounded transition duration-300"
              style={{
                backgroundColor: '#B38E5D', // Gold
                color: '#FFFFFF', // White
                borderColor: '#4A4A4A', // Medium Gray (if you want a border)
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
