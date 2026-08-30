import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import { SystemBreadcrumb } from '../components/SystemBreadcrumb';
import { CaseStudyCredibilitySection } from '../components/CaseStudyCredibilitySection';
import { SYSTEM_PROJECTS } from '../data/projects';
import {
  Cpu,
  Layers,
  Activity,
  Code,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Sparkles,
  RefreshCw,
  Server,
  Play
} from 'lucide-react';

export const VectorInferenceCaseStudy: React.FC = () => {
  const project = SYSTEM_PROJECTS.find((p) => p.slug === 'vector-inference')!;
  
  // Interactive Pipeline 1: Vector Search Simulation State
  const [vectorQueryType, setVectorQueryType] = useState<'cosine' | 'l2'>('cosine');
  const [hnswHops, setHnswHops] = useState<number>(4);
  const [searchStatus, setSearchStatus] = useState<string>('Ready');
  const [searchSimRunning, setSearchSimRunning] = useState<boolean>(false);

  // Interactive Pipeline 2: PagedAttention Block Allocation Simulation
  const [activeBatchSize, setActiveBatchSize] = useState<number>(8);
  const [pageAllocationEfficiency, setPageAllocationEfficiency] = useState<number>(94.2);

  const runVectorSearchSim = () => {
    setSearchSimRunning(true);
    setSearchStatus('Traversing HNSW Layer 2 coarse graph...');
    setTimeout(() => {
      setSearchStatus('Executing PQ-64 Asymmetric Distance lookup tables...');
      setTimeout(() => {
        setSearchStatus('AVX-512 FMA SIMD re-ranking Top 10 items (0.84ms elapsed)...');
        setTimeout(() => {
          setSearchStatus('Retrieved Top-10 embeddings with 98.7% recall in 1.08ms P99');
          setSearchSimRunning(false);
        }, 350);
      }, 350);
    }, 350);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header & AI Infrastructure Theme */}
      <div className="space-y-4 border-b border-[#1E293B] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
            <Cpu className="w-4 h-4" />
            <span>SYS-02 // AI INFRASTRUCTURE & VECTOR SEARCH</span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
            ACTIVE BENCHMARK
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
              <div className="font-display text-2xl font-bold text-indigo-400">{m.value}</div>
              <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">{m.label}</div>
              {m.detail && <div className="text-[10px] text-slate-400 mt-1">{m.detail}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* 2. THE DUAL CHALLENGE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            <span>Vector Search Bottleneck</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            Memory Bandwidth & High Dimensionality
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            10M 1536-dimensional embeddings raw consume 61.4 GB RAM. Exact brute-force vector scans take &gt;50ms, causing massive memory bus saturation. HNSW graphs with Product Quantization reduce storage to 2.4 GB while serving &lt;1.1ms queries.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-3">
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>LLM Serving Bottleneck</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white">
            KV Cache Memory Fragmentation
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Static batching pre-allocates maximum sequence length buffers per request, leaving 60-80% of GPU VRAM wasted. PagedAttention implements virtual memory paging for KV activations, tripling concurrent request capacity.
          </p>
        </div>
      </section>

      {/* 3. INTERACTIVE PIPELINE 1: VECTOR SEARCH */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">
              Pipeline 01 // Interactive Simulation
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              HNSW Graph Routing & SIMD Distance Kernel
            </h2>
          </div>
          <button
            onClick={runVectorSearchSim}
            disabled={searchSimRunning}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-md shadow-indigo-600/20"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{searchSimRunning ? 'Executing Pipeline...' : 'Run Query Pipeline'}</span>
          </button>
        </div>

        {/* Pipeline Stage Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-indigo-400 uppercase">Stage 01: Inflow</div>
            <div className="text-xs font-bold text-white">1536-dim Embedding</div>
            <div className="text-[11px] text-slate-400">Dense floating-point vector query passed via zero-copy gRPC stream.</div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-indigo-400 uppercase">Stage 02: HNSW Routing</div>
            <div className="text-xs font-bold text-white">Hierarchical Hop Skip</div>
            <div className="text-[11px] text-slate-400">Coarse navigation on Layer 2 graph, localized beam search on Ground Layer 0.</div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-indigo-400 uppercase">Stage 03: PQ-64 Lookup</div>
            <div className="text-xs font-bold text-white">Asymmetric Distance</div>
            <div className="text-[11px] text-slate-400">Precomputed centroid distance tables compute similarity without float32 dequantization.</div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-indigo-400 uppercase">Stage 04: AVX-512 FMA</div>
            <div className="text-xs font-bold text-white">Vectorized Re-Rank</div>
            <div className="text-[11px] text-slate-400">SIMD instructions compute 16 float operations per cycle for exact Top-10 ranking.</div>
          </div>
        </div>

        {/* Live Simulation Output Box */}
        <div className="p-4 rounded-lg bg-[#060911] border border-indigo-500/30 text-xs font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${searchSimRunning ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`} />
            <span className="text-slate-300">Pipeline Status: <strong className="text-indigo-300">{searchStatus}</strong></span>
          </div>
          <span className="text-[10px] text-slate-400">SLA: &lt; 1.1ms P99</span>
        </div>

        {/* SIMD Code Kernel */}
        <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#060911]">
          <div className="px-4 py-2.5 bg-[#090D18] border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>simd_cosine_kernel_avx512.cpp</span>
            <span className="text-indigo-400">16 FLOPs / Clock Cycle</span>
          </div>
          <pre className="p-4 text-xs font-mono text-indigo-200 overflow-x-auto leading-relaxed">
            {`// SIMD AVX-512 Cosine Distance Kernel for 1536-dim vectors
inline float sim_avx512_cosine(const float* __restrict a, const float* __restrict b, size_t dim) {
    __m512 dot_acc = _mm512_setzero_ps();
    __m512 norm_a_acc = _mm512_setzero_ps();
    __m512 norm_b_acc = _mm512_setzero_ps();

    for (size_t i = 0; i < dim; i += 16) {
        __m512 va = _mm512_loadu_ps(a + i);
        __m512 vb = _mm512_loadu_ps(b + i);
        dot_acc = _mm512_fmadd_ps(va, vb, dot_acc);
        norm_a_acc = _mm512_fmadd_ps(va, va, norm_a_acc);
        norm_b_acc = _mm512_fmadd_ps(vb, vb, norm_b_acc);
    }
    float dot = _mm512_reduce_add_ps(dot_acc);
    float norm_a = std::sqrt(_mm512_reduce_add_ps(norm_a_acc));
    float norm_b = std::sqrt(_mm512_reduce_add_ps(norm_b_acc));
    return 1.0f - (dot / (norm_a * norm_b + 1e-9f));
}`}
          </pre>
        </div>
      </section>

      {/* 4. INTERACTIVE PIPELINE 2: LLM SERVING & PAGEDATTENTION */}
      <section className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6">
        <div>
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">
            Pipeline 02 // Memory Architecture
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            PagedAttention Virtual Memory & Continuous Dynamic Batching
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Treating GPU KV cache memory like OS virtual memory pages eliminates internal memory waste and enables instant request multiplexing.
          </p>
        </div>

        {/* Dynamic Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-xl bg-[#080C14] border border-slate-800">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Continuous Batch Size</span>
              <span className="text-indigo-400 font-bold">{activeBatchSize} Concurrent Prompts</span>
            </div>
            <input
              type="range"
              min="2"
              max="32"
              step="2"
              value={activeBatchSize}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setActiveBatchSize(val);
                setPageAllocationEfficiency(Math.min(98, 88 + val * 0.3));
              }}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="text-[11px] text-slate-500 font-mono">
              Dynamically injects new prompts into existing iteration loops without waiting.
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D1322] border border-slate-800 space-y-1">
            <div className="text-xs font-mono text-slate-400">Virtual KV Page Table Efficiency</div>
            <div className="font-display text-2xl font-bold text-emerald-400">
              {pageAllocationEfficiency.toFixed(1)}%
            </div>
            <div className="text-[10px] text-slate-400">
              Zero memory fragmentation across 16-token non-contiguous physical GPU blocks.
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white">Speculative Decoding</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Draft model guesses K candidate tokens, verified in parallel by target model in 1 forward pass (2.1x speedup).
            </div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white">Copy-on-Write KV Sharing</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Shared system prompts and conversation prefixes reference the same physical memory blocks without duplication.
            </div>
          </div>

          <div className="p-4 bg-[#080C14] rounded-xl border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white">Continuous Scheduler</div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Iteration-level dynamic scheduling eliminates GPU idle cycles during variable-length token generations.
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED BENCHMARKS TABLE */}
      <section className="space-y-4">
        <div>
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">Empirical Results</div>
          <h2 className="font-display text-2xl font-bold text-white">Performance Verification</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#1E293B] bg-[#0D1322]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#090D18] text-slate-400 font-mono border-b border-[#1E293B]">
              <tr>
                <th className="py-3 px-4">Evaluation Dimension</th>
                <th className="py-3 px-4">Engine Value</th>
                <th className="py-3 px-4">Baseline Comparison</th>
                <th className="py-3 px-4">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 font-sans">
              {project.deepDive.benchmarks.map((bench, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-semibold text-white">{bench.name}</td>
                  <td className="py-3 px-4 font-mono font-bold text-indigo-400">{bench.value}</td>
                  <td className="py-3 px-4 text-slate-400">{bench.comparison}</td>
                  <td className="py-3 px-4 font-mono text-slate-500">{bench.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. ARCHITECTURAL DECISIONS, CHALLENGES & NEXT ITERATION */}
      <CaseStudyCredibilitySection project={project} />

      {/* Breadcrumb Navigation */}
      <SystemBreadcrumb currentSlug="vector-inference" />

    </div>
  );
};
