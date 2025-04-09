import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { i18n } from '../../helpers';

import './index.scss';

const RawValidationErrors = ({
  errors = {},
  scope = '',
  locale
}) => {
  const keys = Object.keys(errors);

  return (
    <>
      {keys.map(fieldName => {
        const errorObj = errors[fieldName];
        if (errorObj && _.isArray(errorObj.errorMessages)) {
          return errorObj.errorMessages
            .map((errorMessage, idx) => {
              if (errorMessage) {
                const label = i18n(errorObj.label, locale);
                return (
                  <RawValidationErrors
                    key={label || fieldName}
                    errors={errorMessage}
                    scope={`${label || fieldName}(${idx+1}) - `}
                  />
                );
              }
            });
        } else if (errorObj && _.isObject(errorObj.errorMessages)) {
          const label = i18n(errorObj.label, locale);
          return (
            <RawValidationErrors
              key={label || fieldName}
              errors={errorObj.errorMessages}
              scope={`${label || fieldName} - `}
            />
          );
        } else if (errorObj && _.isString(errorObj.errorMessage)) {
          const label = i18n(errorObj.label, locale);
          const errorMessage = errorObj.errorMessage ? i18n(errorObj.errorMessage, locale) : 'This is required';
          return (
            <div key={fieldName}>
              <b>{scope}{label}:</b>
              &nbsp;
              {errorMessage}
            </div>
          );
        }
      })}
    </>
  );
};


const ValidationErrors = ({
  errors = {},
  className,
  scope = '',
  locale
}) => {
  const keys = Object.keys(errors).filter(key => errors[key]);

  if (keys.length === 0) {
    return;
  }

  return (
    <div className={classNames('lf-validation-errors', className)}>
      <RawValidationErrors scope={scope} errors={errors} locale={locale}/>
    </div>
  );
};

export { ValidationErrors };
