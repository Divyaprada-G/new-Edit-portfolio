import React from 'react';
import { NavLink } from '../context/RouterContext';
import { ChevronLeft, ChevronRight, Layers, Cpu, Server } from 'lucide-react';
import { SYSTEM_PROJECTS } from '../data/projects';

export const SystemBreadcrumb: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
  const currentIndex = SYSTEM_PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + SYSTEM_PROJECTS.length) % SYSTEM_PROJECTS.length;
  const nextIndex = (currentIndex + 1) % SYSTEM_PROJECTS.length;

  const prevProj = SYSTEM_PROJECTS[prevIndex];
  const currentProj = SYSTEM_PROJECTS[currentIndex];
  const nextProj = SYSTEM_PROJECTS[nextIndex];

  return (
    <div className="border-y border-[#1E293B] bg-[#0A0F1D] py-4 px-4 sm:px-6 my-12 rounded-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous */}
        <NavLink
          to={prevProj.route}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          <div>
            <div className="text-[10px] text-slate-400">PREVIOUS SYSTEM</div>
            <div className="font-semibold text-slate-200 group-hover:text-blue-400">{prevProj.name}</div>
          </div>
        </NavLink>

        {/* Center Indicator */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/systems"
            className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1 bg-slate-800/80 rounded border border-slate-700/80 flex items-center gap-1.5"
          >
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span>SYSTEM LAB INDEX (0{currentIndex + 1} / 0{SYSTEM_PROJECTS.length})</span>
          </NavLink>
        </div>

        {/* Next */}
        <NavLink
          to={nextProj.route}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors group text-right"
        >
          <div>
            <div className="text-[10px] text-slate-400">NEXT SYSTEM</div>
            <div className="font-semibold text-slate-200 group-hover:text-blue-400">{nextProj.name}</div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
        </NavLink>
      </div>
    </div>
  );
};
