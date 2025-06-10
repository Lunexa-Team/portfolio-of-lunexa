import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Lunexa</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a href="#quote" className="text-gray-700 hover:text-blue-600 transition-colors">Get a Quote</a>
          </nav>

          <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Be a Client
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
              <a href="#quote" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Get a Quote</a>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Be a Client
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;