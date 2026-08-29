import { ExperienceItem } from '../types';
import { MEDIA_ASSETS } from './mediaAssets';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-hms-instructor',
    role: 'Software Engineering Instructor',
    organization: 'HMS Polytechnic',
    location: 'Tumkur, Karnataka, India',
    period: 'Aug 2024 – Present',
    type: 'WORK',
    summary:
      'Instructing core computer science and engineering coursework, designing hands-on laboratory modules, and mentoring 60+ diploma students in algorithmic problem solving and software development best practices.',
    highlights: [
      'Delivered rigorous lectures and practical labs on Data Structures, Object-Oriented Programming (C++/Java), Database Management Systems, and Web Technologies.',
      'Mentored 60+ engineering students on algorithmic problem solving, time/space complexity analysis, and modular system design.',
      'Constructed automated code evaluation rubrics and interactive laboratory exercises to bridge foundational theory with modern software practices.',
      'Guided final-year capstone engineering projects spanning real-time web applications, database architectures, and distributed microservices.'
    ],
    technologies: ['C++', 'Java', 'Data Structures & Algorithms', 'DBMS', 'SQL', 'Git & CI/CD'],
    images: MEDIA_ASSETS.achievements.mentor,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.mentor[0],
        caption: 'Classroom lecture at HMS Polytechnic on foundational Software Engineering principles and architecture.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.mentor[1],
        caption: 'Interactive workshop session on Agile methodology, iterative sprints, and production workflows.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.mentor[2],
        caption: 'Chalkboard walkthrough on data structures, algorithmic complexity, pointer arithmetic, and debugging.',
        isBadge: false
      }
    ]
  },
  {
    id: 'exp-pralotech-intern',
    role: 'Software Engineer Intern',
    organization: 'PraLoTech Solutions LLP',
    location: 'Bangalore, Karnataka, India',
    period: 'Jan 2024 – Jul 2024',
    type: 'WORK',
    summary:
      'Engineered scalable backend RESTful APIs, optimized database query execution plans, and implemented asynchronous event-driven task queues for enterprise customer applications.',
    highlights: [
      'Architected and deployed high-throughput backend endpoints handling multi-tenant data processing with sub-50ms response times.',
      'Optimized relational database schemas, query indexing, and caching layers (Redis), cutting database query latency by 35%.',
      'Implemented robust input validation, JWT-based role-based access control (RBAC), and automated unit/integration test suites achieving 88%+ code coverage.',
      'Collaborated closely with cross-functional engineering teams in an Agile sprint environment, conducting peer code reviews and CI/CD deployments.'
    ],
    technologies: ['Go', 'Node.js/TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs', 'Git']
  },
  {
    id: 'edu-sit',
    role: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
    organization: 'Siddaganga Institute of Technology (SIT)',
    location: 'Tumkur, Karnataka, India',
    period: '2023 – 2026',
    type: 'EDUCATION',
    summary:
      'Pursuing Bachelor of Engineering with deep specialization in Distributed Systems, Operating Systems, Computer Networks, Database Internals, and Advanced Algorithms.',
    highlights: [
      'Active leadership in developer communities: Google Student Ambassador (2026), Google Cloud Arcade Facilitator.',
      'Key achievements: Top 10 Finalist in Smart India Internal Hackathon 2025.',
      'Deep coursework: Distributed Systems, Operating Systems Kernel Concepts, Database Architecture, Computer Networks, Compiler Design, Advanced Data Structures.',
      'Consistent competitive programming ranking: Top 600+ Global Rank on LeetCode with 2750+ solved problems (630+ Hard, 1400+ Medium).'
    ]
  },
  {
    id: 'edu-hms',
    role: 'Diploma in Computer Science & Engineering',
    organization: 'HMS Polytechnic',
    location: 'Tumkur, Karnataka, India',
    period: '2020 – 2023',
    type: 'EDUCATION',
    summary:
      'Built rigorous foundational knowledge in core computing, C/C++ programming, computer hardware organization, and database management.',
    highlights: [
      'Graduated with distinction and academic honors.',
      'Served as student technical lead, organizing peer coding sessions and technical symposiums.',
      'Completed foundational capstone projects in system utilities and database management.'
    ]
  }
];
