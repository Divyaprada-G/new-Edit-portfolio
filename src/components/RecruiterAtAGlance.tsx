import React from 'react';
import { NavLink } from '../context/RouterContext';
import {
  FileText,
  Terminal,
  Trophy,
  Cpu,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Zap,
  ArrowRight
} from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';

export const RecruiterAtAGlance: React.FC<{ onOpenScorecard?: () => void }> = ({ onOpenScorecard }) => {
  return (
    <div className="w-full rounded-2xl bg-[#090D18] border border-blue-500/30 p-5 sm:p-6 shadow-xl relative overflow-hidden">
      {/* Subtle top indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-80" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Column: Quick Snapshot */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Recruiter 10-Second Quick View
            </span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              Bangalore / Tumkur, Karnataka, India
            </span>
          </div>

          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Divyaprada G</span>
              <span className="text-sm font-mono font-normal text-slate-400">// SDE-1 (Systems & Distributed Infrastructure)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              Google Student Ambassador 2026 & Systems Engineer specializing in low-latency storage engines, SIMD vectorization, and distributed event streaming.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="p-2.5 rounded-lg bg-[#0D1322] border border-[#1E293B]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">LeetCode Rank</div>
              <div className="text-sm font-mono font-bold text-blue-400 mt-0.5">Top 600+ Global</div>
              <div className="text-[10px] text-slate-400 font-mono">630+ Hard Solved</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0D1322] border border-[#1E293B]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Core Languages</div>
              <div className="text-sm font-mono font-bold text-indigo-300 mt-0.5">Java, Python, C++, SQL</div>
              <div className="text-[10px] text-slate-400 font-mono">Multithreading, Streams, Concurrency</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0D1322] border border-[#1E293B]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Flagship System</div>
              <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">Titan TSDB</div>
              <div className="text-[10px] text-slate-400 font-mono">1.2M+ writes/sec P99</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0D1322] border border-[#1E293B]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Google Leadership</div>
              <div className="text-sm font-mono font-bold text-amber-400 mt-0.5">GSA 2026 Lead</div>
              <div className="text-[10px] text-slate-400 font-mono">400+ Engineers Led</div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct High-Signal Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 lg:min-w-[210px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
          <a
            href={MEDIA_ASSETS.resumePdf}
            download="Divyaprada_G_SDE1_Resume.pdf"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <FileText className="w-4 h-4" />
            <span>Download Verified Resume</span>
          </a>

          {onOpenScorecard && (
            <button
              onClick={onOpenScorecard}
              className="px-4 py-2.5 rounded-xl bg-[#0D1322] hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs font-mono transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>Open 30s Scorecard</span>
            </button>
          )}

          <div className="flex items-center justify-center gap-2 pt-1">
            <a
              href="https://github.com/divyaprada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1322] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
              title="GitHub Repositories"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/divyaprada-g-8a7199276"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0D1322] border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-slate-600 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:divyaprada2004@gmail.com"
              className="p-2 rounded-lg bg-[#0D1322] border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-600 transition-all"
              title="Email Directly"
            >
              <Mail className="w-4 h-4" />
            </a>
            <NavLink
              to="/systems/titan-tsdb"
              className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-mono hover:bg-blue-500/20 transition-all flex items-center gap-1"
            >
              <span>SYS-01</span>
              <ArrowRight className="w-3 h-3" />
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};
