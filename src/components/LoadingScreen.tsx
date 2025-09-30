import React, { useEffect, useState } from 'react';
import { Sparkles, Code, Zap, Star, Cpu, Globe, Database, Brain } from 'lucide-react';

interface LoadingScreenProps {
  darkMode: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ darkMode, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  
  const loadingTexts = [
    'Initializing Neural Networks...',
    'Loading AI Capabilities...',
    'Compiling Code Architecture...',
    'Syncing Database Connections...',
    'Optimizing Performance...',
    'Preparing User Interface...',
    'Almost Ready...',
    'Welcome to the Future!'
  ];

  const floatingIcons = [Code, Zap, Star, Cpu, Globe, Database, Brain];

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowWelcome(true);
          setTimeout(() => onLoadingComplete(), 2000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      
      {/* Animated Matrix Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-gold-400/20 via-transparent to-gold-600/20' : 'bg-gradient-to-r from-black/10 via-transparent to-gray-800/10'
        } animate-pulse`}></div>
        
        {/* Moving Grid Lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className={`absolute h-px w-full ${darkMode ? 'bg-gold-400/10' : 'bg-black/5'} animate-pulse`}
              style={{
                top: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`v-${i}`}
              className={`absolute w-px h-full ${darkMode ? 'bg-gold-400/10' : 'bg-black/5'} animate-pulse`}
              style={{
                left: `${i * 5}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-ping`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Rotating Geometric Shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer Ring */}
        <div className={`w-[600px] h-[600px] border-2 rounded-full animate-spin ${
          darkMode ? 'border-gold-400/20' : 'border-black/20'
        }`} style={{ animationDuration: '30s' }}>
          {/* Floating Icons on Ring */}
          {floatingIcons.map((Icon, index) => (
            <div
              key={index}
              className="absolute w-8 h-8"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${index * (360 / floatingIcons.length)}deg) translateY(-300px) rotate(-${index * (360 / floatingIcons.length)}deg)`,
              }}
            >
              <Icon className={`w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'} animate-pulse`} />
            </div>
          ))}
        </div>
        
        {/* Middle Ring */}
        <div className={`absolute w-96 h-96 border-2 rounded-full animate-spin ${
          darkMode ? 'border-gold-400/30' : 'border-black/30'
        }`} style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
          {/* Dots on Middle Ring */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-pulse`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-192px)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Inner Ring */}
        <div className={`absolute w-64 h-64 border-4 rounded-full animate-spin ${
          darkMode ? 'border-gold-400/50' : 'border-black/50'
        }`} style={{ animationDuration: '15s' }}>
          {/* Inner Glow */}
          <div className={`absolute inset-4 rounded-full ${
            darkMode 
              ? 'bg-gradient-to-br from-gold-400/20 to-gold-600/20' 
              : 'bg-gradient-to-br from-black/10 to-gray-800/10'
          } animate-pulse`}></div>
        </div>
      </div>

      {/* Central Loading Hub */}
      <div className="relative z-10 text-center">
        {/* Main Logo with Pulsing Effect */}
        <div className="mb-12 relative">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${
            darkMode 
              ? 'bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600' 
              : 'bg-gradient-to-br from-black via-gray-800 to-gray-900'
          } shadow-2xl relative overflow-hidden`}>
            
            {/* Rotating Inner Ring */}
            <div className={`absolute inset-2 border-2 rounded-full animate-spin ${
              darkMode ? 'border-black/30' : 'border-white/30'
            }`} style={{ animationDuration: '4s' }}></div>
            
            {/* Main Icon */}
            <Sparkles className={`w-16 h-16 ${darkMode ? 'text-black' : 'text-white'} animate-spin relative z-10`} 
              style={{ animationDuration: '6s' }} />
            
