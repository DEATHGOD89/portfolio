import React from 'react';
import { Code, Brain, Server, Zap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    { icon: Code, text: 'Frontend Development' },
    { icon: Server, text: 'Backend Architecture' },
    { icon: Brain, text: 'AI Integration' },
    { icon: Zap, text: 'Performance Optimization' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                I'm a passionate developer who thrives on creating innovative solutions that bridge 
                the gap between complex technology and user-friendly experiences.
              </p>
              
              <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                With expertise spanning from frontend frameworks to AI integration, I bring a 
                comprehensive approach to every project. My goal is to build applications that 
                not only function flawlessly but also provide exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'PHP', 'MySQL', 'Node.js', 'OpenAI APIs'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 glass-card text-gold-400 text-sm font-medium rounded-full border border-gold-400/20 hover:scale-110 transition-transform duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl hover-lift group animate-fadeInUp hover:rotate-1 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <highlight.icon className="w-8 h-8 text-gold-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-pulse" />
                  <h3 className="text-white dark:text-white light:text-gray-900 font-semibold text-sm leading-tight">
                    {highlight.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;