import { AchievementItem } from '../types';
import { MEDIA_ASSETS } from './mediaAssets';

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'google-gsa-2026',
    title: 'Google Student Ambassador 2026',
    year: '2026',
    category: 'Google / Leadership Role',
    organization: 'Google Developer Ecosystem & SIT',
    location: 'Siddaganga Institute of Technology, Tumkur',
    role: 'Google Student Ambassador (GSA)',
    description:
      'Selected to represent Siddaganga Institute of Technology (SIT), Tumkur for the prestigious 2026 Google Student Ambassador cohort. Championing developer growth, cloud computing literacy, AI architectures, and open technology across student cohorts.',
    highlights: [
      'Official representative for SIT Tumkur in the GSA 2026 cohort',
      'Organizing student workshops on modern cloud services, AI APIs, and systems engineering',
      'Bridging academic curricula with real-world production engineering methodologies'
    ],
    images: MEDIA_ASSETS.achievements.gsa,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.gsa[0],
        caption: 'Google Student Ambassador 2026 official credential & cohort selection documentation.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.gsa[1],
        caption: 'GSA program onboarding, ecosystem development roadmap, and campus technical initiatives.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.gsa[2],
        caption: 'Collaborative student developer enablement and Google technology architectures.',
        isBadge: false
      }
    ],
    credentialType: 'HYBRID',
    tags: ['Google Student Ambassador', 'GSA 2026', 'Leadership', 'Cloud & AI', 'SIT Tumkur']
  },
  {
    id: 'microsoft-build-localhost',
    title: 'Microsoft Build: Localhost Selection',
    year: '2025 - 2026',
    category: 'Microsoft / Developer Immersion',
    organization: 'Microsoft Reactor / Microsoft India',
    location: 'Bengaluru, India',
    role: 'Selected Delegate & Builder',
    description:
      'Selected for Microsoft Build: Localhost in Bengaluru. Engaged in hands-on sessions on distributed databases, intelligent cloud backends, Azure OpenAI integration patterns, and high-performance infrastructure design.',
    highlights: [
      'Selected delegate for in-person Microsoft Build: Localhost technical tracks in Bengaluru',
      'Hands-on immersion with Azure Cosmos DB, vector indexing, and cloud resiliency patterns',
      'Engaged with Microsoft principal engineers and architects on enterprise data scaling'
    ],
    images: MEDIA_ASSETS.achievements.msBuild,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.msBuild[0],
        caption: 'Microsoft Build: Localhost Bengaluru keynote and developer summit immersion.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.msBuild[1],
        caption: 'In-depth architecture session exploring distributed data storage and cloud infrastructure.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.msBuild[2],
        caption: 'Technical workshop discussing low-latency backend systems and AI-assisted tooling.',
        isBadge: false
      }
    ],
    credentialType: 'PHOTO',
    tags: ['Microsoft Build', 'Localhost Bengaluru', 'Distributed Databases', 'Azure', 'Systems']
  },
  {
    id: 'google-cloud-arcade-facilitator',
    title: 'Google Cloud Arcade Facilitator 2026',
    year: '2026',
    category: 'Google Cloud / Facilitation',
    organization: 'Google Cloud Ecosystem',
    location: 'Hybrid / Developer Community',
    role: 'Arcade Facilitator Lead',
    description:
      'Facilitated cloud infrastructure skill journeys and hands-on laboratory tracks for 100+ student developers across Google Cloud Platform, Kubernetes orchestration, IAM security, VPC networks, and serverless runtimes.',
    highlights: [
      'Guided 100+ peers through hands-on cloud labs and architecture challenges',
      'Demonstrated containerized deployments, VPC peering, and secure service account governance',
      'Achieved highest facilitator tier recognition for student developer enablement'
    ],
    images: MEDIA_ASSETS.achievements.arcade,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.arcade[0],
        caption: 'Google Cloud Arcade Facilitator official credential and milestone verification.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.arcade[1],
        caption: 'Cloud infrastructure facilitation cohort metrics and hands-on lab milestones.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.arcade[2],
        caption: 'Facilitator program completion and cloud enablement milestone record.',
        isBadge: false
      }
    ],
    credentialType: 'HYBRID',
    tags: ['Google Cloud', 'Arcade Facilitator', 'Kubernetes', 'Serverless', 'GCP Labs']
  },
  {
    id: 'open-source-campus-lead',
    title: 'Open Source Campus Lead',
    year: '2025 - 2026',
    category: 'Open Source / Leadership',
    organization: 'Open Source Community Initiative',
    location: 'SIT Tumkur',
    role: 'Campus Lead & Open Source Advocate',
    description:
      'Serving as Open Source Campus Lead, fostering a culture of open collaboration, distributed code review, and upstream contributions among student engineers. Organizing hackathons, Git workflows, and open-source systems development.',
    highlights: [
      'Empowering student engineers to make their first upstream contributions to open-source software',
      'Conducting practical workshops on Git internals, licensing, and asynchronous RFC workflows',
      'Verified Open Source Campus Lead credential and badge'
    ],
    images: MEDIA_ASSETS.achievements.osLead,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.osLead[0],
        caption: 'Official Open Source Campus Lead digital credential and verified credential badge.',
        isBadge: true
      },
      {
        url: MEDIA_ASSETS.achievements.osLead[1],
        caption: 'Campus leadership recognition and open-source enablement milestone documentation.',
        isBadge: true
      }
    ],
    credentialType: 'BADGE',
    tags: ['Open Source', 'Campus Lead', 'Git', 'Collaboration', 'Community Leadership']
  },
  {
    id: 'open-source-contributor',
    title: 'Open Source Contributor',
    year: '2025 - 2026',
    category: 'Open Source / Systems Engineering',
    organization: 'Global Open Source Ecosystem',
    location: 'Distributed',
    role: 'Systems & Tooling Contributor',
    description:
      'Active contributor to open-source systems repositories, developer utilities, and algorithmic libraries. Emphasizing clean memory layouts, zero-dependency data structures, and deterministic performance testing.',
    highlights: [
      'Verified Open Source Contributor credential and ecosystem badges',
      'Authored PRs focused on memory safety, SIMD vectorization routines, and benchmarking',
      'Committed to open, reproducible systems software engineering'
    ],
    images: MEDIA_ASSETS.achievements.osContrib,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.osContrib[0],
        caption: 'Open Source Contributor verified digital credential and badge.',
        isBadge: true
      },
      {
        url: MEDIA_ASSETS.achievements.osContrib[1],
        caption: 'Open-source ecosystem contribution confirmation and verified engineering badge.',
        isBadge: true
      }
    ],
    credentialType: 'BADGE',
    tags: ['Open Source Contributor', 'C++', 'Go', 'Systems Tooling', 'Verified Badge']
  },
  {
    id: 'sit-sih-top10-team',
    title: 'SIT SIH Top 10 Team Finalist',
    year: '2025',
    category: 'Hackathon / Systems Architecture',
    organization: 'Smart India Hackathon & Siddaganga Institute of Technology',
    location: 'Tumkur, Karnataka',
    role: 'Core Systems Architect & Full-Stack Lead',
    description:
      'Ranked in the Top 10 out of highly competitive engineering teams in the Smart India Internal Hackathon at SIT. Architected a fault-tolerant, low-latency emergency telemetry and disaster coordination mesh operating over disrupted network topologies.',
    highlights: [
      'Top 10 finish in intensive 36-hour competitive hackathon sprint at SIT',
      'Engineered edge synchronization and local persistent ring buffers for telemetry packets',
      'Demonstrated live failover and packet recovery before the faculty evaluation jury'
    ],
    images: MEDIA_ASSETS.achievements.sih,
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.sih[0],
        caption: 'Smart India Internal Hackathon 2025 Top 10 team presentation and system architecture.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.sih[1],
        caption: '36-hour sprint development, distributed edge routing implementation, and jury evaluation.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.sih[2],
        caption: 'Final evaluation showcase and technical demonstration of real-time disaster telemetry mesh.',
        isBadge: false
      }
    ],
    credentialType: 'PHOTO',
    tags: ['Smart India Hackathon', 'Top 10 Team', 'SIT Tumkur', 'Distributed Telemetry', 'Fault Tolerance']
  },
  {
    id: 'software-engineering-mentor',
    title: 'Software Engineering & Algorithmic Mentor',
    year: '2024 - 2025',
    category: 'Mentorship / Teaching',
    organization: 'HMS Polytechnic, Tumkur',
    location: 'Tumkur, Karnataka',
    role: 'Instructor & Curriculum Mentor',
    description:
      'Taught and mentored 60+ engineering students in foundational C++, data structures, object-oriented design, algorithmic complexity (Big-O), and practical software engineering disciplines.',
    highlights: [
      'Delivered 40+ hours of interactive laboratory and lecture sessions for 60+ diploma students',
      'Covered pointer arithmetic, memory management, trees, graph algorithms, and debugging',
      'Formulated hands-on algorithmic problem sets designed to cultivate first-principles intuition'
    ],
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
    ],
    credentialType: 'PHOTO',
    tags: ['Software Engineering', 'Mentorship', 'HMS Polytechnic', 'C++', 'Data Structures', 'Agile']
  }
];
