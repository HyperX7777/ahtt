'use client';

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ServicesSection from '../../components/ServicesSection';
import Testimonials from '../../components/Testimonials';
import PreviewPackages from '../../components/PreviewPackages';
import Footer from '../../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <ServicesSection />
      <PreviewPackages />
      <Testimonials />
      <Footer />
    </ParallaxProvider>
  );
}
