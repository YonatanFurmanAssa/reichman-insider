import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Reichman Insider</h2>
            <p className="text-blue-200">Your source for the latest news and insights from Reichman University.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200">
          <p>&copy; 2024 Reichman Insider. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;