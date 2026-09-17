/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { InvitationEnvelope } from './components/InvitationEnvelope';
import { HeroSection } from './components/HeroSection';
import { OurJourneySection } from './components/OurJourneySection';
import { NikahDetailsSection } from './components/NikahDetailsSection';
import { CountdownSection } from './components/CountdownSection';
import { CursorSparkles } from './components/CursorSparkles';
import { FinalBlessingSection } from './components/FinalBlessingSection';
import { weddingData } from './data/weddingData';


export default function App() {
  const [hasOpened, setHasOpened] = useState(false);

  // Scroll to top when opening card finishes
  const handleCompleteOpen = () => {
    setHasOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="relative min-h-screen bg-[#F7F3EE] text-[#242222] font-sans antialiased selection:bg-[#B49A72]/25 selection:text-[#242222]">
      {/* 1. Cinematic Opening Envelope Screen */}
      <AnimatePresence mode="wait">
        {!hasOpened && (
          <InvitationEnvelope key="envelope" onCompleteOpen={handleCompleteOpen} />
        )}
      </AnimatePresence>

      {/* 2. Main Digital Wedding Invitation Experience */}
      <main className={`relative transition-opacity duration-1000 ${hasOpened ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        {/* Thematic Background Pattern (very subtle, matched to theme) */}
        <div 
          className="fixed inset-0 opacity-20 pointer-events-none z-0 mix-blend-multiply animate-bg-pan"
          style={{
            backgroundImage: 'url(/islamic-pattern.jpg)',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        ></div>
        
        {/* Content Wrapper */}
        <div className="relative z-10">
        {/* Subtle Top Luxury Header */}


        {/* Hero Section */}
        <HeroSection />

        {/* Our Journey Section (Compact: 1 Photo + Story) */}
        <OurJourneySection />

        {/* Nikah Details (Clean Essential Wedding Info) */}
        <NikahDetailsSection />

        {/* Countdown to Nikah */}
        <CountdownSection />



        {/* Final Blessing & Sending Wishes */}
        <FinalBlessingSection />
        </div>
      </main>

      {/* Global Cursor Sparkles Effect */}
      <CursorSparkles />
    </div>
  );
}
