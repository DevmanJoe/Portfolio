import { Project, Experience, Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 98, category: 'frontend' },
  { name: 'CSS3', level: 96, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 92, category: 'frontend' },
  { name: 'React', level: 94, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'jQuery', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Bootstrap', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Python', level: 88, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 92, category: 'backend' },
  { name: 'SQL', level: 87, category: 'backend' },
  { name: 'Node.js', level: 82, category: 'backend' },
  
  // Mobile
  { name: 'React Native', level: 80, category: 'mobile' },
  
  // Tools
  { name: 'Git', level: 92, category: 'tools' },
  { name: 'AJAX', level: 88, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Fullstack Developer',
    period: '2020 - Present',
    description: [
      'Led development of scalable web applications serving 500k+ users',
      'Architected microservices using Django REST APIs and React/Next.js frontends',
      'Mentored junior developers and established coding standards',
      'Improved application performance by 40% through code optimization',
      'Implemented CI/CD pipelines for automated deployment'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    position: 'Fullstack Developer',
    period: '2017 - 2020',
    description: [
      'Developed and maintained 15+ client projects using React and Django',
      'Built responsive web applications with Bootstrap and Tailwind CSS',
      'Implemented real-time features using WebSocket and AJAX',
      'Optimized database queries improving performance by 60%',
      'Collaborated with cross-functional teams in Agile environment'
    ],
    technologies: ['React', 'Django', 'Bootstrap', 'jQuery', 'MySQL', 'AJAX', 'REST API']
  },
  {
    id: '3',
    company: 'WebDev Agency',
    position: 'Frontend Developer',
    period: '2015 - 2017',
    description: [
      'Created interactive user interfaces with HTML5, CSS3, and JavaScript',
      'Converted PSD designs to responsive web pages',
      'Implemented AJAX for seamless data loading without page refresh',
      'Built 20+ client websites and applications',
      'Ensured cross-browser compatibility and mobile responsiveness'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'PHP']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with admin dashboard',
    longDescription: 'A complete e-commerce platform built with Next.js for the frontend and Django REST Framework for the backend. Features include user authentication, product management, shopping cart, payment integration, and order tracking.',
    technologies: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'REST API'],
    imageUrl: '/projects/ecommerce.png',
    githubUrl: 'https://github.com/devmanjoe/ecommerce-platform',
    liveUrl: 'https://ecommerce.josephabu.dev',
    features: [
      'Real-time inventory management',
      'Secure payment processing with Stripe',
      'Admin dashboard with analytics',
      'Responsive mobile-first design',
      'User reviews and ratings system'
    ]
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A Trello-like task management application with real-time collaboration features. Built with React, Next.js, and Django Channels for WebSocket communication.',
    technologies: ['React', 'Next.js', 'Django Channels', 'WebSocket', 'Redis', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/projects/taskapp.png',
    githubUrl: 'https://github.com/devmanjoe/task-management',
    liveUrl: 'https://tasks.josephabu.dev',
    features: [
      'Real-time task updates',
      'Drag-and-drop interface',
      'Team collaboration features',
      'File attachments',
      'Progress tracking and reporting'
    ]
  },
  {
    id: '3',
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform fitness app with workout plans and progress tracking',
    longDescription: 'A React Native mobile application for fitness tracking with Django backend. Includes workout routines, progress charts, social features, and nutrition tracking.',
    technologies: ['React Native', 'Django REST', 'GraphQL', 'PostgreSQL', 'Expo', 'TypeScript'],
    imageUrl: '/projects/fitness.png',
    githubUrl: 'https://github.com/devmanjoe/fitness-tracker',
    features: [
      'Workout plan customization',
      'Progress analytics and charts',
      'Social sharing features',
      'Nutrition tracking',
      'Offline functionality'
    ]
  },
  {
    id: '4',
    title: 'Real Estate Portal',
    description: 'Modern real estate listing platform with advanced filters',
    longDescription: 'A comprehensive real estate portal built with Next.js and Django. Features property listings, advanced search filters, agent profiles, and mortgage calculator.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'Mapbox', 'Tailwind CSS', 'REST API'],
    imageUrl: '/projects/realestate.png',
    githubUrl: 'https://github.com/devmanjoe/real-estate-portal',
    liveUrl: 'https://realestate.josephabu.dev',
    features: [
      'Advanced property search filters',
      'Interactive map integration',
      'Agent management system',
      'Mortgage calculator',
      'Property comparison tool'
    ]
  },
  {
    id: '5',
    title: 'Blog CMS Platform',
    description: 'Content management system for bloggers and writers',
    longDescription: 'A feature-rich blogging platform built with Next.js and Django. Includes rich text editor, SEO optimization, user roles, and analytics dashboard.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'Editor.js', 'SEO', 'REST API'],
    imageUrl: '/projects/blogcms.png',
    githubUrl: 'https://github.com/devmanjoe/blog-cms',
    liveUrl: 'https://blog.josephabu.dev',
    features: [
      'Rich text editor with media support',
      'SEO optimization tools',
      'User role management',
      'Analytics dashboard',
      'Social sharing integration'
    ]
  },
  {
    id: '6',
    title: 'Learning Management System',
    description: 'Online education platform with course management',
    longDescription: 'A comprehensive LMS built with Next.js and Django for online education. Features course creation, student enrollment, video streaming, and progress tracking.',
    technologies: ['Next.js', 'Django', 'PostgreSQL', 'Video.js', 'Stripe', 'REST API'],
    imageUrl: '/projects/lms.png',
    githubUrl: 'https://github.com/devmanjoe/learning-system',
    liveUrl: 'https://learn.josephabu.dev',
    features: [
      'Course creation and management',
      'Video streaming capabilities',
      'Student progress tracking',
      'Payment integration',
      'Certificate generation'
    ]
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    content: 'Joseph transformed our e-commerce platform with his expertise in Next.js and Django. The performance improvements were remarkable.',
    avatar: '/testimonials/1.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager at StartupX',
    content: 'Working with Joseph was a game-changer for our mobile app development. His React Native skills are exceptional.',
    avatar: '/testimonials/2.jpg'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'CEO at DesignStudio',
    content: 'Joseph delivered our project ahead of schedule with excellent code quality. Highly recommended!',
    avatar: '/testimonials/3.jpg'
  }
];