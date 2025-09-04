import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Games', href: '#games' },
    { name: 'Community', href: '#community' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
           <img src="/img/icon.png" width="32" height="32"></img>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-green-500 bg-clip-text text-transparent">
             &nbsp; Stuck Pixel Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 px-3 py-2 text-sm font-mono font-medium transition-colors duration-200 hover:underline hover:decoration-cyan-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
           

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 block px-3 py-2 text-base font-mono font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
