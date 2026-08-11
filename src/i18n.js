import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import kuTranslation from './locales/ku.json';
import arTranslation from './locales/ar.json';

const savedLanguage = localStorage.getItem('bz_language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ku: { translation: kuTranslation },
      ar: { translation: arTranslation }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
