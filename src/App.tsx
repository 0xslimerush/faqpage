import React from 'react';
import { ChevronDown } from 'lucide-react';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF3366] to-[#FF6B4D] text-transparent bg-clip-text">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Everything you need to know about Fareplay's revolutionary mint burn protocol
        </p>
        <FAQ />
      </div>
    </div>
  );
}

export default App;