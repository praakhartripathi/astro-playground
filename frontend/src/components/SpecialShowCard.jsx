import React from 'react';

export const specialShows = [
  { id: 1, name: 'Astrologer Neha', image: 'https://placehold.co/300x128/FFF1F2/F43F5E?text=Live+Session', question: 'Will he marry you?', liveWithHost: 'Rishi Kumar', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
  { id: 2, name: 'Aacharya Aaditya', image: 'https://placehold.co/300x128/FFF7ED/F97316?text=Live+Session', question: 'When will I get a job?', liveWithHost: 'Vidushi M', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
  { id: 3, name: 'Guru Simran', image: 'https://placehold.co/300x128/F0F9FF/0EA5E9?text=Live+Session', question: 'Is my partner cheating?', liveWithHost: 'Pandit Sharma', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
  { id: 4, name: 'Rishi Kumar', image: 'https://placehold.co/300x128/ECFDF5/10B981?text=Live+Session', question: 'What does my future hold?', liveWithHost: 'Astrologer Neha', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
  { id: 5, name: 'Vidushi M', image: 'https://placehold.co/300x128/F5F3FF/8B5CF6?text=Live+Session', question: 'Wealth & Finance Forecast', liveWithHost: 'Aacharya Aaditya', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
  { id: 6, name: 'Pandit Sharma', image: 'https://placehold.co/300x128/EFF6FF/3B82F6?text=Live+Session', question: 'Your Health in 2026', liveWithHost: 'Guru Simran', liveWithHostImage: 'https://placehold.co/32x32/E0E7FF/4338CA' },
];

const SpecialShowCard = ({ show }) => (
  <a href="#" className="snap-start block min-w-[280px] sm:min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
    <div className="relative">
      <img src={show.image} alt={show.name} className="w-full h-32 object-cover" />
      <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-200 hover:bg-white transition-colors">
        Follow
      </button>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-slate-800 truncate">{show.name}</h4>
      <p className="text-sm text-slate-600 mt-1">{show.question}</p>
    </div>
    <div className="px-4 pb-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={show.liveWithHostImage} alt={show.liveWithHost} className="w-8 h-8 rounded-full object-cover border-2 border-white ring-1 ring-slate-200" />
        <div className="text-xs">
          <p className="text-slate-500">Live with</p>
          <p className="font-semibold text-slate-700">{show.liveWithHost}</p>
        </div>
      </div>
      <button className="bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
        Watch Now
      </button>
    </div>
  </a>
);

export default SpecialShowCard;