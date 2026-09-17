import React from 'react';
import { motion } from 'motion/react';

interface WaxSealProps {
  isBreaking?: boolean;
  onClick?: () => void;
  initials?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ 
  isBreaking = false, 
  onClick,
  initials = "T & T"
}) => {
  return (
    <motion.div
      id="invitation-wax-seal"
      onClick={onClick}
      className="relative cursor-pointer group select-none rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isBreaking
          ? { scale: [1, 1.15, 0.6], opacity: [1, 0.9, 0], filter: "blur(4px)" }
          : { 
              boxShadow: [
                "0 4px 15px rgba(180, 154, 114, 0.35)", 
                "0 6px 22px rgba(180, 154, 114, 0.6)", 
                "0 4px 15px rgba(180, 154, 114, 0.35)"
              ] 
            }
      }
      transition={
        isBreaking 
          ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
          : { repeat: Infinity, duration: 3.2, ease: "easeInOut" }
      }
      style={{
        width: 80,
        height: 80,
      }}
    >
      {/* Outer organic wax puddle edge with natural imperfections */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          <radialGradient id="goldWaxGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F5E6CC" />
            <stop offset="35%" stopColor="#CBB696" />
            <stop offset="70%" stopColor="#A88B5E" />
            <stop offset="95%" stopColor="#7A6240" />
            <stop offset="100%" stopColor="#4A3A23" />
          </radialGradient>
          <filter id="waxTexture" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="textured" />
            <feBlend mode="multiply" in="textured" in2="SourceGraphic" result="base" />
            
            {/* 3D Bevel & Lighting Effect */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="20" lightingColor="#FFF5E0" result="specular">
              <fePointLight x="20" y="20" z="40" />
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
            
            <feMerge>
              <feMergeNode in="base" />
              <feMergeNode in="specular" />
            </feMerge>
          </filter>
        </defs>

        {/* Wax puddle with irregular contour */}
        <path
          d="M 50,4 
             C 65,3 82,14 89,28 
             C 96,42 98,62 88,77 
             C 78,92 60,98 44,96 
             C 28,94 12,87 6,71 
             C 0,55 5,34 16,21 
             C 27,8 35,5 50,4 Z"
          fill="url(#goldWaxGrad)"
          filter="url(#waxTexture)"
          className="transition-all duration-300 group-hover:brightness-105"
        />

        {/* Inner raised stamp ridge */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="#D4C3A3"
          strokeWidth="1.8"
          strokeOpacity="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#695635"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Delicate dotted inner stamp circle */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="#E2D0B4"
          strokeWidth="0.8"
          strokeDasharray="1.5 2.5"
          strokeOpacity="0.9"
        />
      </svg>

      {/* Center Embossed Floral Botanical Design */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          className="w-8 h-8 opacity-90 drop-shadow-[0_1px_1px_rgba(70,55,30,0.9)]"
          style={{ filter: "drop-shadow(0 1px 0.5px rgba(60, 45, 20, 0.8)) drop-shadow(0 -1px 0.5px rgba(255, 255, 255, 0.4))" }}
        >
          {/* Stem */}
          <path d="M50,45 Q50,70 45,85" fill="none" stroke="#FAF7F2" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M48,65 Q35,60 38,50 Q45,55 48,65" fill="none" stroke="#FAF7F2" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M50,70 Q65,65 62,55 Q55,60 50,70" fill="none" stroke="#FAF7F2" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Flower Petals */}
          <path d="M50,45 Q40,30 35,40 Q45,48 50,45 M50,45 Q45,25 50,20 Q55,25 50,45 M50,45 Q60,30 65,40 Q55,48 50,45" fill="none" stroke="#FAF7F2" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Flower Center */}
          <circle cx="50" cy="45" r="3" fill="#FAF7F2" />
        </svg>
      </div>

      {/* Subtle shine glint overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};
