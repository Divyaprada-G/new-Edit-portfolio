import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { Search, Command, ArrowRight, FileText, Activity, Server, Cpu, Terminal, ExternalLink, Mail, Check, X, Shield, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaletteItem {
  id: string;
  title: string;
  category: 'NAVIGATION' | 'SYSTEMS' | 'ACTIONS' | 'LINKS';
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterSnapshot?: () => void;
}> = ({ isOpen, onClose, onOpenRecruiterSnapshot }) => {
  const { navigate } = useRouter();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items: PaletteItem[] = [
    ...(onOpenRecruiterSnapshot
      ? [
          {
            id: 'act-recruiter-snapshot',
            title: 'Recruiter Quick Summary // 30s Candidate Scan',
            category: 'ACTIONS' as const,
            subtitle: 'Instant candidate scorecard: metrics, education, experience, stack',
            icon: <Shield className="w-4 h-4 text-emerald-400" />,
            action: () => {
              onClose();
              onOpenRecruiterSnapshot();
            }
          }
        ]
      : []),
    {
      id: 'nav-home',
      title: 'Home // Engineering OS',
      category: 'NAVIGATION',
      subtitle: 'Overview, hero focus, and portal launchpad',
      icon: <Terminal className="w-4 h-4 text-blue-400" />,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'nav-about',
      title: 'About // Engineering Journey',
      category: 'NAVIGATION',
      subtitle: 'Philosophy, background, education, and technical trajectory',
      icon: <BookOpen className="w-4 h-4 text-slate-400" />,
      action: () => { navigate('/about'); onClose(); }
    },
    {
      id: 'nav-systems',
      title: 'System Lab // Core Distributed Systems',
      category: 'NAVIGATION',
      subtitle: 'Titan TSDB, Vector/Inference Engine, Real-Time Traffic System',
      icon: <Server className="w-4 h-4 text-blue-400" />,
      action: () => { navigate('/systems'); onClose(); }
    },
    {
      id: 'sys-tsdb',
      title: 'Titan TSDB Case Study',
      category: 'SYSTEMS',
      subtitle: '1.2M+ writes/sec, Gorilla compression, lock-free skiplist',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      action: () => { navigate('/systems/titan-tsdb'); onClose(); }
    },
    {
      id: 'sys-vector',
      title: 'Vector & LLM Inference Engine',
      category: 'SYSTEMS',
      subtitle: 'HNSW Graph, Product Quantization, PagedAttention KV Cache',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      action: () => { navigate('/systems/vector-inference'); onClose(); }
    },
    {
      id: 'sys-traffic',
      title: 'Real-Time Traffic Telemetry System',
      category: 'SYSTEMS',
      subtitle: 'Kafka streams, 10K+ vehicles, 3-node chaos failover recovery',
      icon: <Activity className="w-4 h-4 text-sky-400" />,
      action: () => { navigate('/systems/traffic-system'); onClose(); }
    },
    {
      id: 'nav-architecture',
      title: 'Architecture Lab // Interactive Schematics',
      category: 'NAVIGATION',
      subtitle: 'Deep dive into data flows, bottlenecks, and failure boundaries',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      action: () => { navigate('/architecture'); onClose(); }
    },
    {
      id: 'nav-experience',
      title: 'Experience // Build History',
      category: 'NAVIGATION',
      subtitle: 'HMS Polytechnic Instructor, PraLoTech Intern, SIT Education',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => { navigate('/experience'); onClose(); }
    },
    {
      id: 'nav-field-log',
      title: 'Technical Field Log // Visual Archive',
      category: 'NAVIGATION',
      subtitle: 'Google events, hackathons, cloud labs, and community keynotes',
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => { navigate('/field-log'); onClose(); }
    },
    {
      id: 'nav-lab',
      title: 'Engineering Lab // Interactive Simulations',
      category: 'NAVIGATION',
      subtitle: 'Cache heuristics, rate limiters, dynamic batching models',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      action: () => { navigate('/lab'); onClose(); }
    },
    {
      id: 'nav-signals',
      title: 'Engineering Signals // Verified Evidence',
      category: 'NAVIGATION',
      subtitle: 'LeetCode Top 600+, 2750+ solved, Top 10 Hackathon, GSA 2026',
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
      action: () => { navigate('/signals'); onClose(); }
    },
    {
      id: 'nav-resume',
      title: 'Resume // Professional Summary',
      category: 'NAVIGATION',
      subtitle: 'Structured CV with direct links to technical case studies',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => { navigate('/resume'); onClose(); }
    },
    {
      id: 'nav-contact',
      title: 'Contact // Establish Connection',
      category: 'NAVIGATION',
      subtitle: 'Direct email dispatch and professional network channels',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => { navigate('/contact'); onClose(); }
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      category: 'ACTIONS',
      subtitle: 'divyapradag15@gmail.com',
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-slate-300" />,
      action: () => {
        navigator.clipboard?.writeText('divyapradag15@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => {
          setCopiedEmail(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'act-leetcode',
      title: 'View LeetCode Profile',
      category: 'LINKS',
      subtitle: 'Rank 600+ | 2750+ Problems Solved (630+ Hard, 1400+ Med)',
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.open('https://leetcode.com/u/Divyaprada_G/', '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'View LinkedIn Profile',
      category: 'LINKS',
      subtitle: 'Connect with Divyaprada G on LinkedIn',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open('https://www.linkedin.com/in/divyapradag', '_blank');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'View GitHub Profile',
      category: 'LINKS',
      subtitle: 'Open source systems repositories and codebases',
      icon: <ExternalLink className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open('https://github.com/divyaprada-g', '_blank');
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#04060A]/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#0D1322] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#1E293B] gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, route, or search systems (e.g., TSDB, LeetCode, Resume)..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none font-sans"
              />
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-300 p-1 rounded-md transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-800/30">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  No matching commands or routes found for &ldquo;{search}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg cursor-pointer transition-all ${
                        isSelected ? 'bg-blue-600/15 border border-blue-500/30 text-white' : 'text-slate-300 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-md ${isSelected ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-800/80 text-slate-400'}`}>
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-3 shrink-0">
                        {isSelected && (
                          <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1">
                            Press Enter <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Palette Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#090E1A] border-t border-[#1E293B] text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">ESC</kbd>
                  Close
                </span>
              </div>
              <span className="text-slate-400">DIVYAPRADA // OS v2.6</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
