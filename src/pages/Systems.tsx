import React from 'react';
import { NavLink } from '../context/RouterContext';
import { SYSTEM_PROJECTS } from '../data/projects';
import { TradeoffsMatrix } from '../components/TradeoffsMatrix';
import { Server, Cpu, Activity, ArrowRight, Layers, CheckCircle2, Shield, Zap } from 'lucide-react';

export const SystemsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
          <Server className="w-4 h-4" />
          <span>SYSTEM LAB // CORE ENGINES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Distributed Systems & AI Infrastructure
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Three deep-tier engineering case studies demonstrating custom database internals, SIMD vectorization, PagedAttention memory scheduling, and fault-tolerant event streams.
        </p>
      </div>

      {/* 3 Large Immersive System Entries */}
      <div className="space-y-12">
        {SYSTEM_PROJECTS.map((system, index) => (
          <div
            key={system.id}
            id={`system-entry-${system.slug}`}
            className="p-8 sm:p-10 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-8 relative overflow-hidden group shadow-xl"
          >
            {/* Subtle background glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: system.colorScheme.primary }}
            />

            {/* Top Bar: System ID, Status, and Category */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-blue-400">{system.systemId}</span>
                <span className="text-slate-600">/</span>
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  CASE STUDY 0{index + 1}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${system.colorScheme.badge}`}>
                  {system.status}
                </span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                {system.name}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {system.tagline}
              </p>
            </div>

            {/* Technologies Grid */}
            <div className="flex flex-wrap gap-2">
              {system.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded bg-[#080C14] text-slate-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Problem & Architecture Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-[#080C14] border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {system.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#080C14] border border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Mechanism</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {system.architectureOverview}
                </p>
              </div>
            </div>

            {/* Verified Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {system.metrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-lg bg-[#080C14] border border-slate-800">
                  <div className="font-display text-xl font-bold text-white">{metric.value}</div>
                  <div className="text-xs font-mono text-blue-400 mt-0.5">{metric.label}</div>
                  {metric.detail && (
                    <div className="text-[10px] text-slate-400 mt-1">{metric.detail}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Key Result: <span className="text-slate-200">{system.keyResult}</span>
              </div>
              <NavLink
                to={system.route}
                id={`inspect-btn-${system.slug}`}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>[ INSPECT SYSTEM CASE STUDY ]</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </NavLink>
            </div>

          </div>
        ))}
      </div>

      {/* Engineering Decisions & Trade-Offs Matrix */}
      <TradeoffsMatrix />

      {/* Secondary Portal to Architecture Lab */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0D1322] to-[#0A0F1D] border border-[#1E293B] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">
            // Technical Visualization Laboratory
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            Want to interactively inspect system schematics & data flows?
          </h3>
          <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
            The Architecture Lab features interactive animated diagrams with step-through data flows, bottleneck analysis, and trade-off tables.
          </p>
        </div>
        <NavLink
          to="/architecture"
          className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 shrink-0 border border-slate-700"
        >
          <span>Open Architecture Lab</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

    </div>
  );
};
