import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import {
  Server,
  Cpu,
  Layers,
  Activity,
  Zap,
  Shield,
  ArrowRight,
  Database,
  Terminal,
  CheckCircle2
} from 'lucide-react';

interface StageNode {
  id: string;
  step: string;
  name: string;
  category: string;
  latency: string;
  throughput: string;
  system: string;
  description: string;
  mechanicalInsight: string;
  codeSnippet: string;
  route: string;
}

export const EngineeringSystemMap: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('stage-memtable');

  const stages: StageNode[] = [
    {
      id: 'stage-ingress',
      step: '01',
      name: 'High-Velocity Ingress',
      category: 'STREAM INGESTION',
      latency: '0.2ms P99',
      throughput: '1.2M+ writes/s',
      system: 'Titan TSDB',
      description: 'Decodes high-frequency time-series telemetry over gRPC binary streams into zero-allocation memory arenas with MurmurHash3 series distribution.',
      mechanicalInsight: 'Zero heap allocations on the hot ingest path prevents GC pauses and CPU cache line eviction.',
      codeSnippet: `// Thread-local fast path metric decoding
const uint64_t hash = MurmurHash3_64(metric.series_key());
thread_local_ring_buffer[hash % NUM_QUEUES].push(metric);`,
      route: '/systems/titan-tsdb'
    },
    {
      id: 'stage-memtable',
      step: '02',
      name: 'Lock-Free Skiplist MemTable',
      category: 'MEMORY ENGINE',
      latency: '0.1ms P99',
      throughput: '32-Core Parallel',
      system: 'Titan TSDB',
      description: 'Absorbs concurrent, out-of-order writes with atomic CAS pointers, eliminating mutex lock contention and spin-lock degradation.',
      mechanicalInsight: 'Replaces B-Tree page latches with optimistic atomic pointers, maintaining O(log N) lookup without global locks.',
      codeSnippet: `// Atomic Compare-And-Swap node insertion
while (!current->next[level].compare_exchange_weak(
    succ, new_node, std::memory_order_release)) {
    succ = current->next[level].load(std::memory_order_relaxed);
}`,
      route: '/systems/titan-tsdb'
    },
    {
      id: 'stage-compression',
      step: '03',
      name: 'Gorilla XOR Bit Compression',
      category: 'STORAGE ENGINE',
      latency: '0.6ms P99',
      throughput: '11.4x Compression',
      system: 'Titan TSDB',
      description: 'Delta-of-delta timestamp encoding and IEEE 754 XOR floating point bit-packing compress 16-byte raw points down to 1.37 bytes/pt.',
      mechanicalInsight: 'Bit-level encoding allows stream processing directly from memory without full-block decompression.',
      codeSnippet: `// Gorilla XOR IEEE-754 compression
uint64_t xor_diff = curr_val_bits ^ prev_val_bits;
if (xor_diff == 0) { bit_writer.write_bit(0); }
else { encode_meaningful_bits(xor_diff); }`,
      route: '/systems/titan-tsdb'
    },
    {
      id: 'stage-vector',
      step: '04',
      name: 'SIMD AVX-512 Scan Kernels',
      category: 'AI / VECTOR COMPUTE',
      latency: '1.08ms P99',
      throughput: '16 Floats/Cycle',
      system: 'Vector Inference',
      description: 'Hardware vectorized Cosine Similarity & Range Aggregation kernels scanning 10M 1536-dim embeddings with 98.7% Recall@10.',
      mechanicalInsight: 'Leverages AVX-512 FMA registers to process 16 double-precision float calculations in a single CPU cycle.',
      codeSnippet: `// AVX-512 FMA vector arithmetic
__m512 va = _mm512_loadu_ps(vec_a + i);
__m512 vb = _mm512_loadu_ps(vec_b + i);
dot_acc = _mm512_fmadd_ps(va, vb, dot_acc);`,
      route: '/systems/vector-inference'
    },
    {
      id: 'stage-stream',
      step: '05',
      name: 'Geospatial Kafka Stream Partitioning',
      category: 'DISTRIBUTED SYSTEMS',
      latency: '18s SLA (<2s Failover)',
      throughput: '10K+ Vehicles',
      system: 'Traffic Telemetry',
      description: 'Geohash-keyed Kafka partitions guarantee spatial locality for 10K+ vehicles, surviving 3-node cluster chaos with 99.9% packet delivery.',
      mechanicalInsight: 'Spatial sharding avoids distributed cross-node coordination locks by isolating road networks to dedicated stream workers.',
      codeSnippet: `// Geohash-6 partition key routing
kafka_producer.send({
    topic: "urban.telemetry.v1",
    partition_key: compute_geohash_6(lat, lng),
    payload: protobuf_payload
});`,
      route: '/systems/traffic-system'
    }
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[1];

  return (
    <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-6 sm:p-8 space-y-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Interactive Engineering System Map</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
            Data Path & Mechanical Invariants
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Click any pipeline stage to inspect kernel code & SLAs</span>
        </div>
      </div>

      {/* Interactive Pipeline Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {stages.map((stage) => {
          const isActive = stage.id === activeStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/15'
                  : 'bg-[#080C14] border-slate-800 hover:border-slate-700 hover:bg-[#080C14]/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-400">
                    STAGE {stage.step}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                    {stage.throughput}
                  </span>
                </div>
                <div className="font-display text-xs font-bold text-white mt-1.5 line-clamp-2">
                  {stage.name}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">P99 SLA:</span>
                <span className="text-emerald-400 font-semibold">{stage.latency}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Inspector Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6 rounded-xl bg-[#080C14] border border-blue-500/30">
        
        {/* Left Col: Explanations */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
              // Stage {activeStage.step} // {activeStage.category}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              System: {activeStage.system}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold text-white">
            {activeStage.name}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {activeStage.description}
          </p>

          <div className="p-3.5 rounded-lg bg-[#0D1322] border border-slate-800 space-y-1">
            <div className="text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Mechanical Sympathy Rationale</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {activeStage.mechanicalInsight}
            </p>
          </div>

          <div className="pt-2">
            <NavLink
              to={activeStage.route}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold"
            >
              <span>Inspect Full Case Study & Architecture →</span>
            </NavLink>
          </div>
        </div>

        {/* Right Col: Implementation Invariant Code */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-2">
          <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Execution Invariant Snippet</span>
            <span className="text-blue-400 font-semibold">C++20 / Low-Level</span>
          </div>

          <pre className="p-4 rounded-xl bg-[#090D18] border border-slate-800/90 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
            <code>{activeStage.codeSnippet}</code>
          </pre>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-lg bg-[#0D1322] border border-slate-800">
              <div className="text-[10px] text-slate-400">Target Latency:</div>
              <div className="text-emerald-400 font-bold">{activeStage.latency}</div>
            </div>
            <div className="p-2 rounded-lg bg-[#0D1322] border border-slate-800">
              <div className="text-[10px] text-slate-400">Measured Throughput:</div>
              <div className="text-blue-400 font-bold">{activeStage.throughput}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
