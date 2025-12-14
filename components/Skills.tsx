'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { 
  Code2, Database, Smartphone, Settings,
  ChevronDown, ChevronUp
} from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  mobile: Smartphone,
  tools: Settings,
};

const categoryLabels = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  mobile: 'Mobile Development',
  tools: 'Dev Tools & Others'
};

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('frontend');

  const categories = ['frontend', 'backend', 'mobile', 'tools'] as const;

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With 8+ years of experience, I've mastered a diverse set of technologies
            across the full stack development spectrum.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(skill => skill.category === category);
            const isExpanded = expandedCategory === category;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{categoryLabels[category]}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {categorySkills.length} skills
                      </p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'RESTful API Design',
              'Responsive Design',
              'Performance Optimization',
              'Agile/Scrum',
              'CI/CD Pipelines',
              'Database Design',
              'Testing & Debugging',
              'Code Review'
            ].map((skill, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}