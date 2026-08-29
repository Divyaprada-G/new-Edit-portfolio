import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LightboxPhoto {
  url: string;
  caption?: string;
  title?: string;
  category?: string;
  isBadge?: boolean;
}

interface PhotoLightboxProps {
  isOpen: boolean;
  photos?: LightboxPhoto[];
  currentIndex?: number;
  initialIndex?: number;
  title?: string;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  photos = [],
  currentIndex = 0,
  initialIndex = 0,
  title,
  onClose,
  onNavigate
}) => {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex || currentIndex || 0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const safePhotos = photos || [];
  const total = safePhotos.length;
  const activeIndex = onNavigate ? currentIndex : internalIndex;
  const currentPhoto = safePhotos[activeIndex] || safePhotos[0];

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setImageLoaded(false);
    setHasError(false);
    const newIdx = (activeIndex - 1 + total) % total;
    if (onNavigate) {
      onNavigate(newIdx);
    } else {
      setInternalIndex(newIdx);
    }
  }, [activeIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setImageLoaded(false);
    setHasError(false);
    const newIdx = (activeIndex + 1) % total;
    if (onNavigate) {
      onNavigate(newIdx);
    } else {
      setInternalIndex(newIdx);
    }
  }, [activeIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while lightbox is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Reset states on index change
  useEffect(() => {
    setImageLoaded(false);
    setHasError(false);
  }, [activeIndex]);

  // Touch swipe support
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || total === 0) return null;

  // Format index string (e.g., "01 / 03")
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const counterText = `${pad(activeIndex + 1)} / ${pad(total)}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-[#050811]/95 backdrop-blur-2xl flex flex-col justify-between select-none"
        onClick={onClose}
      >
        {/* Top Controls Header */}
        <div
          className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-slate-800/80 bg-[#080C14]/80 backdrop-blur-md z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>{counterText}</span>
            </div>
            {currentPhoto?.category && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                {currentPhoto.category}
              </span>
            )}
            {currentPhoto?.isBadge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                VERIFIED CREDENTIAL
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Close Lightbox (Esc)"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">CLOSE [ESC]</span>
            </button>
          </div>
        </div>

        {/* Main Stage / Image Viewport */}
        <div
          className="flex-1 w-full relative flex items-center justify-center p-2 sm:p-6 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#0D1322]/90 hover:bg-purple-600 text-slate-200 hover:text-white border border-slate-700 hover:border-purple-500 shadow-2xl transition-all z-20 focus:outline-none"
              aria-label="Previous Photo (Left Arrow)"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Center Image Stage */}
          <div className="relative max-h-[75vh] max-w-[92vw] flex items-center justify-center">
            {/* Loading Skeleton */}
            {!imageLoaded && !hasError && (
              <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-2xl bg-slate-900/60 border border-slate-800 animate-pulse flex flex-col items-center justify-center gap-2 text-slate-500 text-xs font-mono">
                <ImageIcon className="w-8 h-8 text-purple-400/50 animate-bounce" />
                <span>ARCHIVE STREAM LOADING...</span>
              </div>
            )}

            {/* Error Fallback */}
            {hasError && (
              <div className="p-8 rounded-2xl bg-[#0D1322] border border-red-500/30 text-center space-y-2 max-w-md">
                <div className="text-xs font-mono text-red-400 uppercase">IMAGE ARCHIVE NOTICE</div>
                <p className="text-sm text-slate-300">
                  Image asset currently resolving. Complete photograph record is preserved in repository archive.
                </p>
              </div>
            )}

            {/* Full-Fidelity Uncropped Image */}
            <motion.img
              key={currentPhoto?.url}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={currentPhoto?.url}
              alt={currentPhoto?.caption || currentPhoto?.title || 'Field Log Photograph'}
              className={`max-h-[75vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-slate-800/80 ${
                currentPhoto?.isBadge ? 'bg-[#080C14] p-2 sm:p-4' : ''
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageLoaded(true);
                setHasError(true);
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Next Button */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#0D1322]/90 hover:bg-purple-600 text-slate-200 hover:text-white border border-slate-700 hover:border-purple-500 shadow-2xl transition-all z-20 focus:outline-none"
              aria-label="Next Photo (Right Arrow)"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Narrative Bar */}
        <div
          className="w-full px-4 sm:px-8 py-3.5 border-t border-slate-800/80 bg-[#080C14]/90 backdrop-blur-md z-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-3xl space-y-1">
            {currentPhoto?.title && (
              <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                {currentPhoto.title}
              </div>
            )}
            {currentPhoto?.caption ? (
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                {currentPhoto.caption}
              </p>
            ) : (
              <p className="text-xs text-slate-400 font-mono">
                Authentic photographic documentation preserved in original aspect ratio.
              </p>
            )}
          </div>

          <div className="text-[11px] font-mono text-slate-400 shrink-0">
            <span>Use Left/Right arrows or swipe to navigate</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
