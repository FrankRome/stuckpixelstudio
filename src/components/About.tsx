import React from 'react';
import { Users, MapPin, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-500">Story</span>
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
               We’re Stuck Pixel Studio — a Latin American boy band that makes video games.
                Three friends, one mission: to create weird, fun, and fresh gaming experiences. We mix code, art, and a bit of chaos to ship games that don’t take themselves too seriously — but still hit hard.
              </p>
              <p>
             <span className="text-red-500">Luife</span> is a game developer from Cuba, represented by the color Red. With strong programming skills and a passion for building interactive systems, he transforms concepts into polished and engaging gameplay experiences.
              </p>
              <p>
                 <span className="text-green-500">Santi</span> is a Venezuelan developer represented by the color Green. Specializing in pixel art and animations, he brings the visual identity of our games to life with vibrant style and attention to detail.
              </p>
              <p>
                <span className="text-blue-500">Fran Nabo</span>  is a mexican developer represented by the color Blue. Beyond coding, he brings his talent for music and sound design, shaping the atmosphere and emotional impact of our games through unique audio experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg mb-3">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-400">3 Developers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-magenta-500/10 rounded-lg mb-3">
                  <MapPin className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-400">LATAM Based</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-3">
                  <Code className="h-6 w-6 text-green-500" />
                </div>
                <p className="text-sm font-mono text-gray-600 dark:text-gray-400">Est. 2025</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 via-magenta-500/20 to-green-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <img
              src="/img/icon.png"
                alt="Stuck Pixel Studio Team"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-mono text-sm">The team behind the pixels</p>
              </div>
            </div>
            
            {/* Floating pixel decorations */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-magenta-500 opacity-20 animate-bounce animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
