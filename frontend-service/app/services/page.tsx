'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { packages } from '../../data/packages';
import { FaBed, FaPlaneArrival, FaKaaba, FaPassport, FaConciergeBell } from 'react-icons/fa';

const groupedPackages = {
  Economy: packages.filter(pkg => pkg.category === 'Economy').slice(0, 3), // 3 Economy Packages
  EconomyPlus: packages.filter(pkg => pkg.category === 'Economy+').slice(0, 3), // 3 Economy+ Packages
  Star: packages.filter(pkg => pkg.category === 'Star').slice(0, 3), // 3 Star Packages
};

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Umrah Packages
          </h2>
          <div>
            {Object.entries(groupedPackages).map(([category, packages]) => (
              <div key={category} className="mb-12">
                <h3 className="text-3xl font-semibold text-center text-[#B38E5D] mb-10">{category} Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {packages.map((service, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                      {/* Image Placeholder */}
                      <div className="w-full h-40 bg-gray-200 rounded-lg mb-6">
                        <img
                          src={service.image || '/placeholder-image.png'}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-4">
                        {service.title}
                      </h4>
                      <ul className="text-gray-700 mb-6 space-y-2">
                        <li className="flex items-center">
                          <FaBed className="text-[#B38E5D] mr-2" /> 17 nights in Makkah
                        </li>
                        <li className="flex items-center">
                          <FaBed className="text-[#B38E5D] mr-2" /> 10 nights in Madinah
                        </li>
                        <li className="flex items-center">
                          <FaPlaneArrival className="text-[#B38E5D] mr-2" /> Private Transfer Airport / Makkah / Madinah
                        </li>
                        <li className="flex items-center">
                          <FaPassport className="text-[#B38E5D] mr-2" /> Umrah Visa Processing
                        </li>
                        <li className="flex items-center">
                          <FaKaaba className="text-[#B38E5D] mr-2" /> Visa Documentation
                        </li>
                        <li className="flex items-center">
                          <FaConciergeBell className="text-[#B38E5D] mr-2" /> Customer Services
                        </li>
                      </ul>
                      <a
                        href={`https://wa.me/923364449880?text=I'm interested in the ${service.title}`}
                        className="inline-block mt-4 bg-[#B38E5D] text-white py-2 px-4 rounded-lg hover:bg-[#D2B48C] transition"
                      >
                        Book Now
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
