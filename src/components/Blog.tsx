import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How We Built Our Glitch Engine',
      excerpt: 'Deep dive into the technical challenges of creating intentional bugs that look beautiful.',
      date: '2024-01-15',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'The Art of Broken Physics',
      excerpt: 'Why we decided to make physics engines that purposely malfunction in interesting ways.',
      date: '2024-01-08',
      readTime: '5 min read'
    },
    {
      id: '3',
      title: 'Building a Studio in LATAM',
      excerpt: 'Our journey from bedroom coders to a sustainable indie studio, and the challenges we faced.',
      date: '2024-01-01',
      readTime: '12 min read'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Dev <span className="text-blue-500">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-mono max-w-2xl mx-auto">
            Behind-the-scenes stories, technical deep-dives, and random experiments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors duration-200">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center text-cyan-500 font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                <span className="mr-2">Read more</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-green-500 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-magenta-green/25  gap-3 min-w-[200px]">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;