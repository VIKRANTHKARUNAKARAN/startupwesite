import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-900/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
          Buid Your Vision with <span className="text-orange-500">Pyroguard</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Connect with top-tier developers and bring your digital dreams to life. From web applications to mobile solutions, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center justify-center gap-2 group">
            Get Started
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
            View Portfolio
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10 bg-cover bg-center" />
    </div>
  );
}