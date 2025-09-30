import React from 'react';
import { ExternalLink, Github, Zap, Database, Globe, Chrome, Youtube, Star } from 'lucide-react';
import ProjectFilter from './ProjectFilter';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const projects = [
    {
      title: 'MakeMoney Platform',
      url: 'https://challange1makemoney.netlify.app/',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      description: 'A comprehensive platform for monetization strategies and financial growth with advanced analytics and user management.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      featured: true,
      category: 'web'
    },
    {
      title: 'BoltBrowser',
      url: 'https://endearing-beijinho-428a65.netlify.app/',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Chrome,
      description: 'Modern web browser interface with advanced features, sleek design, and optimized performance for enhanced browsing experience.',
      tech: ['React', 'Modern UI', 'Performance Optimization', 'Responsive Design'],
      featured: true,
      category: 'web'
    },
    {
      title: 'InfoHub Platform',
      url: 'https://infohub-powerd-boltnew.netlify.app/',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Database,
      description: 'Information management system with advanced data processing capabilities and real-time updates.',
      tech: ['React', 'API Integration', 'Modern UI', 'Data Visualization'],
      featured: true,
      category: 'ai'
    },
    {
      title: 'YouTube Channel',
      url: 'https://www.youtube.com/@Randomgrandshorts/videos',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Youtube,
      description: 'Creative video content showcasing development tutorials, project demos, and tech insights for the developer community.',
      tech: ['Video Production', 'Content Creation', 'Educational Content', 'Tech Tutorials'],
      featured: true,
      category: 'content'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              borderRadius: Math.random() > 0.7 ? '50%' : '0%',
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>
          
          {/* Project Filter */}
          <ProjectFilter 
            darkMode={darkMode} 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Featured Projects */}
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl overflow-hidden hover-lift group relative animate-fadeInUp hover:rotate-1 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "low"}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-3 py-1 bg-gold-400 text-black text-xs font-bold rounded-full animate-pulse hover:scale-110 transition-transform duration-300">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-gold-400 group-hover:animate-spin" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gold-400/10 text-gold-400 text-xs rounded-full border border-gold-400/20 hover:scale-110 hover:bg-gold-400/20 transition-all duration-300 animate-fadeInUp"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl text-sm"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2 animate-pulse">4+</div>
              <div className="text-gray-300 text-sm">Live Projects</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2 animate-pulse">100%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2 animate-pulse">15+</div>
              <div className="text-gray-300 text-sm">Technologies</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2 animate-pulse">3+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-1 gap-6">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover-lift group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <project.icon className="w-6 h-6 text-gold-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;