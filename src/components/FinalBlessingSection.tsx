import React from 'react';
import { weddingData } from '../data/weddingData';
import { StarEightPoint, ArabesqueCorner } from './IslamicOrnaments';
import { ScrollReveal } from './ScrollReveal';

export const FinalBlessingSection: React.FC = () => {

  return (
    <footer 
      id="final-blessing"
      className="relative py-20 sm:py-28 px-6 border-t border-[#B49A72]/25 overflow-hidden text-center"
    >
      {/* Corner Ornaments */}
      <ArabesqueCorner position="top-left" className="absolute top-4 left-4 text-[#B49A72]/40" />
      <ArabesqueCorner position="top-right" className="absolute top-4 right-4 text-[#B49A72]/40" />

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Arabic Quranic Verse with Intersection Observer */}
        <ScrollReveal delayMs={100} distance={24}>
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 justify-center mb-4">
              <span className="w-8 h-[0.5px] bg-[#B49A72]/50"></span>
              <StarEightPoint size={16} className="text-[#B49A72]" />
              <span className="w-8 h-[0.5px] bg-[#B49A72]/50"></span>
            </div>

            <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#242222] leading-loose mb-2" dir="rtl">
              {weddingData.quranicVerses.pairVerseArabic}
            </p>

            <p className="font-serif italic text-base sm:text-lg text-[#77716D]">
              {weddingData.quranicVerses.pairVerseEnglish}
            </p>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B49A72] block mt-1">
              {weddingData.quranicVerses.pairVerseReference}
            </span>
          </div>
        </ScrollReveal>

        {/* Couple Names & Date */}
        <ScrollReveal delayMs={250} distance={24}>
          <div className="my-4">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242222] font-normal">
              {weddingData.groomName} &amp; {weddingData.brideName}
            </h3>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#77716D] mt-3">
              {weddingData.weddingDate}
            </p>
          </div>
        </ScrollReveal>

        {/* Du'a & Blessing */}
        <ScrollReveal delayMs={380} distance={24}>
          <div className="my-8 max-w-lg">
            <p className="font-serif italic text-lg sm:text-xl text-[#3F4635] leading-relaxed">
              &ldquo;{weddingData.finalMessage}&rdquo;
            </p>
            
            <div className="mt-6 flex flex-col items-center">
              <span className="font-serif italic text-sm text-[#77716D]">With love,</span>
              <span className="font-serif text-base text-[#242222] tracking-wider mt-1">
                {weddingData.groomName} &amp; {weddingData.brideName}
              </span>
            </div>
          </div>
        </ScrollReveal>



        <p className="text-[10px] text-[#77716D]/70 font-sans tracking-widest uppercase mt-12 select-none">
          Alhamdulillah · All Praise is Due to Allah
        </p>
      </div>
    </footer>
  );
};
