import React from 'react';
import { Moon, Sun, User, Sparkles, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'qualifications', 'experience', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'glass-card' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-200/50'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sparkles className={`w-8 h-8 ${darkMode ? 'text-gold-400' : 'text-black'}`} />
                <div className={`absolute inset-0 w-8 h-8 animate-pulse opacity-50 ${darkMode ? 'text-gold-400' : 'text-black'}`}>
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Bhupender
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors font-medium tracking-wide ${
                    activeSection === item.id
                      ? darkMode ? 'text-gold-400' : 'text-black'
                      : darkMode 
                        ? 'text-gray-300 hover:text-gold-400' 
                        : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      darkMode ? 'bg-gold-400' : 'bg-black'
                    } animate-pulse`}></div>
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'glass-card hover:bg-gray-800/50' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className={`w-5 h-5 ${darkMode ? 'text-gold-400' : 'text-black'}`} />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'glass-card hover:bg-gray-800/50' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${darkMode ? 'text-gold-400' : 'text-black'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${darkMode ? 'text-gold-400' : 'text-black'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md border-l border-gray-800' 
            : 'bg-white/95 backdrop-blur-md border-l border-gray-200'
        }`}>
          <div className="p-6 pt-20">
            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? darkMode 
                        ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30' 
                        : 'bg-black/10 text-black border border-black/20'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-800/50 hover:text-gold-400' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                  } font-medium tracking-wide animate-fadeInRight`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;