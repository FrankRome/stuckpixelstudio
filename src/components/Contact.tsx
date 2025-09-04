import React from 'react';
import { Mail, Download, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/stuckpixelgame', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: ' https://www.instagram.com/stuckpixelstudio', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@stuckpixelstudio', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Press & <span className="text-green-500">Contact</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono max-w-2xl mx-auto">
            Get in touch for press inquiries, collaborations, or just to say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in <span className="text-green-500">Touch</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">Email us</p>
                    <a 
                      href="mailto:hello@stuckpixelstudio.com"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-cyan-500 transition-colors duration-200"
                    >
                      contact@stuckpixelstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-magenta-500/10 rounded-lg">
                    <Download className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">Press Kit</p>
                    <button className="text-lg font-semibold text-gray-900 dark:text-white hover:text-magenta-500 transition-colors duration-200">
                      Download Assets
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Kit Details */}
            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Press Kit Contents
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-mono text-sm">
                <li>• High-res studio logos</li>
                <li>• Game screenshots & artwork</li>
                <li>• Developer biographies</li>
                <li>• Studio fact sheet</li>
                <li>• Interview questions</li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Follow <span className="text-green-500">Us</span>
            </h3>
            
            <div className="grid gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 ${link.color} group`}
                >
                  <link.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {link.name}
                  </span>
                  <ArrowRight className="h-4 w-4 ml-auto text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                For Business Inquiries
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Interested in collaborations, publishing deals, or featuring our games? 
                We'd love to hear from you at our main contact email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;