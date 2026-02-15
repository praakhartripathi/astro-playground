import React from 'react';

export const astrologers = [
  {
    id: 1,
    name: 'Aacharya Aaditya',
    image: 'https://placehold.co/80x80/FFF7ED/F97316?text=A',
    isOnline: true,
    expertise: ['Vedic Astrology', 'Tarot'],
    languages: ['Hindi', 'English'],
    experience: 10,
    price: 15,
    rating: 4.9,
    calls: 1876,
    chats: 2345,
  },
  {
    id: 2,
    name: 'Vidushi M',
    image: 'https://placehold.co/80x80/F0F9FF/0EA5E9?text=V',
    isOnline: false,
    expertise: ['Palmistry', 'Numerology'],
    languages: ['Hindi'],
    experience: 8,
    price: 12,
    rating: 4.8,
    calls: 1502,
    chats: 1987,
  },
  {
    id: 3,
    name: 'Rishi Kumar',
    image: 'https://placehold.co/80x80/ECFDF5/10B981?text=R',
    isOnline: true,
    expertise: ['Vastu', 'Face Reading'],
    languages: ['English', 'Tamil'],
    experience: 15,
    price: 20,
    rating: 4.95,
    calls: 3109,
    chats: 4511,
  },
  {
    id: 4,
    name: 'Astrologer Neha',
    image: 'https://placehold.co/80x80/FFF1F2/F43F5E?text=N',
    isOnline: true,
    expertise: ['Tarot Reading', 'Love & Relationship'],
    languages: ['English'],
    experience: 5,
    price: 18,
    rating: 4.85,
    calls: 980,
    chats: 1230,
  },
  {
    id: 5,
    name: 'Pandit Sharma',
    image: 'https://placehold.co/80x80/EFF6FF/3B82F6?text=P',
    isOnline: false,
    expertise: ['Career Astrology', 'Kundali Matching'],
    languages: ['Hindi', 'Punjabi'],
    experience: 20,
    price: 25,
    rating: 4.9,
    calls: 4500,
    chats: 5100,
  },
  {
    id: 6,
    name: 'Guru Simran',
    image: 'https://placehold.co/80x80/F5F3FF/8B5CF6?text=G',
    isOnline: true,
    expertise: ['Numerology', 'Vedic Astrology'],
    languages: ['Hindi', 'English', 'Gujarati'],
    experience: 12,
    price: 17,
    rating: 4.92,
    calls: 2500,
    chats: 3200,
  },
];

const StarIcon = ({ filled, className }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-slate-300'} ${className}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.365-2.446a1 1 0 00-1.175 0l-3.365 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex items-center">
    {[...Array(totalStars)].map((_, i) => (
      <StarIcon key={i} filled={i < Math.round(rating)} />
    ))}
  </div>
);

const AstrologerCard = ({ astrologer }) => (
  <div className="snap-start min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
    <div className="p-4">
      <div className="flex gap-4 items-center">
        <div className="relative flex-shrink-0">
          <img className="w-20 h-20 rounded-full object-cover border-2 border-slate-200" src={astrologer.image} alt={astrologer.name} />
          {astrologer.isOnline && <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-white animate-pulse"></span>}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-start">
            <h4 className="text-base font-bold text-slate-900 truncate">{astrologer.name}</h4>
            <button className="text-xs font-semibold text-orange-500 hover:text-orange-600 ml-2">Follow</button>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 truncate">{astrologer.expertise.join(', ')}</p>
          <p className="text-xs text-slate-500 mt-0.5">{astrologer.languages.join(', ')}</p>
          <p className="text-xs text-slate-500 mt-0.5">Exp: {astrologer.experience} Years</p>
          <div className="flex items-center gap-2 mt-1.5">
            <StarRating rating={astrologer.rating} />
            <span className="text-xs text-slate-500">({astrologer.calls + astrologer.chats} reviews)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-slate-50/70 px-4 py-3 flex justify-between items-center border-t border-slate-200/80">
      <p className="text-sm font-bold text-slate-800">₹{astrologer.price}<span className="font-normal text-xs text-slate-500">/min</span></p>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white border border-orange-500 text-orange-500 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors">Chat</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-colors">Call</button>
      </div>
    </div>
  </div>
);

export default AstrologerCard;