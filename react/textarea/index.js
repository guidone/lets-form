import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
          style={makeWidthStyle(fullWidth, width)}
          required={error != null}
          disabled={disabled}
          readOnly={readOnly}
          {...passRest(rest)}
        >{value}</textarea>
        {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
        {hasError && <div className="lf-form-react-error-message">{error}</div>}
      </div>
    );
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded React.Textarea');

export default Textarea;
