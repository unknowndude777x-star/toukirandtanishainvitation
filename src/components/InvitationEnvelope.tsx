import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WaxSeal } from './WaxSeal';
import { BismillahCalligraphy, ArabesqueCorner, StarEightPoint } from './IslamicOrnaments';
import { weddingData } from '../data/weddingData';
import { Sparkles, ChevronDown } from 'lucide-react';

interface InvitationEnvelopeProps {
  onCompleteOpen: () => void;
}

type AnimationStep = 'idle' | 'breaking' | 'flap-opening' | 'card-sliding' | 'zooming' | 'completed';

export const InvitationEnvelope: React.FC<InvitationEnvelopeProps> = ({ onCompleteOpen }) => {
  const [step, setStep] = useState<AnimationStep>('idle');
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button gently after 1 second
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (step !== 'idle') return;

    setStep('breaking');

    // Sequence timing
    setTimeout(() => {
      setStep('flap-opening');
    }, 600);

    setTimeout(() => {
      setStep('card-sliding');
    }, 1400);

    setTimeout(() => {
      setStep('zooming');
    }, 2500);

    setTimeout(() => {
      setStep('completed');
      onCompleteOpen();
    }, 3600);
  };

  const handleSkip = () => {
    setStep('completed');
    onCompleteOpen();
  };

  return (
    <div 
      id="digital-invitation-container"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#F7F3EE] select-none"
      style={{ perspective: 1400 }}
    >
      {/* Ambient background lighting and luxury vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-[#F7F3EE]/50 via-[#E5D8C8]/30 to-[#F7F3EE] pointer-events-none" />

      {/* Subtle floating ambient dust/stars for cinematic atmosphere */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B49A72_1px,transparent_1px)] [background-size:32px_32px]" />



      {/* Main Physical Envelope & Card Stage */}
      <motion.div
        className="relative w-[92vw] max-w-[560px] aspect-[1.45/1] sm:max-w-[600px] cursor-pointer"
        onClick={step === 'idle' ? handleOpen : undefined}
        animate={
          step === 'zooming'
            ? { scale: 2.2, opacity: 0, y: 120 }
            : step === 'completed'
            ? { opacity: 0, pointerEvents: 'none' }
            : { scale: 1, opacity: 1, y: 0 }
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Envelope Back Layer (Ivory lining matching the UI) */}
        <div 
          className="absolute inset-0 rounded-lg bg-[#F7F3EE] shadow-2xl border border-[#B49A72]/20"
          style={{
            backgroundImage: "radial-gradient(#E5D8C8 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* The Sliding Inner Invitation Card */}
        <motion.div
          className="absolute inset-[3%] z-20 rounded-md bg-[#F7F3EE] paper-texture shadow-invitation border border-[#B49A72]/30 flex flex-col items-center justify-between p-4 sm:p-6 text-center"
          initial={false}
          animate={
            step === 'card-sliding' || step === 'zooming'
              ? { y: -160, scale: 1.05, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }
              : { y: 0, scale: 1 }
          }
        >
          {/* Subtle Arabesque Corners on Invitation Card */}
          <ArabesqueCorner position="top-left" className="absolute top-2 left-2 text-[#B49A72]/60" />
          <ArabesqueCorner position="top-right" className="absolute top-2 right-2 text-[#B49A72]/60" />
          <ArabesqueCorner position="bottom-left" className="absolute bottom-2 left-2 text-[#B49A72]/60" />
          <ArabesqueCorner position="bottom-right" className="absolute bottom-2 right-2 text-[#B49A72]/60" />

          {/* Inner hairline gold frame */}
          <div className="absolute inset-3 border border-[#B49A72]/25 pointer-events-none rounded-sm"></div>

          <div className="relative pt-2 sm:pt-4 z-10 scale-90 sm:scale-100">
            <BismillahCalligraphy className="text-[#B49A72]" />
            <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-[#77716D] uppercase mt-3 sm:mt-4">
              You are cordially invited
            </p>
          </div>

          {/* Middle: Couple Names in Cormorant Garamond Serif */}
          <div className="relative my-auto py-1 z-10 w-full flex flex-col items-center justify-center space-y-1 sm:space-y-2">
            <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-normal tracking-wide leading-none">
              {weddingData.groomName.split(' ')[0]}
            </div>

            <div className="flex items-center justify-center">
              <span className="font-serif italic text-base sm:text-lg text-[#B49A72]">&amp;</span>
            </div>

            <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-normal tracking-wide leading-none">
              {weddingData.brideName.split(' ')[0]}
            </div>
          </div>
          
          <div className="relative z-10">
            <p className="font-sans text-[9px] sm:text-[10px] tracking-wider text-[#3F4635] mb-2 sm:mb-4 font-medium uppercase">
              To Celebrate Their Wedding Reception
            </p>
          </div>

          {/* Bottom: Date & Tap To Open Cue */}
          <div className="relative pb-1 sm:pb-2 z-10 w-full flex flex-col items-center">
            <p className="font-serif text-xs sm:text-sm text-[#77716D] tracking-widest uppercase">
              {weddingData.weddingDate}
            </p>

            {/* Tap To Open Indicator */}
            {step === 'idle' && (
              <motion.div 
                className="mt-2 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#E5D8C8]/40 border border-[#B49A72]/30 text-[#B49A72]"
                animate={{ y: [0, -3, 0], opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <Sparkles className="w-3 h-3 text-[#B49A72]" />
                <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-semibold">
                  Tap To Open
                </span>
                <ChevronDown className="w-3 h-3 text-[#B49A72]" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Envelope Pocket Front Layer (covers lower half of card before opening) */}
        <div 
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            clipPath: 'polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%)',
            backgroundColor: '#FAF7F2',
            boxShadow: '0 -4px 14px rgba(36, 34, 34, 0.12)',
          }}
        >
          {/* Envelope seams mimicking folded side and bottom flaps */}
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Top pocket edge */}
            <path
              d="M0,0 L50,65 L100,0"
              stroke="#E5D8C8"
              strokeWidth="1.2"
              strokeOpacity="0.8"
              fill="none"
            />
            {/* Bottom diagonal seams */}
            <path
              d="M0,100 L50,65 L100,100"
              stroke="#E5D8C8"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              fill="none"
            />
          </svg>

          {/* Elegant Gold Script at bottom */}
          <div className="absolute bottom-6 w-full flex justify-center opacity-80">
            <span className="font-serif italic text-[#B49A72] text-xl sm:text-2xl" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.8)' }}>
              Invitation
            </span>
          </div>
        </div>

        {/* Envelope Top Flap (Triangular flap that flips open upwards) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[68%] z-40 origin-top"
          style={{
            transformStyle: 'preserve-3d',
          }}
          initial={{ rotateX: 0 }}
          animate={
            step === 'flap-opening' || step === 'card-sliding' || step === 'zooming'
              ? { rotateX: 180, zIndex: 10 }
              : { rotateX: 0, zIndex: 40 }
          }
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Triangular flap outer face - Gold Foil Textured */}
          <div 
            className="w-full h-full overflow-hidden"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 53% 96%, 47% 96%)',
              backgroundColor: '#B49A72',
              backgroundImage: 'url(/gold-foil.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'drop-shadow(0 8px 16px rgba(36, 34, 34, 0.35))',
            }}
          >
            {/* Dark gradient overlay to give it a rich embossed look */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none mix-blend-overlay"></div>
            
            {/* Fine flap border */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M1,0 L47,96 L53,96 L99,0"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                fill="none"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' }}
              />
            </svg>
          </div>
        </motion.div>

        {/* The Antique Champagne Gold Wax Seal (Attached at the apex of the flap) */}
        <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <WaxSeal
            isBreaking={step !== 'idle'}
            onClick={step === 'idle' ? handleOpen : undefined}
            initials="T & T"
          />
        </div>

        {/* Subtle breathing golden pulse around the card during idle */}
        {step === 'idle' && (
          <motion.div
            className="absolute -inset-2 rounded-xl border border-[#B49A72]/20 pointer-events-none"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.99, 1.01, 0.99] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
        )}
      </motion.div>

      {/* Bottom Hint on Mobile */}
      {step === 'idle' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 text-center text-xs tracking-widest text-[#242222]/60 uppercase font-sans pointer-events-none"
        >
          An invitation from Toukir &amp; Tanisha
        </motion.p>
      )}
    </div>
  );
};
