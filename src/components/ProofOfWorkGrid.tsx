import React from 'react';
import {
  Trophy,
  CheckCircle2,
  Terminal,
  Award,
  Layers,
  Code2,
  Users,
  Shield,
  ArrowRight
} from 'lucide-react';
import { NavLink } from '../context/RouterContext';

export const ProofOfWorkGrid: React.FC = () => {
  const proofItems = [
    {
      achievement: 'LeetCode Global Rank 600+ // 2,750+ Solved',
      category: 'ALGORITHMS & COMPLEXITY',
      badge: 'VERIFIED MILESTONE',
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      whatIDid:
        'Solved 2,750+ algorithmic problems across LeetCode, CodeChef, and HackerRank, including 630+ Hard-difficulty challenges covering dynamic programming, network flow, segment trees, and concurrent lock-free data structures.',
      demonstrates: [
        'Advanced asymptotic complexity optimization (Time & Space)',
        'Low-level bit manipulation and memory layout design',
        'Deep mastery of graph theory, segment trees, and dynamic programming',
        'Rigorous disciplined problem-solving under strict time constraints'
      ],
      link: '/signals'
    },
    {
      achievement: 'Google Student Ambassador 2026',
      category: 'TECHNICAL LEADERSHIP & GOOGLE CLOUD',
      badge: 'OFFICIAL SELECTION',
      badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      whatIDid:
        'Selected to lead technical developer outreach across campus ecosystems, designing and delivering hands-on Google Cloud workshops, Gemini API generative architecture sprints, and systems programming study groups for 400+ student engineers.',
      demonstrates: [
        'Clear technical communication & architectural explanation',
        'Community mentorship and developer enablement',
        'Hands-on Google Cloud Platform & AI Studio expertise',
        'Ownership of multi-week technical curriculum delivery'
      ],
      link: '/field-log'
    },
    {
      achievement: 'HMS Polytechnic SWE Instructor',
      category: 'ENGINEERING EDUCATION & OS LABS',
      badge: 'APPOINTMENT',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      whatIDid:
        'Instructed undergraduate engineers in Advanced C++ Data Structures, Memory Management, Pointer Arithmetic, and Operating System primitives. Designed custom debugging lab exercises with Valgrind and GDB.',
      demonstrates: [
        'First-principles mechanical understanding of OS & memory heaps',
        'Curriculum architecture and pedagogical leadership',
        'Low-level debugging (memory leaks, race conditions, stack overflows)',
        'Code review and technical mentorship'
      ],
      link: '/experience'
    },
    {
      achievement: 'Smart India Hackathon (SIH) National Finalist (Top 10)',
      category: 'SYSTEM DESIGN & DISTRIBUTED TELEMETRY',
      badge: 'NATIONAL FINALIST',
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      whatIDid:
        'Architected an emergency telemetry routing system designed for disaster scenarios with intermittent connectivity, featuring localized offline mesh synchronization, partitioned streaming queues, and real-time dispatch dashboards.',
      demonstrates: [
        'Distributed systems fault tolerance and offline partition handling',
        'Rapid prototyping and system architecture under tight deadlines',
        'Cross-functional team coordination and technical presentation',
        'Production resilience thinking under network degradation'
      ],
      link: '/field-log'
    }
  ];

  return (
    <section className="space-y-6">
      
      {/* Header */}
      <div className="border-b border-[#1E293B] pb-4">
        <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
          <Shield className="w-4 h-4" />
          <span>Proof of Work // Evidence-First Verification</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-white mt-1">
          Achievements Grounded in Demonstrated Ability
        </h2>
      </div>

      {/* 2x2 Grid of Proof Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proofItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-medium ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-white">
                {item.achievement}
              </h3>

              {/* What I Did */}
              <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800 space-y-1">
                <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                  What I Did:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {item.whatIDid}
                </p>
              </div>

              {/* What It Demonstrates */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                  What It Demonstrates:
                </div>
                <ul className="space-y-1 text-xs text-slate-300 font-sans">
                  {item.demonstrates.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Link to Evidence Detail */}
            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <NavLink
                to={item.link as any}
                className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-all"
              >
                <span>View Full Context & Evidence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
