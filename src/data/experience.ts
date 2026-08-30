import { ExperienceItem } from '../types';
import { MEDIA_ASSETS } from './mediaAssets';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-hms-instructor',
    role: 'Software Engineering Instructor',
    organization: 'HMS Polytechnic, Tumkur',
    location: 'Tumkur, Karnataka, India',
    period: '2023 – 2024',
    type: 'WORK',
    summary:
      'Delivered structured coursework on system design principles, SDLC models, and debugging strategies to 60+ engineers; mentored development pipelines for 5 production-style applications.',
    highlights: [
      'Delivered structured coursework on system design principles, SDLC models, and debugging strategies to 60+ engineers.',
      'Mentored development pipelines for 5 production-style applications, elevating code quality marks by 25%.',
      'Designed interactive laboratory modules spanning Data Structures, OOP (Java / C++), and Relational Database Systems.'
    ],
    technologies: ['Java', 'C++', 'Data Structures & Algorithms', 'DBMS', 'SQL', 'Git & CI/CD'],
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
    period: 'Jan 2024 – Apr 2024',
    type: 'WORK',
    summary:
      'Optimized backend response times by 30% for a Java enterprise application by constructing targeted composite indexes and restructuring legacy N+1 data queries into high-performance batched join operations.',
    highlights: [
      'Optimized backend response times by 30% for a Java enterprise application by constructing targeted composite indexes and restructuring legacy N+1 data queries into high-performance batched join operations.',
      'Owned end-to-end design and deployment for 3 core functional features including seat reservation loops, multi-tenant booking state, and profile management under Git CI workflows with zero system regressions.',
      'Constructed automated unit/integration test suites and enforced strict CI/CD quality gates across team pull requests.'
    ],
    technologies: ['Java', 'REST APIs', 'MySQL / PostgreSQL', 'Redis', 'Docker', 'Git & CI/CD']
  },
  {
    id: 'edu-sit',
    role: 'B.E. in Artificial Intelligence & Data Science',
    organization: 'Siddaganga Institute of Technology, Karnataka',
    location: 'Tumkur, Karnataka, India',
    period: 'Expected Graduation: Jun 2027',
    type: 'EDUCATION',
    summary:
      'Pursuing B.E. in Artificial Intelligence & Data Science with focus on Distributed Systems, AI Infrastructure, Operating Systems, DBMS, Computer Networks, and Advanced Data Structures & Algorithms.',
    highlights: [
      'Core Coursework: DSA, OOP, Operating Systems, DBMS, Computer Networks.',
      'Leadership: Google Student Ambassador (GSA 2026), Campus Lead for Open Source Connect India 2026, Google Cloud Arcade Facilitator.',
      'Top 10 Finalist in Smart India Internal Hackathon 2025 (Out of 165+ Engineering Teams).',
      'LeetCode Global Rank 600+ with 2,750+ solved problems (630+ Hard, 1,400+ Medium).'
    ]
  },
  {
    id: 'edu-hms',
    role: 'Diploma in Computer Science & Engineering',
    organization: 'HMS Polytechnic, Tumkur',
    location: 'Tumkur, Karnataka, India',
    period: 'Graduated: 2024',
    type: 'EDUCATION',
    summary:
      'Completed Diploma in Computer Science & Engineering with Distinction, achieving a CGPA of 9.77 / 10.',
    highlights: [
      'Achieved Distinction with CGPA: 9.77 / 10.',
      'Rigorous foundation in Computer Systems, Relational DBMS, C/C++, Java, Assembly, and Software Engineering principles.',
      'Served as Student Technical Lead, organizing peer coding sessions and technical symposiums.'
    ]
  }
];
