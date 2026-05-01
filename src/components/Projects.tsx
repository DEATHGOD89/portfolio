import React, { useState } from 'react';
import { ExternalLink, Zap, Database, Chrome, Youtube, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectFilter from './ProjectFilter';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/3 left-0 w-96 h-96 rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-crimson-700' : 'bg-crimson-200'}`} />
        <div className={`absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 ${darkMode ? 'bg-red-800' : 'bg-red-300'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-6xl font-display font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crimson-500 to-crimson-700 mx-auto rounded-full glow-crimson mb-8"></div>
            <p className={`text-xl max-w-2xl mx-auto font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showcasing innovative solutions and technical expertise
            </p>
          </motion.div>
          
          {/* Project Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <ProjectFilter 
              darkMode={darkMode} 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter} 
            />
          </motion.div>
          
          <motion.div layout className="grid lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode='popLayout'>
              {/* Featured Projects */}
              {filteredProjects.filter(p => p.featured).map((project, index) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`rounded-2xl overflow-hidden border group relative flex flex-col ${
                    darkMode 
                      ? 'bg-black/60 backdrop-blur-md border-crimson-900/30 shadow-[0_0_20px_rgba(220,38,38,0.05)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:border-crimson-500/50' 
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-crimson-300'
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      loading="lazy"
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center px-3 py-1 bg-crimson-600 text-accent-fg text-xs font-bold rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                        <Star className="w-3 h-3 mr-1" />
                        FEATURED
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2.5 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-6 h-6 text-crimson-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-2xl font-display font-bold mb-3 transition-colors duration-300 ${
                      darkMode ? 'text-white group-hover:text-crimson-400' : 'text-gray-900 group-hover:text-crimson-600'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-6 leading-relaxed flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium tracking-wide rounded-full border transition-colors ${
                            darkMode 
                              ? 'bg-crimson-900/20 text-crimson-400 border-crimson-500/20 group-hover:bg-crimson-900/40' 
                              : 'bg-crimson-50 text-crimson-600 border-crimson-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-3 font-display font-bold tracking-wide uppercase text-sm rounded-xl transition-all duration-300 ${
                        darkMode
                          ? 'bg-crimson-600/10 text-crimson-400 border border-crimson-500/30 hover:bg-crimson-600 hover:text-accent-fg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                          : 'bg-white border-2 border-crimson-600 text-crimson-600 hover:bg-crimson-600 hover:text-accent-fg hover:shadow-lg'
                      }`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Project Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: '4+', label: 'Live Projects' },
              { value: '100%', label: 'Uptime' },
              { value: '15+', label: 'Technologies' },
              { value: '3+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl text-center border ${
                  darkMode 
                    ? 'bg-black/40 backdrop-blur-sm border-crimson-900/30' 
                    : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="text-4xl font-display font-bold text-crimson-500 mb-2">{stat.value}</div>
                <div className={`text-sm font-medium uppercase tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Other Projects List (Non-featured) - Keeping layout consistent but styled better */}
          <motion.div layout className="grid md:grid-cols-1 gap-4">
            <AnimatePresence>
              {filteredProjects.filter(p => !p.featured).map((project, index) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 group ${
                    darkMode 
                      ? 'bg-black/30 backdrop-blur-sm border-crimson-900/20 hover:bg-black/50 hover:border-crimson-500/30' 
                      : 'bg-white border-gray-200 hover:shadow-md hover:border-crimson-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`p-3 rounded-xl ${darkMode ? 'bg-crimson-900/20' : 'bg-crimson-50'}`}>
                        <project.icon className={`w-6 h-6 ${darkMode ? 'text-crimson-500' : 'text-crimson-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-display font-bold mb-1 transition-colors ${
                          darkMode ? 'text-white group-hover:text-crimson-400' : 'text-gray-900 group-hover:text-crimson-600'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                        darkMode 
                          ? 'text-gray-400 hover:text-crimson-400 hover:bg-crimson-900/20' 
                          : 'text-gray-400 hover:text-crimson-600 hover:bg-crimson-50'
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;