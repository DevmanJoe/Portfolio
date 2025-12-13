'use client';

import { motion } from 'framer-motion';
import { 
  User,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Download
} from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const certifications = [
    'AWS Certified Developer',
    'React Professional Certification',
    'Python Django Certification',
    'TypeScript Advanced Certification'
  ];

  const achievements = [
    'Built applications serving 500k+ users',
    'Improved performance by 40%+ across multiple projects',
    'Mentored 10+ junior developers',
    'Published 20+ technical articles'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-1 bg-blue-600 text-white rounded-full mr-4">
                    <Image src="https://media.licdn.com/dms/image/v2/D4D03AQEShH2Yrtw9Og/profile-displayphoto-scale_200_200/B4DZrgyyaUHsAY-/0/1764708003855?e=2147483647&v=beta&t=BFQP1LJCyRHPkgoU9Abva7Kf5K_eJWjjtNOzPS1tjIQ" width={100} height={100} className='rounded-full' alt='Joseph Abu'/>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Joseph Abu</h3>
                    <p className="text-gray-600">Senior Fullstack Developer</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  With over 8 years of professional experience, I specialize in building 
                  scalable web and mobile applications using modern technologies. 
                  My expertise spans across the entire development stack, from 
                  frontend interfaces to backend systems and mobile applications.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-600">
                Started as a Frontend Developer in 2015, transitioned to Fullstack 
                development in 2017, and have been leading projects and mentoring 
                teams since 2020. Throughout my career, I've worked with startups 
                and established companies, delivering high-quality solutions that 
                drive business growth.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Philosophy</h3>
              </div>
              <p className="text-gray-600">
                I believe in writing clean, maintainable code and following best 
                practices. I'm passionate about performance optimization, user 
                experience, and staying up-to-date with the latest technologies. 
                Always focused on delivering value through technical excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
              {[
                { value: '8+', label: 'Years Experience' },
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '15+', label: 'Technologies' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}