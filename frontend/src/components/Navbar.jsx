import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { resources } from "../resources";

const languageNames = {
  en: "English",
  hi: "हिन्दी",
  bn: "বাংলা",
  mr: "मराठी",
  te: "తెలుగు",
  ta: "தமிழ்",
  gu: "ગુજરાતી",
  ur: "اردو",
  kn: "ಕನ್ನಡ",
  or: "ଓଡ଼ିଆ",
  ml: "മലയാളം",
  pa: "ਪੰਜਾਬੀ",
  as: "অসমীয়া",
  sa: "संस्कृतम्",
  kok: "कोंकणी",
  mai: "मैथिली",
  doi: "डोगरी",
  brx: "बड़ो",
  sat: "संथाली",
  mni: "মণিপুরী",
  ne: "नेपाली",
  sd: "सिन्धी",
  ks: "कश्मीरी",
};

// Derive the list of languages from the available resources
const languages = Object.keys(resources).map(code => ({
  code,
  name: languageNames[code] || code.toUpperCase(),
}));

const NotificationDropdown = () => (
  <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg border border-slate-200 rounded-md z-20 text-left" role="menu">
    <div className="p-4 flex justify-between items-center border-b border-slate-200">
      <h3 className="font-semibold text-slate-800">Notifications</h3>
    </div>
    <div className="p-2 border-b border-slate-200">
      <div className="flex justify-around">
        <button className="flex-1 flex flex-col items-center p-2 rounded-md hover:bg-slate-100 text-sm text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>
          <span>All</span>
        </button>
        <button className="flex-1 flex flex-col items-center p-2 rounded-md hover:bg-slate-100 text-sm text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Transactional</span>
        </button>
        <button className="flex-1 flex flex-col items-center p-2 rounded-md hover:bg-slate-100 text-sm text-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="m3 11 18-5v12L3 11z"/><path d="M11.75 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
          <span>Promotional</span>
        </button>
      </div>
    </div>
    <div className="p-4 text-center text-slate-500">
      <p>Your first notification will appear here.</p>
    </div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageSelect = (lang, event) => {
    event.preventDefault();
    i18n.changeLanguage(lang.code);
    setIsLangOpen(false);
  };

  const handleLangToggle = () => {
    setIsLangOpen((open) => !open);
    setIsNotifOpen(false); // Close other dropdown
  };

  const handleNotifToggle = () => {
    setIsNotifOpen((open) => !open);
    setIsLangOpen(false); // Close other dropdown
  };

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!isLangOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.language-selector')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isLangOpen]);

  // Close notification dropdown on outside click
  React.useEffect(() => {
    if (!isNotifOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.notification-selector')) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isNotifOpen]);

  return (
    <header className="relative flex justify-between items-center px-4 md:px-8 h-14 bg-white border-b border-slate-200 font-sans">
      
      <div className="navbar-brand">
        <a href="/" className="text-xl font-bold text-slate-800 no-underline">
          {t('appName')}
        </a>
      </div>

      <button 
        className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-100" 
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMenuOpen ? (
            <line x1="18" y1="6" x2="6" y2="18"></line>
          ) : (
            <line x1="3" y1="12" x2="21" y2="12"></line>
          )}
          {isMenuOpen ? (
            <line x1="6" y1="6" x2="18" y2="18"></line>
          ) : (
            <line x1="3" y1="6" x2="21" y2="6"></line>
          )}
          {!isMenuOpen && <line x1="3" y1="18" x2="21" y2="18"></line>}
        </svg>
      </button>

      {/* Mobile Menu */}
      <nav className={`absolute top-full left-0 ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-[calc(100vh-3.5rem)] bg-white z-10 gap-8 md:hidden`}>
        {/* Menu items duplicated for mobile view */}
        <div className="language-selector relative">
          <button
            className="cursor-pointer list-none text-slate-600 hover:text-slate-800 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md"
            onClick={handleLangToggle}
            aria-haspopup="listbox"
            aria-expanded={isLangOpen}
            type="button"
            aria-label="Select Language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{currentLanguage.code.toUpperCase()}</span>
            <svg className="ml-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          {isLangOpen && (
            <ul className="absolute right-0 mt-2 bg-white min-w-[160px] shadow-lg border border-slate-200 rounded-md z-20" role="listbox">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <a
                    href="#"
                    onClick={(e) => handleLanguageSelect(lang, e)}
                    className={`block px-4 py-3 text-black hover:bg-gray-100 no-underline${currentLanguage.code === lang.code ? ' font-bold' : ''}`}
                    role="option"
                    aria-selected={currentLanguage.code === lang.code}
                  >
                    {lang.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="notification-selector relative">
          <button
            onClick={handleNotifToggle}
            className="text-slate-600 hover:text-slate-800"
            aria-label="Notifications"
            aria-haspopup="true"
            aria-expanded={isNotifOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          {isNotifOpen && <NotificationDropdown />}
        </div>
        <a href="/signin" className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition no-underline">{t('signIn')}</a>
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-7">
        <div className="language-selector relative">
          <button
            className="cursor-pointer list-none text-slate-600 hover:text-slate-800 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md"
            onClick={handleLangToggle}
            aria-haspopup="listbox"
            aria-expanded={isLangOpen}
            type="button"
            aria-label="Select Language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{currentLanguage.code.toUpperCase()}</span>
            <svg className="ml-1" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          {isLangOpen && (
            <ul className="absolute right-0 mt-2 bg-white min-w-[160px] shadow-lg border border-slate-200 rounded-md z-20" role="listbox">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <a
                    href="#"
                    onClick={(e) => handleLanguageSelect(lang, e)}
                    className={`block px-4 py-3 text-black hover:bg-gray-100 no-underline${currentLanguage.code === lang.code ? ' font-bold' : ''}`}
                    role="option"
                    aria-selected={currentLanguage.code === lang.code}
                  >
                    {lang.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="notification-selector relative">
          <button
            onClick={handleNotifToggle}
            className="text-slate-600 hover:text-slate-800 p-2"
            aria-label="Notifications"
            aria-haspopup="true"
            aria-expanded={isNotifOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          {isNotifOpen && <NotificationDropdown />}
        </div>

        <div className="signin-button">
          <a href="/signin" className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition no-underline">
            {t('signIn')}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
