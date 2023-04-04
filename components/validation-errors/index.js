import React from 'react';
import classNames from 'classnames';

import './index.scss';

const ValidationErrors = ({
  errors = {},
  className
}) => {
  const keys = Object.keys(errors);

  return (
    <div className={classNames('lf-validation-errors', className)}>
      {keys.map(fieldName => {
        let label = fieldName;
        if (errors[fieldName] && errors[fieldName].ref && errors[fieldName].ref.label) {
          label = errors[fieldName].ref.label;
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
