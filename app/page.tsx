import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../styles/globals.css';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
