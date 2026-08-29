import React, { useState, useRef } from 'react';
import { NavLink } from '../context/RouterContext';
import { FIELD_LOG_EVENTS } from '../data/events';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { SmartPhotoGallery } from '../components/SmartPhotoGallery';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { PhotoLightbox, LightboxPhoto } from '../components/PhotoLightbox';
import {
  Layers,
  Sparkles,
  ArrowRight,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Camera,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Tag,
  BookOpen
} from 'lucide-react';

export const FieldLogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'ACHIEVEMENTS' | 'EVENTS'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Global lightbox state for standalone event cards
  const [globalLightboxOpen, setGlobalLightboxOpen] = useState<boolean>(false);
  const [globalPhotos, setGlobalPhotos] = useState<LightboxPhoto[]>([]);
  const [globalIndex, setGlobalIndex] = useState<number>(0);

  const categories = ['ALL', 'GOOGLE', 'MICROSOFT', 'OPEN SOURCE', 'HACKATHON', 'MENTORSHIP'];

  // Filter events
  const filteredEvents = selectedCategory === 'ALL'
    ? FIELD_LOG_EVENTS
    : FIELD_LOG_EVENTS.filter((e) => {
        if (selectedCategory === 'GOOGLE') return e.category === 'GOOGLE';
        if (selectedCategory === 'MICROSOFT') return e.category === 'MICROSOFT';
        if (selectedCategory === 'OPEN SOURCE') return e.category === 'OPEN SOURCE' || e.tags.includes('Open Source');
        if (selectedCategory === 'HACKATHON') return e.category === 'HACKATHON';
        if (selectedCategory === 'MENTORSHIP') return e.category === 'MENTORSHIP';
        return true;
      });

  // Filter achievements
  const filteredAchievements = selectedCategory === 'ALL'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((a) => {
        if (selectedCategory === 'GOOGLE') return a.title.toLowerCase().includes('google') || a.category.toLowerCase().includes('google');
        if (selectedCategory === 'MICROSOFT') return a.title.toLowerCase().includes('microsoft') || a.category.toLowerCase().includes('microsoft');
        if (selectedCategory === 'OPEN SOURCE') return a.title.toLowerCase().includes('open source') || a.tags.includes('Open Source');
        if (selectedCategory === 'HACKATHON') return a.title.toLowerCase().includes('sih') || a.category.toLowerCase().includes('hackathon');
        if (selectedCategory === 'MENTORSHIP') return a.title.toLowerCase().includes('mentor') || a.category.toLowerCase().includes('mentorship');
        return true;
      });

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openGlobalLightbox = (photos: LightboxPhoto[], index: number = 0) => {
    setGlobalPhotos(photos);
    setGlobalIndex(index);
    setGlobalLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. ARCHIVE HERO BANNER */}
      <div className="space-y-4 border-b border-[#1E293B] pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-purple-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
            <Camera className="w-3.5 h-3.5" />
            <span>REAL-WORLD PHOTOGRAPHIC ARCHIVE</span>
          </div>
          <span className="text-slate-500">//</span>
          <span className="text-slate-400">AUTHENTIC VISUAL DOCUMENTATION</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Field Log & Real-World Engineering Journey
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans">
          A dedicated visual archive documenting leadership milestones, verified open-source credentials, Microsoft and Google immersion summits, and competitive hackathon engineering sprints.
        </p>

        {/* View Toggle & Category Filters */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Main Section Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-[#0D1322] border border-[#1E293B]">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'ALL'
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-900/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ALL ARCHIVES
            </button>
            <button
              onClick={() => setActiveTab('ACHIEVEMENTS')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'ACHIEVEMENTS'
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-900/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>ACHIEVEMENTS & ROLES ({filteredAchievements.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('EVENTS')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'EVENTS'
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-900/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>EVENTS & IMMERSION ({filteredEvents.length})</span>
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-bold'
                    : 'bg-[#080C14] text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECTION: ACHIEVEMENTS & PROFESSIONAL ROLES */}
      {(activeTab === 'ALL' || activeTab === 'ACHIEVEMENTS') && (
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>// Formal Credentials & Leadership</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Achievements & Professional Roles
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
              {filteredAchievements.length} DOCUMENTED RECORD{filteredAchievements.length > 1 ? 'S' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAchievements.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-purple-500/50 transition-all flex flex-col justify-between space-y-6 shadow-xl group"
              >
                {/* Header Information */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 font-semibold">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.year}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <div className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span>{item.organization}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Smart Photographic / Credential Composition */}
                {item.images && item.images.length > 0 && (
                  <div className="pt-2">
                    <SmartPhotoGallery
                      images={item.gallery || item.images}
                      title={item.title}
                      category={item.category}
                      credentialMode={item.credentialType === 'BADGE'}
                    />
                  </div>
                )}

                {/* Tag Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                  {(item.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-[#080C14] border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION: EVENTS & IMMERSION */}
      {(activeTab === 'ALL' || activeTab === 'EVENTS') && (
        <section className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase font-semibold flex items-center gap-1.5">
                <Camera className="w-4 h-4" />
                <span>// Technical Immersion & Summits</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Events, Hackathons & Technical Immersion
              </h2>
            </div>

            {/* Scroll Navigation Controls for Horizontal Stream */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="p-2 rounded-lg bg-[#0D1322] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Scroll left in horizontal stream"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="p-2 rounded-lg bg-[#0D1322] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Scroll right in horizontal stream"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* A. HORIZONTAL INTERACTIVE STREAM */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
          >
            {filteredEvents.map((event) => {
              const photoCount = event.images?.length || event.gallery?.length || 1;
              const photoCountStr = photoCount < 10 ? `0${photoCount} PHOTO${photoCount > 1 ? 'S' : ''}` : `${photoCount} PHOTOS`;

              return (
                <div
                  key={event.id}
                  className="min-w-[320px] sm:min-w-[390px] lg:min-w-[440px] rounded-2xl overflow-hidden bg-[#0D1322] border border-[#1E293B] hover:border-purple-500/60 transition-all flex flex-col justify-between group snap-start shadow-xl"
                >
                  {/* Visual Stage with strict zero-crop contain container */}
                  <div
                    className="relative bg-[#080C14] cursor-pointer overflow-hidden p-3"
                    onClick={() => {
                      const raw = event.gallery || (event.images ? event.images.map((u, i) => ({ url: u, caption: `${event.title} - Photo 0${i + 1}` })) : []);
                      const photos: LightboxPhoto[] = (raw || []).map((p, idx) => ({
                        url: typeof p === 'string' ? p : p.url,
                        caption: typeof p === 'string' ? `${event.title} - Photo 0${idx + 1}` : p.caption,
                        title: event.title,
                        category: event.category
                      }));
                      openGlobalLightbox(photos, 0);
                    }}
                  >
                    <ResponsiveImage
                      src={event.coverImage}
                      alt={event.title}
                      className="border-0 bg-transparent"
                      maxHeight="max-h-[260px]"
                      showHoverHint={true}
                    />

                    {/* Category overlay */}
                    <div className="absolute top-5 left-5 px-2.5 py-1 rounded text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {event.category}
                    </div>

                    {/* Photo count indicator */}
                    <div className="absolute bottom-5 right-5 px-2.5 py-1 rounded text-[10px] font-mono bg-black/80 text-slate-200 border border-slate-700/60 backdrop-blur-md flex items-center gap-1">
                      <Camera className="w-3 h-3 text-purple-400" />
                      <span>{photoCountStr}</span>
                    </div>
                  </div>

                  {/* Narrative details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 text-purple-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.location}</span>
                        </span>
                        <span>{event.date}</span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {event.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {event.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {event.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-slate-400 bg-[#080C14] px-2 py-0.5 rounded border border-slate-800">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <NavLink
                        to={`/field-log/${event.id}`}
                        className="text-xs font-mono text-purple-400 hover:text-purple-300 group-hover:translate-x-1 transition-all flex items-center gap-1 font-semibold"
                      >
                        <span>Open Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* B. COMPLETE EVENT STORIES GRID */}
          <div className="space-y-6 pt-6">
            <div className="border-t border-[#1E293B] pt-8">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                // Detailed Photographic Narratives
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Full Field Story Index
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const photoCount = event.images?.length || event.gallery?.length || 1;
                const photoCountStr = photoCount < 10 ? `0${photoCount} PHOTO${photoCount > 1 ? 'S' : ''}` : `${photoCount} PHOTOS`;

                return (
                  <NavLink
                    key={event.id}
                    to={`/field-log/${event.id}`}
                    className="p-5 rounded-xl bg-[#0D1322] border border-[#1E293B] hover:border-purple-500/50 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-purple-400 font-semibold">{event.category}</span>
                        <span className="text-slate-400">{event.date}</span>
                      </div>

                      <h4 className="font-display text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {event.title}
                      </h4>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {event.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-purple-400">
                      <span className="flex items-center gap-1.5">
                        <Camera className="w-3 h-3 text-purple-400" />
                        <span>{photoCountStr}</span>
                      </span>
                      <span className="flex items-center gap-1 text-purple-300">
                        <span>Read Story</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Global Lightbox for Standalone Stream Cards */}
      <PhotoLightbox
        isOpen={globalLightboxOpen}
        photos={globalPhotos}
        currentIndex={globalIndex}
        onClose={() => setGlobalLightboxOpen(false)}
        onNavigate={(idx) => setGlobalIndex(idx)}
      />

    </div>
  );
};
