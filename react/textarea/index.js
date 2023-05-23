import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';

const Textarea = I18N(
  ({
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
      <div
        className="lf-control-textarea lf-form-react-control-group"
        data-lf-field-name={name}
      >
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
  },
  ['label', 'hint', 'placeholder']
);

export { Textarea };
