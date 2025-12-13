'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Settings,
  CheckCircle 
} from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  mobile: Smartphone,
  tools: Settings,
};

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500',
  mobile: 'from-green-500 to-emerald-500',
  tools: 'from-orange-500 to-red-500',
};

export default function Skills() {
  const categories = ['frontend', 'backend', 'mobile', 'tools'] as const;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 8 years of experience, I've mastered a diverse set of technologies
            across the full stack development spectrum.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    ['--tw-gradient-from' as string]: categoryColors[category].split(' ')[0].split('-')[2],
                    ['--tw-gradient-to' as string]: categoryColors[category].split(' ')[1].split('-')[2],
                  }}
                />
                
                <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${categoryColors[category]} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 capitalize">
                    {category} Development
                  </h3>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'RESTful API Design',
              'Responsive Design',
              'Performance Optimization',
              'Agile/Scrum Methodologies',
              'CI/CD Pipelines',
              'Database Design',
              'Testing & Debugging',
              'Code Review'
            ].map((skill, index) => (
              <div key={skill} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}