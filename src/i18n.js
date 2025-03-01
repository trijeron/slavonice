import { createI18n } from 'vue-i18n';

import en from './i18n/en.json';
import cz from './i18n/cz.json';

const messages = {
    en,
    cz,
};

const i18n = createI18n({
    locale: 'cz',
    fallbackLocale: 'cz',
    messages,
});

export default i18n;
