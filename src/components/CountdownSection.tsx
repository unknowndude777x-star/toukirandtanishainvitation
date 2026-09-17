import React, { useState, useEffect } from 'react';
import { weddingData } from '../data/weddingData';
import { StarEightPoint } from './IslamicOrnaments';
import { ScrollReveal } from './ScrollReveal';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(weddingData.countdownDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPast: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section 
      id="countdown"
      className="relative py-14 sm:py-20 px-6 max-w-2xl mx-auto text-center"
    >
      <ScrollReveal delayMs={100} distance={24} durationMs={850}>
        {/* Subtle Rosette */}
        <div className="inline-flex items-center space-x-2 justify-center mb-3">
          <span className="w-5 h-[0.5px] bg-[#B49A72]/60"></span>
          <StarEightPoint size={12} className="text-[#B49A72]" />
          <span className="w-5 h-[0.5px] bg-[#B49A72]/60"></span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-[#242222] font-normal tracking-[0.2em] uppercase">
          Until Our Celebration
        </h3>

        {/* Real-time Units */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6">
          {timeUnits.map((unit, idx) => (
            <React.Fragment key={unit.label}>
              <div className="flex flex-col items-center min-w-[58px] sm:min-w-[76px]">
                <div className="w-14 h-16 sm:w-18 sm:h-20 rounded bg-[#FAF7F2] border border-[#B49A72]/30 shadow-sm flex items-center justify-center">
                  <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-light">
                    {unit.value}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] text-[#77716D] uppercase mt-2">
                  {unit.label}
                </span>
              </div>
              {idx < timeUnits.length - 1 && (
                <span className="font-serif text-[#B49A72] text-xl -mt-6 opacity-60">:</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
