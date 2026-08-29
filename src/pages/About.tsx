import React from 'react';
import { NavLink } from '../context/RouterContext';
import profilePhoto from '../assets/images/profile.jpg';
import {
  Cpu,
  Server,
  Layers,
  GraduationCap,
  Award,
  ArrowRight,
  Shield,
  BookOpen,
  Code,
  Compass,
  Terminal
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const journeyTimeline = [
    {
      period: '2020 – 2023',
      title: 'Foundational Systems & Diploma in CSE',
      institution: 'HMS Polytechnic',
      summary:
        'Developed foundational computer science mastery: C/C++ memory allocation, low-level data structures, computer architecture, and relational database systems.',
      badge: 'FOUNDATION'
    },
    {
      period: '2023 – Present',
      title: 'Bachelor of Engineering in CSE',
      institution: 'Siddaganga Institute of Technology (SIT)',
      summary:
        'Specializing in distributed computing, operating system internals, computer networks, and advanced data structure design. Solved 2,750+ algorithmic problems on LeetCode (Rank 600+ worldwide, 630+ Hard, 1,400+ Medium).',
      badge: 'SPECIALIZATION'
    },
    {
      period: 'Jan 2024 – Jul 2024',
      title: 'Software Engineer Intern',
      institution: 'PraLoTech Solutions LLP',
      summary:
        'Engineered scalable backend RESTful APIs, optimized SQL execution plans, integrated Redis caching, and improved multi-tenant service throughput in production environments.',
      badge: 'INDUSTRY EXPERIENCE'
    },
    {
      period: 'Aug 2024 – Present',
      title: 'Software Engineering Instructor',
      institution: 'HMS Polytechnic',
      summary:
        'Instructing core computer science coursework, designing hands-on C++/Java laboratory modules, and mentoring 60+ engineering students in algorithmic problem solving and modular architecture.',
      badge: 'TEACHING & MENTORSHIP'
    },
    {
      period: '2025 – 2026',
      title: 'Distributed Systems & AI Infrastructure Focus',
      institution: 'Independent Systems Lab & Community Leadership',
      summary:
        'Engineered Titan TSDB (1.2M writes/sec time-series engine), SIMD-accelerated Vector & LLM inference engine, and Kafka real-time traffic telemetry. Selected as Google Student Ambassador 2026.',
      badge: 'CURRENT FOCUS'
    }
  ];

  const philosophies = [
    {
      title: 'Mechanical Sympathy',
      desc: 'Software runs on physical hardware. Understanding CPU cache lines, TLB misses, memory bandwidth, and SIMD vector lanes creates orders-of-magnitude performance gains over naive abstractions.'
    },
    {
      title: 'Evidence-Based Engineering',
      desc: 'No vague performance claims. Every optimization must be proven with flame graphs, micro-benchmarks, latency distributions (P99/P99.9), and memory profile analysis.'
    },
    {
      title: 'Defensive Failure Boundaries',
      desc: 'Distributed systems will fail. Networks partition, nodes crash, and disks lag. Systems must be engineered with backpressure, idempotency, and automated recovery loops.'
    },
    {
      title: 'Simplicity Over Accidental Complexity',
      desc: 'The best architecture is the simplest one that solves the fundamental data access and concurrency constraint without brittle multi-layer indirection.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Page Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
          <BookOpen className="w-4 h-4" />
          <span>ABOUT // ENGINEERING JOURNEY</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Story & Technical Philosophy
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          From competitive algorithmic problem solving to building zero-dependency storage engines and low-latency AI inference runtimes.
        </p>
      </div>

      {/* 2. WHO I AM & HOW I THINK */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-blue-500/40 bg-slate-900 shrink-0 shadow-md">
              <img
                src={profilePhoto}
                alt="Divyaprada G"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase font-semibold">
                // Who I Am
              </div>
              <h2 className="font-display text-xl font-bold text-white">
                Divyaprada G
              </h2>
              <div className="text-xs font-mono text-slate-400">
                Software Engineer // SIT CSE
              </div>
            </div>
          </div>

          <div className="text-slate-300 text-sm leading-relaxed space-y-3 font-sans pt-1">
            <p>
              I am a software engineer based in Karnataka, India, pursuing my Bachelor of Engineering in Computer Science & Engineering at Siddaganga Institute of Technology (SIT), following my Diploma in CSE from HMS Polytechnic.
            </p>
            <p>
              My engineering journey began with an obsession for algorithmic efficiency, which led me to solve over 2,750 algorithmic problems on LeetCode (including 630+ Hard and 1,400+ Medium challenges) and achieve a Global Rank of 600+.
            </p>
            <p>
              Over time, that algorithmic curiosity evolved into building deep systems: asking not just how an algorithm runs, but how the operating system, memory bus, and storage hardware execute it at scale.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">
            // Engineering Focus
          </div>
          <h2 className="font-display text-2xl font-bold text-white">
            What I Focus On & Build
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#080C14] rounded-lg border border-slate-800">
              <Server className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">Storage Engines & Time-Series DBs</h3>
                <p className="text-xs text-slate-400 mt-0.5">Gorilla compression, lock-free skiplists, and append-only WALs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#080C14] rounded-lg border border-slate-800">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">AI Inference & Vector Search</h3>
                <p className="text-xs text-slate-400 mt-0.5">HNSW graphs, Product Quantization, SIMD AVX-512, and PagedAttention KV caches.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#080C14] rounded-lg border border-slate-800">
              <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white">Fault-Tolerant Event Streaming</h3>
                <p className="text-xs text-slate-400 mt-0.5">Apache Kafka topic topologies, spatial partition sharding, and chaos testing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION MILESTONES */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
            // Academic Background
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-semibold">2023 – 2026</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                UNDERGRADUATE
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Bachelor of Engineering (B.E.) — Computer Science
            </h3>
            <div className="text-sm text-slate-300 font-medium">
              Siddaganga Institute of Technology (SIT), Tumkur
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Focus areas: Distributed Systems, Operating Systems, Database Management Systems, Computer Networks, Advanced Algorithms.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 font-semibold">2020 – 2023</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                DIPLOMA (DISTINCTION)
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-white">
              Diploma in Computer Science & Engineering
            </h3>
            <div className="text-sm text-slate-300 font-medium">
              HMS Polytechnic, Tumkur
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Graduated with Distinction. Comprehensive training in C/C++, assembly basics, data structures, and computer architecture.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VISUAL TIMELINE OF ENGINEERING EVOLUTION */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
            // Chronological Progression
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Engineering Evolution
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
          {journeyTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080C14] border-2 border-blue-500 group-hover:border-blue-400 transition-colors" />
              
              <div className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-2 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-blue-400">
                  {item.institution}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECHNICAL PHILOSOPHY */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">
            // Core Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Technical Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophies.map((phil, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-2">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400">0{i + 1}.</span>
                <span>{phil.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {phil.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NAVIGATION ACTION BAR */}
      <div className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-white text-base">Ready to inspect the systems?</div>
          <div className="text-xs text-slate-400">Examine deep technical case studies of Titan TSDB, Vector/Inference Engine, and Traffic System.</div>
        </div>
        <NavLink
          to="/systems"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0"
        >
          <span>Open System Lab</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

    </div>
  );
};
