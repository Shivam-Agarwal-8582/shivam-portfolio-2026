import type { Project, SkillCategory, CodingProfile, EducationItem } from '../types';

export const personalInfo = {
  name: 'Shivam Agarwal',
  role: 'Computer Science Engineering Student | Aspiring SDE',
  tagline: 'I turn ideas into working software.',
  headlineBadge: 'COMPUTER SCIENCE ENGINEERING · CLASS OF 2027',
  university: 'Chandigarh University, Punjab',
  degree: 'Bachelor of Engineering in Computer Science and Engineering',
  graduationYear: '2023–2027',
  cgpa: '8.11 / 10',
  dsaSolved: '250+',
  email: 'shivamagarwalblp@gmail.com',
  phone: '+91-6392549301',
  location: 'Punjab / Uttar Pradesh, India',
  resumeUrl: '/Shivam_Agarwal_Resume.pdf',
  githubUrl: 'https://github.com/Shivam-Agarwal-8582',
  leetcodeUrl: 'https://leetcode.com/u/Shivam_Agarwal_8582/',
  linkedinUrl: 'https://www.linkedin.com/in/shivam-agarwal-896956312/',
  aboutBio: [
    "I am a third-year Computer Science Engineering student at Chandigarh University with an 8.11 CGPA, driven by a deep passion for building resilient backend architectures, full-stack applications, and exploring practical AI integrations.",
    "My focus centers around Java and the Spring Boot ecosystem, React.js, RESTful API design, and solid Data Structures & Algorithms. I have solved 250+ DSA problems across LeetCode and Codeforces, which has honed my ability to write clean, time- and space-efficient code.",
    "Whether it's preventing double-booking concurrency bugs with @Transactional controls, implementing an O(1) LRU cache from scratch, or bridging LLMs into document workflows, I love turning complex engineering requirements into reliable, production-ready software."
  ]
};

