'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '/path/to/customer-support-image.png', // replace with actual path
    title: '24/7 Customer Support',
    description: 'Our team is available round the clock to assist you with any inquiries or concerns.',
  },
  {
    icon: '/path/to/refunds-image.png', // replace with actual path
    title: 'Refunds within 48 hours',
    description: 'We offer quick and easy refunds processed within 48 hours of request.',
  },
  {
    icon: '/path/to/secure-transaction-image.png', // replace with actual path
    title: 'Secure Transaction Guaranteed',
    description: 'Your transactions are protected and encrypted for maximum security.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-[#f4f4f4]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img 
              src={feature.icon} 
              alt={feature.title} 
              className="h-16 w-auto mx-auto mb-4 object-contain" 
              loading="lazy" 
            />
            <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
