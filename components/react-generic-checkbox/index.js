import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon, Plaintext } from '../../components';
import { passRest } from '../../helpers';


const ReactGenericCheckbox = ({
  name,
  label,
  lfLocale,
  className,
  inputType,
  hint,
  plaintext,
  value,
  defaultValue,
  onChange,
  onBlur,
  error,
  disabled,
  readOnly,
  required,
  ...rest
}) => {
  const hasError = error && _.isString(error);

  return (
    <div
      className={classNames('lf-form-react-control-group', className)}
      data-lf-field-name={name}
    >
      {!plaintext && (
        <>
          <label for={name} className="lf-form-react-checkbox">
            <input
              type={inputType}
              id={name}
              onChange={onChange}
              onBlur={onBlur}
              required={error != null}
              disabled={disabled}
              readOnly={readOnly}
              defaultChecked={value}
              {...passRest(rest)}
            /> {label} {required && <RequiredIcon />}
          </label>
          {hint && !hasError && <div className="lf-form-react-form-message">{hint}</div>}
          {hasError && <div className="lf-form-react-error-message">{error}</div>}
        </>
      )}
      {plaintext && (
        <>
          <label for={name}>
            {label}
          </label>
          <Plaintext value={value} component="toggle" locale={lfLocale} />
        </>
      )}
    </div>
  );
};

export { ReactGenericCheckbox };
