import React from 'react';
import {
  Download,
  Printer,
  Mail,
  Linkedin,
  Github,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  ExternalLink,
  MapPin
} from 'lucide-react';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* 1. Header & Print / Download Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E293B] pb-6 no-print">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
            // OFFICIAL RESUME VIEWER
          </span>
          <h1 className="font-display text-3xl font-extrabold text-white mt-1">
            Divyaprada G — Engineering Resume
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Structured, verifiable engineering curriculum vitae for software engineering and systems roles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Divyaprada_G_Resume.pdf"
            download="Divyaprada_G_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save</span>
          </button>
        </div>
      </div>

      {/* 2. ATS-Compliant Printable Resume Paper Card */}
      <div
        id="resume-document"
        className="p-8 sm:p-12 rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-2xl space-y-10 text-slate-300 font-sans"
      >
        
        {/* Contact & Identity Header */}
        <div className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
              DIVYAPRADA G
            </h2>
            <div className="text-xs font-mono text-blue-400 font-semibold">
              Software Engineer // Distributed Systems & AI Infra
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
            <a href="mailto:divyapradag15@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>divyapradag15@gmail.com</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Karnataka, India</span>
            </div>
            <a
              href="https://www.linkedin.com/in/divyapradag"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>linkedin.com/in/divyapradag</span>
            </a>
            <a
              href="https://leetcode.com/u/Divyaprada_G/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>leetcode.com/u/Divyaprada_G</span>
            </a>
            <a
              href="https://github.com/divyaprada-g"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>github.com/divyaprada-g</span>
            </a>
          </div>

          <div className="text-xs font-mono text-emerald-400 pt-1">
            <strong>Competitive Programming:</strong>{' '}
            <a
              href="https://leetcode.com/u/Divyaprada_G/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-emerald-300"
            >
              LeetCode Global Rank 600+ | 2,750+ Algorithmic Problems Solved (630+ Hard, 1,400+ Medium) (Divyaprada_G)
            </a>
          </div>
        </div>

        {/* SECTION 1: EDUCATION */}
        <section className="space-y-4">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Education</span>
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <div className="text-sm font-bold text-white">Siddaganga Institute of Technology (SIT)</div>
                <div className="text-xs text-blue-400">Bachelor of Engineering (B.E.) — Computer Science & Engineering</div>
                <div className="text-xs text-slate-400 mt-1">
                  Core: Distributed Systems, Operating Systems, Database Internals, Advanced Data Structures & Algorithms.
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                <div>Tumkur, Karnataka</div>
                <div className="text-slate-500">2023 – 2026</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <div className="text-sm font-bold text-white">HMS Polytechnic</div>
                <div className="text-xs text-blue-400">Diploma in Computer Science & Engineering (Distinction)</div>
                <div className="text-xs text-slate-400 mt-1">
                  Core: C/C++, Assembly fundamentals, Computer Architecture, Relational Databases, OOP.
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                <div>Tumkur, Karnataka</div>
                <div className="text-slate-500">2020 – 2023</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXPERIENCE */}
        <section className="space-y-4">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Engineering Experience</span>
          </h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <div className="text-sm font-bold text-white">Software Engineering Instructor</div>
                  <div className="text-xs text-blue-400">HMS Polytechnic</div>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <div>Tumkur, India</div>
                  <div className="text-slate-500">Aug 2024 – Present</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Designed curriculum and instructed 60+ engineering students in C++, Java, and algorithms.</li>
                <li>Conducted 40+ hours of interactive laboratory sessions on data structures, recursion, and pointers.</li>
                <li>Mentored students in technical interview problem-solving frameworks and modular software architecture.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <div className="text-sm font-bold text-white">Software Engineer Intern</div>
                  <div className="text-xs text-blue-400">PraLoTech Solutions LLP</div>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <div>Remote / Bangalore</div>
                  <div className="text-slate-500">Jan 2024 – Jul 2024</div>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Engineered scalable backend RESTful microservices in Go and TypeScript with PostgreSQL and Redis.</li>
                <li>Optimized database execution plans and indexing strategies, reducing median response latency by 35%.</li>
                <li>Architected Redis multi-tenant caching layer reducing database load during high-concurrency bursts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY SYSTEM PROJECTS */}
        <section className="space-y-4">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Core Systems Engineering Projects</span>
          </h3>

          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">Titan TSDB — High-Throughput Time-Series Engine</span>
                <span className="text-blue-400">C++20, SIMD AVX-512</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-1.5">
                <li>Engineered 1.2M writes/sec time-series database with lock-free skiplist MemTable and asynchronous WAL.</li>
                <li>Implemented Gorilla IEEE 754 XOR and delta-of-delta bit compression achieving 11.4x compression ratio (1.37 bytes/point).</li>
                <li>Built AVX-512 vectorized SIMD scan aggregation engine executing 10M point queries in &lt; 2.4ms P99.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">Vector Search & LLM Inference Runtime</span>
                <span className="text-indigo-400">C++, CUDA, gRPC</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-1.5">
                <li>Built HNSW hierarchical vector index with PQ-64 asymmetric distance lookup for 1536-dim embeddings.</li>
                <li>Achieved &lt; 1.1ms P99 search latency with 98.7% Recall@10 across 10-million dense vector indices.</li>
                <li>Implemented PagedAttention non-contiguous virtual memory block allocator achieving 94.2% VRAM efficiency.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white">Adaptive Real-Time Traffic Stream Processor</span>
                <span className="text-sky-400">Go, Apache Kafka, Redis</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-1.5">
                <li>Streamed 10,000+ vehicle GPS telemetry packets via Geohash-6 partitioned Kafka broker topics.</li>
                <li>Maintained 99.9% packet delivery stability with sub-2-second automated In-Sync Replica (ISR) failover.</li>
                <li>Reduced congestion bottleneck detection latency by 60% via Go sliding window anomaly workers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL SKILLS */}
        <section className="space-y-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Technical Skills</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-mono text-blue-400 font-semibold">Languages:</span>{' '}
              <span className="text-slate-300">C++ (C++20), Go, Python, Java, TypeScript, C, SQL</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Systems & Hardware:</span>{' '}
              <span className="text-slate-300">SIMD AVX-512, Lock-Free Concurrency, CUDA, Linux Internals</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Distributed Infrastructure:</span>{' '}
              <span className="text-slate-300">Apache Kafka, Redis, PostgreSQL, Docker, gRPC, Protobuf</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">AI Infrastructure:</span>{' '}
              <span className="text-slate-300">HNSW Vector Search, Product Quantization, PagedAttention, KV Caching</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: HONORS & RECOGNITION */}
        <section className="space-y-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Honors & Leadership</span>
          </h3>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start justify-between">
              <div>
                <strong>Google Student Ambassador (GSA 2026):</strong> Selected to represent developer technologies and AI systems across campus communities.
              </div>
              <span className="font-mono text-slate-500 shrink-0 ml-2">2026</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <strong>LeetCode Global Rank 600+:</strong> 2,750+ solved problems (630+ Hard, 1,400+ Medium) across graph theory, dynamic programming, and binary manipulation.
              </div>
              <span className="font-mono text-slate-500 shrink-0 ml-2">2024–2026</span>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <strong>Google Cloud Arcade Facilitator:</strong> Guided 100+ engineers through Cloud IAM, Kubernetes, and BigQuery infrastructure labs.
              </div>
              <span className="font-mono text-slate-500 shrink-0 ml-2">2024</span>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
