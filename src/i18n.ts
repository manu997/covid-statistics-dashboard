import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
  },
  fallbackLng: 'es',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
