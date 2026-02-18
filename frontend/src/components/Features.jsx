import React from 'react';
import AstrologerCard from './AstrologerCard';
import LiveShowCard from './LiveShowCard';
import SpecialShowCard from './SpecialShowCard';
import { ArrowRightIcon, TalkIcon, ChatIcon, HoroscopeIcon, KundaliIcon } from './FeatureIcons';
import { astrologers, liveShows, specialShows } from './mock';

const Card = ({ href, icon, name }) => (
  <a
    href={href}
    className="bg-white/60 backdrop-blur-md p-3 md:p-4 lg:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-between border border-white/20 no-underline text-slate-800 hover:no-underline"
  >
    <div className="flex items-center min-w-0 gap-2 sm:gap-3">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="font-semibold text-sm lg:text-base truncate">{name}</span>
    </div>
    <ArrowRightIcon className="text-slate-500 flex-shrink-0 ml-2" />
  </a>
);

const features = [
  { name: 'Talk', icon: <TalkIcon className="text-orange-500" />, href: '/consult' },
  { name: 'Chat', icon: <ChatIcon className="text-green-500" />, href: '/chat' },
  { name: 'Horoscope', icon: <HoroscopeIcon className="text-blue-500" />, href: '/horoscope' },
  { name: 'Kundali', icon: <KundaliIcon className="text-purple-500" />, href: '/kundli' },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-6 sm:py-8 lg:py-10 relative -mt-12 sm:-mt-16 lg:-mt-20 z-20 scroll-mt-24">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          {features.map((feature) => (
            <Card key={feature.name} {...feature} />
          ))}
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">Top Online Astrologer</h3>
          <a href="/astrologers" className="self-start sm:self-auto px-4 py-2 border border-slate-300 rounded-md text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 no-underline transition-colors">
            View All
          </a>
        </div>
        <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-16">
          <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-5 w-max px-4 sm:px-6 lg:px-10 xl:px-16">
              {astrologers.map((astrologer) => (
                <AstrologerCard key={astrologer.id} astrologer={astrologer} />
              ))}
            </div>
          </div>
        </div>

        {/* Live Shows Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 flex justify-between items-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">Live Shows</h3>
          <a href="/live-shows" className="px-4 py-2 border border-slate-300 rounded-md text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 no-underline transition-colors">
            View All
          </a>
        </div>
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex w-max gap-4 snap-x snap-mandatory scroll-smooth py-2">
            {liveShows.map((show) => (
              <LiveShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>

        {/* Special Shows Section */}
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex w-max gap-5 snap-x snap-mandatory scroll-smooth py-2">
            {specialShows.map((show) => (
              <SpecialShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;