import LOCALES from '../common/data/locales.json';


const LANGUAGES_OPTIONS = Object
  .keys(LOCALES['language-names'])
  .map(lang => ({
    code: lang,
    name: LOCALES['language-names'][lang][1],
    label: `${LOCALES['language-names'][lang][1]}`
  }));

  export const getLocales = () => LANGUAGES_OPTIONS;
