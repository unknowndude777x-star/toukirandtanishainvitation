import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

export const ShootingStarScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Small delay to wait for envelope to fade out before starting
    const scrollTimeout = setTimeout(() => {
      // Smoothly scroll down by the height of the screen to reveal the next section
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 600);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-[100] pointer-events-none flex items-center justify-center"
          initial={{ x: '100vw', y: '-20vh', scale: 0 }}
          animate={{
            x: '-20vw',
            y: '120vh',
            scale: [0, 1.5, 2, 0.5],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration: 2.2, ease: "easeIn" }}
          style={{ 
            filter: 'drop-shadow(0 0 20px rgba(212,175,55,1))',
            transformOrigin: 'center'
          }}
        >
          {/* Glowing Trail */}
          <div className="absolute right-4 w-[400px] h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#F7F3EE] rounded-full blur-[1px]" />
          
          {/* Main Star */}
          <Star size={36} fill="#F7F3EE" stroke="#D4AF37" strokeWidth={1} className="relative z-10 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
