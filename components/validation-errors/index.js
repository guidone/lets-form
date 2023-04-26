import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import './index.scss';

const tx = (str, locale) => {
  if (_.isString(str)) {
    return str;
  } else if (_.isObject(str)) {
    if (!_.isEmpty(str[locale])) {
      return str[locale];
    } else if (!_.isEmpty(str['en-US'])) {
      return str['en-US'];
    } else if (Object.keys(str).length !== 0) {
      return str[Object.keys(str)[0]];
    } else {
      return '';
    }
  }
};


const ValidationErrors = ({
  errors = {},
  className,
  locale
}) => {
  const keys = Object.keys(errors);

  return (
    <div className={classNames('lf-validation-errors', className)}>
      {keys.map(fieldName => {
        let label = fieldName;
        if (errors[fieldName] && errors[fieldName].ref && errors[fieldName].ref.label) {
          label = tx(errors[fieldName].ref.label, locale);
        }
        return (
          <div key={fieldName}>
            <b>{label}:</b>
            &nbsp;
            {errors[fieldName].message ? errors[fieldName].message : 'This is required' }
          </div>
        );
      })}
    </div>
  );
};

export { ValidationErrors };
