import React, { useState } from 'react';
import { NavLink } from '../context/RouterContext';
import { FIELD_LOG_EVENTS } from '../data/events';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { PhotoLightbox, LightboxPhoto } from '../components/PhotoLightbox';
import {
  Calendar,
  MapPin,
  Camera,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Tag,
  UserCheck,
  CheckCircle2,
  BookOpen,
  Maximize2
} from 'lucide-react';

interface EventDetailProps {
  eventId: string;
}

export const EventDetailPage: React.FC<EventDetailProps> = ({ eventId }) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const event = FIELD_LOG_EVENTS.find((e) => e.id === eventId) || FIELD_LOG_EVENTS[0];
  const relatedEvents = FIELD_LOG_EVENTS.filter((e) => e.id !== event.id).slice(0, 2);

  // Normalize photos for lightbox safely
  const rawList = event.gallery || (event.images ? event.images.map((u, i) => ({
    url: u,
    caption: `${event.title} - Photographic record 0${i + 1}`,
    isBadge: false
  })) : []);

  const eventPhotos: LightboxPhoto[] = (rawList || []).map((p, idx) => ({
    url: typeof p === 'string' ? p : p.url,
    caption: typeof p === 'string' ? `${event.title} - Photo 0${idx + 1}` : p.caption,
    title: event.title,
    category: event.category,
    isBadge: typeof p === 'object' ? p.isBadge : false
  }));

  const photoCount = eventPhotos.length;
  const photoCountStr = photoCount < 10 ? `0${photoCount} PHOTO${photoCount > 1 ? 'S' : ''}` : `${photoCount} PHOTOS`;

  const openLightboxAt = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. TOP NAVIGATION BAR */}
      <div className="flex items-center justify-between">
        <NavLink
          to="/field-log"
          className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO FIELD LOG</span>
        </NavLink>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
          <span className="px-2 py-0.5 rounded bg-[#0D1322] border border-slate-800 text-purple-300">
            {photoCountStr}
          </span>
          <span className="hidden sm:inline">ENTRY // {event.id}</span>
        </div>
      </div>

      {/* 2. HERO VISUAL & CONTEXT CARD */}
      <div className="rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0D1322] shadow-2xl space-y-6">
        {/* Cover visual with zero-crop contain styling */}
        <div
          className="relative bg-[#080C14] cursor-pointer overflow-hidden p-4 sm:p-6"
          onClick={() => openLightboxAt(0)}
        >
          <ResponsiveImage
            src={event.coverImage}
            alt={event.title}
            className="border-0 bg-transparent"
            maxHeight="max-h-[440px]"
            priority={true}
            showHoverHint={true}
          />

          <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-600 text-white font-bold shadow-lg shadow-purple-900/40">
              {event.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/80 text-slate-200 border border-slate-700/60 backdrop-blur-md">
              {event.date}
            </span>
          </div>

          <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full text-xs font-mono bg-black/85 text-purple-300 border border-purple-500/40 backdrop-blur-md flex items-center gap-1.5 font-semibold">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>CLICK TO ENLARGE</span>
          </div>
        </div>

        {/* Title & Metadata Details Bar */}
        <div className="px-6 sm:px-8 space-y-4">
          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {event.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <UserCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Role: {event.role || 'Contributor'}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {event.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded bg-[#080C14] text-slate-400 border border-slate-800 text-[10px]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Narrative & Experience */}
        <div className="px-6 sm:px-8 pb-8 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-purple-400 uppercase font-semibold">
              // Event Scope & Context
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {event.fullDescription}
            </p>
          </div>

          {/* Personal Engineering Experience */}
          <div className="p-5 rounded-xl bg-[#080C14] border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineering Execution & Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {event.experienceStory}
            </p>
          </div>

          {/* Key Takeaway */}
          <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
            <div className="text-xs font-mono text-purple-300 uppercase font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Systems Takeaway</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-medium">
              "{event.takeaway}"
            </p>
          </div>
        </div>
      </div>

      {/* 3. CINEMATIC EDITORIAL PHOTO STORY SECTION */}
      {eventPhotos.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase font-semibold flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>// Visual Chronology</span>
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">
                Field Photographic Story
              </h2>
            </div>
            <span className="text-xs font-mono text-purple-300 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-800/50">
              {photoCountStr}
            </span>
          </div>

          <div className="space-y-8">
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                className="p-5 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] space-y-4 shadow-xl group"
              >
                {/* Photo Stage */}
                <div
                  className="rounded-xl overflow-hidden bg-[#080C14] cursor-pointer"
                  onClick={() => openLightboxAt(index)}
                >
                  <ResponsiveImage
                    src={photo.url}
                    alt={photo.caption || `${event.title} - Photo 0${index + 1}`}
                    isBadge={photo.isBadge}
                    maxHeight="max-h-[460px]"
                    showHoverHint={true}
                  />
                </div>

                {/* Caption Narrative */}
                <div className="flex items-start justify-between gap-4 pt-2 border-t border-slate-800/80">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-purple-400 font-bold shrink-0 mt-0.5">
                      PHOTO 0{index + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {photo.caption}
                    </p>
                  </div>

                  <button
                    onClick={() => openLightboxAt(index)}
                    className="shrink-0 p-2 rounded-lg bg-slate-800/60 hover:bg-purple-600 text-slate-300 hover:text-white transition-colors"
                    title="Enlarge Photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. RELATED EVENTS NAVIGATION */}
      <section className="pt-8 border-t border-[#1E293B] space-y-4">
        <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
          // Explore Related Field Entries
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedEvents.map((rel) => {
            const relCount = rel.images?.length || rel.gallery?.length || 1;
            const relCountStr = relCount < 10 ? `0${relCount} PHOTO${relCount > 1 ? 'S' : ''}` : `${relCount} PHOTOS`;

            return (
              <NavLink
                key={rel.id}
                to={`/field-log/${rel.id}`}
                className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-purple-500/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
                    <span>{rel.category} // {rel.date}</span>
                    <span className="text-slate-400">{relCountStr}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {rel.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>{rel.location}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>

      {/* Photo Lightbox */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={eventPhotos}
        currentIndex={activePhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />

    </div>
  );
};
