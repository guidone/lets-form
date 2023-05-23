import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import { RequiredIcon } from '../required-icon';
import { makeWidthStyle, passRest } from '../../helpers';

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
  size,
  width,
  fullWidth,
  placeholder,
  autocomplete,
  inputType,
  inputMode,
  component,
  ...rest
}) => {
  const hasError = error && _.isString(error);

  return (
    <div
      className={classNames(className, 'lf-form-react-control-group')}
      data-lf-field-name={name}
    >
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
