import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-bz-border pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6" aria-label="Home">
              <img src="/logo.png" alt="BestZone Logo" width="120" height="32" loading="lazy" className="h-8 w-auto" />
              <span className="text-xl font-bold text-bz-ink tracking-tight">
                {t('nav.logo')}
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4 text-bz-text mt-6">
              <a href={import.meta.env.VITE_INSTAGRAM || '#'} className="hover:text-bz-blue transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={import.meta.env.VITE_FACEBOOK || '#'} className="hover:text-bz-blue transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href={import.meta.env.VITE_TIKTOK || '#'} className="hover:text-bz-blue transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">{t('footer.company')}</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-bz-blue transition-colors">{t('nav.about')}</a></li>
              <li><a href="#wholesale" className="hover:text-bz-blue transition-colors">{t('nav.wholesale')}</a></li>
              <li><a href="#coverage" className="hover:text-bz-blue transition-colors">{t('nav.coverage')}</a></li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">{t('footer.social')}</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#wholesale" className="text-sm text-bz-text hover:text-bz-blue transition-colors">{t('footer.partner')}</a></li>
              <li><a href="#wholesale" className="text-sm text-bz-text hover:text-bz-blue transition-colors">{t('footer.benefits')}</a></li>
              <li><a href="#contact" className="text-sm text-bz-text hover:text-bz-blue transition-colors">{t('footer.contactSales')}</a></li>
            </ul>
          </div>

          {/* Column 4: App */}
          <div className="col-span-1">
            <h3 className="font-semibold text-bz-ink mb-5">{t('footer.appHeader')}</h3>
            <ul className="flex flex-col gap-3">
              <li><a href={import.meta.env.VITE_IOS_APP_URL || '#'} className="text-sm text-bz-text hover:text-bz-blue transition-colors">{t('footer.appStore')}</a></li>
              <li><a href={import.meta.env.VITE_ANDROID_APP_URL || '#'} className="text-sm text-bz-text hover:text-bz-blue transition-colors">{t('footer.googlePlay')}</a></li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-300">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="mailto:info@bestzone.com" className="hover:text-bz-blue transition-colors">info@bestzone.com</a></li>
              <li><a href="tel:+9640000000000" className="hover:text-bz-blue transition-colors" dir="ltr">+964 000 000 0000</a></li>
            </ul>
          </div>

        </div>

        <div className={`pt-8 border-t border-bz-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p>{t('footer.rights', { year: currentYear })}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bz-blue transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-bz-blue transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
