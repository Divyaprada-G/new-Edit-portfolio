import React from 'react';
import { NavLink } from '../context/RouterContext';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, Layers, Users, Code, Award } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';

export const ExperienceTimelineSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" />
            <span>// VERIFIED WORK &amp; INSTRUCTION EXPERIENCE</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Software Engineering Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Demonstrated track record of backend query optimization, full-lifecycle feature ownership, and systems software instruction.
          </p>
        </div>

        <NavLink
          to="/experience"
          className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 shrink-0"
        >
          <span>VIEW DETAILED BUILD HISTORY</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

      {/* Grid of 2 Core Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: PraLoTech Software Engineer Intern */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all flex flex-col justify-between space-y-5 shadow-xl">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 uppercase tracking-wide">
                SOFTWARE ENGINEER INTERN
              </span>
              <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Jan 2024 – Apr 2024</span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white">
                PraLoTech Solutions LLP
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-0.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Core Metrics Badge */}
            <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Backend Query Optimization</div>
                <div className="text-sm font-mono font-bold text-emerald-400">30% Response Time Reduction</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Features Owned</div>
                <div className="text-sm font-mono font-bold text-blue-400">3 End-to-End Features</div>
              </div>
            </div>

            {/* Key Deliverables */}
            <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>
                  <strong>Optimized Java backend response times by 30%</strong> by constructing targeted composite indexes and restructuring legacy N+1 data queries into high-performance batched join operations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>
                  <strong>Owned end-to-end design and deployment</strong> for 3 core functional features: seat reservation loops, multi-tenant booking state, and profile management.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>
                  Enforced strict Git CI/CD automated test gates across pull requests with <strong>zero production regressions</strong>.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Core Stack:</div>
            <div className="flex flex-wrap gap-1.5">
              {['Java', 'REST APIs', 'MySQL / Indexing', 'Redis', 'Docker', 'Git & CI/CD'].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#080C14] border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: HMS Polytechnic Software Engineering Instructor */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all flex flex-col justify-between space-y-5 shadow-xl">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wide">
                SOFTWARE ENGINEERING INSTRUCTOR
              </span>
              <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>2023 – 2024</span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white">
                HMS Polytechnic, Tumkur
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-0.5">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Tumkur, Karnataka, India</span>
              </div>
            </div>

            {/* Core Metrics Badge */}
            <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Engineers Mentored</div>
                <div className="text-sm font-mono font-bold text-emerald-400">60+ Students</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Code Quality Elevation</div>
                <div className="text-sm font-mono font-bold text-blue-400">+25% Quality Marks</div>
              </div>
            </div>

            {/* Key Deliverables */}
            <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>
                  <strong>Delivered structured coursework on system design principles</strong>, SDLC models, and low-level debugging strategies to 60+ engineers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>
                  <strong>Mentored development pipelines for 5 production-style applications</strong>, elevating student code quality scores by 25%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>
                  Demonstrated strong <strong>technical communication, leadership, and architectural clarity</strong> in classroom and laboratory settings.
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Focus Areas:</div>
            <div className="flex flex-wrap gap-1.5">
              {['System Design', 'SDLC & Agile', 'Java / C++', 'Relational DBMS & SQL', 'Mentorship & Leadership'].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#080C14] border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
