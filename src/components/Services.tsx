import React from 'react';
import { Code, Smartphone, Brain, Palette, Share2, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Beautiful, responsive websites built with cutting-edge technologies. We create custom solutions that are fast, secure, and Commerce platforms.'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Product Development',
      description: 'End-to-end product development from ideation to launch. We build scalable solutions that grow with your business performance and modern UI.'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Development',
      description: 'AI-powered solutions that automate processes and enhance user experiences. We integrate advanced AI technologies into your products.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'UI/UX design interface that enhance user engagement and satisfaction. We create intuitive digital experiences.'
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Social Media Marketing',
      description: 'Social media marketing and digital strategy solutions designed to enhance brand awareness and drive business growth.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Product Design',
      description: 'Product design concept ideation, prototyping, designing, and developing innovative solutions across all platforms.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expertise That Drives Success
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-900 text-white p-8 rounded-lg hover:bg-blue-800 transition-colors">
              <div className="text-blue-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-blue-200 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;