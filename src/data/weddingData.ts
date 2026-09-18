export interface WeddingDetails {
  brideName: string;
  brideFamily: string;
  groomName: string;
  groomFamily: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  address: string;
  nikahDetails: string;
  shortStory: string;
  countdownDate: string; // ISO date format for real-time countdown
  mapLocationUrl: string;
  calendarEvent: {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
  };
  quranicVerses: {
    bismillah: string;
    pairVerseArabic: string;
    pairVerseEnglish: string;
    pairVerseReference: string;
    rumVerseArabic: string;
    rumVerseEnglish: string;
    rumVerseReference: string;
  };
  finalMessage: string;
  galleryImages: Array<{
    id: string;
    url: string;
    alt: string;
    caption: string;
  }>;
}

export const weddingData: WeddingDetails = {
  brideName: "Maisha Imrose Tanisha",
  brideFamily: "Daughter of Yasin Chowdhury & Rafeya Sultana",
  groomName: "Yeasir Rahman Toukir",
  groomFamily: "elder son of Ismail Jabiullah & Aklima Akter",
  weddingDate: "September 26, 2026",
  weddingTime: "7:30 PM",
  venue: "Officers Club Chattogram",
  address: "M. A. Aziz Stadium, South Gate, Naval Avenue, Chittagong",
  nikahDetails: "A celebration of love and unity. Join us for a joyous Wedding Reception, followed by dinner and blessings.",
  shortStory: "By the grace of Allah, two paths became one. With gratitude in our hearts and love in our souls, we begin a beautiful new chapter together.",
  countdownDate: "2026-09-26T19:30:00",
  mapLocationUrl: "https://maps.google.com/?q=Officers+Club+Chattogram",
  calendarEvent: {
    title: "Wedding Reception of Tanisha & Toukir",
    description: "Join us in celebrating the Wedding Reception of Maisha Imrose Tanisha and Yeasir Rahman Toukir.",
    location: "Officers Club Chattogram",
    startDate: "20260926T193000Z",
    endDate: "20260926T233000Z",
  },
  quranicVerses: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    pairVerseArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    pairVerseEnglish: "“And We created you in pairs.”",
    pairVerseReference: "Surah An-Naba · 78:8",
    rumVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    rumVerseEnglish: "“And among His signs is that He created for you from yourselves spouses that you may find tranquility in them; and He placed between you affection and mercy.”",
    rumVerseReference: "Surah Ar-Rum · 30:21",
  },
  finalMessage: "May Allah bless this union with love, mercy, and barakah. We look forward to sharing this cherished milestone with you.",
  galleryImages: [
    {
      id: "couple-1",
      url: "/journey-photo.jpeg",
      alt: "Maisha and Yeasir",
      caption: "In silence and gratitude, two souls unite.",
    },
    {
      id: "couple-2",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
      alt: "Delicate botanical wedding stationery & rings",
      caption: "The vows penned upon pure linen parchment.",
    },
    {
      id: "couple-3",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
      alt: "Intricate floral arrangement & warm candlelight",
      caption: "Soft warmth of twilight and white jasmine.",
    },
    {
      id: "couple-4",
      url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=85",
      alt: "Architectural arches bathed in sunset golden light",
      caption: "Under arches of stone and rays of golden light.",
    },
  ],
};
