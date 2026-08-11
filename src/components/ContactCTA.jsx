import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <>
      <section id="contact" className="py-32 bg-bz-ink relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[800px] bg-bz-blue/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="px-4 py-1.5 rounded-full glass-card-dark text-xs font-bold tracking-widest text-white mb-8 border-white/20 uppercase"
            >
              {t('contact.badge', 'Contact Us')}
            </motion.div>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-[clamp(40px,6vw,72px)] leading-[1.05] font-extrabold text-white mb-8 text-balance tracking-tight"
            >
              {t('contact.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60b3f7] to-bz-blue">
                {t('contact.title2')}
              </span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              {t('contact.desc')}
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: cinematicTransition }
              }}
              className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-bz-ink px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
              >
                {t('contact.btnContact')}
                <ArrowRight size={20} className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </button>
              
              <a 
                href="https://wa.me/9640000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-10 py-5 rounded-2xl font-bold hover:bg-[#25D366]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={22} />
                {t('contact.btnWhatsapp')}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Modern Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-bz-ink/60 transition-all"
              onClick={() => setIsModalOpen(false)}
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, y: 10, filter: 'blur(4px)' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-bz-dark noise-bg-dark rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden text-left"
            >
              
              {/* Header */}
              <div className={`p-8 pb-6 border-b border-white/10 flex justify-between items-start relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`absolute top-0 w-64 h-64 bg-bz-blue/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none ${isRTL ? 'left-0 -translate-x-1/4' : 'right-0 translate-x-1/4'}`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('contact.modalTitle')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t('contact.modalDesc')}</p>
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors relative z-10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className={`p-8 grid gap-4 relative z-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                
                <a href="tel:+9640000000000" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-bz-blue/10 flex items-center justify-center text-bz-blue group-hover:scale-110 transition-transform shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{t('contact.call')}</p>
                    <p className="text-white font-medium" dir="ltr">+964 000 000 0000</p>
                  </div>
                </a>

                <a href="mailto:info@bestzone.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-bz-blue/10 flex items-center justify-center text-bz-blue group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{t('contact.email')}</p>
                    <p className="text-white font-medium">info@bestzone.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/9640000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{t('contact.whatsapp')}</p>
                    <p className="text-white font-medium" dir="ltr">+964 000 000 0000</p>
                  </div>
                </a>
              </div>

              {/* Social Footer */}
              <div className="p-6 bg-black/40 flex items-center justify-between">
                <span className="text-sm text-gray-400 font-medium">{t('contact.follow')}</span>
                <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bz-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-bz-blue transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactCTA;
