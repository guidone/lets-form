import _ from 'lodash';

export const i18n = (value, locale) => {
  if (_.isString(value)) {
    // if string, then return it
    return value;
  } else if (_.isObject(value)) {
    const language = (locale || 'en-US').substr(0, 2);
    // if exact match of the locale
    if (locale && value[locale]) {
      return value[locale];
    }
    // if there's no dialect, then try with the first two letters
    if (locale && value[language]) {
      return value[language];
    }
    // then try with another dialect, i.e. there are translations for fr-FR and
    // the locale is fr-CA, try first with any fr-FR if present
    const firstDialect = Object.keys(value).find(locale => locale.startsWith(language));
    if (firstDialect) {
      return value[firstDialect];
    }
    // if nothing found, defaults to english but with warning
    if (value['en'] || value['en-UK'] || value['en-US']) {
      if (!locale) {
        console.warn(`[LetsForm] missing locale for translation, defaulting to English: `, value);
      } else {
        console.warn(`[LetsForm] missing translation for ${locale}, defaulting to English: `, value);
      }
      return value['en'] || value['en-UK'] || value['en-US'];
    }
    console.warn(`[LetsForm] missing translation for ${locale}: `, value);
    return '';
  }
  return value;
}