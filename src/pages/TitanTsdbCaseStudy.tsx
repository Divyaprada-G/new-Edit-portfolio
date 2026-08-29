import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import { SystemBreadcrumb } from '../components/SystemBreadcrumb';
import { SYSTEM_PROJECTS } from '../data/projects';
import {
  Server,
  Cpu,
  Layers,
  Activity,
  Code,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Database,
  Terminal,
  HelpCircle,
  Play
} from 'lucide-react';

export const TitanTsdbCaseStudy: React.FC = () => {
  const project = SYSTEM_PROJECTS.find((p) => p.slug === 'titan-tsdb')!;
  const [selectedNode, setSelectedNode] = useState<string>('compressor');
  
  // Interactive Gorilla Compression Demonstrator State
  const [sampleVal1, setSampleVal1] = useState<number>(72.50);
  const [sampleVal2, setSampleVal2] = useState<number>(72.55);

  const activeNodeData = project.deepDive.architectureDiagram.nodes.find((n) => n.id === selectedNode) || project.deepDive.architectureDiagram.nodes[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header & Identity */}
      <div className="space-y-4 border-b border-[#1E293B] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <Server className="w-4 h-4" />
            <span>SYS-01 // TIME-SERIES STORAGE ENGINE</span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-blue-500/30 text-blue-400 bg-blue-500/10">
            PRODUCTION READY
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {project.name}
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Top Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#0D1322] border border-[#1E293B]">
              <div className="font-display text-2xl font-bold text-blue-400">{m.value}</div>
              <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">{m.label}</div>
              {m.detail && <div className="text-[10px] text-slate-400 mt-1">{m.detail}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* 2. PROBLEM & SYSTEM OVERVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            <span>01 // The Problem</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            High-Frequency Telemetry Ingestion Bottlenecks
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            General purpose OLTP databases and standard B-Trees experience severe write amplification and lock contention when absorbing continuous 1M+ writes/sec metric streams. Disk I/O saturates rapidly, and uncompressed floating-point points exhaust memory within hours.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>02 // System Overview</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            Decoupled Ingestion & Vectorized Aggregation
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Titan TSDB utilizes an LSM-inspired pipeline: an in-memory lock-free skiplist absorbs out-of-order writes with zero mutex locks, while an asynchronous ring buffer writes sequential WAL blocks. Every 2 hours, data is flushed into immutable columnar chunks with bit-level Gorilla compression.
          </p>
        </div>
      </section>

      {/* 3. INTERACTIVE ARCHITECTURE DIAGRAM */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono text-blue-400 font-semibold uppercase">03 // Interactive Architecture</div>
            <h2 className="font-display text-2xl font-bold text-white">Data Path & Component Topology</h2>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Click any node to inspect execution details</span>
          </div>
        </div>

        {/* Interactive Nodes Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
          {project.deepDive.architectureDiagram.nodes.map((node) => {
            const isSelected = node.id === selectedNode;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                    : 'bg-[#080C14] border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">{node.type}</div>
                  <div className="font-display text-xs font-bold mt-1 line-clamp-2">{node.name}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Latency:</span>
                  <span className="text-emerald-400 font-semibold">{node.latency}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Component Detail Inspector */}
        <div className="p-5 rounded-xl bg-[#080C14] border border-blue-500/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
              Component: {activeNodeData.name} ({activeNodeData.type})
            </span>
            <span className="text-xs font-mono text-emerald-400">
              Typical P99 SLA: {activeNodeData.latency}
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {activeNodeData.description}
          </p>
        </div>
      </section>

      {/* 4. GORILLA COMPRESSION DEMONSTRATOR & STORAGE ENGINE */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold">
            04 & 05 // Storage Engine & Compression Kernel
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            IEEE 754 XOR Compression & Delta-of-Delta Bit-Packing
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Facebook Gorilla compression enables storing floating point telemetry at 1.37 bytes/point instead of 16 bytes raw.
          </p>
        </div>

        {/* Interactive Demonstration Card */}
        <div className="p-6 rounded-xl bg-[#080C14] border border-slate-800 space-y-4">
          <div className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Gorilla XOR Concept Calculator</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Prior Metric Value (V1)</label>
              <input
                type="number"
                step="0.01"
                value={sampleVal1}
                onChange={(e) => setSampleVal1(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#0D1322] border border-slate-700 rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Subsequent Metric Value (V2)</label>
              <input
                type="number"
                step="0.01"
                value={sampleVal2}
                onChange={(e) => setSampleVal2(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#0D1322] border border-slate-700 rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D1322] border border-slate-800 text-xs font-mono space-y-2">
            <div className="text-slate-400 flex items-center justify-between">
              <span>Value delta: <strong className="text-white">{(sampleVal2 - sampleVal1).toFixed(4)}</strong></span>
              <span className="text-emerald-400 font-semibold">
                {sampleVal1 === sampleVal2 ? 'Zero delta → 1 single bit (0)' : 'Non-zero delta → Variable XOR bit-packed'}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Because consecutive telemetry metrics (temperature, CPU load, memory usage) fluctuate within narrow ranges, the high-order exponent and mantissa bits remain unchanged. XOR-ing produces long runs of leading/trailing zeros that are dropped entirely from disk.
            </div>
          </div>
        </div>

        {/* Code Snippet */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#060911]">
          <div className="px-4 py-2.5 bg-[#090D18] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-blue-400" />
              gorilla_encoding_kernel.cpp
            </span>
            <span className="text-[10px] text-slate-400">C++20 / ZERO ALLOC</span>
          </div>
          <pre className="p-4 text-xs font-mono text-blue-200 overflow-x-auto leading-relaxed">
            {`// Gorilla Timestamp Delta-of-Delta Encoding Kernel
uint64_t delta = timestamp - prev_timestamp;
int64_t dod = (int64_t)delta - (int64_t)prev_delta;

if (dod == 0) {
    bit_writer.write_bit(0); // 1 bit for steady-interval stream
} else if (dod >= -63 && dod <= 64) {
    bit_writer.write_bits(0b10, 2);
    bit_writer.write_bits(dod + 63, 7); // 9 bits total
} else if (dod >= -255 && dod <= 256) {
    bit_writer.write_bits(0b110, 3);
    bit_writer.write_bits(dod + 255, 9); // 12 bits total
} else {
    bit_writer.write_bits(0b1110, 4);
    bit_writer.write_bits(dod + 2047, 12); // 16 bits total
}`}
          </pre>
        </div>
      </section>

      {/* 6 & 7. QUERY ENGINE & CONCURRENCY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">
            06 // Vectorized SIMD Query Engine
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            AVX-512 Scan Aggregations
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Standard row-by-row iterators suffer massive instruction cache evictions. Titan compiles aggregation queries into AVX-512 vectorized kernels that scan 8 double-precision floats simultaneously per CPU cycle.
          </p>
          <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Block header min/max predicate pushdown skips non-matching 2-hour chunks</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Sub-2.4ms P99 query latency across 10-million points</span>
            </li>
          </ul>
        </div>

        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
            07 // Concurrency & Memory
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            Lock-Free Skiplist MemTable
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Utilizes atomic Compare-And-Swap (CAS) pointers with hazard pointer memory reclamation, completely eliminating mutex lock contention during high concurrency (32+ threads) ingestion bursts.
          </p>
          <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Slab memory allocators prevent heap fragmentation under churning load</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Asynchronous group-commit WAL flushes every 5ms or 10,000 points</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. VERIFIED BENCHMARKS TABLE */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold">08 // Benchmarks & Verification</div>
          <h2 className="font-display text-2xl font-bold text-white">Empirical Performance Metrics</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#1E293B] bg-[#0D1322]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#090D18] text-slate-400 font-mono border-b border-[#1E293B]">
              <tr>
                <th className="py-3 px-4">Metric</th>
                <th className="py-3 px-4">Titan TSDB Result</th>
                <th className="py-3 px-4">Comparative Baseline</th>
                <th className="py-3 px-4">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-sans">
              {project.deepDive.benchmarks.map((bench, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-semibold text-white">{bench.name}</td>
                  <td className="py-3 px-4 font-mono font-bold text-blue-400">{bench.value}</td>
                  <td className="py-3 px-4 text-slate-400">{bench.comparison}</td>
                  <td className="py-3 px-4 font-mono text-slate-500">{bench.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 09. ENGINEERING DECISIONS & TRADE-OFFS */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">09 // Technical Trade-Offs</div>
          <h2 className="font-display text-2xl font-bold text-white">Engineering Decisions</h2>
        </div>

        <div className="space-y-3">
          {project.deepDive.decisions.map((dec, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-2">
              <h3 className="font-display text-base font-bold text-white">
                Decision: {dec.decision}
              </h3>
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-blue-400 font-mono">Why:</strong> {dec.why}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-amber-400 font-mono">Trade-Off Accepted:</strong> {dec.tradeOff}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <SystemBreadcrumb currentSlug="titan-tsdb" />

    </div>
  );
};
