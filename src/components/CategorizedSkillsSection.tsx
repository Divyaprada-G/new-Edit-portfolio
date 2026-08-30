import React, { useState } from 'react';
import {
  Code2,
  Server,
  Layers,
  Cpu,
  Database,
  Grid,
  Terminal,
  CheckCircle2,
  GitBranch
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    detail: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    color: 'text-blue-400',
    badge: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'Strong foundation in systems programming, concurrency, and low-level optimization.',
    skills: [
      { name: 'Java', detail: 'Multithreading, Concurrency Utilities, Streams API, JVM Memory Model, Netty' },
      { name: 'Python', detail: 'AsyncIO, NumPy, Systems Scripting, Vector Pipelines & ML Integration' },
      { name: 'C++', detail: 'Modern C++, STL, SIMD Intrinsics, Memory Layouts, Pointer Arithmetic' },
      { name: 'SQL', detail: 'Complex Queries, Index Optimization, CTEs, ACID Transactions, MVCC' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: Server,
    color: 'text-indigo-400',
    badge: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    description: 'High-throughput server architecture, resilient API contracts, and concurrent execution.',
    skills: [
      { name: 'REST APIs', detail: 'Stateless API Design, HTTP/2 Semantics, Error Handling & Idempotency' },
      { name: 'Microservices', detail: 'Service Decomposition, Boundary Isolation, Contract-First Architecture' },
      { name: 'Concurrency', detail: 'Lock-Free Structures, Race Condition Prevention, Thread Pools, Mutexes' },
      { name: 'Rate Limiting', detail: 'Token Bucket, Leaky Bucket, Sliding-Window Log Algorithms' },
      { name: 'API Design', detail: 'Predictable Resource Schemas, Pagination, Versioning & Filtering' }
    ]
  },
  {
    id: 'distributed',
    title: 'Distributed Systems',
    icon: Layers,
    color: 'text-sky-400',
    badge: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    description: 'Scalable event streaming, cache partitioning, and distributed state coordination.',
    skills: [
      { name: 'Redis', detail: 'In-Memory Caching, Geospatial Indexing, Pub/Sub, Eviction Policies' },
      { name: 'Apache Kafka', detail: 'Partition Keys, Consumer Groups, Dead-Letter Queues, Log Compaction' },
      { name: 'Real-Time Stream Processing', detail: 'Sliding Window Aggregation, Out-of-Order Events, State Recovery' },
      { name: 'Consistent Hashing', detail: 'Virtual Nodes, Minimal Key Redistribution, Ring Topology' }
    ]
  },
  {
    id: 'ai_infra',
    title: 'AI Infrastructure',
    icon: Cpu,
    color: 'text-purple-400',
    badge: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    description: 'High-performance vector search, LLM inference acceleration, and retrieval runtimes.',
    skills: [
      { name: 'LLM Integrations', detail: 'Streaming Tokens, Function Calling, Prompt Engineering & Guardrails' },
      { name: 'Gemini API & Vertex AI', detail: 'Server-Side Multimodal Workflows, Embeddings, Grounding' },
      { name: 'Claude API & OpenAI SDK', detail: 'Model Orchestration, Structured JSON Output, Retry Policies' },
      { name: 'LangChain', detail: 'Retrieval Chains, Prompt Templates, Custom Tool Interfacing' },
      { name: 'Custom RAG Systems', detail: 'Vector Ingestion, Hybrid Search, Chunking, Re-Ranking Pipelines' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    color: 'text-emerald-400',
    badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'Relational query optimization, document modeling, and big data analytical queries.',
    skills: [
      { name: 'MySQL', detail: 'Composite B-Tree Indexes, N+1 Query Elimination, Join Optimization, EXPLAIN' },
      { name: 'MongoDB', detail: 'Document Schemas, Compound Indexes, Aggregation Framework' },
      { name: 'BigQuery', detail: 'Columnar Data Warehousing, Partitioned & Clustered Tables, Analytical SQL' }
    ]
  },
  {
    id: 'system_design',
    title: 'System Design & Architecture',
    icon: Grid,
    color: 'text-amber-400',
    badge: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'First-principles mechanical sympathy, high/low level design, and scalability trade-offs.',
    skills: [
      { name: 'LLD & HLD', detail: 'Clean Architecture, Modular Component Boundaries, Sequence Diagrams' },
      { name: 'SOLID Principles', detail: 'Maintainable, Extensible & Decoupled Object-Oriented Code' },
      { name: 'Cache Locality', detail: 'Row-to-Columnar Memory Layouts, CPU L1/L2/L3 Cache Alignment' },
      { name: 'Scalability & CAP Theorem', detail: 'Horizontal Scaling, Consistency vs. Availability, Partition Tolerance' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: Terminal,
    color: 'text-slate-300',
    badge: 'border-slate-700 text-slate-300 bg-slate-800/60',
    description: 'Containerization, Linux environment mastery, automated test validation, and CI/CD.',
    skills: [
      { name: 'Docker', detail: 'Containerization, Multi-Stage Dockerfiles, Minimal Runtimes' },
      { name: 'Kubernetes', detail: 'Pods, Deployments, Services, ConfigMaps, Container Orchestration' },
      { name: 'Git & GitHub Actions', detail: 'Version Control, Branching Strategies, Automated CI/CD Pipelines' },
      { name: 'Linux', detail: 'Shell Scripting, POSIX Commands, File Permissions, Process Diagnostics' },
      { name: 'Postman & CI/CD', detail: 'API Integration Testing, Regression Gates, Continuous Delivery' }
    ]
  }
];

export const CategorizedSkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>// TECHNICAL PROFICIENCY MATRIX</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Categorized Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Strictly categorized skill taxonomy grounded in verified coursework, engineering projects, and software engineering internship experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-[#0D1322] text-slate-400 hover:text-slate-200 border border-[#1E293B]'
            }`}
          >
            All (7)
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-[#0D1322] text-slate-400 hover:text-slate-200 border border-[#1E293B]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-[#080C14] border border-slate-800 ${category.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border uppercase ${category.badge}`}>
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {category.description}
                </p>

                {/* Skills List with Detailed Focus */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-2 rounded-lg bg-[#080C14] border border-slate-800/70 space-y-0.5">
                      <div className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{skill.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans leading-relaxed pl-3">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
