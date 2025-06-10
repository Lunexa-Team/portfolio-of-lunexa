const Portfolio = () => {
  const projects = [
    {
      title: '4Ever Clothing',
      description: 'E-commerce website for clothing brand',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Hotel Booking',
      description: 'Modern hotel booking platform',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: '4Ever Clothing Mobile',
      description: 'Mobile app for clothing store',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1045741/pexels-photo-1045741.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Hotel Management',
      description: 'Complete hotel management system',
      category: 'Web Platform',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Elevating Businesses Through Innovation
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">Join the Success - Let's Add Your Project to Our Portfolio!</h3>
            <p className="mb-4">Ready to transform your business?</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;