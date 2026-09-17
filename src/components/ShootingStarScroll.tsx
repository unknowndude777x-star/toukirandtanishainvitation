import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import { Star } from 'lucide-react';

export const ShootingStarScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for the envelope to finish fading
    const scrollTimeout = setTimeout(() => {
      // Smooth manual scroll that matches the star's slow fall
      animate(window.scrollY, window.innerHeight * 0.9, {
        duration: 5,
        ease: "easeInOut",
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        }
      });
    }, 800);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ left: '110%', top: '-20%', scale: 0.5, opacity: 0 }}
            animate={{
              left: '-20%',
              top: '110%',
              scale: [0.5, 2, 2.5, 1],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ 
              filter: 'drop-shadow(0 0 25px rgba(212,175,55,1))',
            }}
          >
            {/* Glowing Trail (angled to follow the trajectory roughly) */}
            <div 
              className="absolute right-4 w-[600px] h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#F7F3EE] rounded-full blur-[2px]" 
              style={{ transform: 'rotate(35deg)', transformOrigin: 'right center' }}
            />
            
            {/* Main Star */}
            <Star size={64} fill="#F7F3EE" stroke="#D4AF37" strokeWidth={1.5} className="relative z-10 animate-pulse" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
