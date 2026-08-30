import React, { useState } from 'react';
import { Database, Cpu, Activity, ArrowRight, CheckCircle2, Zap, Layers, Server, Shield } from 'lucide-react';

export type PipelineType = 'tsdb' | 'llm' | 'traffic';

interface Step {
  label: string;
  sub: string;
  metric?: string;
  detail: string;
}

interface PipelineConfig {
  title: string;
  tagline: string;
  colorScheme: {
    badge: string;
    nodeBorder: string;
    nodeBg: string;
    activeBorder: string;
    activeBg: string;
    arrowColor: string;
  };
  steps: Step[];
}

const PIPELINES: Record<PipelineType, PipelineConfig> = {
  tsdb: {
    title: 'Titan TSDB Storage & Vectorized Query Pipeline',
    tagline: 'Zero-GC Java NIO ingestion with Gorilla bit-packing and SIMD-aligned columnar scan',
    colorScheme: {
      badge: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      nodeBorder: 'border-slate-800',
      nodeBg: 'bg-[#090D18]',
      activeBorder: 'border-blue-500',
      activeBg: 'bg-blue-950/30',
      arrowColor: 'text-blue-500'
    },
    steps: [
      {
        label: 'Java NIO Ingestion',
        sub: 'Non-blocking Netty network loop',
        metric: 'Millions/sec',
        detail: 'Event-driven TCP server ingests time-series metrics over byte buffers without intermediate object allocations.'
      },
      {
        label: 'Async Write Buffer',
        sub: 'Concurrent ring buffer',
        metric: 'Lock-Free',
        detail: 'Batches incoming records into immutable in-memory chunks, preventing lock contention during write bursts.'
      },
      {
        label: 'Gorilla Compression',
        sub: 'Delta-of-delta bit-packing',
        metric: '10x Heap Reduction',
        detail: 'XORs consecutive floating-point values and bit-packs variable-length timestamps, reducing memory by 10x.'
      },
      {
        label: 'Immutable Storage',
        sub: 'Append-only columnar files',
        metric: 'Zero-GC Churn',
        detail: 'Compressed segments are flushed to disk as immutable blocks, eliminating garbage collection pauses.'
      },
      {
        label: 'Vectorized Query Engine',
        sub: 'Columnar memory scan',
        metric: '+40% Throughput',
        detail: 'Executes aggregations (SUM/AVG/P99) directly on contiguous primitive arrays leveraging hardware cache locality.'
      }
    ]
  },
  llm: {
    title: 'Distributed LLM Serving & Vector Search Pipeline',
    tagline: 'PagedAttention KV-cache with SIMD distance kernels and speculative decoding acceleration',
    colorScheme: {
      badge: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      nodeBorder: 'border-slate-800',
      nodeBg: 'bg-[#090D18]',
      activeBorder: 'border-indigo-500',
      activeBg: 'bg-indigo-950/30',
      arrowColor: 'text-indigo-500'
    },
    steps: [
      {
        label: 'Client / gRPC Gateway',
        sub: 'Multiplexed streaming calls',
        metric: 'Low-overhead',
        detail: 'High-performance gRPC gateway receives concurrent prompt embeddings and inference requests with minimal serialization overhead.'
      },
      {
        label: 'Dynamic Batching',
        sub: 'Continuous request scheduler',
        metric: '2.5x Throughput',
        detail: 'Dynamically groups heterogeneous sequence lengths at iteration level to maximize GPU/CPU execution compute saturation.'
      },
      {
        label: 'SIMD & Vector Search',
        sub: 'HNSW + Product Quantization',
        metric: 'Sub-10ms (1M+)',
        detail: 'Navigates 1M+ vector HNSW graph using 4x compressed PQ centroids and hardware SIMD AVX cosine distance computations.'
      },
      {
        label: 'Speculative Decoding',
        sub: 'Draft + target model verification',
        metric: '45% Lower Latency',
        detail: 'Speculatively generates K draft tokens and verifies them in a single forward pass, reducing generation latency by 45%.'
      },
      {
        label: 'PagedAttention KV-Cache',
        sub: 'Virtual memory page tables',
        metric: 'Zero-Frag Memory',
        detail: 'Allocates non-contiguous physical memory blocks for key-value states, completely eliminating internal memory fragmentation.'
      }
    ]
  },
  traffic: {
    title: 'Real-Time Event Streaming & Fault-Tolerant Telemetry Pipeline',
    tagline: 'Partitioned Kafka streaming with sub-2s automated chaos recovery',
    colorScheme: {
      badge: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      nodeBorder: 'border-slate-800',
      nodeBg: 'bg-[#090D18]',
      activeBorder: 'border-sky-500',
      activeBg: 'bg-sky-950/30',
      arrowColor: 'text-sky-500'
    },
    steps: [
      {
        label: '10K+ Vehicle Telemetry',
        sub: 'Continuous GPS sensor emitters',
        metric: '10,000+ Vehicles',
        detail: 'High-frequency telemetry streams containing coordinates, velocity, and sensor health broadcast at 10Hz.'
      },
      {
        label: 'Partitioned Apache Kafka',
        sub: 'Geohash partition hashing',
        metric: '99.9% Stability',
        detail: 'Partitions events by spatial geohash cells across brokers, preserving strict order per region without hot-spotting.'
      },
      {
        label: 'Stream Processing Engine',
        sub: 'Sliding window aggregations',
        metric: 'Real-Time State',
        detail: 'Java stream workers compute rolling average vehicle speeds and density bottlenecks across configurable time windows.'
      },
      {
        label: 'Bottleneck Detection',
        sub: 'Spatial incident detection',
        metric: '-60% Latency',
        detail: 'Instantly identifies congestion anomalies and reroutes emergency traffic 60% faster than traditional polling.'
      },
      {
        label: 'Dead-Letter Queue & Recovery',
        sub: 'Isolated DLQ + 3-node failover',
        metric: '<2s Failover',
        detail: 'Corrupt packets route into isolated dead-letter queues, while cluster state self-heals under 2s during node crashes.'
      }
    ]
  }
};

