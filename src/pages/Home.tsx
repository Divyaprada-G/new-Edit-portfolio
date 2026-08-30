import React from 'react';
import { NavLink } from '../context/RouterContext';
import { MEDIA_ASSETS } from '../data/mediaAssets';
import { FlagshipProjectsSection } from '../components/FlagshipProjectsSection';
import { EngineeringProfileSection } from '../components/EngineeringProfileSection';
import { ExperienceTimelineSection } from '../components/ExperienceTimelineSection';
import { CategorizedSkillsSection } from '../components/CategorizedSkillsSection';
import { AchievementsTimelineSection } from '../components/AchievementsTimelineSection';
import { RecruiterAtAGlance } from '../components/RecruiterAtAGlance';
import { FIELD_LOG_EVENTS } from '../data/events';

import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  FileText,
  Download,
  Mail,
  Camera,
  ExternalLink,
  Code,
  Shield,
  Server,
  Cpu,
  Layers,
  Sparkles,
  Terminal
} from 'lucide-react';

interface HomePageProps {
  onOpenRecruiterModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRecruiterModal }) => {
  const profilePhoto = MEDIA_ASSETS.profile;

  const scrollToProjects = () => {
    const el = document.getElementById('flagship-projects-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. HERO SECTION — PRECISE, TECHNICAL & CONCISE */}
      <section className="relative pt-6 sm:pt-12 pb-10 border-b border-[#1E293B]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Candidate Identity & Core Competencies */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1322] border border-blue-500/30 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-200 font-medium tracking-wide">
                  SOFTWARE ENGINEERING CANDIDATE // DISTRIBUTED SYSTEMS &amp; BACKEND
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Divyaprada G
                </h1>
                <div className="font-mono text-base sm:text-lg text-blue-400 font-semibold">
                  Software Engineer — Distributed Systems, Backend &amp; AI Infrastructure
                </div>
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
                  Building high-throughput storage engines, low-latency SIMD vector retrieval, and resilient event streaming pipelines. Strong foundation in concurrent programming (Java, C++, Python), algorithmic problem solving (LeetCode Global 600+), and system design.
                </p>
              </div>

              {/* Verified Core Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-xl font-bold text-amber-400">600+</div>
                  <div className="text-[11px] font-mono text-slate-300 font-medium">LeetCode Rank</div>
                  <div className="text-[10px] text-slate-400">Top 0.5% Worldwide</div>
                </div>

                <div className="p-3 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-xl font-bold text-blue-400">2,750+</div>
                  <div className="text-[11px] font-mono text-slate-300 font-medium">Solved Problems</div>
                  <div className="text-[10px] text-slate-400">630+ Hard / 1400+ Med</div>
                </div>

                <div className="p-3 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-xl font-bold text-emerald-400">10x / 2.5x</div>
                  <div className="text-[11px] font-mono text-slate-300 font-medium">Engine Gains</div>
                  <div className="text-[10px] text-slate-400">TSDB &amp; LLM Batching</div>
                </div>

                <div className="p-3 bg-[#0D1322] rounded-xl border border-[#1E293B]">
                  <div className="font-display text-xl font-bold text-indigo-400">GSA 2026</div>
                  <div className="text-[11px] font-mono text-slate-300 font-medium">Google Ambassador</div>
                  <div className="text-[10px] text-slate-400">SIT Campus Lead</div>
                </div>
              </div>

              {/* Primary Actions: Projects, GitHub, LinkedIn, Resume */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToProjects}
                  id="hero-view-projects-btn"
                  className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 group"
                >
                  <span>View Flagship Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://github.com/Divyaprada-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  className="px-4 py-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-200 border border-[#1E293B] font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href="https://www.linkedin.com/in/divyapradag"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="px-4 py-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-200 border border-[#1E293B] font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <NavLink
                  to="/resume"
                  id="hero-resume-link"
                  className="px-4 py-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-200 border border-[#1E293B] font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Resume</span>
                </NavLink>

                <a
                  href="/Divyaprada_G_Resume.pdf"
                  download="Divyaprada_G_Resume.pdf"
                  id="hero-download-resume-btn"
                  className="p-3 rounded-lg bg-[#0D1322] hover:bg-slate-800 text-slate-300 border border-[#1E293B] transition-colors"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Col: Portrait Card & Role Metadata */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0D1322] shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Divyaprada G — Software Engineer"
                    className="w-full h-[390px] object-cover object-top"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="p-4 bg-[#080C14] border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-white text-sm">Divyaprada G</div>
                      <div className="text-[11px] font-mono text-slate-400">Software Engineer</div>
                    </div>
                    <div className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 font-semibold">
                      SIT AI&amp;DS &apos;27
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RECRUITER 10-SECOND SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecruiterAtAGlance onOpenScorecard={onOpenRecruiterModal} />
      </section>

      {/* 3. ENGINEERING CANDIDATE PROFILE & DSA MASTERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EngineeringProfileSection />
      </section>

      {/* 4. FLAGSHIP PROJECTS (THE 3 CORE SYSTEMS) */}
      <section id="flagship-projects-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <FlagshipProjectsSection />
      </section>

      {/* 5. WORK & INSTRUCTION EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceTimelineSection />
      </section>

      {/* 6. CATEGORIZED TECHNICAL SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorizedSkillsSection />
      </section>

      {/* 7. VERIFIED ACHIEVEMENTS, HONORS & HACKATHONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AchievementsTimelineSection />
      </section>

      {/* 8. TECHNICAL FIELD LOG & VISUAL EVIDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E293B] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold">
              <Camera className="w-4 h-4" />
              <span>// VISUAL ENGINEERING FIELD LOG</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Field Log &amp; Real-World Technical Artifacts
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-1">
              Photographic documentation of summits at Google Ananta, Microsoft Bengaluru, Smart India Hackathon finals, and Google Student Ambassador initiatives.
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

      {/* 9. CONTACT & DISCUSSION CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0D1322] border border-[#1E293B] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
              // CONNECT &amp; COLLABORATE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let&apos;s discuss distributed systems, backend engineering, or SDE internship roles.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Available for software engineering internship discussions, backend infrastructure deep dives, and technical evaluations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <NavLink
              to="/contact"
              id="cta-establish-contact-btn"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>

            <a
              href="mailto:divyapradag15@gmail.com"
              className="px-5 py-3 rounded-lg bg-[#080C14] hover:bg-slate-800 text-slate-200 border border-[#1E293B] text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>divyapradag15@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