export const featuredProjects: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI-Powered ATS Resume Analyzer',
    shortDescription: 'Automated ATS scoring service parsing resumes against job descriptions with keyword gap detection and LLM-driven optimization.',
    fullDescription: 'An enterprise-grade ATS resume scoring application built with Spring Boot and Google Gemini 1.5. Exposes 8+ RESTful endpoints for document parsing via Apache PDFBox, structured prompt engineering, and relational persistence of evaluation history to minimize redundant LLM calls.',
    category: 'AI',
    technologies: ['Spring Boot', 'Google Gemini 1.5 API', 'Spring Data JPA', 'MySQL', 'Apache PDFBox', 'React.js'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/AI-Resume-Analyzer',
    accentColor: 'purple',
    featured: true,
    visualType: 'ai-resume',
    highlights: [
      'Exposes 8+ RESTful endpoints for multi-format document evaluation',
      'Google Gemini 1.5 API integration with structured prompt engineering',
      'Apache PDFBox document parsing and keyword gap analysis',
      'Relational schema caching in MySQL to reduce redundant LLM latency'
    ]
  },
  {
    id: 'seat-management-system',
    title: 'Smart Seat & Ticket Reservation Platform',
    shortDescription: 'Full-stack hybrid workspace and ticket reservation system with strict transactional concurrency control and real-time floor plans.',
    fullDescription: 'A comprehensive office seating and ticket booking platform designed for enterprise hybrid work models. Built with Spring Boot transactional services (@Transactional) to eliminate double-booking race conditions, secured with JWT role-based access control, and paired with a responsive client dashboard.',
    category: 'Full Stack',
    technologies: ['Spring Boot', 'React.js', 'MySQL', 'Spring Security', 'JWT', 'REST APIs'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/seat-management-system',
    liveDemoUrl: 'https://seat-management-system-zeta.vercel.app/',
    accentColor: 'blue',
    featured: true,
    visualType: 'seat-booking',
    highlights: [
      'Concurrency control with @Transactional preventing race conditions',
      'Interactive seat map with instant availability indicators',
      'Role-based access control (Admin, Employee, Approver) via Spring Security + JWT',
      'Live deployment on Vercel with responsive hybrid scheduling'
    ]
  },
  {
    id: 'lru-cache-visualizer',
    title: 'LRU Cache Visualizer & Simulator',
    shortDescription: 'Interactive, real-time algorithm visualizer demonstrating true O(1) get/put operations with custom Doubly Linked List and HashMap.',
    fullDescription: 'A dependency-free algorithmic simulator built to demonstrate the Least Recently Used (LRU) Cache eviction policy. Features a custom HashMap and Doubly Linked List implemented from scratch, dynamic step-by-step memory animations, real-time cache hit/miss ratio analytics, and comprehensive unit tests.',
    category: 'DSA & Algorithms',
    technologies: ['React.js', 'JavaScript (ES6+)', 'Doubly Linked List', 'HashMap', 'CSS3', 'Vercel'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/LRU-cache-Updated',
    liveDemoUrl: 'https://lru-cache-livid.vercel.app/',
    accentColor: 'coral',
    featured: true,
    visualType: 'lru-cache',
    highlights: [
      'True O(1) average time complexity for both get() and put()',
      'Custom HashMap and Doubly Linked List data structures built from scratch',
      'Real-time visualization of cache hits, misses, and evictions',
      'Live hit-ratio performance benchmarking analytics'
    ]
  },
  {
    id: 'storecraft-ecommerce',
    title: 'StoreCraft — Retail MERN E-Commerce',
    shortDescription: 'Full-stack retail commerce platform bridging brick-and-mortar storefronts with digital inventory, cart management, and order tracking.',
    fullDescription: 'A production-grade MERN retail platform engineered for retail store operations. Features real-time inventory management, responsive category & price filters, shopping cart persistence with Redux Toolkit, and an integrated Admin Command Center for inventory updates and order fulfillment.',
    category: 'Full Stack',
    technologies: ['React 18', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/E-commerce-Webiste',
    accentColor: 'emerald',
    featured: true,
    visualType: 'ecommerce',
    highlights: [
      'Real-time store inventory sync with category and multi-filter discovery',
      'Redux Toolkit state management for shopping cart and persistent sessions',
      'Admin Command Center for catalog updates and order tracking',
      'Full RESTful API backend built with Express and MongoDB Atlas'
    ]
  }
];

export const secondaryProjects: Project[] = [
  {
    id: 'nutricare-ai',
    title: 'NutriCare AI Platform',
    shortDescription: 'Personalized nutrition & diet tracker using Google Gemini API to analyze user metrics and generate custom meal blueprints.',
    fullDescription: 'A MERN stack health application integrating Google Gemini AI for customized nutrition blueprints, hydration limits, and calorie tracking.',
    category: 'AI',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/Nutricare-AI',
    accentColor: 'emerald',
    featured: false,
    visualType: 'generic',
    highlights: ['Gemini AI prompt pipeline', 'Calorie & hydration tracker', 'User metric profiling']
  },
  {
    id: 'sorting-visualizer',
    title: 'Sorting Algorithm Visualizer',
    shortDescription: 'Interactive visualization of 6 classic sorting algorithms with live metrics, synchronized pseudocode tracing, and Web Audio feedback.',
    fullDescription: 'Clean, dependency-free educational tool illustrating Bubble, Selection, Insertion, Quick, Merge, and Heap sorts with real-time operation counters.',
    category: 'DSA & Algorithms',
    technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Web Audio API'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/Sorting-Visualizer-Project',
    accentColor: 'blue',
    featured: false,
    visualType: 'generic',
    highlights: ['6 sorting algorithms supported', 'Web Audio tone pitch mapping', 'Timeline step scrubber']
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    shortDescription: 'Role-based university management platform with Spring Boot 3, Java 21, Spring Security JWT, and a React 18 frontend.',
    fullDescription: 'End-to-end management portal for colleges featuring separate dashboards for Admin, Faculty, and Students, secured via stateless JWT tokens.',
    category: 'Backend',
    technologies: ['Spring Boot 3', 'Java 21', 'Spring Security', 'JWT', 'MySQL', 'React 18'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/Student-Management-System',
    accentColor: 'purple',
    featured: false,
    visualType: 'generic',
    highlights: ['Role-based authorization (RBAC)', 'Spring Security + JWT', 'Postman documented REST endpoints']
  },
  {
    id: 'payment-sprint-boot',
    title: 'Payment & UPI Architecture Demo',
    shortDescription: 'Architectural simulation demonstrating how online payments, UPI QR codes, Spring Boot servers, and bank webhooks coordinate.',
    fullDescription: 'An educational full-stack demo deconstructing the 3-party handshake between browser, merchant server, and payment gateway webhooks.',
    category: 'Backend',
    technologies: ['Spring Boot', 'React.js', 'REST APIs', 'Webhook Lifecycle'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/Payment-Sprint-boot-',
    accentColor: 'yellow',
    featured: false,
    visualType: 'generic',
    highlights: ['Webhook notification simulation', 'Order state machine', 'Clear 3-system payment model']
  },
  {
    id: 'expense-tracker',
    title: 'Elegance — Expense Tracker',
    shortDescription: 'Personal expense tracking application with Spring Boot backend, BCrypt secure authentication, and monthly budget progress bars.',
    fullDescription: 'A clean financial tracker allowing users to log categorized expenses, monitor spending against monthly thresholds, and view spending breakdown charts.',
    category: 'Full Stack',
    technologies: ['Spring Boot', 'React.js', 'BCrypt', 'REST API', 'MySQL'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/Expense-Tracker',
    accentColor: 'coral',
    featured: false,
    visualType: 'generic',
    highlights: ['BCrypt password security', 'Budget limit alerts', 'Categorized expense analytics']
  },
  {
    id: 'quiz-management-system',
    title: 'Quiz Management Engine',
    shortDescription: 'Interactive assessment platform with dynamic question randomization, timed answer tracking, and instant score summaries.',
    fullDescription: 'Lightweight web application for administering custom educational quizzes with client-side state management and instant feedback.',
    category: 'Frontend',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local State'],
    githubUrl: 'https://github.com/Shivam-Agarwal-8582/quiz-management-system',
    accentColor: 'blue',
    featured: false,
    visualType: 'generic',
    highlights: ['Automated score computation', 'Timer countdown component', 'Review answer breakdown']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Java', tag: 'Primary' },
      { name: 'SQL', tag: 'Relational' },
      { name: 'JavaScript (ES6+)', tag: 'Modern Web' },
      { name: 'Python', tag: 'Scripting' },
      { name: 'C++', tag: 'DSA' }
    ]
  },
  {
    title: 'Backend Frameworks',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', tag: 'Primary' },
      { name: 'Spring MVC', tag: 'Architecture' },
      { name: 'Spring Security (JWT)', tag: 'Auth' },
      { name: 'Spring Data JPA', tag: 'ORM' },
      { name: 'Hibernate', tag: 'Persistence' },
      { name: 'RESTful APIs', tag: 'Design' }
    ]
  },
  {
    title: 'Frontend & Web',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', tag: 'Primary' },
      { name: 'HTML5', tag: 'Semantic' },
      { name: 'CSS3', tag: 'Styling' },
      { name: 'Tailwind CSS', tag: 'Utility' },
      { name: 'Responsive Web Design', tag: 'Mobile-First' }
    ]
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', tag: 'Relational' },
      { name: 'PostgreSQL', tag: 'Enterprise' }
    ]
  },
  {
    title: 'Core Computer Science',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', tag: '250+ Solved' },
      { name: 'Object-Oriented Programming (OOP)', tag: 'Design Patterns' },
      { name: 'DBMS', tag: 'Normalization' },
      { name: 'Operating Systems', tag: 'Concurrency' },
      { name: 'Computer Networks', tag: 'Protocols' }
    ]
  },
  {
    title: 'Developer Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'Maven', tag: 'Build Tool' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'IntelliJ IDEA', tag: 'IDE' },
      { name: 'VS Code', tag: 'Editor' }
    ]
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Shivam_Agarwal_8582',
    profileUrl: 'https://leetcode.com/u/Shivam_Agarwal_8582/',
    badge: 'Problem Solver',
    headline: 'Algorithmic Problem Solving',
    description: 'Practicing data structures and algorithms, strengthening core intuition in dynamic programming, graph traversal, and system trade-offs.',
    stats: [
      { label: 'Problems Solved', value: '250+' },
      { label: 'Platforms', value: 'LeetCode & Codeforces' }
    ],
    accentColor: 'coral'
  },
  {
    platform: 'GitHub',
    username: 'Shivam-Agarwal-8582',
    profileUrl: 'https://github.com/Shivam-Agarwal-8582',
    badge: 'Open Source & Projects',
    headline: 'Explore Code & Repositories',
    description: 'Browse production-ready full-stack projects, Spring Boot REST services, algorithm visualizers, and AI integrations.',
    stats: [
      { label: 'Public Repositories', value: '15+' },
      { label: 'Focus', value: 'Java, Spring Boot, React' }
    ],
    accentColor: 'purple'
  }
];

export const educationHistory: EducationItem[] = [
  {
    institution: 'Chandigarh University, Punjab',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    duration: '2023 – 2027',
    location: 'Mohali, Punjab',
    scoreLabel: 'CGPA',
    score: '8.11 / 10.0',
    highlights: [
      'Strong coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Java Full Stack Development.',
      'Active competitive programmer solving 250+ algorithm problems across LeetCode & Codeforces.'
    ]
  },
  {
    institution: 'Vidya Mandir Senior Secondary School, Rajasthan',
    degree: 'Intermediate (CBSE Class XII) — Science & Mathematics',
    duration: '2020 – 2021',
    location: 'Rajasthan, India',
    scoreLabel: 'CBSE XII Percentage',
    score: '80.6%',
    highlights: [
      'Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.'
    ]
  }
];
