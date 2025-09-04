import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
               <img src="img/icon.png" width="32" height="32"></img>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                &nbsp;  Stuck Pixel Studio
              </span>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Making weird & fun games since 2021. 
              Expect the unexpected.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#games" className="block text-gray-400 hover:text-red-500 font-mono text-sm transition-colors duration-200">
                Our Games
              </a>
              <a href="#community" className="block text-gray-400 hover:text-blue-500 font-mono text-sm transition-colors duration-200">
                Join Community
              </a>
              <a href="#blog" className="block text-gray-400 hover:text-red-500 font-mono text-sm transition-colors duration-200">
                Dev Blog
              </a>
              <a href="mailto:hello@stuckpixelstudio.com" className="block text-gray-400 hover:text-blue-500 font-mono text-sm transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-500 font-mono text-sm transition-colors duration-200">
                Patreon
              </a>
              <a href="#" className="block text-gray-400 hover:text-blue-500 font-mono text-sm transition-colors duration-200">
                Discord
              </a>
              <a href="#" className="block text-gray-400 hover:text-blue-500 font-mono text-sm transition-colors duration-200">
                Press Kit
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-mono text-sm flex items-center gap-2">
              Made with bugs & <Coffee className="h-4 w-4 text-green-500" /> in LATAM — © 2024 Stuck Pixel Studio
            </p>
            <p className="text-gray-500 font-mono text-xs flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> and questionable coding practices
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
