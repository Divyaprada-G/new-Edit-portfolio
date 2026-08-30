import React, { useState } from 'react';
import { SystemProject } from '../types';
import {
  Layers,
  Zap,
  Cpu,
  Shield,
  Code,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Database
} from 'lucide-react';
import { NavLink } from '../context/RouterContext';

interface CredibilityLayersProps {
  project: SystemProject;
  defaultLevel?: 1 | 2 | 3;
}

export const CredibilityLayers: React.FC<CredibilityLayersProps> = ({
  project,
  defaultLevel = 2
}) => {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(defaultLevel);
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    project.deepDive.architectureDiagram.nodes[0]?.id || ''
  );

  const selectedNode =
    project.deepDive.architectureDiagram.nodes.find((n) => n.id === selectedNodeId) ||
    project.deepDive.architectureDiagram.nodes[0];

  return (
    <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] overflow-hidden space-y-6 p-6 sm:p-8">
      
      {/* 1. Header & Level Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>Engineering Credibility Navigator</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            {project.name} // Architectural Breakdown
          </h2>
        </div>

        {/* 3-Level Depth Toggle */}
        <div className="flex items-center p-1 bg-[#060911] border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveLevel(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeLevel === 1
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>L1: Quick Scan</span>
          </button>
          <button
            onClick={() => setActiveLevel(2)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeLevel === 2
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>L2: Architecture</span>
          </button>
          <button
            onClick={() => setActiveLevel(3)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
              activeLevel === 3
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>L3: Deep Dive</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LEVEL 1: QUICK SCAN (Problem, Tech, Metrics, Key Result) */}
      {/* ========================================================================= */}
      {activeLevel === 1 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#080C14] border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Core Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#080C14] border border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>The Result & Verified Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.keyResult}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080C14] border border-slate-800">
                <div className="text-xl font-display font-bold text-blue-400">{m.value}</div>
                <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">{m.label}</div>
                {m.detail && <div className="text-[10px] text-slate-400 mt-1 font-mono">{m.detail}</div>}
              </div>
            ))}
          </div>

          {/* Technologies Chips */}
          <div className="p-4 rounded-xl bg-[#080C14] border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#0D1322] border border-slate-700 text-slate-300 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
            <NavLink
              to={project.route}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono flex items-center gap-1.5 transition-all"
            >
              <span>Explore Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 2: ENGINEERING ARCHITECTURE & COMPONENT TOPOLOGY */}
      {/* ========================================================================= */}
      {activeLevel === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <div className="text-xs font-mono text-slate-400 mb-2">
              Click any stage in the execution topology to inspect latency SLA and data structures:
            </div>
            {/* Interactive Architecture Nodes Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {project.deepDive.architectureDiagram.nodes.map((node) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                        : 'bg-[#080C14] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">{node.type}</div>
                      <div className="font-display text-xs font-bold mt-1 line-clamp-2">{node.name}</div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>P99:</span>
                      <span className="text-emerald-400 font-semibold">{node.latency || 'Sub-ms'}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Node Detail Box */}
          {selectedNode && (
            <div className="p-5 rounded-xl bg-[#080C14] border border-blue-500/30 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                  Stage Detail: {selectedNode.name} ({selectedNode.type})
                </span>
                {selectedNode.latency && (
                  <span className="text-xs font-mono text-emerald-400">
                    Latency SLA: {selectedNode.latency}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {selectedNode.description}
              </p>
            </div>
          )}

          {/* Core Implementation Sections Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.deepDive.sections.slice(0, 2).map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-blue-400 font-semibold">
                  {sec.number} // {sec.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {sec.content.slice(0, 180)}...
                </p>
                {sec.keyPoints && (
                  <ul className="text-[11px] text-slate-400 space-y-1 pt-1 font-mono">
                    {sec.keyPoints.slice(0, 2).map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-1.5">
                        <span className="text-blue-400">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 3: DEEP DIVE (Trade-Offs, Challenges & Next Iteration) */}
      {/* ========================================================================= */}
      {activeLevel === 3 && (
        <div className="space-y-6 animate-fadeIn">
          {/* Engineering Decisions & Trade-Offs */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-indigo-400 uppercase font-semibold">
              First-Principles Architectural Trade-Offs
            </div>
            <div className="grid grid-cols-1 gap-3">
              {project.deepDive.decisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-1.5">
                  <div className="font-display text-sm font-bold text-white flex items-center justify-between">
                    <span>{dec.decision}</span>
                    {dec.alternative && (
                      <span className="text-[10px] font-mono text-slate-400">
                        Alternative: {dec.alternative}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 font-sans">
                    <strong className="text-blue-400 font-mono">Why:</strong> {dec.why}
                  </p>
                  <p className="text-xs text-slate-400 font-sans">
                    <strong className="text-amber-400 font-mono">Trade-Off Accepted:</strong> {dec.tradeOff}
                  </p>
                  {dec.result && (
                    <p className="text-xs text-emerald-400 font-mono">
                      <strong>Result:</strong> {dec.result}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Debugging */}
          {project.deepDive.challenges && project.deepDive.challenges.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Mechanical Challenge & Debugging Lesson</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.deepDive.challenges.map((ch, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-2">
                    <div className="font-display text-xs font-bold text-white">{ch.challenge}</div>
                    <div className="text-xs text-slate-300 font-sans">
                      <strong className="text-emerald-400 font-mono">Resolution:</strong> {ch.solution}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono border-t border-slate-800/80 pt-1.5">
                      <strong className="text-blue-400">Lesson:</strong> {ch.lesson}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Iteration & Forward Thinking */}
          {project.deepDive.futureWork && project.deepDive.futureWork.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Next Iteration (Acknowledged Limitations & Future Architecture)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.deepDive.futureWork.map((fw, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080C14] border border-slate-800 space-y-1.5">
                    <div className="font-display text-xs font-bold text-white">{fw.title}</div>
                    <div className="text-xs text-slate-300 font-sans">{fw.description}</div>
                    <div className="text-[11px] text-emerald-400 font-mono pt-1">
                      <strong>Impact:</strong> {fw.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-slate-400">
          Source of truth: Verified system benchmarks & C++/Go codebases.
        </span>
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl || 'https://github.com/divyaprada'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white flex items-center gap-1 transition-all"
          >
            <span>Inspect Implementation on GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <NavLink
            to={project.route}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
          >
            <span>Deep Dive Case Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>
      </div>

    </div>
  );
};
