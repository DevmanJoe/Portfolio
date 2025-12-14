'use client';

import { motion } from 'framer-motion';
import { 
  User, Award, BookOpen, Briefcase, 
  CheckCircle, Download, MapPin, Phone, Mail 
} from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const certifications = [
    'AWS Certified Developer',
    'React Professional Certification',
    'Python Django Certification',
    'TypeScript Advanced Certification'
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Senior Fullstack Developer with 8+ years of experience building scalable applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-start mb-6">
                  <div className="p-1 bg-blue-600 text-white rounded-full mr-4">
                    <Image src="https://media.licdn.com/dms/image/v2/D4D03AQEShH2Yrtw9Og/profile-displayphoto-scale_200_200/B4DZrgyyaUHsAY-/0/1764708003855?e=2147483647&v=beta&t=BFQP1LJCyRHPkgoU9Abva7Kf5K_eJWjjtNOzPS1tjIQ" width={100} height={100} className='rounded-full' alt='Joseph Abu'/>
                  </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Joseph Abu</h3>
                  <p className="text-gray-600 dark:text-gray-400">Senior Fullstack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With over 8 years of professional experience, I specialize in building 
                scalable web and mobile applications using modern technologies. 
                My expertise spans across the entire development stack, delivering 
                high-quality solutions that drive business growth.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">josephabu808@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+234 701 277 5182</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Kaduna, Nigeria</span>
                </div>
              </div>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Started as a Frontend Developer in 2015, transitioned to Fullstack 
                development in 2017, and have been leading projects and mentoring 
                teams since 2020. Throughout my career, I've worked with startups 
                and established companies across various industries.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Built apps serving 500k+ users',
                  'Improved performance by 40%+',
                  'Mentored 10+ developers',
                  'Published 20+ articles',
                  'Led 15+ major projects',
                  'Reduced load time by 60%'
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Philosophy</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in writing clean, maintainable code and following best 
                practices. Passionate about performance optimization, user 
                experience, and staying current with technology trends. Committed 
                to delivering value through technical excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
              {[
                { value: '8+', label: 'Years Exp' },
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '15+', label: 'Tech Stack' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}