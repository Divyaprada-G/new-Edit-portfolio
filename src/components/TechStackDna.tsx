import React, { useState } from 'react';
import { TECH_STACK_DNA } from '../data/techStackDna';
import { NavLink } from '../context/RouterContext';
import {
  Cpu,
  Layers,
  Terminal,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Database,
  Server
} from 'lucide-react';

export const TechStackDna: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Core Technologies' },
    { id: 'LANGUAGES', label: 'Languages (C++, Go, TS)' },
    { id: 'SYSTEMS & STORAGE', label: 'Systems & Storage' },
    { id: 'DISTRIBUTED & CLOUD', label: 'Distributed & Cloud' },
    { id: 'ALGORITHMS & OPT', label: 'Algorithms & SIMD' }
  ];

  const filteredItems =
    selectedCategory === 'ALL'
      ? TECH_STACK_DNA
      : TECH_STACK_DNA.filter((item) => item.category === selectedCategory);

  return (
    <section className="space-y-6">
      
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
            <GitBranch className="w-4 h-4" />
            <span>Tech Stack DNA // Real Engineering Evidence</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            System Implementation Matrix
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === c.id
                  ? 'bg-indigo-500/20 border border-indigo-500 text-indigo-300 font-semibold'
                  : 'bg-[#0D1322] border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Stack DNA Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((tech, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block">
                  {tech.category}
                </span>
                <h3 className="font-display text-base font-bold text-white mt-0.5">
                  {tech.name}
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold">
                {tech.level}
              </span>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {tech.purpose}
            </p>

            {/* Connected Projects Direct Map */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Concrete System Implementation:
              </div>
              {tech.connectedProjects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="p-2 rounded-lg bg-[#080C14] border border-slate-800 flex items-start justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <NavLink
                      to={`/systems/${proj.slug}` as any}
                      className="text-xs font-mono font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>{proj.name}</span>
                      <ArrowRight className="w-3 h-3" />
                    </NavLink>
                    <div className="text-[11px] text-slate-300 font-sans leading-snug">
                      {proj.implementationRole}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Signal */}
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{tech.verification}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
