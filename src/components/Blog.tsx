import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, Code2 } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications with TypeScript, including component architecture, state management, and performance optimization.',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'React',
      icon: Code2,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Integrating AI into Web Applications: A Practical Guide',
      excerpt: 'Discover how to seamlessly integrate OpenAI APIs into your web applications, from chatbots to content generation and data analysis.',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'AI',
      icon: Lightbulb,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Modern PHP Development: Best Practices for 2024',
      excerpt: 'Explore modern PHP development techniques, frameworks, and tools that make backend development more efficient and maintainable.',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Backend',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 8 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="glass-card rounded-xl overflow-hidden hover-lift group animate-fadeInUp hover:rotate-1 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-gold-400 text-black' 
                        : 'bg-black text-white'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg">
                      <article.icon className="w-5 h-5 text-gold-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors duration-300 group-hover:translate-x-2 transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Articles Button */}
          <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <button className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${
              darkMode 
                ? 'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black' 
                : 'border-2 border-black text-black hover:bg-black hover:text-white'
            }`}>
              <BookOpen className="w-5 h-5 mr-2" />
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;