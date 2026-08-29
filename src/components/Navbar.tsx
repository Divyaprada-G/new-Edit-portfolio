import React, { useState } from 'react';
import { useRouter, NavLink } from '../context/RouterContext';
import { Command, Menu, X, Terminal, ArrowUpRight, Cpu, Layers, Sparkles, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPalette }) => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Systems', path: '/systems' },
    { label: 'Architecture', path: '/architecture' },
    { label: 'Experience', path: '/experience' },
    { label: 'Field Log', path: '/field-log' },
    { label: 'Lab', path: '/lab' },
    { label: 'Signals', path: '/signals' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1E293B]/70 bg-[#080C14]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            id="nav-logo"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-mono text-sm font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
                DIVYAPRADA G
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEMS ENG
              </span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0D1322]/80 border border-[#1E293B] px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette, Resume, Contact */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            id="cmd-palette-btn"
            onClick={onOpenPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono text-slate-400 bg-[#0D1322] border border-[#1E293B] rounded-lg hover:border-slate-600 hover:text-slate-200 transition-colors"
            title="Press Cmd+K or Ctrl+K to search"
          >
            <Command className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden xl:inline text-slate-500">Quick Jump</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Resume Link */}
          <NavLink
            to="/resume"
            id="nav-resume-btn"
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              currentPath === '/resume'
                ? 'bg-blue-600 text-white border-blue-500'
                : 'text-slate-300 border-[#1E293B] bg-[#0D1322] hover:border-slate-600 hover:text-white'
            }`}
          >
            Resume
          </NavLink>

          {/* Establish Connection Link */}
          <NavLink
            to="/contact"
            id="nav-contact-btn"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all flex items-center gap-1"
          >
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="p-2 text-slate-400 bg-[#0D1322] border border-[#1E293B] rounded-lg hover:text-white"
            aria-label="Open command palette"
          >
            <Command className="w-4 h-4 text-blue-400" />
          </button>
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 bg-[#0D1322] border border-[#1E293B] rounded-lg hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1E293B] bg-[#090D18] px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
          <div className="flex items-center gap-2 pt-2">
            <NavLink
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center text-xs font-medium text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700"
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
