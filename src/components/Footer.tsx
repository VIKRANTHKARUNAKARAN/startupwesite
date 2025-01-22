import React from 'react';
import { Flame, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">Pyrogurad</span>
            </div>
            <p className="text-gray-400">
              Building exceptional digital experiences through innovative development solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Full-Stack Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <a href="mailto:contact@pyroguard.dev" className="hover:text-white transition-colors">contact@pyroguard.dev</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">9003746486</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Coimbatore,Tamilnadu,India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pyroguard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}