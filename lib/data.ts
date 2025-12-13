import { Project, Experience, Skill, BlogPost } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 92, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 98, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Bootstrap', level: 88, category: 'frontend' },
  { name: 'jQuery', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Python', level: 88, category: 'backend' },
  { name: 'Django', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 92, category: 'backend' },
  { name: 'SQL', level: 87, category: 'backend' },
  
  // Mobile
  { name: 'React Native', level: 80, category: 'mobile' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
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
      'Architected microservices using Django REST APIs and React frontends',
      'Mentored 5 junior developers and established coding standards',
      'Improved application performance by 40% through code optimization'
    ],
    technologies: ['React', 'Next.js', 'Django', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    position: 'Fullstack Developer',
    period: '2017 - 2020',
    description: [
      'Developed and maintained 10+ client projects using React and Django',
      'Built responsive web applications with Bootstrap and custom CSS',
      'Implemented real-time features using WebSocket and AJAX',
      'Collaborated with cross-functional teams in Agile environment'
    ],
    technologies: ['React', 'Django', 'Bootstrap', 'jQuery', 'MySQL']
  },
  {
    id: '3',
    company: 'WebDev Agency',
    position: 'Frontend Developer',
    period: '2015 - 2017',
    description: [
      'Created interactive user interfaces with HTML5, CSS3, and JavaScript',
      'Converted PSD designs to responsive web pages',
      'Implemented AJAX for seamless data loading',
      'Worked on 20+ client websites and applications'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with admin dashboard',
    longDescription: 'A complete e-commerce platform built with Next.js for the frontend and Django REST Framework for the backend. Features include user authentication, product management, shopping cart, payment integration, and order tracking.',
    technologies: ['Next.js', 'TypeScript', 'Django', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/projects/ecommerce.png',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce.example.com',
    features: [
      'Real-time inventory management',
      'Secure payment processing',
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
    technologies: ['React', 'Next.js', 'Django Channels', 'WebSocket', 'Redis', 'Material-UI'],
    imageUrl: '/projects/taskapp.png',
    githubUrl: 'https://github.com/username/taskapp',
    liveUrl: 'https://tasks.example.com',
    features: [
      'Real-time task updates',
      'Drag-and-drop interface',
      'Team collaboration',
      'File attachments',
      'Progress tracking'
    ]
  },
  {
    id: '3',
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform fitness app with workout plans and progress tracking',
    longDescription: 'A React Native mobile application for fitness tracking with Django backend. Includes workout routines, progress charts, social features, and nutrition tracking.',
    technologies: ['React Native', 'Django REST', 'GraphQL', 'PostgreSQL', 'Expo'],
    imageUrl: '/projects/fitness.png',
    githubUrl: 'https://github.com/username/fitness-app',
    features: [
      'Workout plan customization',
      'Progress analytics',
      'Social sharing',
      'Nutrition tracking',
      'Offline functionality'
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable APIs with Django REST Framework',
    excerpt: 'Learn best practices for creating scalable and maintainable APIs using Django REST Framework.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Django', 'API', 'Backend', 'Python']
  },
  {
    id: '2',
    title: 'Next.js 14: Server Components & Performance Optimization',
    excerpt: 'Exploring the latest features in Next.js 14 and how to optimize your applications for maximum performance.',
    date: '2024-01-10',
    readTime: '10 min read',
    tags: ['Next.js', 'React', 'Performance', 'TypeScript']
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Essential TypeScript patterns and practices for maintaining large codebases.',
    date: '2024-01-05',
    readTime: '12 min read',
    tags: ['TypeScript', 'Best Practices', 'Frontend']
  }
];