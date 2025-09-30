import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
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
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gold-400 font-semibold text-lg mb-3">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-gold-400 mr-2" />
                    <span className="text-white font-semibold">Key Achievements</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;