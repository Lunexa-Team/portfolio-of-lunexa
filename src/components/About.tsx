import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Creating
              <br />
              Digital
              <br />
              Experiences
            </h2>
            <p className="text-blue-200 mb-4">
              We craft digital experiences that elevate your brand
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Lunexa is a boutique digital solutions company based in the heart of the tech industry. We specialize in creating cutting-edge web applications, mobile apps, and comprehensive digital marketing strategies.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of experienced developers, designers, and strategists work collaboratively to deliver exceptional results that drive business growth and enhance user engagement.
            </p>
            <div className="mt-8">
              <p className="text-blue-200 font-semibold">#FutureIsNow</p>
              <p className="text-blue-200">#DigitalTransformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;