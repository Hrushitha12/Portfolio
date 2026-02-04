import { TimelineItem, Skill, Project, Publication, SocialLink, NavItem } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About', href: '#about' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'publications', name: 'Publications', href: '#publications' },
  { id: 'leadership', name: 'Leadership', href: '#leadership' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export const educationTimeline: TimelineItem[] = [
  {
    id: 1,
    title: 'MS in Computer Science (Data Science)',
    institution: 'UNC Charlotte',
    date: '2024 - 2026',
    description: 'Specialized in Data Science with a 3.83 GPA.',
    highlights: [
      'Advanced Machine Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Deep Learning',
    ],
  },
  {
    id: 2,
    title: 'B.Tech in Computer Science (AI/ML)',
    institution: 'CVR College of Engineering',
    date: '2020 - 2024',
    description: 'Focused on core computer science with AI/ML specialization. GPA: 8.4/10',
    highlights: [
      'Data Structures & Algorithms',
      'Machine Learning Fundamentals',
      'Software Engineering',
      'Database Systems',
    ],
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: 1,
    title: 'Data Science Intern',
    institution: 'Tata Consultancy Services (TCS)',
    date: 'Jan 2024 - March 2024',
    description: 'Worked on GPT-4All model fine-tuning and optimization.',
    highlights: [
      'Leveraged GPT-4All for AI-based code generation, crafting and testing 50+ custom prompts to enhance output quality.',
      'Optimized model performance by adjusting parameters, leading to a 7 percent improvement in accuracy.',
      'Gained hands-on experience in LLM fine-tuning within a collaborative development environment.',
      'Documented and analyzed model outputs, offering insights that contributed to better performance in production-level applications.'
    ],
  },
  {
    id: 2,
    title: 'Research Assistant',
    institution: 'CVR College of Engineering AI Lab',
    date: 'Sep 2022 - April 2024',
    description: 'Conducting research on prediction models and their applications.',
    highlights: [
      'Developing novel approaches for legal text analysis using transformer models',
      'Implementing and evaluating sentence encoder models for similarity detection',
      'Publishing research findings in peer-reviewed conferences and journals',
      'Mentoring junior researchers in NLP techniques',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Model Monitoring System',
    description: 'Developed an end-to-end system for monitoring ML model performance in production. The system automatically detects drift, evaluates model accuracy, and sends alerts when performance degrades.',
    technologies: ['Python', 'TensorFlow'],
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubLink: 'https://github.com/HrushithaTigulla/Model-Monitoring',
  },
  {
    id: 2,
    title: 'Legal Precedent Analyzer',
    description: 'Built an NLP system that analyzes legal documents to identify relevant precedents and case law. Implements advanced transformer models for document similarity and citation analysis.',
    technologies: ['Python',],
    imageUrl: 'https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubLink: 'https://github.com/HrushithaTigulla/Precedent-Analysis',
    paperLink: 'https://arxiv.org/abs/2406.01609',
  },
  {
    id: 3,
    title: 'Engineering Colleges Dashboard',
    description: 'Created an interactive Tableau dashboard for visualizing and comparing engineering college statistics, enrollment trends, and placement data across different regions.',
    technologies: ['Tableau', 'R', 'Data Cleaning'],
    imageUrl: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveLink: 'https://public.tableau.com/app/profile/hrushitha.goud.tigulla/viz/EngineeringCollegesinIndiaInsightsonTuitionPlacementsandStudentFacilities/EngineeringCollegesinIndiaInsightsonTuitionPlacementsandStudentFacilities',
  },
  {
    id: 4,
    title: 'Interactive Sales & Performance Dashboard for Superstore Data',
    description: 'Developed a comprehensive Tableau dashboard analyzing Superstore sales data, encompassing key performance indicators such as sales, profit, and shipping times. Designed interactive visualizations that allow users to filter data by region, category, and time period, facilitating dynamic data exploration.',
    technologies: ['Tableau'],
    imageUrl: 'https://images.pexels.com/photos/6366444/pexels-photo-6366444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubLink: 'https://public.tableau.com/app/profile/hrushitha.goud.tigulla/viz/SuperstoreDataAnalysis_17482740049340/SuperstoreDataAnalysis?publish=yes',
  },
];

export const publications: Publication[] = [
  {
    id: 1,
    title: 'A Review and Comprehensive Analysis of Recent Research in Crop Yield Prediction using Machine Learning Algorithms',
    journal: 'IEEE RAICS (Recent Advances in Intelligent Computational Systems) conference',
    date: 'May 2024',
    abstract: 'Researched and analyzed crop yield prediction using machine learning and deep learning algorithms, comparing models like Random Forest, XGBoost, LSTM, and SVM. Identified the effectiveness of ensemble models and deep learning techniques for optimizing agricultural forecasting and decision-making.',
    link: 'https://ieeexplore.ieee.org/document/10689872',
  },
  {
    id: 2,
    title: 'Big Data in Medical Field',
    journal: 'International Journal for Multidisciplinary Research (IJFMR)',
    date: '2023',
    abstract: 'Researched big data analytics in healthcare, exploring its applications, challenges, and solutions. Analyzed Hadoop ecosystem, data processing techniques, and security concerns, proposing efficient data management and predictive analytics for improved patient care. for precedent matching.',
    link: 'https://www.ijfmr.com/research-paper.php?id=8414',
  },
];

export const skills: Skill[] = [
  // Languages
  { id: 1, name: 'Python', icon: 'code', category: 'languages' },
  { id: 2, name: 'JavaScript', icon: 'code', category: 'languages' },
  { id: 3, name: 'TypeScript', icon: 'code', category: 'languages' },
  { id: 4, name: 'Java', icon: 'code', category: 'languages' },
  { id: 5, name: 'SQL', icon: 'database', category: 'languages' },
  { id: 6, name: 'R', icon: 'code', category: 'languages' },
  { id: 7, name: 'C', icon: 'code', category: 'languages' },

  // Frameworks & Libraries
  { id: 8, name: 'React', icon: 'layout', category: 'frameworks' },
  { id: 9, name: 'Flask', icon: 'server', category: 'frameworks' },
  { id: 10, name: 'Django', icon: 'server', category: 'frameworks' },
  { id: 11, name: 'TensorFlow', icon: 'brain', category: 'frameworks' },
  { id: 12, name: 'PyTorch', icon: 'flame', category: 'frameworks' },
  { id: 13, name: 'Scikit-Learn', icon: 'bar-chart', category: 'frameworks' },
  { id: 14, name: 'NumPy', icon: 'calculator', category: 'frameworks' },
  { id: 15, name: 'Pandas', icon: 'table', category: 'frameworks' },
  { id: 16, name: 'OpenCV', icon: 'camera', category: 'frameworks' },
  { id: 17, name: 'NLTK', icon: 'message-square', category: 'frameworks' },

  // Tools
  { id: 18, name: 'HTML', icon: 'file-text', category: 'tools' },
  { id: 19, name: 'CSS', icon: 'palette', category: 'tools' },
  { id: 20, name: 'Tailwind CSS', icon: 'palette', category: 'tools' },
  { id: 21, name: 'Git', icon: 'git-branch', category: 'tools' },
  { id: 22, name: 'Docker', icon: 'box', category: 'tools' },
  { id: 23, name: 'Tableau', icon: 'pie-chart', category: 'tools' },
  { id: 24, name: 'Jupyter', icon: 'notebook', category: 'tools' },

  // Other
  { id: 25, name: 'REST APIs', icon: 'link', category: 'other' },
  { id: 26, name: 'Automation Workflows', icon: 'zap', category: 'other' },
  { id: 27, name: 'Google Apps Script', icon: 'sparkles', category: 'other' },
  { id: 28, name: 'LLMs', icon: 'brain-circuit', category: 'other' },
  { id: 29, name: 'Data Visualization', icon: 'bar-chart-2', category: 'other' },
];


export const leadershipActivities = [
  {
    id: 1,
    title: 'Street Cause',
    role: ' Vice President of Women Empowerment and Treasurer',
    organization: 'CVR College of Engineering   - July 2022 - May 2024',
    description: ' Led 200+ members, managing dual roles while maintaining strong academics. Oversaw 10,000 dollars in fundraising and organized 10 social impact projects, ensuring team coordination and financial transparency.',
    achievements: ['Organized 10 projects and 2 events', 'Secured $10,000 in funding', 'Led 200+ members'],
  },
  {
    id: 2,
    title: 'Student Technical Association of Emerging Technologies department',
    role: ' Associate Treasurer',
    organization: 'CVR College of Engineering   - July 2023 - May 2024',
    description: 'Organized technical workshops like “Cyber Security and Ethical Hacking” and “Neural Networks and Deep Learning Models,” engaging 120 students and 5 industry experts. Managed budgeting and logistics, ensuring smooth execution and high student participation',
    achievements: ['Coordinated 3 technical workshops', 'Increased membership by 35%', ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hrushitha-tigulla/',
    icon: 'linkedin',
  },
  {
    id: 2,
    name: 'GitHub',
    url: 'https://github.com/HrushithaTigulla',
    icon: 'github',
  },
  {
    id: 3,
    name: 'Email',
    url: 'mailto: htigulla@charlotte.edu',
    icon: 'mail',
  },
  {
    id: 4,
    name: 'Resume',
    url: '/resume.pdf',
    icon: 'file-text',
  },
];