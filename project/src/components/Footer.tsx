import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp, ExternalLink, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Bhupender
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md leading-relaxed">
                Full-Stack Web Developer | Junior AI Engineer with expertise in full stack web development and AI. 
                Passionate about creating exceptional digital experiences and solving real-world problems.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, href: 'https://github.com/DEATHGOD89/DEATHGOD89', label: 'GitHub' },
                  { icon: Linkedin, href: 'http://www.linkedin.com/in/bhupender-deathgod-b18758279', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:bhupendersingh123456789011@gmail.com', label: 'Email' },
                  { icon: ExternalLink, href: 'https://app.netlify.com/teams/deathgod89/projects', label: 'Netlify' },
                  { icon: Youtube, href: 'https://www.youtube.com/@Randomgrandshorts/videos', label: 'YouTube' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-black transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm sm:text-base text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-yellow-400">Services</h3>
              <ul className="space-y-2">
                {[
                  'Web Development',
                  'AI Integration',
                  'UI/UX Design',
                  'Video Editing',
                  'Content Creation',
                  'Consulting'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-sm sm:text-base text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-sm sm:text-base text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Bhupender. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of ☕</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 sm:px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;