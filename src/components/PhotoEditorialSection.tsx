import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { StarEightPoint } from './IslamicOrnaments';
import { PhotoLightbox } from './PhotoLightbox';
import { ScrollReveal } from './ScrollReveal';
import { Maximize2 } from 'lucide-react';

export const PhotoEditorialSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const images = weddingData.galleryImages;

  return (
    <section 
      id="photo-editorial"
      className="relative py-16 sm:py-24 px-6 max-w-5xl mx-auto"
    >
      {/* Header with Intersection Observer */}
      <ScrollReveal delayMs={100} distance={28}>
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 justify-center mb-2">
            <span className="w-6 h-[0.5px] bg-[#B49A72]"></span>
            <StarEightPoint size={14} className="text-[#B49A72]" />
            <span className="w-6 h-[0.5px] bg-[#B49A72]"></span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-normal tracking-wide uppercase">
            Moments &amp; Memories
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#77716D] mt-2">
            A glimpse into our quiet cherished chapters
          </p>
        </div>
      </ScrollReveal>

      {/* Editorial Luxury Album Layout: Asymmetrical & Overlapping */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Main Large Photograph (left column, span 7) */}
        <div className="md:col-span-7">
          <ScrollReveal delayMs={200} distance={36}>
            <div 
              onClick={() => setSelectedPhotoIndex(0)}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-2.5 sm:-inset-3 border border-[#B49A72]/30 pointer-events-none transition-all duration-500 group-hover:border-[#B49A72]/70" />
              <div className="relative overflow-hidden aspect-[4/5] bg-[#E5D8C8] shadow-md">
                <img 
                  src={images[0].url} 
                  alt={images[0].alt}
                  className="w-full h-full object-cover filter saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#242222]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-[#FAF7F2]/90 text-[#242222]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <p className="font-serif italic text-xs text-[#77716D] mt-3 text-center sm:text-left">
                {images[0].caption}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Stack: Two smaller staggered photographs (span 5) */}
        <div className="md:col-span-5 flex flex-col space-y-8 sm:space-y-12 md:pt-8">
          {/* Second Photo (landscape / stationery) */}
          {images[1] && (
            <ScrollReveal delayMs={350} distance={32}>
              <div 
                onClick={() => setSelectedPhotoIndex(1)}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-2 border border-[#B49A72]/30 pointer-events-none transition-all duration-500 group-hover:border-[#B49A72]/70" />
                <div className="relative overflow-hidden aspect-[4/3] bg-[#E5D8C8] shadow-md">
                  <img 
                    src={images[1].url} 
                    alt={images[1].alt}
                    className="w-full h-full object-cover filter saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#242222]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-[#FAF7F2]/90 text-[#242222]">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <p className="font-serif italic text-xs text-[#77716D] mt-2.5 text-center sm:text-left">
                  {images[1].caption}
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* Third Photo (portrait details) */}
          {images[2] && (
            <ScrollReveal delayMs={450} distance={32}>
              <div 
                onClick={() => setSelectedPhotoIndex(2)}
                className="relative group cursor-pointer md:-ml-8 z-10"
              >
                <div className="absolute -inset-2 border border-[#B49A72]/30 pointer-events-none transition-all duration-500 group-hover:border-[#B49A72]/70" />
                <div className="relative overflow-hidden aspect-[3/2] bg-[#E5D8C8] shadow-xl">
                  <img 
                    src={images[2].url} 
                    alt={images[2].alt}
                    className="w-full h-full object-cover filter saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#242222]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-[#FAF7F2]/90 text-[#242222]">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                <p className="font-serif italic text-xs text-[#77716D] mt-2.5 text-center sm:text-left">
                  {images[2].caption}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Fourth Photo: Optional serene architectural frame below */}
      {images[3] && (
        <div className="mt-12 max-w-xl mx-auto">
          <ScrollReveal delayMs={250} distance={32}>
            <div 
              onClick={() => setSelectedPhotoIndex(3)}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-2.5 border border-[#B49A72]/30 pointer-events-none transition-all duration-500 group-hover:border-[#B49A72]/70" />
              <div className="relative overflow-hidden aspect-[16/9] bg-[#E5D8C8] shadow-md">
                <img 
                  src={images[3].url} 
                  alt={images[3].alt}
                  className="w-full h-full object-cover filter saturate-[0.88] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#242222]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-[#FAF7F2]/90 text-[#242222]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              <p className="font-serif italic text-xs text-[#77716D] mt-2 text-center">
                {images[3].caption}
              </p>
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <PhotoLightbox 
        images={images}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(idx) => setSelectedPhotoIndex(idx)}
      />
    </section>
  );
};
