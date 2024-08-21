'use client';  // This line should be at the top

import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';


const Hero = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: '/Umrah.jpg',
          translateY: [0, 50], // Moves the background layer vertically
          scale: [1, 1.5], // Optional: zoom effect
          opacity: [1, 0.5], // Optional: fade effect
          shouldAlwaysCompleteAnimation: true,
        },
        {
          children: (
            <div className="text-center relative z-10">
              <motion.h1
                className="text-4xl font-bold text-white mb-4"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                Anwaar Al Harmain Travel and Tours
              </motion.h1>
              <p className="text-xl text-gray-300 mb-8">
                Your trusted partner for a blessed Umrah journey.
              </p>
              <a
                href="/services"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              >
                Explore Our Packages
              </a>
            </div>
          ),
          translateY: [0, 20],
          opacity: [1, 1],
          shouldAlwaysCompleteAnimation: true,
        }
      ]}
      className="h-screen flex items-center justify-center overflow-hidden"
    />
  );
};

export default Hero;
