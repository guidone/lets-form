import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../../components';

const Textarea = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  readOnly,
  required,
  size,
  rows,
  width
}) => {
  const hasError = error && _.isString(error);
  const handleChange = useCallback(
    e => onChange(e.target.value),
    [onChange]
  );

  return (
    <div className="lf-form-react-control-group">
      <label for={name}>
        {label}
        {required && <RequiredIcon />}
      </label>
      <textarea
        type="text"
        id={name}
        rows={rows}
        onChange={handleChange}
        onBlur={onBlur}
        className={size && `lf-form-react-input-${size}`}
        style={(!size || size === 'custom') && _.isNumber(width) ? { width: `${width}px`} : undefined}
        required={error != null}
        disabled={disabled}
        readOnly={readOnly}
      >{value}</textarea>
      {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { Textarea };
