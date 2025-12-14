'use client';

import { motion } from 'framer-motion';
import { 
  Code2, Github, Linkedin, Twitter, 
  Mail, Heart, ArrowUp, Send
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devmanjoe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/joseph-abu-917671325/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/devmanjoe', label: 'Twitter' },
    { icon: Mail, href: 'mailto:josephabu808@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const quickLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Code2 className="h-7 w-7 md:h-8 md:w-8 text-blue-400" />
              <span className="text-xl md:text-2xl font-bold">
                Joseph<span className="text-blue-400">.</span>Abu
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              8+ years of experience in building scalable web and mobile applications.
              Passionate about clean code and creating exceptional user experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm md:text-base"
                  >
                    <ArrowUp className="h-3 w-3 md:h-4 md:w-4 mr-2 rotate-90 transform group-hover:text-blue-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                'React', 'Next.js', 'TypeScript', 'Django',
                'Python', 'SQL', 'React Native', 'Tailwind'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Get updates on new projects and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 md:px-4 py-2 bg-gray-800 text-white rounded-l-lg outline-none text-sm md:text-base"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 md:px-4 py-2 rounded-r-lg transition-colors flex items-center">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span className="mr-1 text-sm md:text-base">© {currentYear} Joseph Abu. All rights reserved.</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
              <span className="text-sm md:text-base">Crafted with passion</span>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 md:bottom-8 md:right-8 bg-blue-600 text-white p-2.5 md:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
        </motion.button>
      </div>
    </footer>
  );
}