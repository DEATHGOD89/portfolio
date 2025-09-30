import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-ping opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={`grid-h-${i}`}
            className={`absolute h-px w-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-pulse`}
            style={{
              top: `${i * 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '4s'
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`grid-v-${i}`}
            className={`absolute w-px h-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-pulse`}
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="flex items-center justify-center mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Sparkles className={`w-6 h-6 mr-2 animate-pulse ${darkMode ? 'text-gold-400' : 'text-black'}`} />
            <span className={`font-medium tracking-wider uppercase text-sm ${darkMode ? 'text-gold-400' : 'text-black'}`}>
              Welcome to my portfolio
            </span>
            <Sparkles className={`w-6 h-6 ml-2 animate-pulse ${darkMode ? 'text-gold-400' : 'text-black'}`} />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
            <span className="gradient-text animate-pulse">Bhupender</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto animate-fadeInUp ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ animationDelay: '0.6s' }}>
            Self-driven <span className={`font-medium ${darkMode ? 'text-gold-400' : 'text-black'}`}>Full-Stack Developer</span> and 
            <span className={`font-medium ${darkMode ? 'text-gold-400' : 'text-black'}`}> AI enthusiast</span> skilled in React, PHP, MySQL, and OpenAI APIs
          </p>
          
          {/* Description */}
          <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ animationDelay: '0.8s' }}>
            Passionate about building scalable and secure applications that solve real-world problems
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 shadow-gold-500/25' 
                  : 'bg-black text-white hover:bg-gray-800 shadow-gray-500/25'
              }`}
            >
              Let's Work Together
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${
                darkMode 
                  ? 'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              View My Work
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className={`animate-bounce transition-colors hover:scale-110 transform duration-300 animate-fadeInUp ${
              darkMode 
                ? 'text-gold-400 hover:text-gold-300' 
                : 'text-black hover:text-gray-700'
            }`} 
            style={{ animationDelay: '1.2s' }}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;