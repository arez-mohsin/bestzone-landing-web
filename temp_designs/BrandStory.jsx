import React from 'react';
import { motion } from 'framer-motion';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const BrandStory = () => {
  return (
    <section id="about" className="py-24 bg-bz-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: 'blur(15px)', scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={cinematicTransition}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl overflow-hidden shadow-sm flex items-center justify-center p-12">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
                <div className="w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bz-blue to-transparent" />
              </div>
              <span className="text-[120px] sm:text-[180px] font-black text-bz-ink tracking-tighter opacity-10">BZ</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-bz-surface-subtle/50 to-transparent mix-blend-multiply" />
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
              ABOUT BESTZONE
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-[clamp(34px,4vw,52px)] leading-[1.1] font-bold text-bz-ink mb-6 text-balance"
            >
              Built on Trust. <br />
              <span className="text-bz-blue">Driven by Quality.</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-lg text-bz-text leading-relaxed max-w-lg mb-8"
            >
              BestZone connects customers, retailers, and businesses with carefully selected mobile accessories and dependable service. From everyday essentials to wholesale supply, our goal is simple: make quality products easier to access across Iraq and Kurdistan.
            </motion.p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;