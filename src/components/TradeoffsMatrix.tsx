import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import {
  Layers,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Shield,
  Zap,
  Cpu,
  Server
} from 'lucide-react';

interface DecisionItem {
  id: string;
  system: string;
  question: string;
  chosen: {
    technology: string;
    why: string;
    gain: string;
  };
  rejected: {
    technology: string;
    whyNot: string;
    risk: string;
  };
  keyMetric: string;
  route: string;
}

export const TradeoffsMatrix: React.FC = () => {
  const [filterSystem, setFilterSystem] = useState<string>('ALL');

  const decisions: DecisionItem[] = [
    {
      id: 'dec-1',
      system: 'Titan TSDB',
      question: 'Lock-Free Concurrent Skiplist vs. B-Tree Page Latches for Ingest MemTable',
      chosen: {
        technology: 'Lock-Free Skiplist (CAS Pointers)',
        why: 'Allows concurrent atomic insertions from 32+ worker threads without acquiring OS mutex locks or entering kernel wait states.',
        gain: 'Eliminates lock contention tail latency at 1.2M+ writes/sec.'
      },
      rejected: {
        technology: 'Standard B-Tree with Mutex Latches',
        whyNot: 'High write concurrence induces lock convoying on root node page latches, causing latency spikes >50ms.',
        risk: 'Severe throughput collapse under multi-core write storms.'
      },
      keyMetric: '1.2M+ writes/sec with <0.1ms ingest latching',
      route: '/systems/titan-tsdb'
    },
    {
      id: 'dec-2',
      system: 'Titan TSDB',
      question: 'Bit-Level Gorilla XOR Delta Compression vs. Block-Level Generic ZSTD/Gzip',
      chosen: {
        technology: 'Gorilla Delta-of-Delta + IEEE-754 XOR',
        why: 'Custom bitstream encoding matches time-series entropy characteristics, enabling SIMD aggregation directly over compressed memory pages without decompression overhead.',
        gain: '11.4x compression ratio while preserving <2.4ms query scans.'
      },
      rejected: {
        technology: 'ZSTD / Gzip Block Compression',
        whyNot: 'Requires decompressing entire 64KB blocks to evaluate single aggregations, bottlenecking the memory bus.',
        risk: '4x-8x higher query latency during analytical range scans.'
      },
      keyMetric: '1.37 bytes/point storage vs 16 bytes raw',
      route: '/systems/titan-tsdb'
    },
    {
      id: 'dec-3',
      system: 'Vector Inference',
      question: 'Hierarchical Navigable Small World (HNSW) vs. Inverted File (IVF-Flat)',
      chosen: {
        technology: 'HNSW Graph with PQ-64 Compression',
        why: 'Logarithmic bounded routing hops traverse 10M embeddings with 98.7% Recall@10 in <1.1ms P99 without exhaustive cluster scanning.',
        gain: 'Predictable sub-millisecond tail latency SLA.'
      },
      rejected: {
        technology: 'IVF-Flat Inverted Index',
        whyNot: 'Exhaustive cluster bucket scans suffer high recall degradation at low probe counts and latency spikes at high probe counts.',
        risk: 'Unpredictable latency variance under high dimensionality.'
      },
      keyMetric: '<1.08ms P99 search latency @ 98.7% Recall@10',
      route: '/systems/vector-inference'
    },
    {
      id: 'dec-4',
      system: 'Vector Inference',
      question: 'PagedAttention Virtual Memory Management vs. Static Max-Length VRAM Pre-allocation',
      chosen: {
        technology: 'PagedAttention Virtual KV Block Manager',
        why: 'Allocates KV cache memory in non-contiguous 16-token physical pages on-demand, eliminating internal and external VRAM fragmentation.',
        gain: '94.2% VRAM memory utilization efficiency.'
      },
      rejected: {
        technology: 'Static Max-Length Contiguous VRAM',
        whyNot: 'Pre-allocating space for 2048-token context windows wastes 60-80% of GPU memory on short requests.',
        risk: 'Severe concurrency throttling and early Out-Of-Memory crashes.'
      },
      keyMetric: '3.2x increase in concurrent batch throughput',
      route: '/systems/vector-inference'
    },
    {
      id: 'dec-5',
      system: 'Traffic Telemetry',
      question: 'Geohash-6 Kafka Topic Partitioning vs. Round-Robin Load Balancing',
      chosen: {
        technology: 'Geospatial Geohash Partition Sharding',
        why: 'Routes vehicle GPS telemetry for adjacent intersections to the same dedicated stream worker, enabling local stateful anomaly detection without distributed cross-node coordination.',
        gain: 'Zero cross-partition locks and sub-second anomaly detection.'
      },
      rejected: {
        technology: 'Round-Robin Ingestion Routing',
        whyNot: 'Requires expensive distributed two-phase state synchronization across cluster nodes to compute intersection density.',
        risk: 'Distributed lock bottlenecks and severe network chattiness.'
      },
      keyMetric: '10K+ vehicle telemetry streams with 99.9% packet delivery',
      route: '/systems/traffic-system'
    }
  ];

  const filteredDecisions =
    filterSystem === 'ALL'
      ? decisions
      : decisions.filter((d) => d.system.toLowerCase().includes(filterSystem.toLowerCase()));

  return (
    <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-6 sm:p-8 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
            // Engineering Decisions Matrix
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Why Architecture X instead of Y?
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#080C14] p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
          {['ALL', 'TSDB', 'Vector', 'Traffic'].map((sys) => (
            <button
              key={sys}
              onClick={() => setFilterSystem(sys)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                filterSystem === sys
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {sys}
            </button>
          ))}
        </div>
      </div>

      {/* Decision Cards List */}
      <div className="space-y-4">
        {filteredDecisions.map((dec) => (
          <div
            key={dec.id}
            className="p-5 sm:p-6 rounded-xl bg-[#080C14] border border-slate-800 space-y-4 hover:border-slate-700 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {dec.system}
                </span>
                <h3 className="font-display text-base font-bold text-white mt-1.5">
                  {dec.question}
                </h3>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 shrink-0 self-start sm:self-auto">
                {dec.keyMetric}
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              {/* Selected Choice */}
              <div className="p-4 rounded-xl bg-[#0D1322] border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-[11px]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>CHOSEN ARCHITECTURE: {dec.chosen.technology}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{dec.chosen.why}</p>
                <div className="text-[11px] font-mono text-emerald-300/90 pt-1">
                  <strong>Architectural Gain:</strong> {dec.chosen.gain}
                </div>
              </div>

              {/* Rejected Alternative */}
              <div className="p-4 rounded-xl bg-[#0D1322] border border-red-500/20 space-y-2">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold font-mono text-[11px]">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>REJECTED ALTERNATIVE: {dec.rejected.technology}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{dec.rejected.whyNot}</p>
                <div className="text-[11px] font-mono text-rose-400/90 pt-1">
                  <strong>Production Risk:</strong> {dec.rejected.risk}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <NavLink
                to={dec.route}
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
