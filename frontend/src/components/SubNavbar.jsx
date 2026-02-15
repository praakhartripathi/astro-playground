import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Consult Now', href: '/consult' },
  { name: 'Horoscope', href: '/horoscope' },
  {
    name: 'NewYear 2026',
    href: '/new-year-2026',
    children: [
      { name: 'Horoscope', href: '/new-year-2026/horoscope' },
      { name: 'Numerology', href: '/new-year-2026/numerology' },
      { name: 'Tarot', href: '/new-year-2026/tarot' },
      { name: 'Festival', href: '/new-year-2026/festival' },
      { name: 'Planet Transit', href: '/new-year-2026/planet-transit' },
    ],
  },
  {
    name: 'Panchang',
    href: '/panchang',
    children: [
      { name: 'Panchang Calendar', href: '/panchang/calendar' },
      { name: 'Todays Panchang', href: '/panchang/today' },
      { name: 'Todays Tithi', href: '/panchang/today/tithi' },
      { name: 'Todays Shubh Muhurat', href: '/panchang/today/shubh-muhurat' },
      { name: 'Todays Nakshatra', href: '/panchang/today/nakshatra' },
      { name: 'Todays Chogadiya', href: '/panchang/today/chogadiya' },
      { name: 'Todays Rahu Kaal', href: '/panchang/today/rahu-kaal' },
    ],
  },
  {
    name: 'Kundli',
    href: '/kundli',
    children: [
      { name: 'Free Kundali', href: '/kundli/free' },
      { name: 'Kundali Matching', href: '/kundli/matching' },
      { name: 'Love', href: '/kundli/love' },
      { name: 'Marriage', href: '/kundli/marriage' },
    ],
  },
  { name: 'Numerology', href: '/numerology' },
  { name: 'Tarot', href: '/tarot' },
  {
    name: 'Free Readings',
    href: '/free-readings',
    children: [
      { name: 'Zodiac Sign', href: '/free-readings/zodiac-sign' },
      { name: 'Palm Reading', href: '/free-readings/palm-reading' },
      { name: 'Baby Names', href: '/free-readings/baby-names' },
      { name: 'Spirituality', href: '/free-readings/spirituality' },
      { name: 'Remedies', href: '/free-readings/remedies' },
      { name: 'Planet', href: '/free-readings/planet' },
      { name: 'Vastu', href: '/free-readings/vastu' },
      { name: 'Vedic Astrology', href: '/free-readings/vedic-astrology' },
      { name: 'Chinese Astrology', href: '/free-readings/chinese-astrology' },
    ],
  },
  { name: 'WatchYogi Live', href: '/live' },
  { name: 'Video', href: '/videos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Session Booking', href: '/session-booking' },
  { name: 'NewStore', href: '/store' },
];

const SubNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = React.useRef(null);

  const handleToggle = (e, itemName, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenDropdown(prev => (prev === itemName ? null : itemName));
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 h-12">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <a
                href={item.href}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap no-underline flex items-center"
                onClick={(e) => handleToggle(e, item.name, !!item.children)}
                aria-haspopup={!!item.children}
                aria-expanded={openDropdown === item.name}
              >
                {item.name}
                {item.children && (
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                )}
              </a>
              {item.children && openDropdown === item.name && (
                <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg border border-slate-200 rounded-md z-20">
                  <ul className="py-1">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <a href={child.href} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 no-underline">
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;