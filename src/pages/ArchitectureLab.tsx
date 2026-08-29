import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import {
  Layers,
  Server,
  Cpu,
  Activity,
  Zap,
  Shield,
  ArrowRight,
  RefreshCw,
  Sliders,
  ZoomIn,
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

type SystemArchType = 'TSDB' | 'VECTOR' | 'TRAFFIC';

export const ArchitectureLab: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<SystemArchType>('TSDB');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const architectures = {
    TSDB: {
      title: 'Titan TSDB Architecture',
      subtitle: 'High-Throughput Time-Series Ingestion & Vectorized SIMD Aggregator',
      color: '#3B82F6',
      caseStudyRoute: '/systems/titan-tsdb',
      steps: [
        { label: 'Ingress & Tag Indexing', desc: '1.2M+ metrics/sec decoded into zero-alloc arenas; series hashed via MurmurHash3.' },
        { label: 'Lock-Free MemTable', desc: 'Concurrent skiplist absorbs out-of-order points using atomic CAS without mutex stalls.' },
        { label: 'Sequential Group WAL', desc: 'Ring buffer synchronizes writes every 5ms to guarantee durability against sudden power loss.' },
        { label: 'Gorilla Bit Compression', desc: 'Delta-of-delta timestamp & IEEE 754 XOR floating point compression (11.4x ratio).' },
        { label: 'Immutable 2h Block Store', desc: 'Partitioned columnar chunks indexed with sparse block headers for predicate pushdown.' },
        { label: 'AVX-512 Scan Aggregator', desc: 'SIMD kernels evaluate rate(), sum(), and moving averages in parallel across cores.' }
      ],
      bottlenecks: [
        { name: 'Memory Bus Saturation during Aggregations', fix: 'Columnar memory layout with AVX-512 SIMD scan kernels processing 8 floats per cycle.' },
        { name: 'WAL Write Amplification', fix: 'Double-buffered asynchronous ring buffer with group commits every 5ms or 10K points.' }
      ],
      scaling: [
        'Time-window horizontal partitioning across discrete 2-hour epoch shards',
        'Tag-based inverted index sharding using Roaring Bitmaps for multi-dimensional filtering',
        'Slab memory allocators avoiding heap fragmentation under extreme telemetry velocity'
      ],
      failurePoints: [
        { point: 'Abrupt Process Termination / Node Crash', handling: 'Cold restart reads sparse block headers and replays WAL ring buffer in < 450ms.' },
        { point: 'Out-of-Order Telemetry Bursts', handling: 'Lock-free skiplist handles non-monotonic timestamp arrivals within the active 2-hour window.' }
      ],
      tradeoffs: [
        { decision: 'Lock-free Skiplist over LSM B-Tree', reason: 'Eliminates mutex locks during high-thread concurrent ingestion', cost: 'Higher pointer memory overhead in RAM' },
        { decision: 'Gorilla XOR Bit Compression over ZSTD', reason: 'Bit-stream decompression at SIMD speeds for instant aggregation scans', cost: 'Less effective on high-entropy noise' }
      ]
    },
    VECTOR: {
      title: 'Vector & LLM Inference Architecture',
      subtitle: 'SIMD-Accelerated HNSW Indexing & PagedAttention Virtual KV Cache',
      color: '#6366F1',
      caseStudyRoute: '/systems/vector-inference',
      steps: [
        { label: 'gRPC Query Ingress', desc: 'Zero-copy Protobuf stream receives 1536-dimensional float32 vector queries.' },
        { label: 'HNSW Graph Routing', desc: 'Multi-layer hierarchical skip-graph routes search coarse-to-fine with heuristic edge pruning.' },
        { label: 'PQ-64 Asymmetric Distance', desc: 'Compressed 64-byte codes evaluated via precomputed centroid lookup tables without decompression.' },
        { label: 'AVX-512 SIMD Re-Rank', desc: 'Vectorized Cosine Similarity kernel scores Top-10 candidates with 98.7% recall in <1.1ms.' },
        { label: 'Continuous Batch Scheduler', desc: 'Iteration-level scheduling injects concurrent prompt requests dynamically.' },
        { label: 'PagedAttention KV Cache', desc: 'Virtual memory block manager allocates non-contiguous 16-token GPU memory pages.' }
      ],
      bottlenecks: [
        { name: 'GPU Memory Fragmentation (KV Cache)', fix: 'PagedAttention eliminates pre-allocation waste, achieving 94.2% VRAM efficiency.' },
        { name: 'High Dimensional Distance Calculations', fix: 'AVX-512 FMA vectorization executing 16 float operations per clock cycle.' }
      ],
      scaling: [
        'Hierarchical HNSW graph partitioning across GPU tensor parallel worker ranks',
        'Copy-on-Write KV page sharing for common system prompts and multi-turn chat sessions',
        'Speculative decoding with draft model validation achieving 2.1x token throughput'
      ],
      failurePoints: [
        { point: 'GPU Out-of-Memory (VRAM Spike)', handling: 'Preemptive iteration-level sequence eviction to host RAM page buffers.' },
        { point: 'Index Graph Node Lock Contention', handling: 'Fine-grained optimistic concurrency control on edge list updates.' }
      ],
      tradeoffs: [
        { decision: 'HNSW Graph over IVF-Flat Inverted Index', reason: 'Logarithmic bounded hops and sub-millisecond latency SLA', cost: 'Higher memory footprint for graph edge tables' },
        { decision: 'PagedAttention Virtual Memory', reason: 'Triples request concurrency by avoiding 60%+ VRAM pre-allocation waste', cost: 'Minor lookup overhead in custom CUDA attention kernels' }
      ]
    },
    TRAFFIC: {
      title: 'Adaptive Real-Time Traffic Architecture',
      subtitle: 'Distributed Event-Driven Stream Processing & Geospatial Topology',
      color: '#0EA5E9',
      caseStudyRoute: '/systems/traffic-system',
      steps: [
        { label: '10K+ Vehicle GPS Stream', desc: '100ms UDP/Protobuf packets emitting velocity, heading, and GPS coordinates.' },
        { label: 'Geohash-6 Kafka Topic Sharding', desc: 'Geospatial partition hashing ensures adjacent urban intersections route to same broker partition.' },
        { label: 'Stateful Stream Workers', desc: 'Go consumer groups evaluate 30-sec sliding window speed anomalies and congestion heat.' },
        { label: 'Redis Geospatial Index', desc: 'Atomic GEOADD & GEORADIUS provide sub-millisecond vehicle proximity lookups.' },
        { label: 'Adaptive Signal Actuation', desc: 'Extends green light phases at congested intersections, improving detection latency by 60%.' },
        { label: 'Chaos Recovery & Failover', desc: 'Automated 3-node broker partition rebalancing recovering in < 1.82s under node kill.' }
      ],
      bottlenecks: [
        { name: 'Cross-Worker Distributed Locks for Spatial State', fix: 'Geohash partition keying guarantees spatial locality on thread-local worker states.' },
        { name: 'Surge Telemetry Traffic Spikes', fix: 'Dynamic circular ring buffer backpressure absorbing sudden urban congestion surges.' }
      ],
      scaling: [
        'Horizontal Kafka broker topic sharding scaled to 100+ urban sector partitions',
        'Idempotent consumers with exactly-once transactional offset commits',
        'Redis Cluster geospatial caching with automatic shard replication'
      ],
      failurePoints: [
        { point: 'Kafka Partition Leader Crash', handling: 'In-Sync Replica (ISR) automated failover elects new broker leader in < 1.82s.' },
        { point: 'Network Partition on Edge Ingest', handling: 'Local in-memory edge ring buffers buffer packets until gateway reconnection.' }
      ],
      tradeoffs: [
        { decision: 'Geohash-6 Partition Keying', reason: 'Enables in-memory stateful aggregation without inter-node RPCs', cost: 'Potential partition skew during downtown rush hours' },
        { decision: 'In-Memory Sliding Windows in Go', reason: 'Sub-5ms anomaly calculation', cost: 'Requires persistent checkpointing for crash consistency' }
      ]
    }
  };

  const currentArch = architectures[selectedSystem];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Layers className="w-4 h-4" />
          <span>ARCHITECTURE LAB // INTERACTIVE SCHEMATICS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          System Architecture Laboratory
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Interactive technical visualization laboratory. Step through data flows, inspect bottlenecks, review failure boundaries, and examine architectural trade-offs.
        </p>
      </div>

      {/* 2. SYSTEM SELECTOR TABS */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => { setSelectedSystem('TSDB'); setActiveStep(0); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
            selectedSystem === 'TSDB'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-500'
              : 'bg-[#0D1322] text-slate-400 border border-[#1E293B] hover:text-white'
          }`}
        >
          <Server className="w-4 h-4" />
          <span>01. TITAN TSDB (STORAGE)</span>
        </button>

        <button
          onClick={() => { setSelectedSystem('VECTOR'); setActiveStep(0); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
            selectedSystem === 'VECTOR'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500'
              : 'bg-[#0D1322] text-slate-400 border border-[#1E293B] hover:text-white'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>02. VECTOR & INFERENCE (AI INFRA)</span>
        </button>

        <button
          onClick={() => { setSelectedSystem('TRAFFIC'); setActiveStep(0); }}
          className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
            selectedSystem === 'TRAFFIC'
              ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/25 border border-sky-500'
              : 'bg-[#0D1322] text-slate-400 border border-[#1E293B] hover:text-white'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>03. REAL-TIME TRAFFIC (STREAM)</span>
        </button>
      </div>

      {/* 3. INTERACTIVE SVG SCHEMATIC & STEP-THROUGH FLOW */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
              Interactive Schematic & Step-Through Data Flow
            </span>
            <h2 className="font-display text-2xl font-bold text-white mt-1">
              {currentArch.title}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">{currentArch.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((prev) => (prev >= 1.4 ? 1 : prev + 0.2))}
              className="p-2 bg-[#080C14] hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 text-xs flex items-center gap-1 font-mono"
              title="Toggle Zoom Level"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{Math.round(zoomLevel * 100)}%</span>
            </button>
            <button
              onClick={() => { setZoomLevel(1); setActiveStep(0); }}
              className="p-2 bg-[#080C14] hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 text-xs"
              title="Reset view"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <NavLink
              to={currentArch.caseStudyRoute}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <span>Inspect Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>
        </div>

        {/* Step-by-Step Data Flow Visualizer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {currentArch.steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                    : 'bg-[#080C14] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono text-blue-400 font-bold">STAGE 0{idx + 1}</div>
                <div className="text-xs font-bold text-slate-200 mt-1 line-clamp-2">{step.label}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Data Walkthrough Box */}
        <div className="p-5 rounded-xl bg-[#080C14] border border-blue-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-blue-400 font-bold uppercase">
              Current Stage: 0{activeStep + 1} // {currentArch.steps[activeStep].label}
            </span>
            <span className="text-slate-500">Step {activeStep + 1} of {currentArch.steps.length}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {currentArch.steps[activeStep].desc}
          </p>
        </div>
      </section>

      {/* 4. BOTTLENECKS & SCALING CONSIDERATIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Bottlenecks Card */}
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
          <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Bottlenecks & Engineering Solutions</span>
          </div>
          <div className="space-y-3">
            {currentArch.bottlenecks.map((item, i) => (
              <div key={i} className="p-3.5 bg-[#080C14] rounded-lg border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white">{item.name}</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-emerald-400 font-mono">Engineered Fix:</strong> {item.fix}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scaling Considerations Card */}
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>Scaling & Concurrency Considerations</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {currentArch.scaling.map((item, i) => (
              <li key={i} className="p-3 bg-[#080C14] rounded-lg border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. FAILURE POINTS & ARCHITECTURAL TRADE-OFFS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Failure Points */}
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
          <div className="text-xs font-mono text-rose-400 uppercase font-semibold flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            <span>Failure Points & Defensive Recovery</span>
          </div>
          <div className="space-y-3">
            {currentArch.failurePoints.map((item, i) => (
              <div key={i} className="p-3.5 bg-[#080C14] rounded-lg border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-rose-300">{item.point}</div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-300 font-mono">Defensive Strategy:</strong> {item.handling}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trade-offs */}
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
            <Sliders className="w-4 h-4" />
            <span>Architectural Decisions & Trade-Offs</span>
          </div>
          <div className="space-y-3">
            {currentArch.tradeoffs.map((item, i) => (
              <div key={i} className="p-3.5 bg-[#080C14] rounded-lg border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white">{item.decision}</div>
                <div className="text-xs text-slate-300">
                  <span className="text-indigo-400 font-mono">Benefit:</span> {item.reason}
                </div>
                <div className="text-xs text-slate-400">
                  <span className="text-amber-400 font-mono">Trade-Off:</span> {item.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
