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
        'Edit gaming videos for Instagram using After Effects and Topaz AI',
        'Boosted engagement through trend-based content and collaborated with marketing for audience targeting',
        'Created 50+ professional gaming videos',
        'Mastered video editing workflows and content creation strategies'
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
      description: 'Collaborated with moderators and community managers to suggest improvements post-discovery, showcasing a commitment to ethical hacking and system improvement.',
      achievements: [
        'Automated user access, session handling, and daily cookie refresh updates',
        'Collaborated with moderators and community managers',
        'Demonstrated commitment to ethical hacking and system improvement',
        'Contributed to real-world vulnerability detection'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'previous'
    },
    {
      id: 3,
      title: 'Bolt Hackathon - Participant',
      company: 'Hackathon',
      location: 'Online',
      period: '2024',
      description: 'Presented InfoHub platform concept - a unified full-stack application solving daily life, business, and emergency alert needs.',
      achievements: [
        'Presented InfoHub platform concept to industry experts',
        'Developed unified full-stack application solving daily life, business, and emergency alerts',
        'Demonstrated technical expertise in React, PHP, MySQL',
        'Gained valuable feedback on platform scalability and implementation'
      ],
      skills: ['React', 'PHP', 'MySQL', 'Presentation', 'Problem Solving'],
      type: 'previous'
    }
  ];

  const certifications = [
    {
      name: 'Build Your First Chatbot',
      issuer: 'IBM SkillsBuild',
      date: '2024',
      icon: Award
    },
    {
      name: 'Explore Text-to-Speech using IBM Watson',
      issuer: 'IBM SkillsBuild',
      date: '2024',
      icon: Award
    },
    {
      name: 'Use Generative AI for Software Development',
      issuer: 'IBM SkillsBuild',
      date: '2024',
      icon: Award
    },
    {
      name: 'Canva Design Achievement',
      issuer: 'Canva',
      date: '2024',
      icon: Award
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maharshi Dayanand University',
      location: 'Rohtak, Haryana',
      period: '2022 - 2025',
      status: 'completed'
    },
    {
      degree: 'Class 12 - Non-Medical (CBSE)',
      institution: 'SDM Memorial High School',
      location: 'Kiloi',
      period: '2022',
      status: 'completed'
    },
    {
      degree: 'Class 10 (CBSE)',
      institution: 'Indian Public Sports School',
      location: 'India',
      period: '2020',
      status: 'completed'
    },
    {
      degree: 'Class 10 (CBSE)',
      institution: 'Indian Public Sports School',
      location: 'India',
      period: '2020',
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Building expertise through hands-on projects, continuous learning, and real-world applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800 dark:text-white">Work Experience</h3>
              <div className="relative">
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
                
                <div className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className={`relative pl-16 sm:pl-20 group ${
                        exp.type === 'current' ? 'transform scale-105' : ''
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="absolute left-4 sm:left-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                      
                      <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        exp.type === 'current' ? 'border-2 border-yellow-400' : 'border border-gray-200 dark:border-gray-700'
                      }`}>
                        {exp.type === 'current' && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-2 py-1 rounded-full">
                            Current
                          </div>
                        )}
                        
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                            <p className="text-base sm:text-lg text-yellow-600 font-medium">{exp.company}</p>
                          </div>
                          <div className="text-left sm:text-right text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
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

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-yellow-600" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 text-yellow-800 dark:text-yellow-300 text-xs font-medium rounded-full"
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
            <div className="space-y-6 lg:space-y-8">
              {/* Education */}
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={edu.degree}
                      className={`p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                        edu.status === 'current' ? 'border-l-4 border-yellow-400' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm">{edu.degree}</h4>
                      <p className="text-xs text-yellow-600 font-medium">{edu.institution}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{edu.location} • {edu.period}</p>
                      {edu.status === 'current' && (
                        <span className="inline-block mt-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-5 h-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 dark:text-white text-sm">{cert.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Stats */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black rounded-2xl p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Career Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Projects Completed</span>
                    <span className="text-xl sm:text-2xl font-bold">3+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Certifications</span>
                    <span className="text-xl sm:text-2xl font-bold">4+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Technologies Mastered</span>
                    <span className="text-xl sm:text-2xl font-bold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Learning Dedication</span>
                    <span className="text-xl sm:text-2xl font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;