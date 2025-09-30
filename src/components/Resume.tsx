import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/bhupender resume.pdf';
    link.download = 'Bhupender_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 mb-8">
              Download my complete resume or view it below
            </p>
            
            <button
              onClick={downloadResume}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-gold-500/25"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
          
          {/* Resume Preview */}
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-gold-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    Resume Preview
                  </h3>
                </div>
                <div className="flex items-center text-gray-400">
                  <Eye className="w-4 h-4 mr-2" />
                  <span className="text-sm">PDF Document</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <iframe 
                src="/bhupender resume.pdf"
                className="w-full h-96 md:h-[600px]"
                title="Resume Preview"
                onError={() => console.log('PDF failed to load')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;