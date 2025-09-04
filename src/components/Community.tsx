import React from 'react';
import { MessageCircle, Heart, Star, Users } from 'lucide-react';

const Community: React.FC = () => {
  const patreonTiers = [
    {
      name: 'Mini pixel',
      price: '$3',
      perks: ['Early access to builds', 'Discord access', 'Dev updates'],
      color: '#3B82F6', // azul Tailwind 500
      hover: '#2563EB'  // azul Tailwind 600
    },
    {
      name: 'Pixel',
      price: '$8',
      perks: ['All previous perks', 'Vote on next game features', 'Behind-scenes content'],
      color: '#EF4444', // rojo Tailwind 500
      hover: '#DC2626'  // rojo Tailwind 600
    },
    {
      name: 'Big pixel',
      price: '$15',
      perks: ['All previous perks', 'Monthly 1-on-1 with team', 'Name in credits'],
      color: '#22C55E', // verde Tailwind 500
      hover: '#16A34A'  // verde Tailwind 600
    }
  ];


  return (
    <section id="community" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Join Our <span className="text-green-500">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono max-w-2xl mx-auto">
            Connect with fellow players, support our work, and get exclusive access to our dev process
          </p>
        </div>

        <div className="flex justify-center mb-16">
          {/* Discord Section */}
          <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-md w-full">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Discord Community
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Join our Discord server to chat with the dev team, share feedback, find other players, and get sneak peeks at upcoming projects.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                1,247 members
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Active now
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center gap-3">
              <MessageCircle className="h-5 w-5" />
              Join Discord Server
            </button>
          </div>
        </div>

        {/* Patreon Tiers */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Support Our <span className="text-red-500">Journey</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-mono">
            Help us keep making weird games and get exclusive perks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {patreonTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`bg-white dark:bg-black rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:scale-105 ${index === 1
                ? 'border-red-500 transform scale-105'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
            >
              {index === 1 && (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold font-mono mb-4 text-center">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h4>
                <div className="text-3xl font-black">
                  <span className={`text-${tier.color}-500`}>{tier.price}</span>
                  <span className="text-lg text-gray-500 dark:text-gray-400 font-normal">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4 flex-shrink-0" style={{ color: tier.color }} />
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
                <a href='https://www.patreon.com/c/Stuckpixelstudio'>
              <button
                style={{ backgroundColor: tier.color }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = tier.hover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = tier.color)}
                className="w-full px-6 py-3 text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Heart className="h-5 w-5" />
                Choose Plan
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;