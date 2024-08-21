import { packages } from '../../data/packages';

const groupedPackages = {
  Economy: packages.filter(pkg => pkg.category === 'Economy'),
  EconomyPlus: packages.filter(pkg => pkg.category === 'Economy+'),
  Star: packages.filter(pkg => pkg.category === 'Star'),
};

const ServicesPage = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Umrah Packages
        </h2>
        <div>
          {Object.entries(groupedPackages).map(([category, packages]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category} Packages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((service, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-green-600 mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <a
                      href={service.link}
                      className="text-green-600 hover:text-green-800 transition"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
