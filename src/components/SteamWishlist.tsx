import React from 'react';
import { Heart, Calendar, Users, Star, ExternalLink } from 'lucide-react';

const SteamWishlist: React.FC = () => {
  return (
    <section id="wishlist" className="py-20 bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold font-mono mb-6">
            <Star className="h-4 w-4" />
            COMING TO STEAM
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            <span className="text-red-500">Wishlist</span> Our Next Game
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono max-w-2xl mx-auto">
            Get notified when our biggest project yet launches on Steam
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Game Preview */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-red-500/20 via-blue-500/20 to-green-500/20 rounded-2xl overflow-hidden relative">
              <img
                src="/img/lavatro.png"
                alt="Lavatro - Upcoming Game"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-black text-white mb-2">
                  Lavatro <span className="text-red-500"></span>
                </h3>
                <p className="text-gray-200 font-mono text-sm">
                 Lavatro is a clothes builder where you will wash to get as many points as possible.
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 opacity-30 animate-bounce animation-delay-1000"></div>
          </div>

          {/* Game Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why <span className="text-blue-500">Wishlist</span>?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-500/10 rounded-lg flex-shrink-0">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Get Launch Discount</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Be the first to get 20% off when we launch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 rounded-lg flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Release Notification</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Steam will notify you the moment it's available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500/10 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Support Indie Devs</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Help us reach more players and keep making weird games</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Goal</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-red-500">10,000</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Wishlists</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-500">Q4 2026</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">Expected Release</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://store.steampowered.com/app/4157200/Lavatro/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-3"
              >
                <Heart className="h-6 w-6 group-hover:animate-pulse" />
                Wishlist on Steam
                <ExternalLink className="h-5 w-5" />
              </a>
              {/*
              <button className="w-full px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3">
                <Users className="h-6 w-6" />
                Join Beta Testing
              </button>
                */
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteamWishlist;