import React from 'react';
import { Code, Database, Smartphone, Cloud, Palette, Zap, Brain, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['PHP', 'MySQL', 'Node.js', 'REST APIs', 'Database Design', 'Server Management'],
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['OpenAI APIs', 'ChatGPT Integration', 'AI Bolt', 'Text-to-Speech', 'Generative AI', 'IBM Watson'],
      color: 'from-yellow-300 to-yellow-500'
    },
    {
      icon: Palette,
      title: 'Design & Editing',
      skills: ['After Effects', 'Topaz AI', 'Canva Design', 'UI/UX Design', 'Video Editing', 'VFX'],
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: ['Netlify', 'Git', 'VS Code', 'ElevenLabs', 'MS Office', 'Web Security'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Zap,
      title: 'Programming Languages',
      skills: ['C', 'C++', 'JavaScript', 'TypeScript', 'PHP', 'Python'],
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  const certifications = [
    {
      name: 'Build Your First Chatbot',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      icon: Award
    },
    {
      name: 'Explore Text-to-Speech using IBM Watson',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      icon: Award
    },
    {
      name: 'Use Generative AI for Software Development',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      icon: Award
    },
    {
      name: 'Canva Design Achievement',
      issuer: 'Canva',
      year: '2024',
      icon: Award
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              A comprehensive toolkit for building modern, scalable applications and AI solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-100 dark:border-gray-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 hover:from-yellow-100 hover:to-yellow-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 transform hover:scale-105"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full transform transition-all duration-1000 group-hover:scale-x-100`}
                    style={{ width: `${85 + Math.random() * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
              <Award className="w-6 h-6 text-yellow-600" />
              Certifications & Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white text-xs sm:text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 sm:p-8 text-black">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of modern development and AI innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;