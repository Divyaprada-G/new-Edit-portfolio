import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import { EXPERIENCES } from '../data/experience';
import { SmartPhotoGallery } from '../components/SmartPhotoGallery';
import { PhotoLightbox } from '../components/PhotoLightbox';
import { EventPhoto } from '../types';
import {
  FileText,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Code,
  Layers,
  Award,
  Camera
} from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    photos: EventPhoto[];
    initialIndex: number;
    title?: string;
  }>({
    isOpen: false,
    photos: [],
    initialIndex: 0,
    title: ''
  });

  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  const handleOpenLightbox = (photos: EventPhoto[], index: number, title?: string) => {
    setLightboxState({
      isOpen: true,
      photos,
      initialIndex: index,
      title: title || selectedExp.role
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-[#1E293B] pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
          <Briefcase className="w-4 h-4" />
          <span>EXPERIENCE // BUILD HISTORY</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Build History
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Chronological track of professional software engineering instruction, production backend internship, and formal computer science education.
        </p>
      </div>

      {/* 2. Interactive Timeline & Detail Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Chronological Timeline List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase font-semibold pb-1">
            // Select Experience Entry
          </div>
          {EXPERIENCES.map((item) => {
            const isSelected = item.id === selectedExpId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedExpId(item.id)}
                className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#0D1322] border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-[#080C14] border-[#1E293B] hover:border-slate-700 hover:bg-[#0D1322]/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-blue-400">{item.period}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    item.type === 'WORK'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                  }`}>
                    {item.type}
                  </span>
                </div>
                
                <h3 className="font-display text-base font-bold text-white mt-1.5">
                  {item.role}
                </h3>
                
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {item.organization}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono mt-2">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Col: Deep Dive Experience Panel */}
        <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-6 shadow-xl sticky top-24">
          
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
                {selectedExp.type} RECORD
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedExp.period}
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white">
              {selectedExp.role}
            </h2>

            <div className="text-sm font-semibold text-slate-300">
              {selectedExp.organization} — <span className="text-slate-400 font-normal">{selectedExp.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Overview & Scope
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedExp.summary}
            </p>
          </div>

          {/* Detailed Verified Highlights */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
              Key Engineering Accomplishments & Responsibilities
            </div>
            <ul className="space-y-2.5">
              {selectedExp.highlights.map((highlight, idx) => (
                <li key={idx} className="p-3.5 bg-[#080C14] rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Gallery Documentation */}
          {selectedExp.gallery && selectedExp.gallery.length > 0 && (
            <div className="pt-2 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-blue-400 uppercase font-semibold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Classroom & Workshop Documentation ({selectedExp.gallery.length})</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Click to expand</span>
              </div>
              <SmartPhotoGallery
                photos={selectedExp.gallery}
                title={selectedExp.role}
                onPhotoClick={(idx) => handleOpenLightbox(selectedExp.gallery!, idx, selectedExp.role)}
              />
            </div>
          )}

          {/* Technologies Used (if any) */}
          {selectedExp.technologies && (
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Tools & Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#080C14] text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Bottom Bridge to Resume */}
      <div className="p-6 rounded-xl bg-[#0D1322] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-white text-base">Looking for printable resume format?</div>
          <div className="text-xs text-slate-400">Access the clean structured resume viewer with one-click PDF download.</div>
        </div>
        <NavLink
          to="/resume"
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0"
        >
          <span>Open Structured Resume</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>

      {/* Lightbox */}
      <PhotoLightbox
        isOpen={lightboxState.isOpen}
        photos={lightboxState.photos}
        initialIndex={lightboxState.initialIndex}
        title={lightboxState.title}
        onClose={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
};
