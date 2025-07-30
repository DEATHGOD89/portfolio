import React, { useState } from 'react';
import { ExternalLink, Github, Play, Star, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'InfoHub - Full-Stack Portal',
      description: 'A unified full-stack application solving daily life, business, and emergency alert needs. Developed a web platform offering business discovery, marketing tools, hackathon news, emergency alerts, and educational resources.',
      image: '/Snapinsta.app_368538680_626274699327199_9150694561883978447_n_1080 (1).jpg',
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
      description: 'Developed a full-stack platform (https://challengemakemoney.netlify.app/) that allows users to earn money by completing real-world challenges and tasks. Implemented features such as challenge submissions, user dashboards, admin controls, and real-time leaderboards.',
      image: '/Snapinsta.app_368563576_616782460444543_8224269945196664474_n_1080 (1).jpg',
      category: 'fullstack',
      technologies: ['React', 'PHP', 'MySQL', 'JavaScript', 'Frontend & Backend'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: 'https://challange1makemoney.netlify.app/',
      featured: true,
      stats: { stars: 18, users: '300+', date: '2024' }
    },
    {
      id: 3,
      title: 'Website Development Project',
      description: 'Collaborated with moderators and community managers to suggest improvements post-discovery, showcasing a commitment to ethical hacking and system improvement. Automated user access, session handling, and daily cookie refresh updates.',
      image: '/Snapinsta.app_368672610_1365059547696951_955156712303467725_n_1080 (1).jpg',
      category: 'backend',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: 'https://endearing-beijinho-428a65.netlify.app/',
      featured: false,
      stats: { stars: 12, users: '150+', date: '2023' }
    },
    {
      id: 4,
      title: 'Game Montage & Anime Edits',
      description: 'Professional video editing projects featuring highlight reels and story-based edits using Adobe tools and VFX.',
      image: '/Snapinsta.app_368696140_702980681653563_7605688335482619292_n_1080 (1).jpg',
      category: 'design',
      technologies: ['After Effects', 'Topaz AI', 'Adobe Tools', 'VFX', 'Video Editing'],
      github: '#',
      demo: '#',
      featured: false,
      stats: { stars: 8, users: '100+', date: '2023' }
    },
    {
      id: 5,
      title: 'Security & Vulnerability Research',
      description: 'Successfully bypassed paywalls and security layers on platforms like Eldorado.gg, Brave Browser, Norton360, and StackBlitz, helping identify weaknesses and offering recommendations to improve their security and user access mechanisms.',
      image: '/Snapinsta.app_368884487_621654750107890_8246295225779460764_n_1080 (1).jpg',
      category: 'backend',
      technologies: ['Web Security', 'Vulnerability Detection', 'Security Analysis', 'Ethical Hacking'],
      github: 'https://github.com/DEATHGOD89/DEATHGOD89',
      demo: '#',
      featured: false,
      stats: { stars: 15, users: '200+', date: '2024' }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'security', name: 'Security' }
    { id: 'design', name: 'Design & Video' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Showcasing innovative solutions and technical excellence in web development and AI
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  project.featured ? 'ring-2 ring-yellow-400' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                      aria-label="Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 text-yellow-800 dark:text-yellow-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{project.stats.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/DEATHGOD89/DEATHGOD89"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;