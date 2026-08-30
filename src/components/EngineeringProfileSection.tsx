import React from 'react';
import { NavLink } from '../context/RouterContext';
import {
  Code,
  Trophy,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react';

export const EngineeringProfileSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-[#1E293B] pb-4">
        <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
          <Terminal className="w-4 h-4" />
          <span>// ENGINEERING CANDIDATE PROFILE</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
          Algorithmic Depth &amp; Systems Engineering Core
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 Cols: LeetCode & Competitive Programming Standing */}
        <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-5 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    LeetCode Competitive Programming
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    Algorithmic &amp; Systems Problem Solving
                  </div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/Divyaprada_G/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-[#080C14] hover:bg-slate-800 text-amber-400 border border-amber-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 text-center">
                <div className="font-display text-2xl font-extrabold text-amber-400">600+</div>
                <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">Global Rank</div>
                <div className="text-[10px] text-slate-400 font-mono">Top 0.5% Worldwide</div>
              </div>

              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 text-center">
                <div className="font-display text-2xl font-extrabold text-blue-400">2,750+</div>
                <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">Total Solved</div>
                <div className="text-[10px] text-slate-400 font-mono">Consistent Practice</div>
              </div>

              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 text-center">
                <div className="font-display text-2xl font-extrabold text-rose-400">630+</div>
                <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">Hard Solved</div>
                <div className="text-[10px] text-slate-400 font-mono">Complex Graph/DP</div>
              </div>

              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 text-center">
                <div className="font-display text-2xl font-extrabold text-amber-300">1,400+</div>
                <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">Medium Solved</div>
                <div className="text-[10px] text-slate-400 font-mono">Core Paradigms</div>
              </div>
            </div>

            {/* Topic Mastery Chips */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
                // Focus &amp; Problem Solving Domains:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-[#080C14] border border-slate-800 text-slate-300">
                  Trees &amp; Binary Search Trees
                </span>
                <span className="px-2.5 py-1 rounded bg-[#080C14] border border-slate-800 text-slate-300">
                  Graph Theory &amp; Shortest Path
                </span>
                <span className="px-2.5 py-1 rounded bg-[#080C14] border border-slate-800 text-slate-300">
                  Dynamic Programming &amp; Memoization
                </span>
                <span className="px-2.5 py-1 rounded bg-[#080C14] border border-slate-800 text-slate-300">
                  System-Oriented Data Structures
                </span>
                <span className="px-2.5 py-1 rounded bg-[#080C14] border border-slate-800 text-slate-300">
                  Sliding Windows &amp; Bit Manipulation
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
            <span>Rigorous algorithmic intuition applied to distributed systems runtime design</span>
            <NavLink to="/signals" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold">
              <span>Read Signal Essays</span>
              <ArrowRight className="w-3 h-3" />
            </NavLink>
          </div>
        </div>

        {/* Right 5 Cols: Education & Engineering Credentials */}
        <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-5 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Academic Foundation
                </h3>
                <div className="text-xs font-mono text-slate-400">
                  Computer Science &amp; Artificial Intelligence
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs font-sans">
              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white text-sm">Siddaganga Institute of Technology</div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Grad: June 2027</span>
                </div>
                <div className="text-blue-400 font-mono text-xs">
                  B.E. Artificial Intelligence &amp; Data Science
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                  <strong>Coursework:</strong> DSA, OOP, Operating Systems, DBMS, Computer Networks
                </div>
              </div>

              <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white text-sm">HMS Polytechnic, Tumkur</div>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">Graduated: 2024</span>
                </div>
                <div className="text-blue-400 font-mono text-xs">
                  Diploma in Computer Science &amp; Engineering
                </div>
                <div className="text-emerald-400 font-mono text-[11px]">
                  <strong>CGPA: 9.77 / 10 | Distinction</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to SDE Internship &amp; Full-Time Roles
            </span>
            <NavLink to="/resume" className="text-blue-400 hover:text-blue-300 font-semibold">
              Full Resume →
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};
