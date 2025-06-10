import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-400 to-teal-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-32 h-32 bg-white/20 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg"></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Enough about us, your project might be our next big thing!
            </h2>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;