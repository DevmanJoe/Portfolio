'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { 
  ExternalLink, Github, Code, Server,
  Smartphone, Filter, ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'fullstack', label: 'Fullstack', icon: Server },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'fullstack') 
      return project.technologies.includes('Next.js') && project.technologies.includes('Django');
    if (selectedFilter === 'mobile') 
      return project.technologies.includes('React Native');
    if (selectedFilter === 'frontend')
      return project.technologies.includes('React') || project.technologies.includes('Next.js');
    return true;
  });

  return (
    <section id="projects" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in fullstack development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                {filter.label}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{project.title.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-5 md:mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      <Github className="h-4 w-4 md:h-5 md:w-5 mr-1.5" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                      >
                        <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-1.5" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                    <span className="mr-1.5">Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Years Experience', value: '8+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Technologies', value: '15+' },
          ].map((stat, index) => (
            <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}