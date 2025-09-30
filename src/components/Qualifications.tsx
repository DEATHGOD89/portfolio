import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Qualifications: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maharshi Dayanand University',
      location: 'Rohtak, Haryana',
      year: '2025',
      status: 'Completed'
    },
    {
      degree: 'Class 12 - Non-Medical (CBSE)',
      institution: 'SDM Memorial High School',
      location: 'Kiloi',
      year: '2022',
      status: 'Completed'
    },
    {
      degree: 'Class 10 (CBSE)',
      institution: 'Indian Public Sports School',
      location: 'India',
      year: '2020',
      status: 'Completed'
    }
  ];

  const certifications = [
    {
      title: 'Build Your First Chatbot',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      type: 'AI Development'
    },
    {
      title: 'Explore Text-to-Speech Using IBM Watson',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      type: 'AI/ML'
    },
    {
      title: 'Use Generative AI for Software Development',
      issuer: 'IBM SkillsBuild',
      year: '2024',
      type: 'AI Development'
    },
    {
      title: 'Canva Design Achievement',
      issuer: 'Canva',
      year: '2024',
      type: 'Design',
      description: 'Created 50+ Visual Designs'
    }
  ];

  const achievements = [
    {
      title: 'BOLT Hackathon Participant',
      description: 'Presented InfoHub Platform concept - a unified full-stack application solving daily life, business, and emergency alerts',
      year: '2024'
    },
    {
      title: 'Security Research',
      description: 'Successfully identified vulnerabilities in platforms like Eldorado.gg, Brave Browser, Norton360, and StackBlitz',
      year: '2023-2024'
    }
  ];

  return (
    <section id="qualifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-6">
              <span className="gradient-text">Qualifications</span> & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
              Educational background, certifications, and notable achievements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-2xl font-bold text-white dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-gold-400 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-gray-400 dark:text-gray-400 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 dark:text-gray-400 text-sm mb-2">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.year}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Completed' 
                            ? 'bg-green-400/10 text-green-400 border border-green-400/20' 
                            : 'bg-gold-400/10 text-gold-400 border border-gold-400/20'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-2xl font-bold text-white dark:text-white">Certifications</h3>
              </div>
              
              <div className="space-y-4 mb-12">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white dark:text-white mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-gold-400 text-sm mb-1">{cert.issuer}</p>
                        {cert.description && (
                          <p className="text-gray-400 dark:text-gray-400 text-sm">{cert.description}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 dark:text-gray-400 text-sm">{cert.year}</span>
                        <div className="mt-1">
                          <span className="px-2 py-1 bg-gold-400/10 text-gold-400 text-xs rounded-full border border-gold-400/20">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-gold-400 mr-2" />
                <h4 className="text-xl font-bold text-white dark:text-white">Key Achievements</h4>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl hover-lift">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-white dark:text-white">{achievement.title}</h5>
                      <span className="text-gold-400 text-sm">{achievement.year}</span>
                    </div>
                    <p className="text-gray-400 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Qualifications;