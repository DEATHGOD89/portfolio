import React from 'react';
import { Github, Linkedin, Mail, Code, Heart, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DEATHGOD89/DEATHGOD89', label: 'GitHub' },
    { icon: Linkedin, href: 'http://www.linkedin.com/in/bhupender-deathgod-b18758279', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:bhupendersingh123456789011@gmail.com', label: 'Email' },
    { icon: ExternalLink, href: 'https://app.netlify.com/teams/deathgod89/projects', label: 'Netlify' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'AI Integration',
    'UI/UX Design',
    'Video Editing',
    'Content Creation',
    'Consulting'
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                &lt;Bhupender/&gt;
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer and AI enthusiast passionate about creating exceptional digital experiences. 
              Always learning, always building, always pushing boundaries.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Bhupender. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of ☕</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-medium">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;