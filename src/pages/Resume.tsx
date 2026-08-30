import React from 'react';
import {
  Download,
  Printer,
  Mail,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  ExternalLink,
  MapPin,
  Phone
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
        className="p-8 sm:p-12 rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-2xl space-y-9 text-slate-300 font-sans"
      >
        
        {/* Contact & Identity Header */}
        <div className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
              DIVYAPRADA G
            </h2>
            <div className="text-xs font-mono text-blue-400 font-semibold">
              Software Engineer // Distributed Systems &amp; AI Infrastructure
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Tumkur, Karnataka, India</span>
            </div>
            <a href="tel:+918197075014" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 8197075014</span>
            </a>
            <a href="mailto:divyapradag15@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>divyapradag15@gmail.com</span>
            </a>
            <a
              href="https://leetcode.com/u/Divyaprada_G/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode</span>
            </a>
            <a
              href="https://www.linkedin.com/in/divyapradag"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/divyaprada-g"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="text-xs font-mono text-emerald-400 pt-1">
            <strong>Competitive Programming Standing:</strong>{' '}
            <a
              href="https://leetcode.com/u/Divyaprada_G/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-emerald-300"
            >
              LeetCode Global Rank 600+ | 2,750+ Solved (630+ Hard, 1,400+ Medium) — trees, graphs, DP, and system-oriented problem solving
            </a>
          </div>
        </div>

        {/* SECTION 1: EDUCATION */}
        <section className="space-y-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Education</span>
          </h3>

          <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <div className="text-sm font-bold text-white">Siddaganga Institute of Technology, Karnataka</div>
                <div className="text-xs text-blue-400">B.E. in Artificial Intelligence &amp; Data Science</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Coursework: DSA, OOP, Operating Systems, DBMS, Computer Networks
                </div>
              </div>
              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                <div className="text-emerald-400 font-semibold">Expected Graduation: Jun 2027</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <div className="text-sm font-bold text-white">HMS Polytechnic, Tumkur</div>
                <div className="text-xs text-blue-400">Diploma in Computer Science &amp; Engineering</div>
              </div>
              <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                <div>Graduated: 2024</div>
                <div className="text-emerald-400 font-semibold">CGPA: 9.77 / 10 | Distinction</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECHNICAL SKILLS */}
        <section className="space-y-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Technical Skills</span>
          </h3>

          <div className="grid grid-cols-1 gap-2 text-xs font-sans">
            <div>
              <span className="font-mono text-blue-400 font-semibold">Languages:</span>{' '}
              <span className="text-slate-300">Java (Multithreading, Streams, Concurrency), Python, C++, SQL</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Backend &amp; APIs:</span>{' '}
              <span className="text-slate-300">Java, REST APIs, Microservices, Concurrency, Rate Limiting, API Design</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Distributed Systems:</span>{' '}
              <span className="text-slate-300">Redis, Apache Kafka, Real-Time Stream Processing, Consistent Hashing, Systems Architecture</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">AI Infrastructure:</span>{' '}
              <span className="text-slate-300">LLM Integrations, Gemini API, Claude API, LangChain, OpenAI SDK, Vertex AI, Custom RAG Systems</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Databases:</span>{' '}
              <span className="text-slate-300">MySQL (Indexing, Query Optimization), MongoDB, BigQuery</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Architecture &amp; Concepts:</span>{' '}
              <span className="text-slate-300">LLD/HLD, SOLID Principles, Cache Locality, Scalability, CAP Theorem, System Design</span>
            </div>
            <div>
              <span className="font-mono text-blue-400 font-semibold">Tools &amp; DevOps:</span>{' '}
              <span className="text-slate-300">Docker, Kubernetes, Git, GitHub Actions, Linux, Postman, CI/CD</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROJECTS */}
        <section className="space-y-4">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Projects</span>
          </h3>

          <div className="space-y-4">
            {/* Project 1: TSDB */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono gap-1">
                <div>
                  <span className="font-bold text-white text-sm">Custom Distributed Time-Series Database (TSDB)</span>
                  <span className="text-blue-400 ml-2">| Java, Netty, Java NIO</span>
                </div>
                <a
                  href="https://github.com/divyaprada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 inline-flex items-center gap-1 text-[11px]"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                <li>Built an industrial-grade columnar TSDB engine from scratch using Java NIO to ingest and query millions of metrics per second.</li>
                <li>Implemented Facebook’s Gorilla Compression algorithm, minimizing JVM heap footprint by 10x and eliminating GC spikes; built a Vectorized Execution Engine optimizing cache locality to improve aggregation throughput by 40% over row-based models.</li>
                <li>Designed asynchronous write buffering and immutable storage components for efficient persistence and reduced contention during concurrent writes.</li>
              </ul>
            </div>

            {/* Project 2: Distributed LLM Inference */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono gap-1">
                <div>
                  <span className="font-bold text-white text-sm">Distributed LLM Inference &amp; Custom Vector Search Engine</span>
                  <span className="text-indigo-400 ml-2">| Python, C++, gRPC, SIMD</span>
                </div>
                <a
                  href="https://github.com/divyaprada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 inline-flex items-center gap-1 text-[11px]"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                <li>Engineered a high-throughput HNSW graph vector search engine from scratch over datasets scaling past 1M+ vectors; used Product Quantization to compress 768-dimensional embeddings by 4x with SIMD hardware-level cosine similarity calculations at sub-10ms latency.</li>
                <li>Built a concurrent Dynamic Batching Coordinator and PagedAttention KV-Cache manager via gRPC nodes, eliminating memory fragmentation and boosting token throughput metrics by 2.5x.</li>
                <li>Implemented Speculative Decoding pipelines pairing a lightweight draft model alongside a target LLM, shaving inference latency by 45%.</li>
              </ul>
            </div>

            {/* Project 3: Adaptive Real-Time Traffic System */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs font-mono gap-1">
                <div>
                  <span className="font-bold text-white text-sm">Adaptive Real-Time Traffic System</span>
                  <span className="text-sky-400 ml-2">| Java, Kafka, Event-Driven Architecture</span>
                </div>
                <a
                  href="https://github.com/divyaprada"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 inline-flex items-center gap-1 text-[11px]"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                <li>Designed a distributed event-driven system handling real-time streaming telemetry data from 10K+ simulated vehicles through Apache Kafka pipelines with isolated dead-letter queues, validating 99.9% delivery stability.</li>
                <li>Reduced bottleneck detection latency by 60% against baseline polling; verified fault tolerance via 3-node cluster failures showing an automatic recovery sequence under &lt;2s.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: EXPERIENCE */}
        <section className="space-y-4">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Experience</span>
          </h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="text-sm font-bold text-white">Software Engineer Intern</span>
                  <span className="text-xs text-blue-400 font-mono ml-2">— PraLoTech Solutions LLP</span>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  Jan 2024 – Apr 2024
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                <li>Optimized backend response times by 30% for a Java enterprise application by constructing targeted composite indexes and restructuring legacy N+1 data queries into high-performance batched join operations.</li>
                <li>Owned end-to-end design and deployment for 3 core functional features including seat reservation loops, multi-tenant booking state, and profile management under Git CI workflows with zero system regressions.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="text-sm font-bold text-white">Software Engineering Instructor</span>
                  <span className="text-xs text-blue-400 font-mono ml-2">— HMS Polytechnic, Tumkur</span>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  2023 – 2024
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside leading-relaxed">
                <li>Delivered structured coursework on system design principles, SDLC models, and debugging strategies to 60+ engineers; mentored development pipelines for 5 production-style applications, elevating code quality marks by 25%.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: ACHIEVEMENTS */}
        <section className="space-y-3">
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Achievements</span>
          </h3>

          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-white">Google Student Ambassador (GSA 2026) | Google Developer Ecosystem:</strong> Selected to represent the student developer community and support initiatives involving Google technologies, Gemini, cloud, developer learning, and open-source.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-white">Campus Lead &amp; Open-Source Contributor | Open Source Connect India 2026:</strong> Representing Siddaganga Institute of Technology and supporting open-source collaboration, technical learning, mentorship, developer connections, and contribution opportunities.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-white">Google Cloud Arcade Facilitator | Technical Training:</strong> Led technical upskilling workshops for cloud architectures, focusing on generative AI and serverless technologies.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-white">LeetCode Competitive Programming Rank: Global 600+:</strong> Solved over 2,750+ algorithmic problems including 630+ Hard and 1,400+ Medium, covering trees, graphs, dynamic programming, and system-oriented problem solving.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <p className="leading-relaxed">
                <strong className="text-white">Top 10 — Smart India Internal Hackathon 2025 (Out of 165+ Engineering Teams):</strong> Architected a scalable real-time emergency disaster routing engine during an intensive 48-hour development sprint.
              </p>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

