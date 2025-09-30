import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-5 h-5 text-gold-400 mr-2" />
            <p className="text-gray-400">
              Crafted with <Heart className="w-4 h-4 text-red-500 mx-1 inline fill-current" /> and passion
            </p>
            <Sparkles className="w-5 h-5 text-gold-400 ml-2" />
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold gradient-text">Bhupender</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">Full-Stack Developer</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; 2025 Bhupender Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;