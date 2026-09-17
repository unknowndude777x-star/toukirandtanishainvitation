import React from 'react';

/**
 * High-craft SVG ornaments representing Islamic stationery aesthetics:
 * Subtle geometric rosettes, elegant arch silhouettes, arabesque flourishes,
 * and minimal luxury dividers.
 */

export const BismillahCalligraphy: React.FC<{ className?: string }> = ({ className = "text-[#B49A72]" }) => {
  return (
    <div className={`text-center select-none ${className}`}>
      <span 
        className="font-arabic text-2xl sm:text-3xl md:text-4xl tracking-wide leading-relaxed block transition-all duration-700"
        dir="rtl"
        lang="ar"
      >
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </span>
      <div className="flex items-center justify-center space-x-2 mt-2 opacity-60">
        <span className="h-[0.5px] w-8 bg-[#B49A72]"></span>
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B49A72]"></span>
        <span className="h-[0.5px] w-8 bg-[#B49A72]"></span>
      </div>
    </div>
  );
};

export const ArabesqueCorner: React.FC<{ 
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "text-[#B49A72]" }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <svg 
      className={`w-10 h-10 sm:w-14 sm:h-14 ${rotation} ${className} pointer-events-none transition-opacity duration-500`} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M2 2V36C2 36 6 24 16 16C26 8 36 2 36 2H2Z" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeOpacity="0.45"
      />
      <path 
        d="M2 2H22C22 2 17 6 12 12C6 17 2 22 2 22V2Z" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeOpacity="0.65"
      />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" fillOpacity="0.75" />
      <path 
        d="M16 4C16 10 10 16 4 16" 
        stroke="currentColor" 
        strokeWidth="0.6" 
        strokeDasharray="1.5 2"
        strokeOpacity="0.5"
      />
      <path
        d="M2 58V2H58"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.3"
      />
    </svg>
  );
};

export const StarEightPoint: React.FC<{ className?: string; size?: number }> = ({ 
  className = "text-[#B49A72]", 
  size = 24 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 8-point star (Khatam) formed by two overlapping 45-deg rotated squares */}
      <rect x="7" y="7" width="26" height="26" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
      <rect 
        x="7" 
        y="7" 
        width="26" 
        height="26" 
        transform="rotate(45 20 20)" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeOpacity="0.7" 
        fill="none" 
      />
      <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.85" />
      <circle cx="20" cy="20" r="1" fill="currentColor" />
    </svg>
  );
};

export const LuxuryDivider: React.FC<{ className?: string }> = ({ className = "my-8" }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 select-none ${className}`}>
      <div className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#B49A72]/40 to-[#B49A72]/80"></div>
      <StarEightPoint size={18} className="text-[#B49A72]" />
      <div className="h-[0.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#B49A72]/40 to-[#B49A72]/80"></div>
    </div>
  );
};

export const ArchSilhouette: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 200 280" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Traditional multi-foil pointed arch silhouette */}
      <path 
        d="M10 280V120C10 70 50 20 100 10C150 20 190 70 190 120V280" 
        stroke="#B49A72" 
        strokeWidth="0.8" 
        strokeOpacity="0.35"
      />
      <path 
        d="M18 280V122C18 76 54 30 100 20C146 30 182 76 182 122V280" 
        stroke="#B49A72" 
        strokeWidth="0.5" 
        strokeDasharray="2 3"
        strokeOpacity="0.25"
      />
      {/* Crest finial */}
      <circle cx="100" cy="8" r="2.5" fill="#B49A72" fillOpacity="0.5" />
    </svg>
  );
};
