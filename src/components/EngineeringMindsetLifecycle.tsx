import React, { useState } from 'react';
import {
  Shield,
  Cpu,
  Server,
  Layers,
  Activity,
  Zap,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Database,
  Terminal
} from 'lucide-react';

interface MindsetNode {
  id: string;
  step: string;
  title: string;
  headline: string;
  concept: string;
  tradeOff: string;
  proof: string;
  invariant: string;
}

export const EngineeringMindsetLifecycle: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-mechanical');

  const nodes: MindsetNode[] = [
    {
      id: 'node-problem',
      step: '01',
      title: 'Problem Formulation',
      headline: 'Identifying True Hardware & Algorithmic Bottlenecks',
      concept: 'Before writing code, measure where the actual physical wall is: memory bus saturation, lock contention, disk I/O seek overhead, or CPU branch misprediction.',
      tradeOff: 'Standard frameworks and ORMs offer developer convenience at the cost of uncontrolled heap allocations and hidden latency spikes.',
      proof: 'Evaluated raw 1M writes/sec ingest saturation on standard SQL TS engines vs custom memory arenas.',
      invariant: 'No premature optimization without baseline profiling and flame graph verification.'
    },
    {
      id: 'node-mechanical',
      step: '02',
      title: 'Mechanical Sympathy',
      headline: 'Aligning Data Structures with CPU Caches & Hardware',
      concept: 'Modern CPUs spend hundreds of cycles waiting for RAM. Arranging data in contiguous cache-aligned columnar arrays enables SIMD vectorization and prefetching.',
      tradeOff: 'Array compaction requires dedicated buffer management compared to arbitrary pointer graphs.',
      proof: 'Achieved 8x-16x vector compute speedup using AVX-512 FMA intrinsics over naive loops.',
      invariant: 'Cache locality and predictable sequential memory access outperform asymptotic gains with poor memory layout.'
    },
    {
      id: 'node-concurrency',
      step: '03',
      title: 'Lock-Free Concurrency',
      headline: 'Eliminating Mutex Contention under Multi-Core Load',
      concept: 'Under 32+ thread write storms, mutexes degrade into kernel spinlocks. Using atomic Compare-And-Swap (CAS) pointers guarantees non-blocking progress.',
      tradeOff: 'Higher implementation complexity and hazard pointer reclamation overhead.',
      proof: 'Sustained 1.2M+ writes/sec linear multi-core scaling without lock escalation.',
      invariant: 'Thread synchronization must be lock-free on the high-frequency critical path.'
    },
    {
      id: 'node-compression',
      step: '04',
      title: 'Zero-Copy Compression',
      headline: 'Bit-Level Delta & XOR Encoding for Direct Stream Scanning',
      concept: 'Gorilla timestamp delta-of-delta and IEEE 754 float XOR bit-packing compress data 11.4x while allowing SIMD execution directly over bitstreams.',
      tradeOff: 'Higher CPU encode complexity vs generic byte-level gzip.',
      proof: 'Reduced raw storage from 16 bytes/point down to 1.37 bytes/point with sub-2.4ms P99 queries.',
      invariant: 'Compressing data in RAM multiplies effective memory bandwidth by 10x+.'
    },
    {
      id: 'node-chaos',
      step: '05',
      title: 'Chaos & Fault Tolerance',
      headline: 'Designing Self-Healing Distributed Boundaries',
      concept: 'Networks will partition and nodes will crash. Event pipelines must enforce idempotent consumers, append-only WAL group commits, and automated leader election.',
      tradeOff: 'Slightly higher write latency (5ms sync window) in exchange for absolute durability.',
      proof: 'Survived 3-broker cluster partition drills with 99.9% packet stability and <2.0s leader failover.',
      invariant: 'All distributed state transitions must be idempotent and crash-recoverable.'
    },
    {
      id: 'node-sla',
      step: '06',
      title: 'Verifiable Benchmarks',
      headline: 'Auditable P99/P99.9 Latency Distributions',
      concept: 'Averages hide catastrophic outliers. Systems must be engineered and validated against strict 99th and 99.9th percentile SLA latency bounds under peak load.',
      tradeOff: 'Requires rigorous load generation rigs and continuous benchmark regressions.',
      proof: 'All metrics verified via automated micro-benchmarks and simulated 10M point queries.',
      invariant: 'Engineering excellence is measured by predictable tail latency, not best-case averages.'
    }
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[1];

  return (
    <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-6 sm:p-8 space-y-6 shadow-xl">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
            // Core Engineering Philosophy & Architectural Rigor
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            The Systems Engineering Lifecycle
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-400">
          First-principles execution from memory bus to distributed consensus
        </div>
      </div>

      {/* Interactive Step Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {nodes.map((node) => {
          const isSelected = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/15'
                  : 'bg-[#080C14] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#080C14]/80'
              }`}
            >
              <div className="text-[10px] font-mono font-bold text-indigo-400">
                STEP {node.step}
              </div>
              <div className="font-display text-xs font-bold mt-1 line-clamp-2">
                {node.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Panel */}
      <div className="p-6 rounded-xl bg-[#080C14] border border-indigo-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">
              Phase {activeNode.step} // {activeNode.title}
            </span>
            <h3 className="font-display text-xl font-bold text-white mt-0.5">
              {activeNode.headline}
            </h3>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 shrink-0">
            Invariant Verified
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed font-sans">
          {activeNode.concept}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-lg bg-[#0D1322] border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Architectural Trade-Off</span>
            </div>
            <p className="text-slate-400 leading-relaxed">{activeNode.tradeOff}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0D1322] border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-blue-400 font-semibold flex items-center gap-1">
              <Server className="w-3.5 h-3.5" />
              <span>Measurable Evidence</span>
            </div>
            <p className="text-slate-400 leading-relaxed">{activeNode.proof}</p>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0D1322] border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>System Invariant</span>
            </div>
            <p className="text-slate-400 leading-relaxed">{activeNode.invariant}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
