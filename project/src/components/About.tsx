import React from 'react';
import { User, Award, Target, Heart, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Self-driven Full-Stack Developer and AI enthusiast with passion for creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white">Who I Am</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Full-Stack Developer and AI enthusiast with 3+ completed projects spanning 
                  frontend/backend, UI/UX, and secure database integration. Currently pursuing BCA from 
                  Maharshi Dayanand University, Rohtak.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white">What I Do</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in React, PHP, MySQL, and OpenAI APIs. Known for solving real-world problems 
                  using automation, and committed to delivering scalable, user-centric applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold dark:text-white">Education</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Bachelor of Computer Applications (BCA) from Maharshi Dayanand University, Rohtak, Haryana. 
                  Completed: 2025. Strong foundation in computer science and programming.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 sm:p-8 text-black transform hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">3+</div>
                    <div className="text-xs sm:text-sm font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">2+</div>
                    <div className="text-xs sm:text-sm font-medium">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">4+</div>
                    <div className="text-xs sm:text-sm font-medium">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                    <div className="text-xs sm:text-sm font-medium">Dedication</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-yellow-300/20 rounded-full animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-white">My Philosophy</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Self-driven Full-Stack Developer and AI enthusiast with 3+ completed projects spanning 
                Committed to delivering scalable, user-centric applications. Demonstrated deep understanding 
                of web application security, session validation, and access control mechanisms, contributing 
                Passing year: 2025. Also completed Class 12 Non-Medical (CBSE) from SDM Memorial High School, 
                Kiloi in 2022, and Class 10 (CBSE) from Indian Public Sports School in 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;