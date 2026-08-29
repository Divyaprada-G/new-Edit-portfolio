import React, { useState } from 'react';
import { Maximize2, Sparkles, Image as ImageIcon, AlertCircle } from 'lucide-react';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  isBadge?: boolean;
  priority?: boolean; // If true, eager loading
  onClick?: () => void;
  showHoverHint?: boolean;
  maxHeight?: string; // e.g. 'max-h-96' or 'max-h-[480px]'
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  caption,
  className = '',
  imageClassName = '',
  isBadge = false,
  priority = false,
  onClick,
  showHoverHint = true,
  maxHeight = 'max-h-[500px]'
}) => {
  const [orientation, setOrientation] = useState<'PORTRAIT' | 'LANDSCAPE' | 'SQUARE' | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width && height) {
      setAspectRatio(width / height);
      if (height > width * 1.1) {
        setOrientation('PORTRAIT');
      } else if (width > height * 1.1) {
        setOrientation('LANDSCAPE');
      } else {
        setOrientation('SQUARE');
      }
    }
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  return (
    <div
      onClick={onClick}
      className={`relative group rounded-2xl overflow-hidden bg-[#0A0E1A] border border-[#1E293B] transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/10' : ''
      } ${
        orientation === 'PORTRAIT'
          ? 'image--portrait'
          : orientation === 'LANDSCAPE'
          ? 'image--landscape'
          : orientation === 'SQUARE'
          ? 'image--square'
          : ''
      } ${className}`}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="w-full min-h-[220px] h-full flex flex-col items-center justify-center bg-slate-900/60 animate-pulse text-slate-500 text-xs font-mono p-6">
          <ImageIcon className="w-6 h-6 text-purple-400/40 animate-bounce mb-2" />
          <span>LOADING PHOTOGRAPH...</span>
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="w-full min-h-[200px] flex flex-col items-center justify-center bg-[#0D1322] text-slate-400 p-6 text-center space-y-2 border border-slate-800">
          <AlertCircle className="w-6 h-6 text-purple-400/60" />
          <div className="text-xs font-mono text-purple-300 font-semibold">
            IMAGE ARCHIVE ENTRY
          </div>
          <p className="text-[11px] text-slate-400 max-w-xs">
            {alt || 'Archival record preserved in portfolio.'}
          </p>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          {/* Main Visual with strict aspect-ratio & zero-crop preservation */}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={handleImageLoad}
            onError={handleImageError}
            referrerPolicy="no-referrer"
            className={`w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.02] ${maxHeight} ${
              isBadge ? 'p-2 sm:p-4 bg-[#080C14]' : ''
            } ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
          />
        </div>
      )}

      {/* Floating Hover Indicator */}
      {onClick && showHoverHint && isLoaded && !hasError && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0D1322]/90 text-purple-300 border border-purple-500/40 shadow-lg flex items-center gap-1 backdrop-blur-md">
            <Maximize2 className="w-3 h-3 text-purple-400" />
            <span>OPEN PHOTO</span>
          </span>
        </div>
      )}

      {/* Badge / Credential Tag Pill */}
      {isBadge && isLoaded && !hasError && (
        <div className="absolute bottom-3 left-3 pointer-events-none z-10">
          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-black/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            OFFICIAL BADGE / CREDENTIAL
          </span>
        </div>
      )}

      {/* Caption Preview If Supplied */}
      {caption && (
        <div className="p-3 bg-[#080C14] border-t border-slate-800/80 text-[11px] font-sans text-slate-300 leading-snug">
          {caption}
        </div>
      )}
    </div>
  );
};
