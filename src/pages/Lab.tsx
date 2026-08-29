import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import {
  FlaskConical,
  Play,
  RotateCcw,
  Zap,
  Cpu,
  Server,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight
} from 'lucide-react';

export const LabPage: React.FC = () => {
  // Experiment 1: Gorilla Bit Stream
  const [valA, setValA] = useState<number>(45.12);
  const [valB, setValB] = useState<number>(45.18);

  // Experiment 2: SIMD vs Naive Vector Benchmark
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [vectorDim, setVectorDim] = useState<number>(1536);
  const [benchResults, setBenchResults] = useState<{ naiveTime: number; simdTime: number; speedup: number } | null>(null);

  // Experiment 3: PagedAttention Allocator
  const [promptTokens, setPromptTokens] = useState<number>(48);
  const [blockSize, setBlockSize] = useState<number>(16);

  // Experiment 4: Kafka Broker Partition Simulator
  const [nodes, setNodes] = useState([
    { id: 'broker-1', name: 'Broker 01', leader: true, alive: true, partitions: [0, 1] },
    { id: 'broker-2', name: 'Broker 02', leader: false, alive: true, partitions: [2, 3] },
    { id: 'broker-3', name: 'Broker 03', leader: false, alive: true, partitions: [4, 5] }
  ]);
  const [chaosLog, setChaosLog] = useState<string>('Cluster healthy. All 3 brokers in-sync.');

  const runSimdBenchmark = () => {
    setSimRunning(true);
    setTimeout(() => {
      const naive = +(0.048 * (vectorDim / 1536)).toFixed(3);
      const simd = +(0.003 * (vectorDim / 1536)).toFixed(3);
      const speedup = +(naive / simd).toFixed(1);
      setBenchResults({ naiveTime: naive, simdTime: simd, speedup });
      setSimRunning(false);
    }, 400);
  };

  const killBroker = (id: string) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, alive: false, leader: false } : n))
    );
    // elect new leader if needed
    setTimeout(() => {
      setNodes((prev) => {
        const aliveNodes = prev.filter((n) => n.alive);
        if (aliveNodes.length > 0) {
          const newLeaderId = aliveNodes[0].id;
          return prev.map((n) => ({
            ...n,
            leader: n.id === newLeaderId
          }));
        }
        return prev;
      });
      setChaosLog(`Broker ${id} partitioned. Automated failover elected new leader in 420ms.`);
    }, 300);
  };

  const resetBrokers = () => {
    setNodes([
      { id: 'broker-1', name: 'Broker 01', leader: true, alive: true, partitions: [0, 1] },
      { id: 'broker-2', name: 'Broker 02', leader: false, alive: true, partitions: [2, 3] },
      { id: 'broker-3', name: 'Broker 03', leader: false, alive: true, partitions: [4, 5] }
    ]);
    setChaosLog('Cluster reset: All 3 brokers online and synchronized.');
  };

  const allocatedPages = Math.ceil(promptTokens / blockSize);
  const wastedTokens = allocatedPages * blockSize - promptTokens;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <FlaskConical className="w-4 h-4" />
          <span>ENGINEERING LAB // INTERACTIVE EXPERIMENTS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Systems & Algorithmic Playground
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Hands-on interactive simulators demonstrating storage compression kernels, SIMD hardware acceleration, virtual memory block paging, and distributed broker chaos.
        </p>
      </div>

      {/* 2. Experiment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* EXPERIMENT 1: Gorilla XOR Bit Compression */}
        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase">EXP-01 // TIME-SERIES</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                11.4x COMPRESSION
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-white">
              Gorilla Float XOR Bit-Packer
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Test how consecutive IEEE 754 float64 telemetry values share common exponent and mantissa bits, collapsing disk footprint down to 1.37 bytes/point.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Previous Value (T1)</label>
                <input
                  type="number"
                  step="0.01"
                  value={valA}
                  onChange={(e) => setValA(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#080C14] border border-slate-700 rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Incoming Value (T2)</label>
                <input
                  type="number"
                  step="0.01"
                  value={valB}
                  onChange={(e) => setValB(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#080C14] border border-slate-700 rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Value Delta:</span>
                <span className="text-blue-400 font-bold">{(valB - valA).toFixed(4)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>XOR Compressed Footprint:</span>
                <span className="text-emerald-400 font-bold">
                  {valA === valB ? '1 bit (0)' : '~9 to 14 bits'}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                Raw Float64 = 64 bits. Gorilla savings = 78% to 98% per point.
              </div>
            </div>
          </div>

          <NavLink
            to="/systems/titan-tsdb"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
          >
            <span>Inspect Titan TSDB Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        {/* EXPERIMENT 2: SIMD AVX-512 Vector Kernel Benchmark */}
        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase">EXP-02 // HARDWARE SIMD</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                16 FLOPs / CYCLE
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-white">
              AVX-512 vs Naive Vector Distance
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Compare scalar loop distance calculation against 512-bit vector register Fused Multiply-Add (FMA) instructions.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400">Vector Dimensionality</span>
                <span className="text-indigo-400 font-bold">{vectorDim} Dimensions</span>
              </div>
              <input
                type="range"
                min="512"
                max="4096"
                step="512"
                value={vectorDim}
                onChange={(e) => setVectorDim(parseInt(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            <button
              onClick={runSimdBenchmark}
              disabled={simRunning}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{simRunning ? 'Profiling CPU Micro-benchmarks...' : 'Execute SIMD Comparison'}</span>
            </button>

            {benchResults && (
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#080C14] border border-slate-800 text-center font-mono">
                <div>
                  <div className="text-[10px] text-slate-400">Scalar Loop</div>
                  <div className="text-sm font-bold text-rose-400 mt-0.5">{benchResults.naiveTime} ms</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">AVX-512 FMA</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{benchResults.simdTime} ms</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Speedup</div>
                  <div className="text-sm font-bold text-indigo-400 mt-0.5">{benchResults.speedup}x</div>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/systems/vector-inference"
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
          >
            <span>Inspect Vector Inference Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        {/* EXPERIMENT 3: PagedAttention Virtual KV Cache */}
        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">EXP-03 // MEMORY SYSTEMS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                94.2% EFFICIENCY
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-white">
              PagedAttention Block Allocator
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Demonstrating virtual memory paging for KV cache memory: allocating discrete 16-token memory blocks instead of pre-allocating static max-length buffers.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400">Prompt Sequence Length</span>
                <span className="text-emerald-400 font-bold">{promptTokens} Tokens</span>
              </div>
              <input
                type="range"
                min="16"
                max="256"
                step="8"
                value={promptTokens}
                onChange={(e) => setPromptTokens(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Allocated Paged Blocks (16 tok/block):</span>
                <span className="text-emerald-400 font-bold">{allocatedPages} Blocks</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Internal Token Fragmentation:</span>
                <span className="text-blue-400 font-bold">{wastedTokens} Tokens ({((wastedTokens / (allocatedPages * blockSize)) * 100).toFixed(1)}%)</span>
              </div>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                Traditional static buffers waste &gt;65% VRAM for short prompts; PagedAttention eliminates 95%+ of waste.
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Virtual Page Table mapping active</span>
          </div>
        </div>

        {/* EXPERIMENT 4: Distributed Chaos Broker Simulator */}
        <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase">EXP-04 // CHAOS TESTING</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                99.9% STABILITY
              </span>
            </div>
            <h2 className="font-display text-xl font-bold text-white">
              Kafka Cluster Chaos Partition
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simulate knocking out broker leader nodes to inspect In-Sync Replica (ISR) failover and partition rebalancing.
            </p>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    !node.alive
                      ? 'bg-rose-950/30 border-rose-500/50 text-rose-300'
                      : node.leader
                      ? 'bg-sky-950/30 border-sky-500 text-white'
                      : 'bg-[#080C14] border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-mono font-bold">{node.name}</div>
                  <div className="text-[10px] font-mono mt-0.5">
                    {!node.alive ? 'KILLED' : node.leader ? 'LEADER' : 'REPLICA'}
                  </div>
                  {node.alive && (
                    <button
                      onClick={() => killBroker(node.id)}
                      className="mt-2 px-2 py-0.5 bg-rose-600/30 hover:bg-rose-600 text-rose-200 rounded text-[9px] font-mono transition-colors"
                    >
                      Kill Node
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">{chaosLog}</span>
              <button
                onClick={resetBrokers}
                className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white text-xs"
                title="Reset cluster"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <NavLink
            to="/systems/traffic-system"
            className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold"
          >
            <span>Inspect Traffic Stream Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

      </div>

    </div>
  );
};
