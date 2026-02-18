import React from 'react';

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