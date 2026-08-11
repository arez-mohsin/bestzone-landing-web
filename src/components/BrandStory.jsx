import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const BrandStory = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-bz-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={cinematicTransition}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white/50 flex items-center justify-center">
              <img
                src="/about-image.png"
                alt="About BestZone"
                width="800"
                height="800"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bz-ink/20 to-transparent mix-blend-multiply pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="px-3 py-1 rounded-full bg-white border border-bz-border text-xs font-semibold tracking-wider text-bz-text mb-6"
            >
              {t('about.badge')}
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-[clamp(34px,4vw,52px)] leading-[1.1] font-bold text-bz-ink mb-6 text-balance"
            >
              {t('about.title1')} <br />
              <span className="text-bz-blue">{t('about.title2')}</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-lg text-bz-text leading-relaxed max-w-lg mb-8"
            >
              {t('about.desc')}
            </motion.p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
