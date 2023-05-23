import React from 'react';
import _ from 'lodash';

import { Plaintext } from '../plaintext';
import { TwoColumns, ThreeColumns, Group } from '../../common';
import { isI18n, i18n } from '../../helpers';

import './plaintext-form.scss';

const PlaintextLabel = ({ children }) => (
  <div className="lf-plaintext-field-label">{children}</div>
);


const renderFields = (fields, locale, framework, currentValues = {}) => {

  return fields.map(field => {
    if (field.component === 'group') {
      return (
        <Group
          key={field.name}
          collapsible={false}
          label={field.label}
          {..._.pick(field, ['bottomBorder', 'align'])}
        >
          {renderFields(field.fields, locale, framework, currentValues)}
        </Group>
      );
    } else if (field.component === 'two-columns') {
      return (
        <TwoColumns
          key={field.name}
          {..._.pick(field, ['layout', 'leftAlignment', 'rightAlignment'])}
        >
          {column => {
            if (column === 'left') {
              return renderFields(field.leftFields, locale, framework, currentValues);
            } else if (column === 'right') {
              return renderFields(field.rightFields, locale, framework, currentValues);
            }

          }}
        </TwoColumns>
      );
    } else if (field.component === 'three-columns') {
      return (
        <ThreeColumns
          key={field.name}
          {..._.pick(field, ['layout', 'leftAlignment', 'centerAlignment', 'rightAlignment'])}
        >
          {column => {
            if (column === 'left') {
              return renderFields(field.leftFields, locale, framework, currentValues);
            } else if (column === 'center') {
              return renderFields(field.centerFields, locale, framework, currentValues);
            } else if (column === 'right') {
              return renderFields(field.rightFields, locale, framework, currentValues);
            }

          }}
        </ThreeColumns>
      );
    }

    return (
      <div
        key={field.name}
        className={`lf-plaintext-field lf-control-${field.component}`}
      >
        <PlaintextLabel>{isI18n(field.label) ? i18n(field.label, locale) : field.label}</PlaintextLabel>
        <Plaintext
          component={field.component}
          locale={locale}
          value={currentValues[field.name]}
          options={field.options}
        />
      </div>
    );
  });
};

const PlaintextForm = ({
  form,
  locale,
  framework,
  currentValues
}) => {
  const fields = form.fields;

  if (_.isEmpty(fields)) {
    return <span/>;
  }

  console.log('plaintext--->', currentValues)

  return (
    <div className="lf-form lf-form-plaintext">

      {renderFields(fields, locale, framework, currentValues)}
    </div>
  );
};

export { PlaintextForm };
