import { useEffect } from 'react';
import { animate } from 'motion/react';

export const ShootingStarScroll = () => {
  useEffect(() => {
    // Wait for the envelope to finish fading
    const scrollTimeout = setTimeout(() => {
      // Smooth manual scroll down to reveal the page
      animate(window.scrollY, window.innerHeight * 0.9, {
        duration: 5,
        ease: "easeInOut",
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        }
      });
    }, 800);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
};
