import React from 'react';

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

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}><path d="M9 18l6-6-6-6"/></svg>
);

const TalkIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${className}`}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const ChatIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${className}`}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);

const HoroscopeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${className}`}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/></svg>
);

const KundaliIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${className}`}><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
);

const features = [
  { name: 'Talk', icon: <TalkIcon className="text-orange-500" />, href: '/consult' },
  { name: 'Chat', icon: <ChatIcon className="text-green-500" />, href: '/chat' },
  { name: 'Horoscope', icon: <HoroscopeIcon className="text-blue-500" />, href: '/horoscope' },
  { name: 'Kundali', icon: <KundaliIcon className="text-purple-500" />, href: '/kundli' },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-6 sm:py-8 lg:py-10 relative -mt-10 sm:-mt-14 lg:-mt-16 z-20 scroll-mt-24">
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
      </div>
    </section>
  );
};

export default Features;