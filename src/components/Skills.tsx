import React from 'react';
import { Code, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at center, #dc2626 0%, transparent 60%)',
          opacity: darkMode ? 0.05 : 0.02
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className={`text-4xl md:text-6xl font-display font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="gradient-text">Skills</span> & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crimson-500 to-crimson-700 mx-auto rounded-full glow-crimson mb-8"></div>
            <p className={`text-xl max-w-2xl mx-auto font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-black/50 backdrop-blur-md border-crimson-900/30 hover:border-crimson-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]' 
                    : 'bg-white border-gray-200 hover:border-crimson-300 hover:shadow-xl'
                }`}
              >
                <div className="flex items-center mb-8 pb-4 border-b border-crimson-900/20">
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
                    <category.icon className={`w-8 h-8 mr-4 ${darkMode ? 'text-crimson-500' : 'text-crimson-600'}`} />
                  </motion.div>
                  <h3 className={`text-xl font-display font-bold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                  className="space-y-4"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      variants={skillItemVariants}
                      className="flex items-center group/skill"
                    >
                      <div className={`w-2 h-2 rounded-full mr-4 transition-all duration-300 group-hover/skill:scale-150 ${
                        darkMode ? 'bg-crimson-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]' : 'bg-crimson-600'
                      }`}></div>
                      <span className={`transition-colors duration-200 font-medium ${
                        darkMode 
                          ? 'text-gray-400 group-hover/skill:text-white' 
                          : 'text-gray-600 group-hover/skill:text-crimson-600'
                      }`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;