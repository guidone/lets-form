export const i18nOptions = (value, i18n) => 
  (value ?? []).filter(value => value != null).map(value => ({ ...value, label: i18n(value.label) }));
  