import React, { useState } from 'react';
import { ResponsiveImage } from './ResponsiveImage';
import { PhotoLightbox, LightboxPhoto } from './PhotoLightbox';
import { Sparkles, Camera, Award } from 'lucide-react';
import { EventPhoto } from '../types';

interface SmartPhotoGalleryProps {
  images?: (string | EventPhoto)[];
  photos?: (string | EventPhoto)[]; // backward compatibility
  title?: string;
  category?: string;
  credentialMode?: boolean; // If true, treats as badges/certificates
  className?: string;
  onPhotoClick?: (index: number) => void;
}

export const SmartPhotoGallery: React.FC<SmartPhotoGalleryProps> = ({
  images,
  photos,
  title,
  category,
  credentialMode = false,
  className = '',
  onPhotoClick
}) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Normalize image data safely
  const rawList: (string | EventPhoto)[] = Array.isArray(images) && images.length > 0
    ? images
    : Array.isArray(photos)
    ? photos
    : [];

  if (!rawList || rawList.length === 0) {
    return null;
  }

  const normalizedPhotos: LightboxPhoto[] = rawList.map((img, idx) => {
    if (typeof img === 'string') {
      return {
        url: img,
        title: title,
        category: category,
        isBadge: credentialMode,
        caption: `Archival photograph 0${idx + 1} from ${title || 'technical event'}`
      };
    }
    return {
      url: img.url,
      caption: img.caption,
      title: title,
      category: category,
      isBadge: img.isBadge || credentialMode
    };
  });

  const count = normalizedPhotos.length;
  if (count === 0) return null;

  const openPhotoAt = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  // Format photo count label (e.g. "03 PHOTOS" or "01 PHOTO")
  const countLabel = count < 10 ? `0${count} PHOTO${count > 1 ? 'S' : ''}` : `${count} PHOTOS`;

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header Tag / Count Indicator */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
          {credentialMode ? <Award className="w-3.5 h-3.5" /> : <Camera className="w-3.5 h-3.5" />}
          <span>{credentialMode ? 'DOCUMENTED CREDENTIALS' : 'FIELD DOCUMENTATION'}</span>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/40 text-purple-300 border border-purple-800/50">
          {countLabel}
        </span>
      </div>

      {/* 1 IMAGE LAYOUT */}
      {count === 1 && (
        <div className="w-full">
          <ResponsiveImage
            src={normalizedPhotos[0].url}
            alt={normalizedPhotos[0].caption || title || 'Documentary Image'}
            caption={normalizedPhotos[0].caption}
            isBadge={normalizedPhotos[0].isBadge}
            onClick={() => openPhotoAt(0)}
            maxHeight={credentialMode ? 'max-h-[380px]' : 'max-h-[460px]'}
          />
        </div>
      )}

      {/* 2 IMAGES LAYOUT */}
      {count === 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {normalizedPhotos.map((photo, idx) => (
            <ResponsiveImage
              key={idx}
              src={photo.url}
              alt={photo.caption || `${title} - Photo 0${idx + 1}`}
              caption={photo.caption}
              isBadge={photo.isBadge}
              onClick={() => openPhotoAt(idx)}
              maxHeight={credentialMode ? 'max-h-[320px]' : 'max-h-[380px]'}
            />
          ))}
        </div>
      )}

      {/* 3 IMAGES COMPOSITION LAYOUT */}
      {count === 3 && (
        <div className="space-y-4">
          {/* Main Primary Image */}
          <div className="w-full">
            <ResponsiveImage
              src={normalizedPhotos[0].url}
              alt={normalizedPhotos[0].caption || `${title} - Lead Photo 01`}
              caption={normalizedPhotos[0].caption}
              isBadge={normalizedPhotos[0].isBadge}
              onClick={() => openPhotoAt(0)}
              maxHeight="max-h-[420px]"
            />
          </div>

          {/* Secondary 2-Grid Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ResponsiveImage
              src={normalizedPhotos[1].url}
              alt={normalizedPhotos[1].caption || `${title} - Photo 02`}
              caption={normalizedPhotos[1].caption}
              isBadge={normalizedPhotos[1].isBadge}
              onClick={() => openPhotoAt(1)}
              maxHeight="max-h-[320px]"
            />
            <ResponsiveImage
              src={normalizedPhotos[2].url}
              alt={normalizedPhotos[2].caption || `${title} - Photo 03`}
              caption={normalizedPhotos[2].caption}
              isBadge={normalizedPhotos[2].isBadge}
              onClick={() => openPhotoAt(2)}
              maxHeight="max-h-[320px]"
            />
          </div>
        </div>
      )}

      {/* 4+ IMAGES LAYOUT (FALLBACK) */}
      {count > 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {normalizedPhotos.map((photo, idx) => (
            <ResponsiveImage
              key={idx}
              src={photo.url}
              alt={photo.caption || `${title} - Photo 0${idx + 1}`}
              caption={photo.caption}
              isBadge={photo.isBadge}
              onClick={() => openPhotoAt(idx)}
              maxHeight="max-h-[300px]"
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <PhotoLightbox
        isOpen={lightboxOpen}
        photos={normalizedPhotos}
        currentIndex={activePhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </div>
  );
};
