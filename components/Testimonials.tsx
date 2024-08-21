const testimonials = [
    {
      quote: "The best Umrah experience I've ever had! Highly recommended.",
      name: "Ali Ahmed",
    },
    {
      quote: "Amazing service and support throughout the journey.",
      name: "Fatima Zahra",
    },
    {
      quote: "Truly a blessed experience. Everything was perfectly organized.",
      name: "Omar Khalid",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-green-600 font-semibold text-right">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  