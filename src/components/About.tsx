import React from 'react';
import { Code, Brain, Server, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    { icon: Code, text: 'Frontend Architecture' },
    { icon: Server, text: 'Backend Systems' },
    { icon: Brain, text: 'AI Integration' },
    { icon: Zap, text: 'Performance Tuning' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 ${darkMode ? 'bg-crimson-600' : 'bg-crimson-300'}`} />
        <div className={`absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 ${darkMode ? 'bg-red-800' : 'bg-red-300'}`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className={`text-4xl md:text-6xl font-display font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              System <span className="gradient-text">Identity</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-crimson-500 to-crimson-700 mx-auto rounded-full glow-crimson"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content */}
            <div className="space-y-8">
              <motion.p variants={itemVariants} className={`text-xl md:text-2xl leading-relaxed font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate developer who thrives on creating innovative solutions that bridge 
                the gap between complex technology and <span className="font-medium text-crimson-500">user-friendly experiences</span>.
              </motion.p>
              
              <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                With expertise spanning from frontend frameworks to AI integration, I bring a 
                comprehensive approach to every project. My goal is to build applications that 
                not only function flawlessly but also provide exceptional, visceral user experiences.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'MySQL', 'Node.js', 'OpenAI APIs', 'Video Editing', 'FastAPI', 'Python'].map((tech, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.1, backgroundColor: darkMode ? 'rgba(220, 38, 38, 0.2)' : 'rgba(220, 38, 38, 0.1)' }}
                    className={`px-5 py-2.5 text-sm font-display font-medium tracking-wide rounded-lg border transition-colors ${
                      darkMode 
                        ? 'border-crimson-900/40 bg-black/50 text-crimson-400 shadow-[0_0_10px_rgba(220,38,38,0.05)]' 
                        : 'border-crimson-200 bg-white text-crimson-600 shadow-sm'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`p-8 rounded-2xl border transition-all duration-300 group ${
                    darkMode 
                      ? 'bg-black/40 backdrop-blur-md border-crimson-900/30 hover:border-crimson-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]' 
                      : 'bg-white border-gray-200 hover:border-crimson-300 hover:shadow-xl'
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                  >
                    <highlight.icon className={`w-10 h-10 mb-6 ${darkMode ? 'text-crimson-500' : 'text-crimson-600'}`} />
                  </motion.div>
                  <h3 className={`font-display font-bold text-lg leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {highlight.text}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;