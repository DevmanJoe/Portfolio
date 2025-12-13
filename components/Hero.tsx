'use client';

import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Code2 className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">8+ Years Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fullstack Developer
              <span className="text-blue-600 block"> & Software Engineer</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              I build scalable web and mobile applications using modern technologies.
              Passionate about clean code, performance optimization, and creating
              exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://github.com/devmanjoe/" className="text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/joseph-abu-917671325/" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="mailto:josephabu808@gmail.com" className="text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              
              {/* Animated code blocks */}
              <div className="relative z-10 w-full max-w-md">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-green-400 text-sm">
                    <code>{`// Fullstack Developer\nconst skills = {\n  frontend: ['React', 'Next.js', 'TypeScript'],\n  backend: ['Python', 'Django', 'Node.js'],\n  mobile: ['React Native'],\n  tools: ['Git', 'AWS', 'Docker']\n};`}</code>
                  </pre>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-white text-sm">
                    <span className="text-blue-400">async</span>{' '}
                    <span className="text-yellow-400">function</span>{' '}
                    <span className="text-green-400">buildProject</span>() {'{'}
                    <div className="ml-4">
                      <span className="text-purple-400">await</span>{' '}
                      <span className="text-pink-400">design</span>();
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">await</span>{' '}
                      <span className="text-pink-400">develop</span>();
                    </div>
                    <div className="ml-4">
                      <span className="text-purple-400">await</span>{' '}
                      <span className="text-pink-400">deploy</span>();
                    </div>
                    {'}'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">500K+</div>
              <div className="text-xs text-gray-500">Users Served</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">50+</div>
              <div className="text-xs text-gray-500">Projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}