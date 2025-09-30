import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, Clock, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bhupendersingh123456789011@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative bg-gray-900 dark:bg-gray-900 light:bg-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gold-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 8}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together 
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Get in Touch */}
            <div className="animate-fadeInLeft">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gold-400 rounded-lg flex items-center justify-center mr-3 animate-pulse">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">Get in Touch</h3>
              </div>
              
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, I'll do my best to get back to you!
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Email Card */}
                <div className="glass-card p-6 rounded-xl hover-lift animate-fadeInUp hover:rotate-1 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold-400 rounded-lg flex items-center justify-center mr-4 animate-pulse hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">Email</h4>
                      <p className="text-gold-400 font-medium">bhupendersingh123456789011@gmail.com</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Send me an email anytime!</p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="glass-card p-6 rounded-xl hover-lift animate-fadeInUp hover:rotate-1 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold-400 rounded-lg flex items-center justify-center mr-4 animate-pulse hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">Phone</h4>
                      <p className="text-gold-400 font-medium">+91-8295205166</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Available for calls</p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="glass-card p-6 rounded-xl hover-lift animate-fadeInUp hover:rotate-1 transition-all duration-500" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gold-400 rounded-lg flex items-center justify-center mr-4 animate-pulse hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-1">Location</h4>
                      <p className="text-gold-400 font-medium">Rohtak, Haryana, India</p>
                      <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Available for remote work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect with me */}
              <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <h4 className="text-white dark:text-white light:text-gray-900 font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/DEATHGOD89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bhupender-deathgod-b18758279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 glass-card rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gold-400 text-black p-4 rounded-lg inline-flex items-center animate-fadeInUp hover:scale-105 transition-transform duration-300" style={{ animationDelay: '1s' }}>
                <Clock className="w-5 h-5 mr-3" />
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-sm opacity-90">Usually within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="animate-fadeInRight">
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-800/50 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-800/50 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Let's discuss your project"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-800/50 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:scale-105 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 dark:text-gray-300 light:text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-800/50 light:bg-white border border-gray-700 dark:border-gray-700 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:scale-105 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold py-4 px-6 rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl flex items-center justify-center animate-fadeInUp"
                  style={{ animationDelay: '0.6s' }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 mt-24 pt-12 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Bhupender. Made with ❤️ and lots of ☕
              </p>
              <button
                onClick={scrollToTop}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;