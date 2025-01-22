import React from 'react';
import { Flame, Code, Smartphone, Database, ChevronRight, Star, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/one';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;