import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const AppDownload = () => {
  return (
    <section id="app" className="py-24 bg-bz-surface-subtle overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Phone Mockup Left */}
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={cinematicTransition}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[300px] h-[400px] bg-bz-blue/10 blur-[80px] rounded-full mix-blend-multiply" />
            </motion.div>
            <div className="relative h-[500px] lg:h-[650px] w-auto">
              <img 
                src="/app-mockup.png" 
                alt="BestZone Mobile App" 
                className="h-full w-auto object-contain drop-shadow-2xl"
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
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="px-3 py-1 rounded-full bg-white border border-bz-blue/20 text-xs font-semibold tracking-wider text-bz-blue mb-6"
            >
              BESTZONE MOBILE APP
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-[clamp(34px,4vw,52px)] leading-[1.1] font-bold text-bz-ink mb-6 text-balance"
            >
              BestZone in <br />
              <span className="text-bz-blue">Your Pocket.</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-lg text-bz-text leading-relaxed max-w-md mb-10"
            >
              Discover BestZone, explore the latest accessories, stay connected with our offers, and access the BestZone experience directly from your phone.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a 
                href={import.meta.env.VITE_IOS_APP_URL || '#'} 
                className="flex items-center justify-center gap-3 bg-bz-ink text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              >
                <Apple size={24} />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-300">Download on the</span>
                  <span className="text-sm font-semibold leading-tight">App Store</span>
                </div>
              </a>
              
              <a 
                href={import.meta.env.VITE_ANDROID_APP_URL || '#'} 
                className="flex items-center justify-center gap-3 bg-white text-bz-ink border border-bz-border px-6 py-3.5 rounded-xl hover:bg-bz-surface transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]"
              >
                <Play size={24} className="text-gray-700" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-none text-gray-500">Get it on</span>
                  <span className="text-sm font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, filter: 'blur(10px)' },
                visible: { opacity: 0.7, filter: 'blur(0px)', transition: { ...cinematicTransition, delay: 0.5 } }
              }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-16 h-16 bg-white border border-bz-border rounded-lg flex items-center justify-center p-2 shadow-sm">
                <div className="w-full h-full border-[2px] border-bz-ink border-dashed rounded opacity-50"></div>
              </div>
              <span className="text-sm font-medium text-bz-text">Scan to download</span>
            </motion.div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AppDownload;