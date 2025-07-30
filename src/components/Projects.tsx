import React, { useState } from 'react';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'InfoHub - Full-Stack Portal',
      description: 'A comprehensive web platform offering business discovery, marketing tools, hackathon news, emergency alerts, and educational resources.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: 'https://infohub-powerd-boltnew.netlify.app/V',
      featured: true,
      stats: { stars: 25, users: '500+', date: '2024' }
    },
    {
      id: 2,
      title: 'MakeMoney - Challenge Platform',
      description: 'A full-stack platform that allows users to earn money by completing real-world challenges and tasks with user dashboards and leaderboards.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      technologies: ['React', 'PHP', 'MySQL', 'JavaScript', 'Netlify'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: 'https://challange1makemoney.netlify.app/',
      featured: true,
      stats: { stars: 18, users: '300+', date: '2024' }
    },
    {
      id: 3,
      title: 'Cookie Sharing Platform',
      description: 'A secure cookie-sharing platform with automated user access, session handling, and daily cookie refresh updates.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: 'https://endearing-beijinho-428a65.netlify.app/',
      featured: false,
      stats: { stars: 12, users: '150+', date: '2023' }
    },
    {
      id: 4,
      title: 'AI Chatbot Integration',
      description: 'Built and integrated AI chatbots using OpenAI APIs and IBM Watson for various client projects.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      technologies: ['OpenAI API', 'IBM Watson', 'JavaScript', 'React', 'Node.js'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: '#',
      featured: false,
      stats: { stars: 15, users: '200+', date: '2024' }
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                  : 'glass text-gray-300 hover:text-cyan-400'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-cyan-400/50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan-400/20 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.stats.users}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.stats.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DEATHGOD89/DEATHGOD89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;