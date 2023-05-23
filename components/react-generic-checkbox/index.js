import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon } from '../../components';
import { passRest } from '../../helpers';

const ReactGenericCheckbox = ({
  name,
  label,
  lfLocale,
  className,
  inputType,
  hint,
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
      className={classNames(className, 'lf-form-react-control-group')}
      data-lf-field-name={name}
    >
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
    </div>
  );
};

export { ReactGenericCheckbox };
