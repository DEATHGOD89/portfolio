import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'bhupendersingh123456789011@gmail.com',
      subtitle: 'Send me an email anytime!',
      link: 'mailto:bhupendersingh123456789011@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91-8295205166',
      subtitle: 'Available for calls',
      link: 'tel:+918295205166'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Rohtak, Haryana, India',
      subtitle: 'Available for remote work',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/DEATHGOD89/DEATHGOD89',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/bhupender-deathgod-b18758279',
      color: 'hover:text-blue-600'
    },
    {
      icon: ExternalLink,
      name: 'Netlify',
      url: 'https://app.netlify.com/teams/deathgod89/projects',
      color: 'hover:text-teal-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                  Get in Touch
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hello, I'll do my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:from-yellow-100 hover:to-yellow-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => item.link && window.open(item.link, '_self')}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                        <p className="text-yellow-600 dark:text-yellow-400 font-medium text-xs sm:text-sm break-all">{item.info}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Response Time</span>
                  </div>
                  <p className="text-sm">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-white">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                      placeholder="Let's discuss your project"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 sm:p-8 text-black">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                Let's turn your ideas into reality. I'm here to help you build something amazing with modern web technologies and AI integration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:bhupendersingh123456789011@gmail.com"
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                >
                  Send Email
                </a>
                <a
                  href="#projects"
                  className="border-2 border-black text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;