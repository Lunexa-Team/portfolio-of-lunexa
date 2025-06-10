import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-12 w-12 text-blue-400 mx-auto mb-8" />
        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
          "With Procure, collaboration is smoother—and it's the little
          quality-of-life touches that make working together truly
          effortless."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">AM</span>
          </div>
          <div className="text-left">
            <div className="font-semibold">Amelia Martinez</div>
            <div className="text-gray-400">Head of Design, Procure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;