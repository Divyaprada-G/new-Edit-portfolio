import React, { useState } from 'react';
import { BUILDING_LOG } from '../data/buildingLog';
import { NavLink } from '../context/RouterContext';
import {
  GitCommit,
  Layers,
  Award,
  Terminal,
  Filter,
  CheckCircle2,
  Calendar,
  Tag,
  ArrowRight
} from 'lucide-react';

export const EngineeringBuildLog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Milestones' },
    { id: 'SYSTEMS', label: 'Systems & Storage' },
    { id: 'ALGORITHMS', label: 'Algorithms & LeetCode' },
    { id: 'LEADERSHIP', label: 'Google & Mentorship' }
  ];

  const filteredLogs =
    selectedCategory === 'ALL'
      ? BUILDING_LOG
      : BUILDING_LOG.filter((item) => item.category === selectedCategory);

  return (
    <section className="space-y-6">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
            <GitCommit className="w-4 h-4" />
            <span>Engineering Notes & Continuous Build Log</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            Chronological Technical Milestones
          </h2>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-semibold'
                  : 'bg-[#0D1322] border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Tree / Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-6">
        {filteredLogs.map((log, index) => {
          const isSystem = log.category === 'SYSTEMS';
          const isAlgo = log.category === 'ALGORITHMS';
          const isLeadership = log.category === 'LEADERSHIP';

          return (
            <div key={log.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSystem
                    ? 'border-blue-500 bg-[#080C14] text-blue-400'
                    : isAlgo
                    ? 'border-purple-500 bg-[#080C14] text-purple-400'
                    : 'border-amber-500 bg-[#080C14] text-amber-400'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current" />
              </div>

              {/* Milestone Card */}
              <div className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#060911] border border-slate-800 text-slate-300">
                      {log.year} {log.quarter}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${
                        isSystem
                          ? 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                          : isAlgo
                          ? 'border-purple-500/30 text-purple-400 bg-purple-500/10'
                          : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {log.category}
                    </span>
                  </div>

                  {log.projectSlug && (
                    <NavLink
                      to={`/systems/${log.projectSlug}` as any}
                      className="text-[11px] font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-all"
                    >
                      <span>Inspect System</span>
                      <ArrowRight className="w-3 h-3" />
                    </NavLink>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {log.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-sans">
                    {log.technicalDetail}
                  </p>
                </div>

                {/* Evidence Callout */}
                <div className="p-2.5 rounded-lg bg-[#080C14] border border-slate-800 flex items-start gap-2 text-xs font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    <strong className="text-emerald-400">Verifiable Signal:</strong> {log.evidence}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {log.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060911] text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
