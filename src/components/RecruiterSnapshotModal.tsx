import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import {
  FileText,
  Download,
  Mail,
  Copy,
  Check,
  Code,
  ExternalLink,
  Shield,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  X,
  ArrowRight,
  Server,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RecruiterSnapshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterSnapshotModal: React.FC<RecruiterSnapshotModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'divyapradag15@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.15 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="recruiter-modal-title"
          className="relative w-full max-w-3xl bg-[#0D1322] border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-slate-800 bg-[#080C14] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span id="recruiter-modal-title" className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                Recruiter Executive Summary // 30-Second Candidate Scan
              </span>
            </div>
            <button
              onClick={onClose}
              id="close-recruiter-modal-btn"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans">
            
            {/* Candidate Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Divyaprada G
                </h2>
                <div className="text-xs font-mono text-blue-400 font-semibold mt-0.5">
                  Software Engineer // Distributed Systems & AI Infrastructure
                </div>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  B.E. Computer Science & Engineering (Siddaganga Institute of Technology, 2023–2026). Specialized in custom time-series storage engines, SIMD vector search, and high-concurrency event streams.
                </p>
              </div>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                <a
                  href="/Divyaprada_G_Resume.pdf"
                  download="Divyaprada_G_Resume.pdf"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all justify-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Resume</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="px-4 py-2 rounded-lg bg-[#080C14] hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors justify-center"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Verified Email'}</span>
                </button>
              </div>
            </div>

            {/* Key Verified Signals Grid */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-2">
                // Verifiable Engineering Signals
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">LeetCode Rank</div>
                  <div className="font-display text-xl font-bold text-blue-400">600+ Global</div>
                  <div className="text-[10px] text-slate-400">Top 0.5% worldwide</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Solved Problems</div>
                  <div className="font-display text-xl font-bold text-indigo-400">2,750+ Total</div>
                  <div className="text-[10px] text-slate-400">630+ Hard / 1400+ Med</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Leadership</div>
                  <div className="font-display text-xl font-bold text-purple-400">GSA 2026</div>
                  <div className="text-[10px] text-slate-400">Google Student Ambassador</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400">Hackathon Finish</div>
                  <div className="font-display text-xl font-bold text-emerald-400">Top 10</div>
                  <div className="text-[10px] text-slate-400">Smart India Hackathon &apos;25</div>
                </div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-2">
                // Core Technical Competencies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800 space-y-1.5">
                  <div className="font-bold text-slate-200 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                    <span>Distributed Systems & Storage</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Custom TSDB engines, Gorilla XOR bit-compression, lock-free skiplists, append-only WAL, Kafka streaming, Redis clusters.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800 space-y-1.5">
                  <div className="font-bold text-slate-200 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Languages & Low-Level Optimization</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    C++20, Go (Golang), Java, TypeScript, SIMD AVX-512 intrinsics, HNSW graphs, Product Quantization, PagedAttention.
                  </p>
                </div>
              </div>
            </div>

            {/* Work & Instruction History */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-2">
                // Experience Track
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-white">Software Engineering Instructor</span>
                    <span className="text-slate-400"> — HMS Polytechnic</span>
                    <div className="text-[11px] text-slate-400">Instructing C++/Java DS/Algo, OOP, DBMS; mentoring 60+ students.</div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 shrink-0">Aug 2024 – Present</span>
                </div>

                <div className="p-3 rounded-xl bg-[#080C14] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <span className="font-bold text-white">Software Engineer Intern</span>
                    <span className="text-slate-400"> — PraLoTech Solutions LLP</span>
                    <div className="text-[11px] text-slate-400">Engineered Go/Node backend APIs, Redis caching, cut SQL latency by 35%.</div>
                  </div>
                  <span className="text-[11px] font-mono text-blue-400 shrink-0">Jan 2024 – Jul 2024</span>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer Navigation */}
          <div className="px-6 py-4 border-t border-slate-800 bg-[#080C14] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href="https://leetcode.com/u/Divyaprada_G/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <Code className="w-3.5 h-3.5" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/divyapradag"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 flex items-center gap-1 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <NavLink
                to="/systems"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <span>Explore Systems Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
