import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Lunexa</h3>
            <div className="flex space-x-4">
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Where Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            ©2024 Lunexa. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            <p>info.lunexa@gmail.com</p>
            <p>+91 - 987 - 654 - 321</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;