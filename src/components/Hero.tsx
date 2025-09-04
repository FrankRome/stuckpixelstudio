import React from 'react';
import { Play, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-8xl font-black mb-4 relative">
            <span className="glitch-text bg-gradient-to-r from-blue-500 via-red-500 to-green-500 bg-clip-text text-transparent">
              STUCK PIXEL
            </span>
            <br />
            <span className="text-4xl sm:text-6xl text-gray-800 dark:text-gray-200">
              STUDIO
            </span>
          </h1>
        </div>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-mono mb-12 max-w-2xl mx-auto leading-relaxed">
          We make <span className="text-green-500 font-bold">weird</span> & <span className="text-red-500 font-bold">fun</span> games
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-8 py-4 bg-green-500 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-magenta-green/25 flex items-center gap-3 min-w-[200px]">
            <Play className="h-6 w-6 group-hover:animate-pulse" />
            Play our Games
          </button>
          
          <button className="group px-8 py-4 bg-red-500 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center gap-3 min-w-[200px]">
            <Heart className="h-6 w-6 group-hover:animate-pulse" />
            Join our Patreon
          </button>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-magenta-500 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-20 animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;