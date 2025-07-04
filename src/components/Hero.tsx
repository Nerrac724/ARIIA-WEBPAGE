import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-900 to-accent-purple dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Sardar Patel Institute of Technology
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            NBA Accreditations and Autonomy Certificates - Excellence in Engineering & Technical Education
          </p>
          
          {/* Latest NBA Report Button */}
          <div className="flex justify-center mb-12">
            <a
              href="/assets/NBA_25.pdf"
              className="inline-flex items-center px-8 py-4 bg-accent-gold hover:bg-accent-gold/90 text-dark-900 font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Latest NBA Report
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">5</div>
              <div className="text-gray-300 font-medium">NBA Accreditations</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-teal mb-2">2</div>
              <div className="text-gray-300 font-medium">Autonomy Certificates</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">100%</div>
              <div className="text-gray-300 font-medium">Industry Ready</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-teal mb-2">Tier-1</div>
              <div className="text-gray-300 font-medium">NBA Rating</div>
            </div>
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