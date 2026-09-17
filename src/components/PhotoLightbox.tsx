import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoLightboxProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption: string;
  }>;
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentPhoto = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#242222]/95 backdrop-blur-md p-4 select-none"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-6 right-6 z-50 p-2 text-[#FAF7F2]/80 hover:text-[#FAF7F2] border border-[#B49A72]/30 hover:border-[#B49A72] rounded-full transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          aria-label="Previous Photo"
          className="absolute left-4 sm:left-8 z-50 p-2 text-[#FAF7F2]/70 hover:text-[#FAF7F2] hover:bg-[#FAF7F2]/10 rounded-full transition-all"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          aria-label="Next Photo"
          className="absolute right-4 sm:right-8 z-50 p-2 text-[#FAF7F2]/70 hover:text-[#FAF7F2] hover:bg-[#FAF7F2]/10 rounded-full transition-all"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Active Photograph Container */}
        <div 
          className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative border-4 sm:border-8 border-[#FAF7F2] bg-[#FAF7F2] shadow-2xl rounded-sm overflow-hidden"
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              className="max-h-[70vh] w-auto object-contain rounded-sm"
            />
          </motion.div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="font-serif italic text-[#FAF7F2]/90 text-sm sm:text-base">
              {currentPhoto.caption}
            </p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B49A72] mt-1">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
