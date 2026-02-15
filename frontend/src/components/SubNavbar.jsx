import React, { useState, useRef, useEffect } from 'react';

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

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SubNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // For both desktop and mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // --- Event Handlers ---

  const handleDesktopMouseEnter = (itemName) => {
    if (window.innerWidth >= 1024) { // lg breakpoint for desktop
      clearTimeout(hoverTimeoutRef.current);
      setOpenDropdown(itemName);
    }
  };

  const handleDesktopMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      // Delay closing to allow cursor to move into the dropdown
      hoverTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 150);
    }
  };

  const handleDropdownMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleToggleClick = (e, itemName, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenDropdown(prev => (prev === itemName ? null : itemName));
    }
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // --- Effects ---

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(hoverTimeoutRef.current);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <nav ref={navRef} className="bg-white border-b border-slate-200 font-sans sticky top-0 z-[100] overflow-visible">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between h-12 lg:hidden">
          <div className="flex-1" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center h-12">
          <div className="flex items-center space-x-1 overflow-visible">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && handleDesktopMouseEnter(item.name)}
                onMouseLeave={() => item.children && handleDesktopMouseLeave()}
              >
                <a
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap no-underline flex items-center"
                  onClick={(e) => handleToggleClick(e, item.name, !!item.children)}
                  aria-haspopup={!!item.children}
                  aria-expanded={openDropdown === item.name}
                >
                  {item.name}
                  {item.children && (
                    <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ease-in-out ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  )}
                </a>
                {item.children && (
                  <div
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDesktopMouseLeave}
                    className={`absolute left-0 top-full mt-1 w-56 bg-white shadow-lg border border-slate-200 rounded-md z-[9999] transition-all duration-200 ease-out transform origin-top ${openDropdown === item.name ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
                  >
                    <ul className="py-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <a href={child.href} className="block px-4 py-2 text-sm text-slate-800 hover:bg-slate-100 hover:text-blue-600 no-underline">
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

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleToggleClick(e, item.name, !!item.children)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between no-underline"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ease-in-out ${openDropdown === item.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <div className={`pl-3 transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === item.name ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="mt-1 space-y-1 border-l-2 border-slate-200">
                      <ul className="py-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <a
                              href={child.href}
                              className="block pl-4 pr-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-blue-600 no-underline"
                              onClick={handleMobileLinkClick}
                            >
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;