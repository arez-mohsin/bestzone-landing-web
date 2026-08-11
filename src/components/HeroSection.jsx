import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bz-bg noise-bg">
      {/* Abstract Glowing Orbs in Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-bz-blue/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bz-surface-subtle rounded-full blur-[150px] pointer-events-none translate-y-1/4 translate-x-1/4"></div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={cinematicTransition}
              className="px-3 py-1 rounded-full bg-bz-surface border border-bz-border text-xs font-semibold tracking-wider text-bz-text mb-8"
            >
              {t('hero.badge')}
            </motion.div>

            <h1 className="text-[clamp(44px,5vw,76px)] leading-[1.05] font-extrabold text-bz-ink mb-6 text-balance tracking-tight">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...cinematicTransition, delay: 0.1 }}
              >
                {t('hero.title1')}
              </motion.span>
              <motion.span
                className="block text-bz-blue"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...cinematicTransition, delay: 0.25 }}
              >
                {t('hero.title2')}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ ...cinematicTransition, delay: 0.45 }}
              className="text-lg md:text-xl text-bz-text mb-10 max-w-lg leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...cinematicTransition, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a href="#app" className="w-full sm:w-auto bg-bz-ink text-white px-8 py-4 rounded-2xl font-medium hover:bg-black transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px] flex items-center justify-center gap-2 group">
                {t('hero.btnApp')}
                <ArrowRight size={18} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
              <a href="#about" className="w-full sm:w-auto bg-white border border-bz-border text-bz-ink px-8 py-4 rounded-2xl font-medium hover:bg-bz-surface transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px] text-center">
                {t('hero.btnAbout')}
              </a>
            </motion.div>
          </div>

          {/* Right Artwork */}
          <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center">

            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', scale: 0.9, y: 40, rotate: -5 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full z-20"
            >
              <img
                src="/hero-artwork.png"
                alt="Premium Mobile Accessories"
                className="w-full h-full object-contain object-center drop-shadow-[0_40px_80px_rgba(22,139,228,0.25)] rounded-3xl"
              />
            </motion.div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ ...cinematicTransition, delay: 1 }}
              className={`absolute bottom-10 ${isRTL ? 'right-0 lg:-right-10' : 'left-0 lg:-left-10'} z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-bz-border/50 hidden md:flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-bz-blue/10 rounded-full flex items-center justify-center text-bz-blue font-bold">
                {t('hero.floatingNum')}
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-sm font-bold text-bz-ink leading-tight">{t('hero.floatingTitle')}</p>
                <p className="text-xs text-bz-text">{t('hero.floatingDesc')}</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
