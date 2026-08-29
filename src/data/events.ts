import { FieldLogEvent } from '../types';
import { MEDIA_ASSETS } from './mediaAssets';

export const FIELD_LOG_EVENTS: FieldLogEvent[] = [
  {
    id: 'google-gsoc-meetup',
    title: 'Google GSoC Meetup — Google Ananta',
    subtitle: 'Google Ananta Campus, Bengaluru',
    date: '2025 - 2026',
    year: '2026',
    location: 'Google Ananta, Bengaluru',
    category: 'GOOGLE',
    coverImage: MEDIA_ASSETS.events.gsocMeetup[0],
    images: MEDIA_ASSETS.events.gsocMeetup,
    role: 'Invited Participant & Open Source Builder',
    shortDescription:
      'Immersive engineering gathering at Google Ananta Bengaluru, engaging with Google Summer of Code mentors, open-source maintainers, and distributed systems engineers.',
    fullDescription:
      'Attended the Google GSoC Meetup hosted at the Google Ananta Campus in Bengaluru. Engaged in technical discussions with Google software engineers, GSoC project maintainers, and developer ecosystem leaders on open-source scaling, runtime performance, and open AI architectures.',
    experienceStory:
      'Exploring Google Ananta and connecting with fellow builders who maintain high-impact open-source tools was deeply inspiring. Discussions centered on asynchronous I/O architectures, community-driven RFC processes, and modern tooling in the C++ and Go ecosystems.',
    takeaway:
      'High-performance open-source projects succeed not just through technical excellence, but through structured code review, predictable API deprecation cycles, and welcoming community mentorship.',
    tags: ['Google Ananta', 'GSoC Meetup', 'Open Source', 'Bengaluru', 'Systems Engineering'],
    gallery: [
      {
        url: MEDIA_ASSETS.events.gsocMeetup[0],
        caption: 'Google GSoC Meetup gathering at Google Ananta Campus, Bengaluru — keynote hall & community reception.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.events.gsocMeetup[1],
        caption: 'Technical breakout discussions with open-source maintainers on distributed runtimes and API architectures.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.events.gsocMeetup[2],
        caption: 'Collaborative networking session with fellow engineering delegates and Google community leads.',
        isBadge: false
      }
    ]
  },
  {
    id: 'microsoft-bengaluru-database',
    title: 'Microsoft Bengaluru Learning Session — Database & Cloud Scaling',
    subtitle: 'Microsoft Reactor / Bengaluru Innovation Campus',
    date: '2025 - 2026',
    year: '2025',
    location: 'Microsoft Bengaluru Campus',
    category: 'MICROSOFT',
    coverImage: MEDIA_ASSETS.events.msDatabase[0],
    images: MEDIA_ASSETS.events.msDatabase,
    role: 'Selected Technical Delegate',
    shortDescription:
      'Deep technical exploration of modern distributed database architectures, cloud storage tiering, and high-throughput query optimization at Microsoft Bengaluru.',
    fullDescription:
      'Participated in an intensive database learning and architecture session at Microsoft Bengaluru. Analyzed distributed consistency models, partitioning strategies, replication lag mitigation, and vector indexing for high-velocity transactional workloads.',
    experienceStory:
      'Interacting directly with Microsoft database architects provided key insights into how hyperscale storage systems balance ACID guarantees with sub-millisecond read latencies under global replication constraints.',
    takeaway:
      'Designing robust distributed databases requires understanding physical hardware limits: CPU cache coherence, NVMe I/O queue depth, and network serialization overhead.',
    tags: ['Microsoft Bengaluru', 'Database Systems', 'Distributed Storage', 'Cloud Architecture', 'Azure'],
    gallery: [
      {
        url: MEDIA_ASSETS.events.msDatabase[0],
        caption: 'Microsoft Bengaluru campus entrance and welcome session for technical architecture delegates.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.events.msDatabase[1],
        caption: 'In-depth presentation analyzing distributed storage internals, LSM trees, and memory-mapped indices.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.events.msDatabase[2],
        caption: 'Architectural whiteboard discussion on mitigating tail latency in multi-region cloud database clusters.',
        isBadge: false
      }
    ]
  },
  {
    id: 'microsoft-build-localhost-event',
    title: 'Microsoft Build: Localhost — Developer Immersion',
    subtitle: 'Microsoft Reactor, Bengaluru',
    date: '2025 - 2026',
    year: '2026',
    location: 'Bengaluru, Karnataka',
    category: 'MICROSOFT',
    coverImage: MEDIA_ASSETS.achievements.msBuild[0],
    images: MEDIA_ASSETS.achievements.msBuild,
    role: 'Selected Delegate & Systems Builder',
    shortDescription:
      'Selected for in-person Microsoft Build: Localhost technical summit covering intelligent backends, container orchestration, and cloud developer platforms.',
    fullDescription:
      'Selected to participate in Microsoft Build: Localhost Bengaluru. Immersed in cutting-edge developer platforms, automated CI/CD microservice deployments, and cloud-native architecture paradigms.',
    experienceStory:
      'Engaged in live code laboratories implementing resilient API gateways, circuit breaker patterns, and telemetry instrumentation across distributed microservice clusters.',
    takeaway:
      'Modern cloud architecture demands observability from day zero: structured telemetry, tracing spans, and deterministic health probes.',
    tags: ['Microsoft Build', 'Localhost', 'Microservices', 'Cloud Native', 'Bengaluru'],
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.msBuild[0],
        caption: 'Keynote and opening architecture track at Microsoft Build: Localhost Bengaluru.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.msBuild[1],
        caption: 'Hands-on technical breakout session testing distributed container deployments and monitoring.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.msBuild[2],
        caption: 'Engineering collaboration and systems design review with developer ecosystem peers.',
        isBadge: false
      }
    ]
  },
  {
    id: 'sit-sih-innovation-showcase',
    title: 'SIT Innovation Showcase & SIH Top 10 Engineering Sprint',
    subtitle: 'Siddaganga Institute of Technology, Tumkur',
    date: '2025',
    year: '2025',
    location: 'Siddaganga Institute of Technology',
    category: 'HACKATHON',
    coverImage: MEDIA_ASSETS.achievements.sih[0],
    images: MEDIA_ASSETS.achievements.sih,
    role: 'Lead Systems Architect & Team Captain',
    shortDescription:
      'Ranked in the Top 10 out of competitive engineering teams at SIT for building a zero-dependency, fault-tolerant disaster telemetry and rescue coordination platform.',
    fullDescription:
      'Designed and engineered a distributed disaster communication mesh during the intensive 36-hour Smart India Internal Hackathon at SIT. Implemented lightweight edge synchronization protocols and memory-efficient ring buffers to operate seamlessly across intermittent network connections.',
    experienceStory:
      'Led the core system architecture from initial whiteboard schematics to live working prototype under extreme time constraints. Successfully demonstrated simulated packet loss recovery and node failover during the jury evaluation.',
    takeaway:
      'Under high-pressure constraints, architectural discipline and defensive programming prevent catastrophic system failures.',
    tags: ['Smart India Hackathon', 'Top 10 Finalist', 'SIT Tumkur', 'Distributed Systems', 'Telemetry Mesh'],
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.sih[0],
        caption: 'Top 10 finalist team presentation before the technical evaluation panel at SIT Tumkur.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.sih[1],
        caption: 'Intensive 36-hour sprint debugging distributed state consensus and edge network failover.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.sih[2],
        caption: 'Live technical demonstration of real-time disaster telemetry routing and instant packet recovery.',
        isBadge: false
      }
    ]
  },
  {
    id: 'google-ambassador-facilitator-programs',
    title: 'Google Ambassador & Facilitator Technical Programs',
    subtitle: 'Google Developer Ecosystem & Cloud Labs',
    date: '2025 - 2026',
    year: '2026',
    location: 'SIT Tumkur & Google Cloud Sandboxes',
    category: 'GOOGLE',
    coverImage: MEDIA_ASSETS.achievements.gsa[0],
    images: MEDIA_ASSETS.achievements.gsa,
    role: 'Google Student Ambassador 2026 & Arcade Facilitator',
    shortDescription:
      'Leading student developer initiatives, cloud infrastructure skill journeys, and architecting developer sessions on Google Cloud and modern AI systems.',
    fullDescription:
      'Representing Siddaganga Institute of Technology in the Google Student Ambassador 2026 cohort and facilitating the Google Cloud Arcade program for over 100 student developers across Kubernetes, IAM security, and serverless compute.',
    experienceStory:
      'Organizing interactive coding tracks, debugging cloud deployment scripts, and showing peers how to architect secure, scalable cloud backends.',
    takeaway:
      'Technical leadership is rooted in enabling others: turning complex cloud architectures into accessible, step-by-step learning pathways.',
    tags: ['Google Student Ambassador', 'GSA 2026', 'Arcade Facilitator', 'Google Cloud', 'Developer Community'],
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
    ]
  },
  {
    id: 'hms-polytechnic-mentorship',
    title: 'Software Engineering & Algorithmic Mentorship — HMS Polytechnic',
    subtitle: 'HMS Polytechnic, Tumkur',
    date: '2024 - 2025',
    year: '2025',
    location: 'HMS Polytechnic, Tumkur',
    category: 'MENTORSHIP',
    coverImage: MEDIA_ASSETS.achievements.mentor[0],
    images: MEDIA_ASSETS.achievements.mentor,
    role: 'Instructor & Curriculum Mentor',
    shortDescription:
      'Taught and mentored 60+ engineering students in foundational C++, data structures, object-oriented design, algorithmic complexity (Big-O), and practical software engineering disciplines.',
    fullDescription:
      'Delivered 40+ hours of interactive laboratory and lecture sessions for 60+ diploma students at HMS Polytechnic. Covered pointer arithmetic, memory management, trees, graph algorithms, Agile lifecycle models, and hands-on debugging workflows.',
    experienceStory:
      'Structured interactive classroom sessions starting from first principles — breaking down abstract concepts like recursion and heap allocation with intuitive blackboard diagrams, followed by live sprint planning workshops.',
    takeaway:
      'Cultivating first-principles intuition in students begins with demystifying memory layouts and encouraging fearless experimentation with compiler diagnostics.',
    tags: ['Software Engineering', 'HMS Polytechnic', 'Mentorship', 'C++', 'Data Structures', 'Agile'],
    gallery: [
      {
        url: MEDIA_ASSETS.achievements.mentor[0],
        caption: 'Foundational Software Engineering lecture at HMS Polytechnic introducing systems architecture to 60+ students.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.mentor[1],
        caption: 'Interactive workshop session on Agile methodologies, sprint planning, and modern development lifecycles.',
        isBadge: false
      },
      {
        url: MEDIA_ASSETS.achievements.mentor[2],
        caption: 'Chalkboard walkthrough on data structures, algorithmic complexity, pointer arithmetic, and debugging.',
        isBadge: false
      }
    ]
  }
];
