import React from 'react';

export const liveShows = [
  { id: 1, title: 'Future of Your Relationship', host: 'Astrologer Neha', viewers: '2.1k', image: 'https://placehold.co/250x160/F43F5E/FFFFFF?text=LIVE' },
  { id: 2, title: 'Career Growth Secrets', host: 'Rishi Kumar', viewers: '1.8k', image: 'https://placehold.co/250x160/10B981/FFFFFF?text=LIVE' },
  { id: 3, title: 'Weekly Tarot Reading', host: 'Vidushi M', viewers: '3.2k', image: 'https://placehold.co/250x160/0EA5E9/FFFFFF?text=LIVE' },
  { id: 4, title: 'Vastu for Home', host: 'Pandit Sharma', viewers: '1.5k', image: 'https://placehold.co/250x160/3B82F6/FFFFFF?text=LIVE' },
  { id: 5, title: 'Numerology & Your Name', host: 'Guru Simran', viewers: '2.5k', image: 'https://placehold.co/250x160/8B5CF6/FFFFFF?text=LIVE' },
  { id: 6, title: 'Love Compatibility', host: 'Aacharya Aaditya', viewers: '2.9k', image: 'https://placehold.co/250x160/F97316/FFFFFF?text=LIVE' },
];

const LiveShowCard = ({ show }) => (
  <a href="#" className="snap-start block min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] group">
    <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
      <img src={show.image} alt={show.title} className="w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        LIVE
      </div>
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
        <span>{show.viewers}</span>
      </div>
      <div className="absolute bottom-0 left-0 p-3 text-white">
        <h4 className="font-bold text-sm truncate group-hover:text-yellow-300 transition-colors">{show.title}</h4>
        <p className="text-xs text-slate-200">{show.host}</p>
      </div>
    </div>
  </a>
);

export default LiveShowCard;