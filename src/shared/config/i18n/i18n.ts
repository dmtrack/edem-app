import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_ru from '../../../app/locales/ru/translation.json';
import common_en from '../../../app/locales/en/translation.json';

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng: 'ru',
        debug: __IS_DEV__,
        resources: {
            ru: {
                translation: common_ru,
            },
            en: {
                translation: common_en,
            },
        },
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'translation',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
