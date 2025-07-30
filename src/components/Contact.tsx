import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
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
      link: 'mailto:bhupendersingh123456789011@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91-8295205166',
      link: 'tel:+918295205166'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Rohtak, Haryana, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/DEATHGOD89/DEATHGOD89'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/bhupender-deathgod-b18758279'
    },
    {
      icon: ExternalLink,
      name: 'Netlify',
      url: 'https://app.netlify.com/teams/deathgod89/projects'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
                    onClick={() => item.link && window.open(item.link, '_self')}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-cyan-400 text-sm mono break-all">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200 text-white"
                    placeholder="Let's discuss your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-200 resize-none text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's turn your ideas into reality with modern web technologies and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:bhupendersingh123456789011@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Send Email
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;