'use client';  // Ensures the component is treated as a client component

import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/Umrah.jpg', // Background image for the hero section
          translateY: [-10, 20], // Reverse parallax effect (image moves slower than scroll)
          scale: [1, 1.1], // Subtle zoom effect on scroll
          shouldAlwaysCompleteAnimation: true,
        },
        {
          children: (
            <div className="text-center relative z-10">
              <motion.h1
                className="text-5xl font-bold text-white mb-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                Anwaar Al Harmain Travel and Tours
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                Your trusted partner for a blessed Umrah journey.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <a
                  href="/services"
                  className="bg-[#B38E5D] text-white py-3 px-6 rounded-full hover:bg-[#D2B48C] transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg"
                >
                  Explore Our Packages
                </a>
              </motion.div>
            </div>
          ),
          translateY: [0, 10], // Slight vertical movement for the text as you scroll
          opacity: [1, 1], // Keeps the text fully visible
          shouldAlwaysCompleteAnimation: true,
        }
      ]}
      className="h-screen flex items-center justify-center overflow-hidden"
    />
  );
};

export default Hero;
