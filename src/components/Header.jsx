import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('bz_language', lng);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ku', name: 'کوردی' },
    { code: 'ar', name: 'العربية' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.wholesale'), href: '#wholesale' },
    { name: t('nav.coverage'), href: '#coverage' },
    { name: t('nav.app'), href: '#app' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-bz-border shadow-sm py-4'
            : 'bg-transparent py-6'
          }`}
      >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="BestZone Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-bz-ink tracking-tight hidden sm:block">
                {t('nav.logo')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-bz-text hover:text-bz-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 relative">
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-bz-text hover:text-bz-ink transition-colors p-2 rounded-full hover:bg-bz-surface"
                aria-label="Toggle language menu"
              >
                <Globe size={20} />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-bz-border py-2 z-50 ${isRTL ? 'left-0' : 'right-0'}`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full px-4 py-2 text-left hover:bg-bz-surface flex items-center justify-between group transition-colors"
                      >
                        <span className={`text-sm font-medium ${i18n.language === lang.code ? 'text-bz-blue' : 'text-bz-ink'}`}>
                          {lang.name}
                        </span>
                        {i18n.language === lang.code && (
                          <Check size={16} className="text-bz-blue" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#contact" className="bg-bz-blue text-white px-6 py-2.5 rounded-xl font-medium hover:bg-bz-blue-hover transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]">
              {t('nav.contactBtn')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-bz-ink p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Drawer (Moved outside header to prevent backdrop-filter containing block bug) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold text-bz-blue">{t('nav.logo')}</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-bz-text bg-bz-surface rounded-full" aria-label="Close mobile menu">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-bz-ink hover:text-bz-blue"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 mb-6">
                <p className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wider">{t('nav.language')}</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
                        i18n.language === lang.code 
                          ? 'bg-bz-blue text-white shadow-md' 
                          : 'bg-bz-surface text-bz-ink hover:bg-gray-200'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full block text-center bg-bz-blue text-white px-6 py-4 rounded-xl font-medium">
                  {t('nav.contactBtn')}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
