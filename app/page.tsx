'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';  // Import the new ServicesSection component
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <ServicesSection />
      <Testimonials />
      <Footer />
    </ParallaxProvider>
  );
}
