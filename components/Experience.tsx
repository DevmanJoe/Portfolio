'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { 
  Briefcase,
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            8+ years of professional experience building scalable applications
            for various industries and clients.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'
              } lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}
            >
              {/* Timeline dot for desktop */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 md:mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <h3 className="text-lg md:text-xl font-bold">{exp.position}</h3>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2 ml-7">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium ml-7 md:ml-0">
                    <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 mb-5 md:mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}