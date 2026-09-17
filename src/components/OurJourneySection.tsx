import React from 'react';
import { weddingData } from '../data/weddingData';
import { LuxuryDivider, ArchSilhouette } from './IslamicOrnaments';
import { ScrollReveal } from './ScrollReveal';

export const OurJourneySection: React.FC = () => {
  return (
    <section 
      id="our-journey"
      className="relative py-16 sm:py-24 px-6 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Section Eyebrow Header animated via Intersection Observer */}
      <ScrollReveal delayMs={100} distance={28}>
        <div className="text-center mb-10 sm:mb-14 relative z-10">
          <LuxuryDivider className="mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-normal tracking-wide uppercase">
            Our Journey
          </h2>
        </div>
      </ScrollReveal>

      {/* Editorial Split / Compact Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        {/* Editorial Photograph */}
        <div className="md:col-span-6 relative">
          <ScrollReveal delayMs={250} distance={36}>
            <div className="relative group">
              {/* Subtle Outer Stationery Mat Border */}
              <div className="absolute -inset-2.5 sm:-inset-3 border border-[#B49A72]/30 rounded-sm pointer-events-none transition-all duration-500 group-hover:border-[#B49A72]/60" />
              
              <div className="relative overflow-hidden rounded-sm aspect-[4/5] shadow-lg bg-[#E5D8C8]">
                <img 
                  src={weddingData.galleryImages[0].url} 
                  alt={weddingData.galleryImages[0].alt}
                  className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.02] transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Soft Warm Filter Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#242222]/30 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Story Text & Quranic Reflection */}
        <div className="md:col-span-6 relative">
          {/* Subtle watermark arch behind text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
            <ArchSilhouette className="w-[300px] h-auto" />
          </div>
          
          <ScrollReveal delayMs={400} distance={36}>
            <div className="flex flex-col justify-center text-center md:text-left space-y-6 relative z-10">
              {/* Arabic Verse Inscription */}
              <div className="text-[#B49A72] border-b border-[#B49A72]/20 pb-4 text-center md:text-left">
                <p className="font-arabic text-xl sm:text-2xl leading-relaxed" dir="rtl">
                  {weddingData.quranicVerses.pairVerseArabic}
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-[#77716D] mt-1">
                  {weddingData.quranicVerses.pairVerseEnglish}
                </p>
              </div>

              {/* The Story */}
              <p className="font-serif text-lg sm:text-xl text-[#242222] leading-relaxed font-light italic">
                &ldquo;{weddingData.shortStory}&rdquo;
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#77716D] tracking-wide leading-relaxed font-light">
                With gratitude for the paths that led us here and sincere prayers for our future in obedience to Allah, we warmly request your presence and duas as we take our solemn vows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
