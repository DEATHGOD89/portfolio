import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251, 191, 36, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)',
          filter: 'contrast(1.1) brightness(0.9)'
        }}
      />
      
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gray-900/80 dark:bg-gray-900/90 z-0"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-bounce-in text-white dark:text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-slide-in-right">
              Bhupender
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 animate-fade-in-up delay-200">
            <div className="overflow-hidden">
              <p className="animate-slide-in-up">Full-Stack Web Developer</p>
            </div>
            <div className="overflow-hidden">
              <p className="animate-slide-in-up delay-100">AI Engineer | BCA Graduate</p>
            </div>
            <div className="overflow-hidden">
              <p className="animate-slide-in-up delay-200 text-base sm:text-lg">Building digital experiences that matter</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12 animate-fade-in-up delay-400">
            <a
              href="/resume.pdf"
              download
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 animate-fade-in-up delay-600">
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
                className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 hover:rotate-12 text-white"
                aria-label={label}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-yellow-400" />
      </div>

      {/* Floating 3D Elements */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-lg animate-float transform rotate-45"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-600/20 rounded-full animate-float-delay transform rotate-12"></div>
      <div className="hidden sm:block absolute bottom-1/4 right-1/3 w-20 h-20 bg-yellow-300/20 rounded-lg animate-float-slow transform -rotate-12"></div>
    </section>
  );
};

export default Hero;