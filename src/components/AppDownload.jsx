import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const AppDownload = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section id="app" className="py-24 bg-bz-surface-subtle overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className={`flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Phone Mockup Left */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={cinematicTransition}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <motion.div
              initial={{ opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', scale: 0.8 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[300px] h-[400px] bg-bz-blue/10 blur-[80px] rounded-full mix-blend-multiply" />
            </motion.div>
            <div className="relative h-[500px] lg:h-[650px] w-auto">
              <img
                src="/apps_screenshot.jpg"
                alt="BestZone Mobile App"
                className="h-full w-auto object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Text Content Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="w-full lg:w-1/2 flex flex-col items-start lg:pl-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', y: 20 },
                visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: cinematicTransition }
              }}
              className="px-3 py-1 rounded-full bg-white border border-bz-blue/20 text-xs font-semibold tracking-wider text-bz-blue mb-6"
            >
              {t('app.badge')}
            </motion.div>

            <motion.h2
              variants={{
                hidden: { opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', y: 30 },
                visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: cinematicTransition }
              }}
              className="text-[clamp(34px,4vw,52px)] leading-[1.1] font-bold text-bz-ink mb-6 text-balance"
            >
              {t('app.title1')} <br />
              <span className="text-bz-blue">{t('app.title2')}</span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', y: 20 },
                visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: cinematicTransition }
              }}
              className="text-lg text-bz-text leading-relaxed max-w-md mb-10"
            >
              {t('app.desc')}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, filter: 'blur(4px)', willChange: 'transform, opacity, filter', y: 20 },
                visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: cinematicTransition }
              }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href={import.meta.env.VITE_IOS_APP_URL || '#'}
                className="flex items-center justify-center gap-3 bg-bz-ink text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              >
                <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-300 uppercase">{t('app.downloadOn')}</span>
                  <span className="text-sm font-semibold leading-tight">{t('app.appStore')}</span>
                </div>
              </a>

              <a
                href={import.meta.env.VITE_ANDROID_APP_URL || '#'}
                className="flex items-center justify-center gap-3 bg-white text-bz-ink border border-bz-border px-6 py-3.5 rounded-xl hover:bg-bz-surface transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              >
                <svg viewBox="0 0 576 512" width="24" height="24" fill="currentColor" className="text-[#3DDC84]">
                  <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l48,83C62.71,198.89,6,290.57,6,396H570c0-105.43-56.71-197.11-140.85-238.55" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-500 uppercase">{t('app.getItOn')}</span>
                  <span className="text-sm font-semibold leading-tight">{t('app.googlePlay')}</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
