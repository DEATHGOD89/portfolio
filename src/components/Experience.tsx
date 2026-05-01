import React, { useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the section for the timeline glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Developing scalable web applications using React, PHP, and MySQL. Integrating AI capabilities with OpenAI APIs to enhance user experiences.',
      achievements: [
        'Built 10+ production-ready applications',
        'Integrated AI features in 5+ projects',
        'Improved application performance by 40%'
      ]
    },
    {
      title: 'AI Integration Specialist',
      company: 'Various Projects',
      period: '2022 - Present',
      location: 'Remote',
      description: 'Specializing in implementing AI-powered features and automations using OpenAI APIs and machine learning technologies.',
      achievements: [
        'Implemented chatbot solutions',
        'Created automated content generation systems',
        'Developed AI-powered data analysis tools',
        'Collaborated with moderators and community managers to suggest improvements post-discovery, showcasing a commitment to ethical hacking and system improvement',
        'Automated user access, session handling, and daily cookie refresh updates'
      ]
    }
  ];

  return (
    <section id="experience" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              <span className="gradient-text">Experience</span> Architecture
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crimson-500 to-crimson-700 mx-auto rounded-full glow-crimson mb-8"></div>
          </motion.div>
          
          <div className="relative">
            {/* Background Timeline Line */}
            <div className="absolute left-8 md:left-0 top-0 bottom-0 w-px bg-crimson-900/30"></div>
            
            {/* Glowing Scroll Progress Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-8 md:left-0 top-0 w-px bg-crimson-500 shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"
            />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16 md:pl-12">
                  
                  {/* Timeline Nodes */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="absolute left-[30px] md:left-[-6px] top-6 w-3 h-3 bg-black border-2 border-crimson-500 rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                  />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 rounded-2xl relative group overflow-hidden border border-crimson-900/20 hover:border-crimson-500/50 transition-colors"
                  >
                    {/* Hover Glow Effect inside card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-crimson-600/0 via-crimson-600/5 to-crimson-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 relative z-10">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-crimson-500 font-medium text-lg mb-3 tracking-wide">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2 text-crimson-600" />
                          <span className="text-sm font-medium tracking-wider uppercase">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-crimson-600" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-crimson-500 mr-2" />
                        <span className="text-white font-display font-bold tracking-wide">Key Deployments</span>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start group/item">
                            <span className="w-1.5 h-1.5 bg-crimson-600 group-hover/item:bg-crimson-400 group-hover/item:shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full mt-2 mr-4 flex-shrink-0 transition-colors duration-300"></span>
                            <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors duration-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;