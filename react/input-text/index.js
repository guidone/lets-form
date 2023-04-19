import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../../components';
import { makeWidthStyle, passRest } from '../../helpers';

const TextInput = ({
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
  width,
  fullWidth,
  ...rest
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
      <input
        type="text"
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        style={makeWidthStyle(fullWidth, width)}
        //className={size && `lf-form-react-input-${size}`}
        //style={(!size || size === 'custom') && _.isNumber(width) ? { width: `${width}px`} : undefined}
        required={error != null}
        disabled={disabled}
        readOnly={readOnly}
        {...passRest(rest)}
      />
      {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
      {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { TextInput };