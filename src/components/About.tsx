import React from 'react';
import { User, Target, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '3+' },
    { label: 'Years Learning', value: '2+' },
    { label: 'Certifications', value: '4+' },
    { label: 'Technologies', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Self-driven developer passionate about creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full-Stack Developer and AI enthusiast with 3+ completed projects spanning 
                frontend/backend, UI/UX, and secure database integration. Currently pursuing BCA from 
                Maharshi Dayanand University, Rohtak.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React, PHP, MySQL, and OpenAI APIs. Known for solving real-world problems 
                using automation, and committed to delivering scalable, user-centric applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Bachelor of Computer Applications (BCA) from Maharshi Dayanand University, Rohtak, Haryana. 
                Expected graduation: 2025. Strong foundation in computer science and programming.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="glass rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass rounded-2xl p-8 mt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">My Philosophy</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                "Great code is not just about making things work—it's about creating solutions that are maintainable, 
                scalable, and delightful to use."
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;