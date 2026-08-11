import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, X, Phone, Mail } from 'lucide-react';

const cinematicTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const phone = import.meta.env.VITE_PHONE || '';
  const email = import.meta.env.VITE_EMAIL || '';
  const whatsappNumber = import.meta.env.VITE_WHATSAPP || '';
  
  const instagramUrl = import.meta.env.VITE_INSTAGRAM || '#';
  const facebookUrl = import.meta.env.VITE_FACEBOOK || '#';
  const tiktokUrl = import.meta.env.VITE_TIKTOK || '#';

  const prefilledMessage = encodeURIComponent("Hello BestZone, I'm interested in learning more about your products / wholesale opportunities.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <section id="contact" className="py-32 bg-bz-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1000px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(15px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={cinematicTransition}
          className="relative bg-bz-dark noise-bg-dark border border-white/10 rounded-[3rem] p-10 sm:p-20 text-center overflow-hidden shadow-[0_40px_100px_rgba(10,15,28,0.3)]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bz-blue/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 mix-blend-screen"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 pointer-events-none"
          >
            <span className="text-[300px] font-black text-white tracking-tighter leading-none">BZ</span>
          </motion.div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...cinematicTransition, delay: 0.1 }}
              className="text-[clamp(34px,4vw,52px)] leading-[1.05] font-extrabold text-white mb-6 text-balance tracking-tight"
            >
              Ready to Work With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bz-blue to-[#60b3f7]">BestZone?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...cinematicTransition, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed mb-12 font-medium"
            >
              Whether you're looking for premium mobile accessories, wholesale opportunities, or partnership support, our team is ready to help.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...cinematicTransition, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-bz-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#40A5F5] transition-all shadow-[0_10px_40px_rgba(22,139,228,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass-card-dark text-[#25D366] px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </motion.div>
        
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-bz-ink/60"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, y: 20, filter: 'blur(5px)' }}
              transition={{ type: "spring", duration: 0.6, bounce: 0, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg glass-card-dark border-white/20 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-10 max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">Contact Details</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <p className="text-gray-300 mb-8 font-medium">Reach out to us through any of the following channels. Our team is always ready to assist you.</p>
                
                <div className="flex flex-col gap-4 mb-8">
                  <a href={`tel:${phone}`} className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-bz-blue/50 hover:bg-white/5 transition-all group">
                    <div className="w-12 h-12 bg-bz-blue/10 text-[#60b3f7] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1">Call Us</div>
                      <div className="text-lg font-bold text-white transition-colors">{phone}</div>
                    </div>
                  </a>
                  
                  <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-bz-blue/50 hover:bg-white/5 transition-all group">
                    <div className="w-12 h-12 bg-bz-blue/10 text-[#60b3f7] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1">Email Us</div>
                      <div className="text-lg font-bold text-white transition-colors">{email}</div>
                    </div>
                  </a>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group">
                    <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium mb-1">WhatsApp</div>
                      <div className="text-lg font-bold text-white transition-colors">{whatsappNumber}</div>
                    </div>
                  </a>
                </div>

                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</div>
                  <div className="flex gap-4">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactCTA;