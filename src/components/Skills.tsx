import React from 'react';
import { Code, Database, Brain, Palette, Cloud, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['PHP', 'MySQL', 'Node.js', 'REST APIs', 'Database Design', 'Server Management'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['OpenAI APIs', 'ChatGPT Integration', 'AI Bolt', 'Text-to-Speech', 'Generative AI', 'IBM Watson'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Design & Editing',
      skills: ['After Effects', 'Topaz AI', 'Canva Design', 'UI/UX Design', 'Video Editing', 'VFX'],
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: ['Netlify', 'Git', 'VS Code', 'ElevenLabs', 'MS Office', 'Web Security'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Python'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group glass rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <span className="text-gray-300">{skill}</span>
                    <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                        style={{ width: `${75 + Math.random() * 25}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Build Your First Chatbot', issuer: 'IBM SkillsBuild', year: '2024' },
              { name: 'Explore Text-to-Speech using IBM Watson', issuer: 'IBM SkillsBuild', year: '2024' },
              { name: 'Use Generative AI for Software Development', issuer: 'IBM SkillsBuild', year: '2024' },
              { name: 'Canva Design Achievement', issuer: 'Canva', year: '2024' }
            ].map((cert, index) => (
              <div
                key={cert.name}
                className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-lg mb-2">{cert.name}</h4>
                <p className="text-cyan-400 mono text-sm">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;