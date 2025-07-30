import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer & AI Engineer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Greeting */}
        <div className="mb-8">
          <span className="mono text-cyan-400 text-lg">Hello, I'm</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
          Bhupender
        </h1>

        {/* Animated Title */}
        <div className="h-16 mb-8">
          <h2 className="text-2xl md:text-3xl text-gray-300 mono">
            <span className="typewriter">{text}</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern technologies. 
          Specializing in React, PHP, MySQL, and AI integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/resume.pdf"
            download="Bhupender_Resume.pdf"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: 'https://github.com/DEATHGOD89/DEATHGOD89', label: 'GitHub' },
            { icon: Linkedin, href: 'http://www.linkedin.com/in/bhupender-deathgod-b18758279', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:bhupendersingh123456789011@gmail.com', label: 'Email' },
            { icon: ExternalLink, href: 'https://app.netlify.com/teams/deathgod89/projects', label: 'Netlify' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-cyan-300 rounded-full opacity-50 float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;