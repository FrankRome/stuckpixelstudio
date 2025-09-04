import React from 'react';
import { ExternalLink, Download, Clock, CheckCircle, Zap } from 'lucide-react';
import type { Game } from '../types';

const Games: React.FC = () => {
  const games: Game[] = [
    {
      id: '1',
      title: 'Pixel Drift',
      description: 'A glitchy racing game where physics are more like suggestions.',
      coverImage: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Released',
      platforms: {
        itch: 'https://stuckpixel.itch.io/pixel-drift',
        steam: 'https://store.steampowered.com/app/pixeldrift'
      }
    },
    {
      id: '2',
      title: 'Memory Leak',
      description: 'A puzzle platformer about a sentient bug trying to escape its own code.',
      coverImage: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Early Access',
      platforms: {
        itch: 'https://stuckpixel.itch.io/memory-leak'
      }
    },
    {
      id: '3',
      title: 'Null Pointer Exception',
      description: 'Coming soon: An existential crisis simulator.',
      coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Prototype',
      platforms: {}
    }
  ];

  const getStatusIcon = (status: Game['status']) => {
    switch (status) {
      case 'Released':
        return <CheckCircle className="h-4 w-4" />;
      case 'Early Access':
        return <Zap className="h-4 w-4" />;
      case 'Prototype':
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: Game['status']) => {
    switch (status) {
      case 'Released':
        return 'bg-green-500 text-white';
      case 'Early Access':
        return 'bg-yellow-500 text-black';
      case 'Prototype':
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="games" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Our <span className="text-red-500">Games</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono max-w-2xl mx-auto">
            Experimental games that break rules and expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.coverImage}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono ${getStatusColor(game.status)}`}>
                    {getStatusIcon(game.status)}
                    {game.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {game.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {game.description}
                </p>

                <div className="flex gap-3">
                  {game.platforms.itch && (
                    <a
                      href={game.platforms.itch}
                      className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Itch.io
                    </a>
                  )}
                  {game.platforms.steam && (
                    <a
                      href={game.platforms.steam}
                      className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4" />
                      Steam
                    </a>
                  )}
                  {!game.platforms.itch && !game.platforms.steam && (
                    <button className="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg font-semibold text-sm cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;