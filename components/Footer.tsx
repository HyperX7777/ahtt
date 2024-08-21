const Footer = () => {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-3">
            If you have any questions or need further information, feel free to contact us.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> Near Meezan Bank Kutchary Road, Sialkot.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>LandLine:</strong> +92-52-4570059
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> info@anwaaralharmain.com
          </p>
        </div>
        {/* Logos Section */}
        <div className="container mx-auto mt-6 flex justify-end items-center space-x-6">
          <img src="/Commerce.jpg" alt="Sialkot Chamber of Commerce Logo" className="h-10"/>
          <img src="/IATA.jpg" alt="IATA Logo" className="h-10"/>
          <img src="/Ministry.jpg" alt="Ministry of Hajj and Umrah Logo" className="h-10"/>
          <img src="/Tourist.jpg" alt="Department of Tourist Services Logo" className="h-10"/>
        </div>
      </section>
    );
  };
  
  export default Footer;
  