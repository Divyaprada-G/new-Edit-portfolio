import React from 'react';
import { NavLink } from '../context/RouterContext';
import { TechnicalArchitecturePipeline, PipelineType } from './TechnicalArchitecturePipeline';
import {
  Server,
  Cpu,
  Activity,
  Github,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Layers,
  Database,
  CheckCircle2,
  Code
} from 'lucide-react';

interface FlagshipProject {
  id: string;
  systemId: string;
  name: string;
  pipelineType: PipelineType;
  techStack: string[];
  tagline: string;
  description: string;
  keyEngineeringWork: string[];
  metrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  githubUrl: string;
  caseStudyRoute: string;
  colorScheme: {
    border: string;
    badge: string;
    accent: string;
    btn: string;
  };
}

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'titan-tsdb',
    systemId: 'SYSTEM-01 // JAVA NIO TSDB',
    name: 'Custom Distributed Time-Series Database',
    pipelineType: 'tsdb',
    techStack: ['Java', 'Netty', 'Java NIO', 'Gorilla Compression', 'Vectorized Execution', 'Concurrent Ring Buffers'],
    tagline: 'High-throughput columnar time-series storage engine engineered with zero-GC Java NIO.',
    description:
      'Built a columnar TSDB engine from scratch using Java NIO to ingest and query millions of metrics per second with hardware cache locality optimizations.',
    keyEngineeringWork: [
      'Built an industrial-grade columnar TSDB engine from scratch using Java NIO to ingest and query millions of metrics per second.',
      "Implemented Facebook's Gorilla Compression algorithm, reducing JVM heap footprint by 10x and eliminating GC pause spikes.",
      'Built a Vectorized Execution Engine that improved aggregation throughput by 40% over row-based models through CPU L1/L2 cache locality optimization.',
      'Designed asynchronous write buffering and immutable storage components for efficient persistence and zero lock contention during concurrent writes.'
    ],
    metrics: [
      { value: 'Millions/s', label: 'Metric Ingestion', sublabel: 'Zero-copy Java NIO byte buffers' },
      { value: '10x', label: 'Heap Reduction', sublabel: 'Gorilla delta-of-delta bit packing' },
      { value: '+40%', label: 'Query Throughput', sublabel: 'Vectorized columnar execution' }
    ],
    githubUrl: 'https://github.com/Divyaprada-G/titan-tsdb',
    caseStudyRoute: '/systems/titan-tsdb',
    colorScheme: {
      border: 'border-blue-500/40',
      badge: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      accent: 'text-blue-400',
      btn: 'bg-blue-600 hover:bg-blue-500 text-white'
    }
  },
  {
    id: 'vector-inference',
    systemId: 'SYSTEM-02 // INFERENCE & SEARCH RUNTIME',
    name: 'Distributed LLM Inference & Custom Vector Search Engine',
    pipelineType: 'llm',
    techStack: ['Python', 'C++', 'gRPC', 'SIMD AVX', 'HNSW Graph', 'Product Quantization', 'PagedAttention'],
    tagline: 'Sub-10ms nearest neighbor search over 1M+ vectors with speculative decoding and PagedAttention KV-cache.',
    description:
      'Built an HNSW graph vector search engine from scratch for datasets exceeding 1M+ vectors with 4x Product Quantization and SIMD-accelerated distance kernels.',
    keyEngineeringWork: [
      'Built an HNSW graph vector search engine from scratch for datasets exceeding 1M+ vectors with sub-10ms latency.',
      'Used Product Quantization to compress 768-dimensional embeddings by 4x and SIMD hardware-level cosine similarity calculations.',
      'Built a concurrent Dynamic Batching Coordinator and PagedAttention KV-Cache manager using gRPC nodes, boosting token throughput by 2.5x.',
      'Implemented Speculative Decoding pairing a lightweight draft model with a target LLM, reducing inference latency by 45%.'
    ],
    metrics: [
      { value: '1M+ Vectors', label: 'Dataset Scale', sublabel: 'HNSW skip-graph index' },
      { value: 'Sub-10ms', label: 'Cosine Similarity', sublabel: 'SIMD hardware vectorization' },
      { value: '2.5x', label: 'Token Throughput', sublabel: 'Dynamic batching + PagedAttention' },
      { value: '-45%', label: 'Inference Latency', sublabel: 'Speculative decoding pipeline' }
    ],
    githubUrl: 'https://github.com/Divyaprada-G/distributed-llm-inference',
    caseStudyRoute: '/systems/vector-inference',
    colorScheme: {
      border: 'border-indigo-500/40',
      badge: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      accent: 'text-indigo-400',
      btn: 'bg-indigo-600 hover:bg-indigo-500 text-white'
    }
  },
  {
    id: 'traffic-system',
    systemId: 'SYSTEM-03 // EVENT-DRIVEN STREAMING',
    name: 'Adaptive Real-Time Traffic System',
    pipelineType: 'traffic',
    techStack: ['Java', 'Apache Kafka', 'Event-Driven Architecture', 'Dead-Letter Queues', 'Chaos Engineering'],
    tagline: 'Distributed streaming pipeline processing telemetry from 10K+ vehicles with 99.9% delivery stability.',
    description:
      'Designed a distributed event-driven system processing real-time telemetry from 10,000+ simulated vehicles over Apache Kafka with chaos-tested fault tolerance.',
    keyEngineeringWork: [
      'Designed a distributed event-driven system processing telemetry from 10K+ simulated vehicles.',
      'Used Apache Kafka pipelines and isolated dead-letter queues, validating 99.9% delivery stability.',
      'Reduced bottleneck detection latency by 60% compared with baseline polling systems.',
      'Verified fault tolerance through 3-node cluster failure drills with automatic recovery under 2 seconds.'
    ],
    metrics: [
      { value: '10K+', label: 'Simulated Vehicles', sublabel: 'Continuous GPS telemetry stream' },
      { value: '99.9%', label: 'Delivery Stability', sublabel: 'Kafka + isolated dead-letter queues' },
      { value: '-60%', label: 'Detection Latency', sublabel: 'Real-time sliding window stream' },
      { value: '<2s', label: 'Cluster Recovery', sublabel: 'Automatic 3-node failover' }
    ],
    githubUrl: 'https://github.com/Divyaprada-G/adaptive-traffic-system',
    caseStudyRoute: '/systems/traffic-system',
    colorScheme: {
      border: 'border-sky-500/40',
      badge: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      accent: 'text-sky-400',
      btn: 'bg-sky-600 hover:bg-sky-500 text-white'
    }
  }
];

