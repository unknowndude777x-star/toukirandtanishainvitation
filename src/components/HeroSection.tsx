import React from 'react';
import { motion } from 'motion/react';
import { BismillahCalligraphy, ArabesqueCorner, ArchSilhouette, StarEightPoint } from './IslamicOrnaments';
import { weddingData } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero-wedding-announcement"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between px-6 py-12 sm:py-16 paper-texture overflow-hidden border-b border-[#B49A72]/20"
    >
      {/* Background Architectural Subtle Arch Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <ArchSilhouette className="w-[320px] sm:w-[480px] md:w-[600px] h-auto max-h-[85vh]" />
      </div>

      {/* Elegant Arabesque Frame Corners */}
      <ArabesqueCorner position="top-left" className="absolute top-4 left-4 sm:top-8 sm:left-8 text-[#B49A72]/50" />
      <ArabesqueCorner position="top-right" className="absolute top-4 right-4 sm:top-8 sm:right-8 text-[#B49A72]/50" />
      <ArabesqueCorner position="bottom-left" className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-[#B49A72]/50" />
      <ArabesqueCorner position="bottom-right" className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-[#B49A72]/50" />

      {/* Top Header: Bismillah Calligraphy */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 pt-4"
      >
        <BismillahCalligraphy className="text-[#B49A72]" />
      </motion.div>

      {/* Main Announcement Card / Content */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        className="relative z-10 max-w-2xl mx-auto text-center my-auto py-8 sm:py-12 flex flex-col items-center"
      >
        <p className="font-sans text-xs sm:text-sm tracking-[0.28em] text-[#77716D] uppercase mb-4">
          Together with their families
        </p>

        {/* Main Focal Point: The Couple's Names and Lineage */}
        <div className="relative py-3 flex flex-col items-center">
          {/* Groom */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#242222] tracking-wide leading-[1.15]">
            {weddingData.groomName}
          </h1>
          <p className="text-[11px] sm:text-xs text-[#77716D]/80 font-sans tracking-wider mt-2 mb-2 text-center uppercase">
            {weddingData.groomFamily}
          </p>

          {/* Divider */}
          <div className="my-4 sm:my-6 flex items-center justify-center space-x-4">
            <span className="w-12 sm:w-16 h-[0.5px] bg-gradient-to-r from-transparent to-[#B49A72]"></span>
            <span className="font-serif italic text-2xl sm:text-3xl text-[#B49A72]">&amp;</span>
            <span className="w-12 sm:w-16 h-[0.5px] bg-gradient-to-l from-transparent to-[#B49A72]"></span>
          </div>

          {/* Bride */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#242222] tracking-wide leading-[1.15]">
            {weddingData.brideName}
          </h2>
          <p className="text-[11px] sm:text-xs text-[#77716D]/80 font-sans tracking-wider mt-2 mb-2 text-center uppercase">
            {weddingData.brideFamily}
          </p>
        </div>

        {/* The Invitation Line */}
        <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#3F4635] uppercase font-medium mt-6 mb-4">
          invite you to celebrate their Wedding Reception
        </p>

        {/* Date, Time & Venue */}
        <div className="mt-2 flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-3 mb-1">
            <StarEightPoint size={14} className="text-[#B49A72]" />
            <p className="font-serif text-lg sm:text-2xl text-[#242222] font-bold tracking-wide">
              {weddingData.weddingDate}
            </p>
            <StarEightPoint size={14} className="text-[#B49A72]" />
          </div>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans tracking-widest text-[#77716D] uppercase">
            <span className="font-bold">{weddingData.weddingTime}</span>
            <span className="text-[#B49A72]">·</span>
            <span className="font-serif italic lowercase tracking-normal text-sm font-bold">insha&apos;Allah</span>
          </div>
          <p className="font-serif text-base sm:text-lg text-[#3F4635] italic font-bold tracking-wide mt-2">
            {weddingData.venue}
          </p>
          <p className="font-sans text-[10px] sm:text-xs text-[#77716D] font-bold mt-1 max-w-xs text-center uppercase tracking-widest">
            {weddingData.address}
          </p>
        </div>
      </motion.div>

      {/* Bottom Cue: Scroll to Explore */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 flex flex-col items-center select-none pt-4"
      >
        <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#77716D]/80">
          <span>Scroll to explore</span>
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="mt-1"
        >
          <ChevronDown className="w-4 h-4 text-[#B49A72]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
