import React, { useCallback } from 'react';
import _ from 'lodash';

import { RequiredIcon } from '../required-icon';
import { makeWidthStyle, passRest } from '../../helpers';
import { makeClassName } from '../../helpers/make-class-name';

const ReactGenericInput = ({
  name,
  label,
  lfLocale,
  hint,
  value,
  onChange,
  onBlur,
  error,
  className,
  disabled,
  readOnly,
  required,
  submitOnEnter = false,
  size,
  width,
  fullWidth,
  placeholder,
  autocomplete,
  inputType,
  inputMode,
  component,
  lfOnEnter = () => {},
  ...rest
}) => {
  const hasError = error && _.isString(error);
  const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

  return (
    <div {...makeClassName(component, name, 'lf-form-react-control-group', className)}>
      <label for={name}>
        {label}
        {required && <RequiredIcon />}
      </label>
        <input
          type={inputType}
          lang={lfLocale}
          id={name}
          defaultValue={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          placeholder={placeholder}
          style={makeWidthStyle(fullWidth, width)}
          autoComplete={autocomplete}
          inputMode={inputMode}
          disabled={disabled}
          readOnly={readOnly}
          {...passRest(rest)}
        />
        {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
        {hasError && <div className="lf-form-react-error-message">{error}</div>}
    </div>
  );
};

export { ReactGenericInput };
