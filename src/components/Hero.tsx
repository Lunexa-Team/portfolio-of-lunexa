const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            At Lunexa, we craft future-ready digital solutions
            <br />
            <span className="text-blue-600">inspired by innovation, precision, and limitless</span>
            <br />
            technological possibility.
          </h1>
          
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Tell us about your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;