export const FlagshipProjectsSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Server className="w-4 h-4" />
            <span>// FLAGSHIP SYSTEMS PORTFOLIO</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Core Distributed Systems &amp; Storage Engines
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Three production-grade engineering systems built with first-principles mechanical sympathy, rigorous algorithmic design, and verified performance benchmarks.
          </p>
        </div>

        <NavLink
          to="/systems"
          className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 shrink-0"
        >
          <span>EXPLORE COMPLETE SYSTEM LAB</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {FLAGSHIP_PROJECTS.map((proj, pIdx) => (
          <div
            key={proj.id}
            id={`project-${proj.id}`}
            className="p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-6 shadow-2xl relative overflow-hidden"
          >
            {/* Top Bar: System ID, Title, Badges */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${proj.colorScheme.badge}`}>
                    {proj.systemId}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    VERIFIED BENCHMARKS
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {proj.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
                  {proj.tagline}
                </p>
              </div>

              {/* Action Buttons: GitHub & Case Study */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#080C14] hover:bg-slate-800 text-slate-200 border border-[#1E293B] text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-blue-400" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <NavLink
                  to={proj.caseStudyRoute}
                  className={`px-4 py-2 rounded-lg ${proj.colorScheme.btn} text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-md`}
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </div>

            {/* Performance Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {proj.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-3.5 rounded-xl bg-[#080C14] border border-slate-800/90 flex flex-col justify-between"
                >
                  <div className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono font-semibold text-slate-300 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5 line-clamp-1">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Architecture Pipeline Diagram */}
            <div className="space-y-2">
              <TechnicalArchitecturePipeline type={proj.pipelineType} />
            </div>

            {/* Key Engineering Work & Tech Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 border-t border-slate-800">
              {/* Left 8 Cols: Key Engineering Highlights */}
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  // Key Engineering Highlights
                </div>
                <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {proj.keyEngineeringWork.map((item, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right 4 Cols: Tech Stack Chips */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  // Core Technologies & Primitives
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#080C14] border border-slate-800 text-slate-300 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
