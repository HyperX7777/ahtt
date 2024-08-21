'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaPlaneDeparture, FaKaaba, FaPhoneAlt, FaUsers } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gradient-to-r from-white to-gray-100 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/AHTT.jpg" alt="Anwaar Al Harmain Logo" width={60} height={60} className="cursor-pointer" />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="flex items-center text-black hover:text-yellow-500 transition duration-300">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="flex items-center text-black hover:text-yellow-500 transition duration-300">
              <FaPlaneDeparture className="mr-2" /> Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center text-black hover:text-yellow-500 transition duration-300">
              <FaUsers className="mr-2" /> About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center text-black hover:text-yellow-500 transition duration-300">
              <FaPhoneAlt className="mr-2" /> Contact Us
            </Link>
          </li>
        </ul>

        {/* Umrah Login Button */}
        <Link href="https://www.anwaaralharmain.com/apps/login.php" passHref>
          <button className="bg-green-600 text-white py-2 px-4 ml-4 rounded hover:bg-green-700 transition duration-300">
            Umrah Login
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
