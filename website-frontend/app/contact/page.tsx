'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');

  // Define the type for the event parameter
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', contact: '', message: '' }); // Reset form
    } else {
      setSuccessMessage('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: '#2C2C2C' }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              className="mt-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13460.18113556233!2d74.5375249!3d32.4982188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eebe4549c7b55%3A0xce36c357cb048614!2sAnwaar%20Al%20Harmain%20Travel%20and%20Tours!5e0!3m2!1sen!2s!4v1724497096170!5m2!1sen!2s"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className="space-y-4"
              onSubmit={handleSubmit}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <label htmlFor="name" className="block" style={{ color: '#4A4A4A' }}>Name</label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block" style={{ color: '#4A4A4A' }}>Email</label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>
              <div>
                <label htmlFor="contact" className="block" style={{ color: '#4A4A4A' }}>Contact Number</label>
                <motion.input
                  type="text"
                  id="contact"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block" style={{ color: '#4A4A4A' }}>Message</label>
                <motion.textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded text-black"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-[#B38E5D] text-white py-2 px-4 rounded hover:bg-[#D2B48C] transition"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Send Message
              </motion.button>
              {successMessage && (
                <motion.p
                  className="mt-4 text-green-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  {successMessage}
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default ContactPage;
