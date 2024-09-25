import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPlane, FaHotel, FaPassport, FaKaaba } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials';
import Search from '../components/Search';
import FeaturesSection from '../components/FeaturesSection'; 
import StatsSection from '../components/StatsSection'; 
import FeaturedPartners from '../components/FeaturedPartners';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f4f4f4] min-h-screen py-16">
        {/* Other components */}
        <Search />

        {/* Options: Flights, Hotels, Visa, Umrah Packages */}
        <section className="container mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Other sections */}
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Partners Section */}
        <FeaturedPartners />

      </main>
      <Footer />
    </>
  );
}
