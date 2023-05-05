import React from 'react';
import _ from 'lodash';

import { isValidDate, i18n, isI18n } from '../../helpers';

import { NoLabel, YesLabel } from './locales';

const Plaintext = ({ value, component, options, locale }) => {
  let d;
  switch(component) {
    case 'input-text':
    case 'text-input':
      return <span>{value}</span>;
    case 'date':
      if (_.isDate(value)) {
        d = value;
      } else if (_.isString(value) && isValidDate(new Date(value))) {
        d = new Date(value);
      }
      return <span>{d ? d.toLocaleDateString() : ''}</span>;
    case 'datetime':
      if (_.isDate(value)) {
        d = value;
      } else if (_.isString(value) && isValidDate(new Date(value))) {
        d = new Date(value);
      }
      return <span>{d ? d.toLocaleDateString() + ' ' + d.toLocaleTimeString() : ''}</span>;
    case 'toggle':
    case 'checkbox':
      if (value === true || value === 1) {
        return <span>{i18n(YesLabel, locale)}</span>;
      } else if (value === false || value === 0) {
        return <span>{i18n(NoLabel, locale)}</span>;
      }
      return <span>-</span>;
    case 'select':
      const found = (options ?? []).find(option => option.value === value);
      let label = '';
      if (found) {
        if (isI18n(found.label)) {
          label = i18n(found.label, locale);
        } else {
          label = found.label;
        }
      }
      return <span>{label}</span>;
    default:
      return <span>{value}</span>;
  }
};

const IfNotPlaintext = ({ plaintext, value, component, options, children, locale }) => {

  if (plaintext) {
    return (
      <Plaintext
        value={value}
        component={component}
        options={options}
        locale={locale}
      />
    );
  } else {
    return children;
  }
};

export { Plaintext, IfNotPlaintext };
