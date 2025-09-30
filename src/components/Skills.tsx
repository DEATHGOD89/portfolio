import React from 'react';
import { Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['PHP', 'Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Security']
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Design', 'Query Optimization']
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: ['OpenAI APIs', 'GPT Integration', 'AI Automation', 'Machine Learning', 'NLP']
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['Vite', 'Webpack', 'Git', 'GitHub', 'Netlify', 'Vercel']
    },
    {
      icon: Smartphone,
      title: 'Mobile & Tools',
      skills: ['Responsive Design', 'PWA', 'Performance Optimization', 'SEO', 'Analytics']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${darkMode ? 'bg-gold-400' : 'bg-black'} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 8}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Skills</span> & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl hover-lift group animate-fadeInUp hover:rotate-1 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-gold-400 mr-3 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center group/skill animate-slideInLeft"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 group-hover/skill:scale-150 group-hover/skill:animate-ping transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;