import React from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../../components';


const Checkbox = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  readOnly,
  required
}) => {
  const hasError = error && _.isString(error);

  return (
    <div className="lf-form-react-control-group">
      <label for={name} className="lf-form-react-checkbox">
        <input
          type="checkbox"
          id={name}
          onChange={e => onChange(e.target.checked)}
          onBlur={onBlur}
          required={error != null}
          disabled={disabled}
          readOnly={readOnly}
          checked={value}
        /> {label} {required && <RequiredIcon />}
      </label>
      {hint && !hasError && <div className="lf-form-react-form-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { Checkbox };