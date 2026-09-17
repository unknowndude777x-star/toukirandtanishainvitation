import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import { ArabesqueCorner, StarEightPoint, LuxuryDivider } from './IslamicOrnaments';
import { MapPin, Calendar, Clock, Navigation, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const NikahDetailsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generate Google Calendar Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    weddingData.calendarEvent.title
  )}&dates=${weddingData.calendarEvent.startDate}/${weddingData.calendarEvent.endDate}&details=${encodeURIComponent(
    weddingData.calendarEvent.description
  )}&location=${encodeURIComponent(weddingData.calendarEvent.location)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${weddingData.venue}, ${weddingData.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="nikah-details"
      className="relative py-16 sm:py-24 px-6 border-y border-[#B49A72]/20"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header with Intersection Observer */}
        <ScrollReveal delayMs={100} distance={28}>
          <div className="text-center mb-10 sm:mb-14">
            <LuxuryDivider className="mb-4" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#242222] font-normal tracking-wide uppercase">
              Wedding Reception
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#77716D] tracking-widest uppercase mt-2">
              Ceremony &amp; Celebration
            </p>
          </div>
        </ScrollReveal>

        {/* Central Luxury Stationery Card with Details */}
        <ScrollReveal delayMs={280} distance={40} durationMs={1050}>
          <div className="relative bg-[#F7F3EE] paper-texture rounded-sm border border-[#B49A72]/35 shadow-invitation p-8 sm:p-12 text-center overflow-hidden">
            {/* Arabesque Flourish Corners */}
            <ArabesqueCorner position="top-left" className="absolute top-2 left-2 text-[#B49A72]/40" />
            <ArabesqueCorner position="top-right" className="absolute top-2 right-2 text-[#B49A72]/40" />
            <ArabesqueCorner position="bottom-left" className="absolute bottom-2 left-2 text-[#B49A72]/40" />
            <ArabesqueCorner position="bottom-right" className="absolute bottom-2 right-2 text-[#B49A72]/40" />

            {/* Hairline Inner Frame */}
            <div className="absolute inset-2 sm:inset-3 border border-[#B49A72]/20 pointer-events-none rounded-sm"></div>

            {/* Event description note */}
            <p className="relative font-serif italic text-sm sm:text-base text-[#77716D] max-w-xl mx-auto mb-8">
              &ldquo;{weddingData.nikahDetails}&rdquo;
            </p>

            {/* Clean 3-Grid Information Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-y border-[#B49A72]/25 my-6">
              {/* When / Date */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#E5D8C8]/60 border border-[#B49A72]/40 flex items-center justify-center text-[#B49A72] mb-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#77716D] uppercase">
                  Date
                </span>
                <p className="font-serif text-lg text-[#242222] mt-1 font-medium">
                  {weddingData.weddingDate}
                </p>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#E5D8C8]/60 border border-[#B49A72]/40 flex items-center justify-center text-[#B49A72] mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#77716D] uppercase">
                  Time
                </span>
                <p className="font-serif text-lg text-[#242222] mt-1 font-medium">
                  {weddingData.weddingTime}
                </p>
              </div>

              {/* Venue & Location */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#E5D8C8]/60 border border-[#B49A72]/40 flex items-center justify-center text-[#B49A72] mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#77716D] uppercase">
                  Venue
                </span>
                <p className="font-serif text-lg text-[#242222] mt-1 font-medium">
                  {weddingData.venue}
                </p>
                <p className="font-sans text-xs text-[#77716D] mt-1 max-w-[200px] leading-relaxed">
                  {weddingData.address}
                </p>
              </div>
            </div>

            {/* Action Buttons: Minimal and Elegant */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-2">
              {/* Primary: View Location */}
              <a
                id="view-location-btn"
                href={weddingData.mapLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#242222] text-[#FAF7F2] hover:bg-[#3F4635] text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 shadow-md group"
              >
                <span>View Location</span>
                <Navigation className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              {/* Secondary: Add to Google Calendar */}
              <a
                id="add-calendar-btn"
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-transparent border border-[#B49A72] text-[#242222] hover:bg-[#B49A72]/10 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300"
              >
                <span>Add to Calendar</span>
                <Calendar className="w-3.5 h-3.5 text-[#B49A72]" />
              </a>

              {/* Quick Copy Address */}
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center space-x-1.5 text-xs text-[#77716D] hover:text-[#242222] font-sans tracking-wider transition-colors pt-1 sm:pt-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#3F4635]" />
                    <span className="text-[#3F4635] font-medium">Address Copied</span>
                  </>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
