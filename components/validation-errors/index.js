import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import './index.scss';

const RawValidationErrors = ({
  errors = {},
  scope = ''
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
                return (
                  <RawValidationErrors
                    key={errorObj.label || fieldName}
                    errors={errorMessage}
                    scope={`${errorObj.label || fieldName}(${idx+1}) - `}
                  />
                );
              }
            })

        } else if (errorObj && _.isString(errorObj.errorMessage)) {
          return (
            <div key={fieldName}>
              <b>{scope}{errorObj.label}:</b>
              &nbsp;
              {errorObj.errorMessage ? errorObj.errorMessage : 'This is required' }
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
  scope = ''
}) => {
  const keys = Object.keys(errors).filter(key => errors[key]);

  if (keys.length === 0) {
    return;
  }

  return (
    <div className={classNames('lf-validation-errors', className)}>
      <RawValidationErrors scope={scope} errors={errors}/>
    </div>
  );
};

export { ValidationErrors };
