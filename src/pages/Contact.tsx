import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Award,
  MapPin,
  Copy,
  Check,
  Send,
  Radio,
  Terminal,
  MessageSquare,
  ArrowRight,
  Code,
  Phone
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [phoneCopied, setPhoneCopied] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('Engineering Collaboration / Opportunity');
  const [message, setMessage] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');

  const email = 'divyapradag15@gmail.com';
  const phone = '+91 8197075014';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${senderEmail}\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const engagementTopics = [
    { title: 'Distributed Systems & Databases', desc: 'LSM-trees, lock-free concurrency, WAL architectures, and storage engine design.' },
    { title: 'AI Infrastructure & Acceleration', desc: 'Vector search indices, HNSW graph optimizations, SIMD kernels, and PagedAttention.' },
    { title: 'Full-Time Software Engineering Roles', desc: 'Open to core backend, distributed infrastructure, and AI platform engineering opportunities.' },
    { title: 'Technical Talks & Mentorship', desc: 'Workshops on competitive algorithms, C++ systems programming, and Google developer technologies.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <Terminal className="w-4 h-4" />
          <span>CONTACT // ESTABLISH CONNECTION</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Connect with Divyaprada
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Open for software engineering opportunities, technical discussions on distributed storage engines and AI inference runtimes, or developer community collaborations.
        </p>
      </div>

      {/* 2. Direct Channels & Interactive Composer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Primary Email Card */}
          <div className="p-6 rounded-2xl bg-[#0D1322] border border-blue-500/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
                // Direct Email Channel
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                ACTIVE INBOX
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#080C14] rounded-xl border border-slate-800">
              <div className="font-mono text-xs text-white truncate pr-2">{email}</div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs flex items-center gap-1 shrink-0 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            
            <p className="text-[11px] text-slate-400">
              Preferred channel for technical interview inquiries, architecture discussions, and mentorship requests.
            </p>
          </div>

          {/* Direct Phone Card */}
          <div className="p-6 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
                // Direct Phone &amp; WhatsApp
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                INDIA (+91)
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#080C14] rounded-xl border border-slate-800">
              <div className="font-mono text-xs text-white truncate pr-2 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{phone}</span>
              </div>
              <button
                onClick={copyPhone}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs flex items-center gap-1 shrink-0 transition-colors"
                title="Copy phone to clipboard"
              >
                {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            
            <p className="text-[11px] text-slate-400">
              Available for technical recruitment calls and interview scheduling.
            </p>
          </div>

          {/* Social & Professional Links */}
          <div className="p-6 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
              // Engineering Profiles
            </div>

            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/divyapradag"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#080C14] hover:bg-slate-800 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">LinkedIn (divyapradag)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href="https://github.com/divyaprada-g"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#080C14] hover:bg-slate-800 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-200" />
                  <span className="font-semibold">GitHub Repositories</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href="https://leetcode.com/u/Divyaprada_G/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#080C14] hover:bg-slate-800 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">LeetCode (Rank 600+ // 2,750+ Solved // Divyaprada_G)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Location: Karnataka, India (Available for Relocation)</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Dispatch Terminal */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 shadow-xl">
          <div className="border-b border-slate-800 pb-4 space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
              // Direct Message Dispatch
            </div>
            <h2 className="font-display text-2xl font-bold text-white">
              Compose Communication
            </h2>
            <p className="text-xs text-slate-400">
              Draft a direct note or interview prompt to open directly in your mail client.
            </p>
          </div>

          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Your Email</label>
              <input
                type="email"
                required
                placeholder="recruiter@google.com or engineer@company.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full bg-[#080C14] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Topic / Subject</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#080C14] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Message Body</label>
              <textarea
                rows={5}
                required
                placeholder="Hi Divyaprada, I'm reaching out regarding..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#080C14] border border-slate-700 rounded-lg p-3 text-xs font-sans text-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Email Client</span>
            </button>
          </form>
        </div>

      </div>

      {/* 3. Engagement Areas */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase font-semibold">
            // Engagement Opportunities
          </span>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            What We Can Discuss
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {engagementTopics.map((topic, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] space-y-2">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <span className="text-xs font-mono text-blue-400">0{idx + 1}.</span>
                <span>{topic.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
