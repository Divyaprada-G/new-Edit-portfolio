import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import { SIGNALS } from '../data/signals';
import {
  Radio,
  BookOpen,
  ArrowRight,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
  Share2,
  CheckCircle2,
  Code
} from 'lucide-react';

export const SignalsPage: React.FC = () => {
  const [expandedSignalId, setExpandedSignalId] = useState<string>(SIGNALS[0].id);

  const toggleSignal = (id: string) => {
    setExpandedSignalId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Radio className="w-4 h-4" />
          <span>ENGINEERING SIGNALS // TECHNICAL ESSAYS & NOTES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Systems Notes & Engineering Signals
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Deep-dive technical essays, algorithmic intuition summaries, and low-level systems architectures written from first principles.
        </p>
      </div>

      {/* 2. Signals Stream List */}
      <div className="space-y-6">
        {SIGNALS.map((signal) => {
          const isExpanded = expandedSignalId === signal.id;
          return (
            <div
              key={signal.id}
              className={`rounded-2xl border transition-all overflow-hidden ${
                isExpanded
                  ? 'bg-[#0D1322] border-blue-500/60 shadow-xl'
                  : 'bg-[#080C14] border-[#1E293B] hover:border-slate-700'
              }`}
            >
              {/* Header Clickable Row */}
              <div
                onClick={() => toggleSignal(signal.id)}
                className="p-6 sm:p-8 cursor-pointer flex items-start justify-between gap-4 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="text-blue-400 font-bold">{signal.category}</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {signal.readTime}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-slate-500">{signal.date}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                    {signal.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {signal.summary}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-[#080C14] border border-slate-800 text-slate-400 hover:text-white shrink-0 mt-1">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* Expanded Essay Reader */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-800 space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {signal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#080C14] text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Body Content */}
                  <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 font-sans border-y border-slate-800/80 py-6">
                    {signal.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-5 rounded-xl bg-[#080C14] border border-blue-500/20 space-y-2">
                    <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Key Engineering Takeaways</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {signal.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono">-</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Bridge */}
      <div className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-white text-base">Explore the live systems in action</div>
          <div className="text-xs text-slate-400">Step through the interactive schematics and benchmarks in System Lab.</div>
        </div>
        <NavLink
          to="/systems"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0"
        >
          <span>Open System Lab</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

    </div>
  );
};
