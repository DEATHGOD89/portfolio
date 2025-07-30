import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Marketing & Content Creation',
      company: 'BOO World',
      location: 'Remote',
      period: 'Mar 2023 - Present',
      description: 'Created and edited gaming videos for Instagram using After Effects and Topaz AI. Boosted engagement through trend-based content.',
      achievements: [
        'Created 50+ gaming videos with professional editing',
        'Increased engagement by 40% through trend analysis',
        'Collaborated with marketing team for audience targeting',
        'Mastered After Effects and Topaz AI workflows'
      ],
      skills: ['After Effects', 'Topaz AI', 'Content Creation', 'Social Media Marketing'],
      type: 'current'
    },
    {
      id: 2,
      title: 'Website Development Project',
      company: 'Freelance',
      location: 'Remote',
      period: 'Dec 2023 - Mar 2024',
      description: 'Built a secure cookie-sharing platform using HTML, CSS, JS, PHP, and MySQL with automated user access and session handling.',
      achievements: [
        'Developed secure authentication system',
        'Implemented automated session management',
        'Created daily cookie refresh automation',
        'Delivered project on time and within budget'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'previous'
    },
    {
      id: 3,
      title: 'BOLT Hackathon Participant',
      company: 'Hackathon',
      location: 'Online',
      period: '2024',
      description: 'Presented InfoHub platform concept - a unified full-stack application solving daily life, business, and emergency alert needs.',
      achievements: [
        'Developed comprehensive platform concept',
        'Presented to panel of industry experts',
        'Gained valuable feedback on scalability',
        'Networked with fellow developers'
      ],
      skills: ['React', 'PHP', 'MySQL', 'Presentation', 'Problem Solving'],
      type: 'previous'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maharshi Dayanand University',
      location: 'Rohtak, Haryana',
      period: '2022 - 2025',
      status: 'current'
    },
    {
      degree: 'Class 12 - Non-Medical (CBSE)',
      institution: 'SDM Memorial High School',
      location: 'Kiloi',
      period: '2022',
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building expertise through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              Work Experience
            </h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative pl-20"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-slate-900 ${
                      exp.type === 'current' 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                        : 'bg-slate-600'
                    }`}></div>
                    
                    <div className={`glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 ${
                      exp.type === 'current' ? 'ring-2 ring-cyan-400/50' : ''
                    }`}>
                      {exp.type === 'current' && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Current
                        </div>
                      )}
                      
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-gray-400 mt-2 md:mt-0">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={`p-4 bg-slate-800/50 rounded-lg ${
                      edu.status === 'current' ? 'border-l-4 border-cyan-400' : ''
                    }`}
                  >
                    <h4 className="font-medium text-sm">{edu.degree}</h4>
                    <p className="text-cyan-400 text-xs font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.location} • {edu.period}</p>
                    {edu.status === 'current' && (
                      <span className="inline-block mt-2 text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Build Your First Chatbot', issuer: 'IBM SkillsBuild', year: '2024' },
                  { name: 'Text-to-Speech using IBM Watson', issuer: 'IBM SkillsBuild', year: '2024' },
                  { name: 'Generative AI for Development', issuer: 'IBM SkillsBuild', year: '2024' },
                  { name: 'Canva Design Achievement', issuer: 'Canva', year: '2024' }
                ].map((cert, index) => (
                  <div key={cert.name} className="p-3 bg-slate-800/50 rounded-lg">
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <p className="text-cyan-400 text-xs mono">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-6">Career Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Projects', value: '3+' },
                  { label: 'Certifications', value: '4+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Dedication', value: '100%' }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;