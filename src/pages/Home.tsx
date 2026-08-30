import React from 'react';
import { NavLink, useRouter } from '../context/RouterContext';
import { SYSTEM_PROJECTS } from '../data/projects';
import { FIELD_LOG_EVENTS } from '../data/events';
import { MEDIA_ASSETS } from '../data/mediaAssets';
const profilePhoto = MEDIA_ASSETS.profile;

import { EngineeringSystemMap } from '../components/EngineeringSystemMap';
import { EngineeringMindsetLifecycle } from '../components/EngineeringMindsetLifecycle';
import { TradeoffsMatrix } from '../components/TradeoffsMatrix';
import { RecruiterAtAGlance } from '../components/RecruiterAtAGlance';
import { NowSection } from '../components/NowSection';
import { CredibilityLayers } from '../components/CredibilityLayers';
import { TechStackDna } from '../components/TechStackDna';
import { ProofOfWorkGrid } from '../components/ProofOfWorkGrid';
import { EngineeringBuildLog } from '../components/EngineeringBuildLog';

import {
  ArrowRight,
  ArrowUpRight,
  Server,
  Cpu,
  Layers,
  Activity,
  Code,
  Shield,
  FileText,
  Terminal,
  ExternalLink,
  Sparkles,
  Award,
  Camera,
  CheckCircle2,
  Zap,
  Download,
  BookOpen,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface HomePageProps {
  onOpenRecruiterModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRecruiterModal }) => {
  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION — HIGH-SIGNAL ENGINEERING POSITIONING */}
      <section className="relative pt-8 sm:pt-14 pb-12 border-b border-[#1E293B]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Hero Copy & Positioning */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1322] border border-blue-500/30 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-200 font-medium">OPEN TO DISTRIBUTED SYSTEMS & SDE-1 ROLES</span>
              </div>

              {/* Display Headline */}
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Building high-throughput <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">distributed systems</span> & storage engines.
                </h1>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed pt-2 max-w-2xl">
                  I am <strong className="text-white font-semibold">Divyaprada G</strong>, a software engineer specializing in time-series database internals, SIMD vector inference acceleration, and resilient distributed event stream architectures.
                </p>
              </div>

              {/* Verified Engineering Signals Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-2xl font-bold text-blue-400">600+</div>
                  <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">LeetCode Global Rank</div>
                  <div className="text-[10px] text-slate-400">Top 0.5% worldwide</div>
                </div>
                <div className="p-3.5 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-2xl font-bold text-indigo-400">2,750+</div>
                  <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">Problems Solved</div>
                  <div className="text-[10px] text-slate-400">630+ Hard / 1400+ Med</div>
                </div>
                <div className="p-3.5 bg-[#0D1322] rounded-xl border border-[#1E293B] col-span-2 sm:col-span-1">
                  <div className="font-display text-2xl font-bold text-emerald-400">GSA 2026</div>
                  <div className="text-xs font-mono text-slate-300 font-medium mt-0.5">Google Ambassador</div>
                  <div className="text-[10px] text-slate-400">Top 10 SIH Finalist</div>
                </div>
              </div>

              {/* Hero Action Controls */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <NavLink
                  to="/systems"
                  id="hero-explore-systems-btn"
                  className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>Explore System Lab</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>

                {onOpenRecruiterModal && (
                  <button
                    onClick={onOpenRecruiterModal}
                    id="hero-recruiter-modal-btn"
                    className="px-4 py-3 rounded-lg bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-300 border border-emerald-500/40 font-medium text-sm transition-colors flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Recruiter (30s Scan)</span>
                  </button>
                )}

                <a
                  href="/Divyaprada_G_Resume.pdf"
                  download="Divyaprada_G_Resume.pdf"
                  className="px-4 py-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-200 border border-[#1E293B] font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Resume PDF</span>
                </a>

                <NavLink
                  to="/contact"
                  id="hero-contact-link"
                  className="px-4 py-3 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <span>Get in Touch →</span>
                </NavLink>
              </div>
            </div>

            {/* Right Col: Authentic Portrait & Badging */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                {/* Background Framing Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-transparent rounded-2xl blur-lg opacity-60" />
                
                <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0D1322] shadow-2xl">
                  {/* Portrait photo */}
                  <img
                    src={profilePhoto}
                    alt="Divyaprada G - Software Engineer"
                    className="w-full h-[420px] object-cover object-top"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Editorial Tag Overlay */}
                  <div className="p-4 bg-gradient-to-t from-[#080C14] via-[#080C14]/90 to-transparent border-t border-slate-800/60 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-white text-sm">Divyaprada G</div>
                      <div className="text-[11px] font-mono text-slate-400">Software Engineer // Instructor</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                      <span>SIT AI&amp;DS &apos;27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RECRUITER 10-SECOND SNAPSHOT & NOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <RecruiterAtAGlance onOpenScorecard={onOpenRecruiterModal} />
        <NowSection />
      </section>

      {/* 2. LIVING ENGINEERING SYSTEM MAP (SIGNATURE COMPONENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EngineeringSystemMap />
      </section>

      {/* 3. WHERE DO YOU WANT TO EXPLORE? (ROLE-BASED TRAJECTORY SELECTOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-xl space-y-6">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              // Trajectory Selector
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Where do you want to explore?
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Select the path aligned with your role to experience the technical depth of this portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Recruiter Path */}
            <div
              onClick={onOpenRecruiterModal}
              id="path-recruiter-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-emerald-500/60 hover:bg-emerald-950/10 transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Candidate Review</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    I&apos;m a Recruiter
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    View structured credentials, education, LeetCode metrics, verified experience, and downloadable resume.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Launch 30s Candidate Scorecard</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            {/* Engineer Path */}
            <NavLink
              to="/systems"
              id="path-engineer-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-blue-500/60 hover:bg-blue-950/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 font-semibold uppercase">Technical Deep Dive</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    I&apos;m an Engineer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Inspect custom storage engines, Gorilla compression kernels, SIMD AVX-512 optimizations, and Kafka streaming architectures.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Enter System Lab</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </NavLink>

            {/* Curious Path */}
            <NavLink
              to="/field-log"
              id="path-curious-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-purple-500/60 hover:bg-purple-950/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400 font-semibold uppercase">Community & Events</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    I&apos;m Curious
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Browse the visual field log archive of Google summits, 36-hour hackathons, cloud labs, and developer mentorship sessions.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Field Log</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </NavLink>

          </div>
        </div>
      </section>

      {/* 4. THE SYSTEMS ENGINEERING LIFECYCLE (MINDSET COMPONENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EngineeringMindsetLifecycle />
      </section>

      {/* 5. SELECTED DISTRIBUTED SYSTEMS (ENGINEERING CASE STUDIES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              // Core Distributed Systems
            </span>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
              Engineered for Scale & Hardware Sympathy
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Three production-grade engineering systems built with first-principles mechanical reasoning and verified P99 latency SLAs.
            </p>
          </div>
          <NavLink
            to="/systems"
            id="home-view-all-systems-btn"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0 font-semibold"
          >
            <span>VIEW ALL SYSTEMS & CODE REPOSITORIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SYSTEM_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-[#0D1322] border border-[#1E293B] flex flex-col justify-between hover:border-slate-700 transition-all group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 font-bold">{proj.systemId}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${proj.colorScheme.badge}`}>
                    {proj.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>
                </div>

                {/* Problem Statement Box */}
                <div className="p-3 bg-[#080C14] rounded-xl border border-slate-800/80 space-y-1">
                  <div className="text-[10px] font-mono text-amber-400 font-semibold uppercase">
                    Problem & Challenge:
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                    {proj.problem}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {proj.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2.5 bg-[#080C14] rounded-lg border border-slate-800">
                      <div className="text-sm font-bold text-blue-400">{m.value}</div>
                      <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <NavLink
                  to={proj.route}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600/15 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Inspect System Case Study & Code</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ARCHITECTURAL CREDIBILITY & SYSTEM TOPOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CredibilityLayers project={SYSTEM_PROJECTS[0]} defaultLevel={2} />
      </section>

      {/* 7. TECH STACK DNA — REAL ENGINEERING CONNECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechStackDna />
      </section>

      {/* 8. ENGINEERING DECISIONS MATRIX (WHY X INSTEAD OF Y) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TradeoffsMatrix />
      </section>

      {/* 9. PROOF OF WORK & VERIFIABLE EVIDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProofOfWorkGrid />
      </section>

      {/* 10. ENGINEERING BUILD LOG (CHRONOLOGICAL TECHNICAL MILESTONES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EngineeringBuildLog />
      </section>

      {/* 8. TECHNICAL FIELD LOG TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>// REAL-WORLD PHOTOGRAPHIC ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
              Field Log & Visual Engineering Artifacts
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Photographic documentation of summits at Google Ananta, Microsoft Bengaluru, SIH hackathons, and Google Student Ambassador initiatives.
            </p>
          </div>
          <NavLink
            to="/field-log"
            id="home-open-field-log-btn"
            className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1.5 shrink-0 font-semibold"
          >
            <span>OPEN COMPLETE VISUAL ARCHIVE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIELD_LOG_EVENTS.slice(0, 3).map((event) => {
            const photoCount = event.images?.length || event.gallery?.length || 1;
            const photoCountStr = photoCount < 10 ? `0${photoCount} PHOTO${photoCount > 1 ? 'S' : ''}` : `${photoCount} PHOTOS`;

            return (
              <NavLink
                key={event.id}
                to={`/field-log/${event.id}`}
                className="group rounded-2xl overflow-hidden bg-[#0D1322] border border-[#1E293B] hover:border-purple-500/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="relative bg-[#080C14] p-3 overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-48 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 px-2.5 py-0.5 rounded text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                    {event.category}
                  </div>
                  <div className="absolute bottom-5 right-5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-slate-200 border border-slate-700/60 backdrop-blur-md flex items-center gap-1">
                    <Camera className="w-3 h-3 text-purple-400" />
                    <span>{photoCountStr}</span>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-between">
                      <span>{event.location}</span>
                      <span>{event.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-purple-400 group-hover:text-purple-300">
                    <span>Explore Field Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* 9. PORTAL LAUNCHPAD CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#0A0F1D] border border-blue-900/30 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
              // Connect & Collaborate
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to discuss distributed systems or SDE opportunities?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              I am actively discussing full-time software engineering roles in backend infrastructure, distributed computing, and AI systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <NavLink
              to="/contact"
              id="cta-establish-contact-btn"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Establish Connection</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <NavLink
              to="/about"
              className="px-5 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium transition-colors"
            >
              Read Engineering Story
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
