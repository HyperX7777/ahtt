import { packages } from '../data/packages';

const selectedPackages = [
  ...packages.filter(pkg => pkg.category === 'Economy').slice(0, 3),
  ...packages.filter(pkg => pkg.category === 'Economy+').slice(0, 3),
  ...packages.filter(pkg => pkg.category === 'Star').slice(0, 3),
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Umrah Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedPackages.map((service, index) => (
            service ? (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="text-green-600 hover:text-green-800 transition"
                >
                  Learn More
                </a>
              </div>
            ) : (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  Package not found
                </h3>
                <p className="text-gray-700 mb-6">
                  This package is currently unavailable.
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
