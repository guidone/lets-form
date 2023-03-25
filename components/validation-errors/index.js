import React from 'react';

const ValidationErrors = ({ errors = {} }) => {

  const keys = Object.keys(errors);

  return (
    <div className="validation-errors">
      {keys.map(fieldName => {
        return (
          <div key={fieldName}>
            - {fieldName}: {errors[fieldName].message ? errors[fieldName].message : 'This is required' }
          </div>
        );
      })}
    </div>
  );
};

export { ValidationErrors };