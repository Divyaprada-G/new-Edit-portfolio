import React from 'react';
import { NavLink } from '../context/RouterContext';
import { Award, Trophy, Code, Cloud, Users, ArrowRight, ExternalLink, CheckCircle2, Shield } from 'lucide-react';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface AchievementCard {
  id: string;
  title: string;
  category: string;
  organization: string;
  year: string;
  badge: string;
  badgeColor: string;
  summary: string;
  keyPoints: string[];
  image?: string;
  link?: string;
  externalLink?: string;
}

export const ACHIEVEMENTS_CARDS: AchievementCard[] = [
  {
    id: 'gsa-2026',
    title: 'Google Student Ambassador 2026',
    category: 'COMMUNITY & DEVELOPER LEADERSHIP',
    organization: 'Google Developer Ecosystem & SIT Tumkur',
    year: '2026',
    badge: 'STUDENT AMBASSADOR',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    summary:
      'Selected to represent the student developer community at SIT Tumkur, championing developer education, cloud literacy, Gemini AI systems, and open technology.',
    keyPoints: [
      'Selected representative for SIT Tumkur in the GSA 2026 cohort',
      'Organizing student workshops on modern cloud services, AI APIs, and systems engineering',
      'Bridging academic curricula with real-world production engineering methodologies'
    ],
    image: MEDIA_ASSETS.achievements.gsa[0],
    link: '/field-log'
  },
  {
    id: 'os-connect-2026',
    title: 'Campus Lead & Open-Source Contributor',
    category: 'OPEN-SOURCE SYSTEMS',
    organization: 'Open Source Connect India 2026',
    year: '2025 – 2026',
    badge: 'CAMPUS LEAD & CONTRIBUTOR',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    summary:
      'Representing Siddaganga Institute of Technology to foster open-source collaboration, code reviews, developer connections, and upstream systems contributions.',
    keyPoints: [
      'Empowering student engineers to make their first upstream contributions to open-source software',
      'Conducting practical workshops on Git internals, licensing, and asynchronous RFC workflows',
      'Verified Open Source Campus Lead and Open Source Contributor badges'
    ],
    image: MEDIA_ASSETS.achievements.osLead[0],
    link: '/field-log'
  },
  {
    id: 'arcade-facilitator',
    title: 'Google Cloud Arcade Facilitator',
    category: 'CLOUD ARCHITECTURES & WORKSHOPS',
    organization: 'Google Cloud Developer Community',
    year: '2026',
    badge: 'FACILITATOR LEAD',
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    summary:
      'Led technical upskilling workshops focused on cloud architectures, generative AI, containerized workloads, and serverless technologies for 100+ student developers.',
    keyPoints: [
      'Facilitated hands-on cloud labs covering GCP, VPC networks, and serverless runtimes',
      'Demonstrated container deployments and secure service account governance',
      'Achieved top facilitator tier recognition for developer enablement'
    ],
    image: MEDIA_ASSETS.achievements.arcade[0],
    link: '/field-log'
  },
  {
    id: 'leetcode-rank-600',
    title: 'LeetCode Global Rank 600+',
    category: 'COMPETITIVE PROGRAMMING',
    organization: 'LeetCode & Competitive Platforms',
    year: 'Continuous',
    badge: 'TOP 0.5% WORLDWIDE',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    summary:
      'Solved 2,750+ algorithmic problems across LeetCode including 630+ Hard and 1,400+ Medium, mastering trees, graphs, dynamic programming, and systems problem-solving.',
    keyPoints: [
      'Ranked within top 600+ globally on LeetCode competitive problem solving',
      '630+ Hard-difficulty algorithmic problems solved across graphs, DP, and segment trees',
      'Daily disciplined practice in memory layout and algorithmic complexity optimization'
    ],
    externalLink: 'https://leetcode.com/u/Divyaprada_G/',
    link: '/signals'
  },
  {
    id: 'sih-top-10',
    title: 'Top 10 — Smart India Internal Hackathon 2025',
    category: 'SYSTEM DESIGN & DISTRIBUTED ROUTING',
    organization: 'Siddaganga Institute of Technology',
    year: '2025',
    badge: 'TOP 10 / 165+ TEAMS',
    badgeColor: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
    summary:
      'Ranked in the Top 10 out of 165+ engineering teams. Architected a scalable real-time emergency disaster routing engine during an intensive 48-hour development sprint.',
    keyPoints: [
      'Top 10 finish in intensive 36-48 hour hackathon sprint out of 165+ engineering teams',
      'Architected edge synchronization and local persistent ring buffers for telemetry packets',
      'Live technical demonstration before faculty evaluation jury'
    ],
    image: MEDIA_ASSETS.achievements.sih[0],
    link: '/field-log'
  }
];

export const AchievementsTimelineSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div>
          <div className="text-xs font-mono text-blue-400 uppercase font-semibold flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>// VERIFIED HONORS &amp; LEADERSHIP</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Honors, Leadership &amp; Hackathons
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Verifiable milestones spanning competitive programming rankings, Google developer ambassador leadership, and hackathon system architectures.
          </p>
        </div>

        <NavLink
          to="/field-log"
          className="text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 shrink-0"
        >
          <span>VIEW FIELD LOG &amp; PHOTO ARCHIVE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS_CARDS.map((ach) => (
          <div
            key={ach.id}
            className="p-5 sm:p-6 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${ach.badgeColor}`}>
                  {ach.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">{ach.year}</span>
              </div>

              {ach.image && (
                <div className="h-36 rounded-xl overflow-hidden bg-[#080C14] border border-slate-800/80">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-bold text-white leading-snug">
                  {ach.title}
                </h3>
                <div className="text-[11px] font-mono text-blue-400 mt-0.5">
                  {ach.organization}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {ach.summary}
              </p>

              <ul className="space-y-1.5 pt-1 text-[11px] text-slate-400">
                {ach.keyPoints.slice(0, 2).map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              {ach.externalLink ? (
                <a
                  href={ach.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                >
                  <span>Verify LeetCode</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <NavLink
                  to={ach.link || '/field-log'}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                >
                  <span>Explore Field Artifacts</span>
                  <ArrowRight className="w-3 h-3" />
                </NavLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
