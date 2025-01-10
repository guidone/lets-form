import React from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../../components';
import { passRest } from '../../helpers';
import { makeClassName } from '../../helpers/make-class-name';

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
    <div {...makeClassName('checkbox', name, 'lf-form-react-control-group', className)}>
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
