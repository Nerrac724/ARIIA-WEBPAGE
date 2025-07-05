import React from 'react';
import { Download, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-900 to-accent-purple dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Floating Innovation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent-teal/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent-purple/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-primary-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* ARIIA Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <Award className="w-6 h-6 text-accent-gold mr-3" />
            <span className="text-white font-semibold text-lg">ARIIA Ranked Institution</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Innovation Excellence
          </h1>
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold text-accent-gold mb-6">
            ARIIA Rankings Portal
          </h2>
          <p className="font-poppins text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Atal Ranking of Institutions on Innovation Achievements - Showcasing SPIT's commitment to fostering innovation, entrepreneurship, and startup ecosystem
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <a
              href=""
              className="inline-flex items-center px-8 py-4 bg-accent-gold hover:bg-accent-gold/90 text-dark-900 font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Latest ARIIA Report 2023
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};