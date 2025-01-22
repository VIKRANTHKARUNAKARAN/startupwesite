import React from 'react';
import { Code, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Database,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development services including backend, database, and infrastructure.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive development solutions to help you build and scale your digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors group"
            >
              <service.icon className="h-12 w-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}