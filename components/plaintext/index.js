import React from 'react';
import _ from 'lodash';

import { isValidDate, i18n, isI18n } from '../../helpers';

import { NoLabel, YesLabel, NoElementsLabel, ElementLabel, ElementsLabel } from './locales';

const Plaintext = ({ value, component, options, locale }) => {
  let d;
  switch(component) {
    case 'input-number':
    case 'rate':
    case 'slider':
      return <div className="plaintext-value">{value}</div>
    case 'input-text':
      return <div className="plaintext-value">{value}</div>;
    case 'date':
      if (_.isDate(value)) {
        d = value;
      } else if (_.isString(value) && isValidDate(new Date(value))) {
        d = new Date(value);
      }
      return <div className="plaintext-value">{d ? d.toLocaleDateString() : ''}</div>;
    case 'datetime':
      if (_.isDate(value)) {
        d = value;
      } else if (_.isString(value) && isValidDate(new Date(value))) {
        d = new Date(value);
      }
      return <div className="plaintext-value">{d ? d.toLocaleDateString() + ' ' + d.toLocaleTimeString() : ''}</div>;
    case 'toggle':
    case 'checkbox':
      if (value === true || value === 1) {
        return <div className="plaintext-value">{i18n(YesLabel, locale)}</div>;
      } else if (value === false || value === 0) {
        return <div className="plaintext-value">{i18n(NoLabel, locale)}</div>;
      }
      return <div className="plaintext-value"></div>;
    case 'radio-group':
    case 'radio-tile':
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
      return <div className="plaintext-value">{label}</div>;
    case 'checkbox-group':
    case 'multiselect':
      const selectedOptions = (options ?? []).filter(option => (value ?? []).includes(option.value));
      const founds = selectedOptions.map(option => isI18n(option.label) ? i18n(option.label, locale) : option.label);
      return <div>{founds.join(', ')}</div>;
    case 'array':
      return (
        <>
          {_.isArray(value) && (
            <div className="plaintext-value">
              <span className="count">{value.length}</span>
              {' '}
              {value.length > 1 ? i18n(ElementsLabel, locale) : i18n(ElementLabel, locale)}
            </div>
          )}
          {!_.isArray(value) && (
            <div className="plaintext-value">
              {i18n(NoElementsLabel, locale)}
            </div>
          )}
        </>
      );
    case 'textarea':
      return <div
          className="plaintext-value"
          dangerouslySetInnerHTML={{
            __html: (value || '').replaceAll('\n', '<br/>')
          }}
      />;
    case 'placeholder':
    case 'placeholder-image':
      return <></>;
    default:
      return <div className="plaintext-value">{typeof value !== 'object' ? value : ''}</div>;
  }
};

const IfNotPlaintext = ({
  plaintext,
  value,
  component,
  options,
  children,
  locale
}) => {
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
