'use client';

import { motion } from 'framer-motion';
import { packages } from '../data/packages'; // Assuming packages data is in this path

const previewPackages = [
  packages.find(pkg => pkg.category === 'Economy'),
  packages.find(pkg => pkg.category === 'Economy+'),
  packages.find(pkg => pkg.category === 'Star'),
];

const PreviewPackages = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPackages.map((service, index) => (
            service && (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
              >
                {/* Image Placeholder */}
                <div className="w-full h-40 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={service.image || '/placeholder-image.png'}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <motion.a
                  href="/services"
                  className="text-[#B38E5D] hover:text-[#D2B48C] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.a>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewPackages;
