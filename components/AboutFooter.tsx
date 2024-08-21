'use client';

const AboutFooter = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Anwaar Al Harmain Travel and Tours. All Rights Reserved.</p>
        <p>
          Designed with care by our team, dedicated to providing the best Umrah experience.
        </p>
      </div>
    </footer>
  );
};

export default AboutFooter;