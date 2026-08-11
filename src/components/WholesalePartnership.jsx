import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const WholesalePartnership = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const benefits = [
    t('wholesale.li1'),
    t('wholesale.li2'),
    t('wholesale.li3'),
    t('wholesale.li4'),
    t('wholesale.li5'),
    t('wholesale.li6')
  ];

  return (
    <section id="wholesale" className="py-32 bg-bz-dark noise-bg-dark text-white relative overflow-hidden">
      
      {/* Dark Theme Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bz-blue/20 rounded-full blur-[200px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className={`flex flex-col-reverse lg:flex-row items-center gap-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="px-4 py-1.5 rounded-full glass-card-dark text-xs font-bold tracking-widest text-white mb-6 border-white/20 uppercase"
            >
              {t('wholesale.badge')}
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-[clamp(40px,4vw,60px)] leading-[1.05] font-extrabold text-white mb-6 text-balance tracking-tight"
            >
              {t('wholesale.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bz-blue to-[#60b3f7]">{t('wholesale.title2')}</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-lg text-gray-300 leading-relaxed mb-10 font-medium"
            >
              {t('wholesale.desc')}
            </motion.p>
            
            <motion.ul 
              variants={{
                hidden: { opacity: 0, filter: 'blur(5px)' },
                visible: { opacity: 1, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 w-full"
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-bz-blue/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-[#60b3f7]" />
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </li>
              ))}
            </motion.ul>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto bg-bz-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#40A5F5] transition-all shadow-[0_10px_40px_rgba(22,139,228,0.3)] hover:shadow-[0_10px_40px_rgba(22,139,228,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                {t('wholesale.btnPartner')}
                <ArrowRight size={18} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </button>
              <button className="w-full sm:w-auto glass-card-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1">
                {t('wholesale.btnInquiry')}
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(15px)', y: 40, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...cinematicTransition, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square bg-white/5 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
              <img 
                src="/wholesale.png" 
                alt="Business Partnership" 
                width="800"
                height="800"
                loading="lazy"
                className="w-full h-full object-cover object-center rounded-[2.5rem] opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bz-dark/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WholesalePartnership;