            {/* Pulsing Glow Effect */}
            <div className={`absolute inset-0 rounded-full ${
              darkMode 
                ? 'bg-gradient-to-br from-gold-400 to-gold-600' 
                : 'bg-gradient-to-br from-black to-gray-800'
            } animate-ping opacity-20`}></div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
            <Code className={`absolute w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'} -top-4 left-1/2 transform -translate-x-1/2 animate-bounce`} />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
            <Zap className={`absolute w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'} -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce`} />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <Brain className={`absolute w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'} top-1/2 -left-4 transform -translate-y-1/2 animate-bounce`} />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }}>
            <Database className={`absolute w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'} top-1/2 -right-4 transform -translate-y-1/2 animate-bounce`} />
          </div>
        </div>

        {/* Animated Brand Name */}
        <div className="mb-8">
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {['B', 'h', 'u', 'p', 'e', 'n', 'd', 'e', 'r'].map((letter, index) => (
              <span 
                key={index}
                className={`inline-block animate-bounce ${
                  showWelcome ? 'animate-pulse' : ''
                } ${darkMode ? 'hover:text-gold-400' : 'hover:text-gray-600'} transition-colors duration-300`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: showWelcome ? '0.5s' : '2s'
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="h-8 mb-6">
            <p className={`text-lg font-medium transition-all duration-500 ${
              darkMode ? 'text-gold-400' : 'text-black'
            } ${showWelcome ? 'animate-pulse text-2xl' : ''}`}>
              {showWelcome ? '🚀 Ready to Explore!' : loadingTexts[currentText]}
            </p>
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="w-96 mx-auto mb-8">
          {/* Progress Bar Container */}
          <div className={`relative w-full h-3 rounded-full overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          } shadow-inner`}>
            {/* Progress Fill */}
            <div 
              className={`h-full transition-all duration-300 ease-out relative ${
                darkMode 
                  ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600' 
                  : 'bg-gradient-to-r from-black via-gray-700 to-gray-900'
              }`}
              style={{ width: `${progress}%` }}
            >
              {/* Animated Shine Effect */}
              <div className={`absolute inset-0 ${
                darkMode ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-gradient-to-r from-transparent via-white/50 to-transparent'
              } animate-pulse`}></div>
              
              {/* Moving Highlight */}
              <div className={`absolute top-0 right-0 w-8 h-full ${
                darkMode ? 'bg-white/40' : 'bg-white/60'
              } animate-pulse`}></div>
            </div>
          </div>
          
          {/* Progress Info */}
          <div className="flex justify-between mt-3">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {showWelcome ? 'Complete!' : 'Loading...'}
            </span>
            <span className={`text-sm font-bold ${darkMode ? 'text-gold-400' : 'text-black'}`}>
              {progress.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Loading Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
          <div className={`glass-card p-4 rounded-lg text-center ${
            progress > 30 ? 'animate-fadeIn' : 'opacity-0'
          }`}>
            <div className={`text-2xl font-bold ${darkMode ? 'text-gold-400' : 'text-black'} animate-pulse`}>15+</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
          </div>
          <div className={`glass-card p-4 rounded-lg text-center ${
            progress > 60 ? 'animate-fadeIn' : 'opacity-0'
          }`}>
            <div className={`text-2xl font-bold ${darkMode ? 'text-gold-400' : 'text-black'} animate-pulse`}>3+</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years</div>
          </div>
          <div className={`glass-card p-4 rounded-lg text-center ${
            progress > 90 ? 'animate-fadeIn' : 'opacity-0'
          }`}>
            <div className={`text-2xl font-bold ${darkMode ? 'text-gold-400' : 'text-black'} animate-pulse`}>100%</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Passion</div>
          </div>
        </div>

        {/* Floating Tech Stack Icons */}
        <div className="relative h-16 mb-6">
          {['React', 'TypeScript', 'PHP', 'MySQL', 'AI', 'Node.js'].map((tech, index) => (
            <div
              key={tech}
              className={`absolute left-1/2 transform -translate-x-1/2 ${
                progress > index * 15 ? 'animate-fadeIn' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.3}s`,
                transform: `translateX(-50%) translateY(${Math.sin(Date.now() * 0.001 + index) * 10}px)`
              }}
            >
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                darkMode 
                  ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' 
                  : 'bg-black/10 text-black border border-black/20'
              } animate-pulse`}>
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Welcome Message */}
        {showWelcome && (
          <div className="animate-fadeIn">
            <div className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-gold-400' : 'text-black'
            } animate-pulse`}>
              ✨ Portfolio Loaded Successfully! ✨
            </div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Entering the digital realm...
            </p>
          </div>
        )}

        {/* Subtitle */}
        {!showWelcome && (
          <p className={`text-sm font-light tracking-wider uppercase ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          } animate-pulse`}>
            Full-Stack Developer & AI Enthusiast
          </p>
        )}
      </div>

      {/* Corner Animations */}
      <div className={`absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 ${
        darkMode ? 'border-gold-400/50' : 'border-black/50'
      } animate-pulse`}></div>
      <div className={`absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 ${
        darkMode ? 'border-gold-400/50' : 'border-black/50'
      } animate-pulse`}></div>
      <div className={`absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 ${
        darkMode ? 'border-gold-400/50' : 'border-black/50'
      } animate-pulse`}></div>
      <div className={`absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 ${
        darkMode ? 'border-gold-400/50' : 'border-black/50'
      } animate-pulse`}></div>

      {/* Scanning Line Effect */}
      <div className={`absolute inset-0 ${
        darkMode ? 'bg-gradient-to-b from-transparent via-gold-400/10 to-transparent' : 'bg-gradient-to-b from-transparent via-black/5 to-transparent'
      } h-2 animate-ping`} 
        style={{
          top: `${progress}%`,
          animationDuration: '2s'
        }}
      ></div>

      {/* DNA Helix Animation */}
      <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
        <div className="relative w-2 h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-ping`}
              style={{
                top: `${i * 12.5}%`,
                left: `${Math.sin(i * 0.5 + Date.now() * 0.005) * 20}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Mirror DNA Helix */}
      <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
        <div className="relative w-2 h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-ping`}
              style={{
                top: `${i * 12.5}%`,
                right: `${Math.sin(i * 0.5 + Date.now() * 0.005) * 20}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Completion Burst Effect */}
      {showWelcome && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-ping`}
              style={{
                transform: `rotate(${i * 30}deg) translateY(-100px)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;