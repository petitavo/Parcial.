/**
 * @summary Internationalization configuration
 * @description Sets up i18n for the application, including English and Spanish languages
 * @author Gustavo Huanca
 */

import en from './locales/en.json';
import es from './locales/es.json';
import {createI18n} from "vue-i18n";

/**
 * @summary Creates the i18n instance
 * @description Configures i18n options, including default language and messages
 */
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    messages: { en, es }
});

export default i18n;