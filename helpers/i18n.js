import _ from 'lodash';

export const i18n = (value, locale) => {
  if (_.isString(value)) {
    return value;
  } else if (_.isObject(value)) {
    if (locale && value[locale]) {
      return value[locale];
    }
    // if there's no dialect, then try with the first two letters
    if (locale && value[locale.substr(0, 2)]) {
      return value[locale.substr(0, 2)];
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