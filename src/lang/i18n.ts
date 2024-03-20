import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import zhCN from './locales/zh-CN.json';

const resources = {
  en: {
    translation: en
  },
  'zh-CN': {
    translation: zhCN
  }
};

const currentLocale = localStorage.getItem('lang') || 'en';
const i18n = use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: currentLocale,
    lng: currentLocale,
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
