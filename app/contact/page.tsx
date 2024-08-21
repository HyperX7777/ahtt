import Image from 'next/image';

const ContactPage = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-700">
              If you have any questions or need further information, feel free to contact us.
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> Near Meezan Bank Kutchary Road, Sialkot.
            </p>
            <p className="text-gray-700">
              <strong>LandLine:</strong> +92-52-4570059
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@anwaaralharmain.com
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Logos Section */}
        <div className="mt-12 flex justify-center items-center space-x-8">
          <Image src="/Commerce.jpg" alt="Sialkot Chamber of Commerce Logo" width={80} height={80}/>
          <Image src="/IATA.jpg" alt="IATA Logo" width={80} height={80}/>
          <Image src="/Ministry.jpg" alt="Ministry of Hajj and Umrah Logo" width={80} height={80}/>
          <Image src="/Tourist.jpg" alt="Department of Tourist Services Logo" width={80} height={80}/>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
