import React from 'react';
import { NavLink, useRouter } from '../context/RouterContext';
import { SYSTEM_PROJECTS } from '../data/projects';
import { ENGINEERING_SIGNALS } from '../data/signals';
import { FIELD_LOG_EVENTS } from '../data/events';
import profilePhoto from '../assets/images/profile.jpg';
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
  ChevronRight,
  Sparkles,
  Award,
  Camera
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-12 border-b border-[#1E293B]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Hero Copy & Identity */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1322] border border-[#1E293B] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">OPEN TO DISTRIBUTED SYSTEMS & BACKEND ROLES</span>
              </div>

              {/* Display Headline */}
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Building high-throughput <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">distributed systems</span> & storage engines.
                </h1>
                <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed pt-2 max-w-2xl">
                  I am <strong className="text-slate-200 font-semibold">Divyaprada G</strong>, a software engineer with deep focus on time-series databases, low-latency AI inference infrastructure, and resilient event streaming pipelines.
                </p>
              </div>

              {/* Core Engineering Quick Signals */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#0D1322]/80 rounded-lg border border-[#1E293B]">
                  <div className="font-display text-2xl font-bold text-blue-400">600+</div>
                  <div className="text-xs font-mono text-slate-400">LeetCode Global Rank</div>
                </div>
                <div className="p-3 bg-[#0D1322]/80 rounded-lg border border-[#1E293B]">
                  <div className="font-display text-2xl font-bold text-indigo-400">2,750+</div>
                  <div className="text-xs font-mono text-slate-400">Problems Solved</div>
                </div>
                <div className="p-3 bg-[#0D1322]/80 rounded-lg border border-[#1E293B] col-span-2 sm:col-span-1">
                  <div className="font-display text-2xl font-bold text-emerald-400">Top 10</div>
                  <div className="text-xs font-mono text-slate-400">SIH Hackathon 2025</div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <NavLink
                  to="/systems"
                  id="hero-explore-systems-btn"
                  className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group"
                >
                  <span>Explore System Lab</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>

                <NavLink
                  to="/resume"
                  id="hero-resume-btn"
                  className="px-5 py-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-200 border border-[#1E293B] font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>View Resume</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  id="hero-contact-btn"
                  className="px-5 py-3 rounded-lg text-slate-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <span>Get in Touch →</span>
                </NavLink>
              </div>
            </div>

            {/* Right Col: Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                {/* Background Subtle Framing Glow */}
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
                      <div className="text-[11px] font-mono text-slate-400">Google Student Ambassador 2026</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                      <span>SIT CSE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHERE DO YOU WANT TO EXPLORE? (PATH SELECTOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1322] border border-[#1E293B] shadow-xl space-y-6">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              // Choose Your Trajectory
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
            <NavLink
              to="/resume"
              id="path-recruiter-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-blue-500/60 hover:bg-blue-950/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 font-semibold uppercase">Candidate Review</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    I&apos;m a Recruiter
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    View structured credentials, education, LeetCode metrics, verified experience, and downloadable resume.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Open Resume View</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </NavLink>

            {/* Engineer Path */}
            <NavLink
              to="/systems"
              id="path-engineer-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-indigo-500/60 hover:bg-indigo-950/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-indigo-400 font-semibold uppercase">Technical Deep Dive</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    I&apos;m an Engineer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Inspect custom storage engines, Gorilla compression kernels, SIMD AVX-512 optimizations, and Kafka streaming architectures.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>Enter System Lab</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </NavLink>

            {/* Curious Path */}
            <NavLink
              to="/field-log"
              id="path-curious-card"
              className="p-6 rounded-xl bg-[#080C14] border border-[#1E293B] hover:border-emerald-500/60 hover:bg-emerald-950/10 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">Community & Events</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    I&apos;m Curious
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Browse the visual field log archive of Google summits, 36-hour hackathons, cloud labs, and developer mentorship sessions.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Field Log</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </NavLink>

          </div>
        </div>
      </section>

      {/* 3. SELECTED SYSTEMS PREVIEW PORTAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
              // Core Distributed Systems
            </span>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
              Engineered for Scale & Reliability
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Three deep-tier engineering systems designed to solve concrete memory, compression, and high-concurrency stream challenges.
            </p>
          </div>
          <NavLink
            to="/systems"
            id="home-view-all-systems-btn"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0"
          >
            <span>VIEW ALL 3 SYSTEMS IN SYSTEM LAB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SYSTEM_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-semibold">{proj.systemId}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${proj.colorScheme.badge}`}>
                    {proj.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {proj.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2.5 bg-[#080C14] rounded-lg border border-slate-800">
                      <div className="text-sm font-bold text-slate-200">{m.value}</div>
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

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <NavLink
                  to={proj.route}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Inspect System Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL FIELD LOG TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>// REAL-WORLD PHOTOGRAPHIC ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight mt-1">
              Field Log & Real-World Engineering Journey
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mt-1">
              Photographic documentation of summits at Google Ananta, Microsoft Bengaluru, SIH hackathons, and Google Student Ambassador initiatives.
            </p>
          </div>
          <NavLink
            to="/field-log"
            id="home-open-field-log-btn"
            className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1.5 shrink-0"
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

      {/* 5. PORTAL LAUNCHPAD CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0D1322] via-[#0F172A] to-[#0A0F1D] border border-blue-900/30 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
              // Connect & Collaborate
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to discuss distributed systems or engineering opportunities?
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
