import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export const AudioControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    const a = new Audio('/music.mp3');
    a.loop = true;
    return a;
  });

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(e => console.error("Error playing audio:", e));
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <motion.button
      id="music-toggle-btn"
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#242222] border border-[#B49A72]/40 shadow-lg backdrop-blur-md transition-all duration-300 group cursor-pointer"
    >
      {/* Musical Note Icon ♪ */}
      <span className="font-serif text-base text-[#B49A72] font-semibold leading-none select-none">
        ♪
      </span>

      {/* Animated Equalizer bars when playing */}
      {isPlaying ? (
        <div className="flex items-end space-x-0.5 h-3.5 px-0.5">
          <span className="w-0.5 bg-[#B49A72] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2"></span>
          <span className="w-0.5 bg-[#B49A72] rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-3.5"></span>
          <span className="w-0.5 bg-[#B49A72] rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-1.5"></span>
        </div>
      ) : (
        <span className="text-[11px] font-sans tracking-wider uppercase text-[#77716D] group-hover:text-[#242222] transition-colors">
          Music
        </span>
      )}

      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-[#B49A72]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-[#77716D] opacity-60" />
      )}
    </motion.button>
  );
};
