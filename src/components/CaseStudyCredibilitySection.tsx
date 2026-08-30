import React from 'react';
import { SystemProject } from '../types';
import {
  Shield,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  Code,
  ArrowRight,
  GitBranch,
  Layers
} from 'lucide-react';

interface CaseStudyCredibilitySectionProps {
  project: SystemProject;
}

export const CaseStudyCredibilitySection: React.FC<CaseStudyCredibilitySectionProps> = ({
  project
}) => {
  const { decisions, challenges, futureWork } = project.deepDive;

  return (
    <div className="space-y-12 pt-8 border-t border-[#1E293B]">
      
      {/* 1. Engineering Decisions & First-Principles Trade-offs */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Decisions & Trade-Offs</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-0.5">
              Why We Chose Technique X Instead of Y
            </h2>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#0D1322] border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <Code className="w-3.5 h-3.5 text-blue-400" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {decisions.map((dec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all space-y-2.5"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-sm font-bold text-white">
                  {dec.decision}
                </h3>
                {dec.alternative && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                    Vs. {dec.alternative}
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-300 font-sans leading-relaxed">
                <strong className="text-blue-400 font-mono">Why Chosen:</strong> {dec.why}
              </div>

              <div className="text-xs text-slate-400 font-sans leading-relaxed">
                <strong className="text-amber-400 font-mono">Trade-Off Accepted:</strong> {dec.tradeOff}
              </div>

              {dec.result && (
                <div className="p-2 rounded-lg bg-[#080C14] border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{dec.result}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 2. Real-World Challenges & Debugging Breakdown */}
      {challenges && challenges.length > 0 && (
        <section className="space-y-4">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Failures, Bottlenecks & Debugging Lessons</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-0.5">
              Engineering Hurdles Overcome
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0D1322] border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-3"
              >
                <div className="font-display text-sm font-bold text-white">
                  {ch.challenge}
                </div>

                <div className="p-3 rounded-lg bg-[#080C14] border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                    Mechanical Resolution:
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {ch.solution}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-2 flex items-start gap-1.5">
                  <strong className="text-blue-400 shrink-0">Lesson:</strong>
                  <span>{ch.lesson}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Next Iteration (Acknowledged Limitations & Roadmap) */}
      {futureWork && futureWork.length > 0 && (
        <section className="space-y-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Next Iteration & Forward Architecture</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mt-0.5">
              Acknowledged Limitations & Future Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureWork.map((fw, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0D1322] border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-2"
              >
                <div className="font-display text-sm font-bold text-white">
                  {fw.title}
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {fw.description}
                </p>
                <div className="text-xs font-mono text-emerald-400 pt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Target SLA: {fw.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
