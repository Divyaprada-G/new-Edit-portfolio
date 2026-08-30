import React from 'react';
import {
  Compass,
  Cpu,
  BookOpen,
  Sparkles,
  Target,
  ArrowUpRight,
  Terminal,
  Activity
} from 'lucide-react';
import { NavLink } from '../context/RouterContext';

export const NowSection: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#090D18] border border-[#1E293B] p-6 sm:p-7 shadow-lg space-y-5">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            NOW // CURRENT ENGINEERING FOCUS (2026)
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Updated: Q1 2026 // Real Technical Directives
        </span>
      </div>

      {/* 4 Concise Status Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* 1. Building */}
        <div className="p-4 rounded-xl bg-[#0D1322] border border-blue-500/20 space-y-2 hover:border-blue-500/40 transition-all">
          <div className="flex items-center justify-between text-xs font-mono text-blue-400">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Building</span>
            </span>
            <span className="text-[10px] text-slate-500">SYS-01</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            LSM-tree tiered compaction & zero-copy arena memory allocators for high-throughput metric streams in C++20.
          </p>
        </div>

        {/* 2. Learning */}
        <div className="p-4 rounded-xl bg-[#0D1322] border border-indigo-500/20 space-y-2 hover:border-indigo-500/40 transition-all">
          <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learning</span>
            </span>
            <span className="text-[10px] text-slate-500">DISTRIBUTED</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Raft distributed consensus split-brain edge cases, Paxos leases, and Linux eBPF socket tracing.
          </p>
        </div>

        {/* 3. Exploring */}
        <div className="p-4 rounded-xl bg-[#0D1322] border border-amber-500/20 space-y-2 hover:border-amber-500/40 transition-all">
          <div className="flex items-center justify-between text-xs font-mono text-amber-400">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exploring</span>
            </span>
            <span className="text-[10px] text-slate-500">LOW-LEVEL</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            SIMD AVX-512 kernel optimizations and FP8 tensor quantization for embedded inference runtimes.
          </p>
        </div>

        {/* 4. Looking For */}
        <div className="p-4 rounded-xl bg-[#0D1322] border border-emerald-500/20 space-y-2 hover:border-emerald-500/40 transition-all">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5 font-bold uppercase">
              <Target className="w-3.5 h-3.5" />
              <span>Target Role</span>
            </span>
            <span className="text-[10px] text-slate-500">ACTIVE</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            <strong>Google SDE-1</strong> or Backend Infrastructure / Distributed Systems Engineering roles.
          </p>
        </div>

      </div>

    </div>
  );
};
