'use client';

import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, ArrowRight, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-16 md:pt-0">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
              <Code2 className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">8+ Years Experience</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Fullstack Developer
              <span className="text-blue-600 dark:text-blue-400 block"> & Software Engineer</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              I build scalable web and mobile applications using modern technologies.
              Passionate about clean code, performance optimization, and creating
              exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors flex items-center justify-center sm:justify-start"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://github.com/devmanjoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/joseph-abu-917671325/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/devmanjoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="mailto:josephabu808@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              
              <div className="relative z-10 w-full max-w-md">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`// Joseph Abu - Fullstack Developer\nconst expertise = {\n  frontend: ['React', 'Next.js', 'TypeScript'],\n  backend: ['Python', 'Django'],\n  mobile: ['React Native'],\n  tools: ['Git', 'AWS', 'Docker']\n};`}</code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="flex justify-center mt-6 space-x-4 sm:space-x-8">
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">8+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg text-center">
                <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">30+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