export const TechnicalArchitecturePipeline: React.FC<{ type: PipelineType }> = ({ type }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const pipeline = PIPELINES[type];

  return (
    <div className="w-full rounded-xl bg-[#060911] border border-slate-800/90 p-4 sm:p-5 space-y-4">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${pipeline.colorScheme.badge}`}>
              System Architecture Flow
            </span>
            <span className="text-xs font-mono text-slate-400 font-semibold">{pipeline.title}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 font-mono">
            {pipeline.tagline}
          </p>
        </div>
        <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
          Interactive Architecture Flow
        </div>
      </div>

      {/* Pipeline Stepper Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
        {pipeline.steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? `${pipeline.colorScheme.activeBorder} ${pipeline.colorScheme.activeBg} shadow-md`
                  : `${pipeline.colorScheme.nodeBorder} ${pipeline.colorScheme.nodeBg} hover:border-slate-700`
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                  {step.metric && (
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {step.metric}
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold text-slate-100 line-clamp-1">{step.label}</div>
                <div className="text-[10px] font-mono text-slate-400 line-clamp-1 mt-0.5">{step.sub}</div>
              </div>

              {/* Step indicator active dot */}
              <div className="mt-2.5 pt-1.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono">
                <span className={isSelected ? 'text-blue-400 font-semibold' : 'text-slate-500'}>
                  {isSelected ? 'Inspecting' : 'Step ' + (idx + 1)}
                </span>
                {idx < pipeline.steps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-600 hidden sm:inline" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Technical Explanation */}
      <div className="p-3.5 rounded-lg bg-[#0A0F1D] border border-slate-800 flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <div className="space-y-0.5">
          <div className="font-mono text-[11px] font-bold text-slate-200">
            Stage 0{activeStep + 1} — {pipeline.steps[activeStep].label}: <span className="text-blue-400">{pipeline.steps[activeStep].metric}</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {pipeline.steps[activeStep].detail}
          </p>
        </div>
      </div>
    </div>
  );
};
