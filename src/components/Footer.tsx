import React from 'react';
import { NavLink } from '../context/RouterContext';
import { Terminal, Shield, ArrowUpRight, Github, Linkedin, Code, Mail, Heart } from 'lucide-react';

export const Footer: React.FC<{
  onOpenTelemetryHUD?: () => void;
}> = ({ onOpenTelemetryHUD }) => {
  return (
    <footer className="border-t border-[#1E293B] bg-[#060911] text-slate-400 text-xs mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Systems */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                D
              </div>
              <span className="font-display font-bold text-sm text-slate-200 tracking-tight">
                DIVYAPRADA G
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Software Engineer specializing in Distributed Systems, AI Infrastructure, Custom Time-Series Storage Engines, and Real-Time Event Streams.
            </p>
            {onOpenTelemetryHUD ? (
              <button
                onClick={onOpenTelemetryHUD}
                className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                title="Click or press 'B' to open Hardware Telemetry HUD"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>SYSTEM STATE: ALL RUNTIMES OPTIMAL [B]</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>SYSTEM STATE: ALL RUNTIMES OPTIMAL</span>
              </div>
            )}
          </div>

          {/* Col 2: Primary Pages */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <NavLink to="/" className="hover:text-blue-400 transition-colors">
                  Home // Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-blue-400 transition-colors">
                  About // Engineering Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/systems" className="hover:text-blue-400 transition-colors">
                  System Lab // Core Engines
                </NavLink>
              </li>
              <li>
                <NavLink to="/architecture" className="hover:text-blue-400 transition-colors">
                  Architecture Lab // Schematics
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="hover:text-blue-400 transition-colors">
                  Experience // Build History
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration Labs */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Deep Dives & Evidence
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <NavLink to="/systems/titan-tsdb" className="hover:text-blue-400 transition-colors">
                  Titan TSDB (1.2M writes/s)
                </NavLink>
              </li>
              <li>
                <NavLink to="/systems/vector-inference" className="hover:text-blue-400 transition-colors">
                  Vector & LLM Inference (HNSW/PQ)
                </NavLink>
              </li>
              <li>
                <NavLink to="/systems/traffic-system" className="hover:text-blue-400 transition-colors">
                  Real-Time Traffic (Kafka/Chaos)
                </NavLink>
              </li>
              <li>
                <NavLink to="/field-log" className="hover:text-blue-400 transition-colors">
                  Technical Field Log (Visual Archive)
                </NavLink>
              </li>
              <li>
                <NavLink to="/lab" className="hover:text-blue-400 transition-colors">
                  Engineering Lab (Simulations)
                </NavLink>
              </li>
              <li>
                <NavLink to="/signals" className="hover:text-blue-400 transition-colors">
                  Engineering Signals (Rank 600+)
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Channels */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold tracking-wider">
              Connect & Verify
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:divyapradag15@gmail.com"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>divyapradag15@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/Divyaprada_G/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Code className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode (Rank 600+ // 2750+ solved)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/divyapradag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Divyaprada-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium mt-1"
                >
                  <span>View Structured Resume</span>
                  <ArrowUpRight className="w-3 h-3" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} DIVYAPRADA G. ALL SYSTEMS VERIFIED & DATA-DRIVEN.
          </div>
          <div className="flex items-center gap-4">
            <span>Tumkur / Bangalore, India</span>
            <span>•</span>
            <NavLink to="/contact" className="hover:text-slate-300">
              Establish Connection
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
