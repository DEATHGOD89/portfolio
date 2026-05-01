import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Code2, Cpu, BrainCircuit } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Mouse Tracking Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const targetX = clientX - (window.innerWidth / 2);
      const targetY = clientY - (window.innerHeight / 2);
      mouseX.set(targetX);
      mouseY.set(targetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic Background Parallax & Glow */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 pointer-events-none"
      >
        {/* Mouse Tracking Core Glow */}
        <motion.div 
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-600/20 rounded-full blur-[150px] mix-blend-screen" 
        />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
      </motion.div>
      
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-[10%] opacity-10">
          <Code2 size={64} className={darkMode ? 'text-crimson-400' : 'text-gray-900'} />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 right-[15%] opacity-10">
          <BrainCircuit size={80} className={darkMode ? 'text-crimson-400' : 'text-gray-900'} />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 left-[20%] opacity-10">
          <Cpu size={56} className={darkMode ? 'text-crimson-400' : 'text-gray-900'} />
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacityText }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Greeting Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <div className={`px-4 py-2 rounded-full border flex items-center gap-2 backdrop-blur-md ${
              darkMode 
                ? 'border-crimson-900/50 bg-black/40 text-crimson-400' 
                : 'border-crimson-200 bg-white/60 text-crimson-600'
            }`}>
              <span className="text-sm font-display tracking-widest uppercase font-medium">System initialized</span>
            </div>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
            <br className="md:hidden" />
            <span className="relative inline-block">
              <span className="gradient-text relative z-10">Bhupender</span>
              <motion.span 
                className="absolute inset-0 bg-crimson-500 blur-2xl opacity-20 z-0"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p variants={itemVariants} className={`text-xl md:text-3xl mb-8 font-light leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Full-Stack Architect</span> & 
            <span className={`font-medium ${darkMode ? 'text-crimson-400' : 'text-crimson-600'}`}> AI Specialist</span>
          </motion.p>
          
          {/* Description */}
          <motion.p variants={itemVariants} className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Engineering sophisticated, scalable web architectures and intelligent systems. Pushing the boundaries of digital experiences.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 font-display font-bold tracking-wide uppercase text-sm rounded-xl transition-all duration-300 relative group overflow-hidden ${
                darkMode 
                  ? 'bg-crimson-600 text-accent-fg shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]' 
                  : 'bg-crimson-600 text-accent-fg shadow-lg'
              }`}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10">Initiate Contact</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 font-display font-bold tracking-wide uppercase text-sm border-2 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'border-crimson-900/50 text-white hover:bg-crimson-900/30' 
                  : 'border-gray-200 text-gray-900 hover:border-crimson-600 hover:text-crimson-600'
              }`}
            >
              View Archives
            </motion.button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.button
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={scrollToAbout}
            className={`transition-colors hover:scale-110 p-4 rounded-full border backdrop-blur-sm ${
              darkMode 
                ? 'border-crimson-900/50 text-crimson-400 bg-black/30 hover:bg-crimson-900/30 hover:text-crimson-300' 
                : 'border-gray-200 text-gray-600 bg-white/50 hover:border-crimson-300 hover:text-crimson-600'
            }`} 
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;