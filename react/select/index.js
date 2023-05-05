import React, { useCallback } from 'react';
import _ from 'lodash';

import { I18N, Plaintext, IfNotPlaintext, RequiredIcon } from '../../components';
import { makeWidthStyle, passRest, filterOptions } from '../../helpers';

const Select = I18N(
  ({
    name,
    lfLocale,
    label,
    hint,
    value,
    onChange,
    onBlur,
    error,
    disabled,
    placeholder,
    readOnly,
    plaintext,
    required,
    size,
    width,
    fullWidth,
    options,
    filterValue,
    filterKey,

    ...rest
  }) => {
    const hasError = error && _.isString(error);
    const handleChange = useCallback(
      e => onChange(e.target.value === '' ? null : e.target.value),
      [onChange]
    );

    let opts = filterOptions(options, filterValue, filterKey) ?? [];
    if (placeholder) {
      opts = [
        { value: '', label: placeholder },
        ...opts
      ];
    }

    return (
      <div
        className="lf-form-react-control-group lf-control-input-text"
        data-lf-field-name={name}
      >
        <label for={name}>
          {label}
          {required && <RequiredIcon />}
        </label>
        <IfNotPlaintext plaintext={plaintext} value={value} options={options} component="select" locale={lfLocale} >
          <>
            <select
              id={name}
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={makeWidthStyle(fullWidth, width)}
              disabled={disabled}
              readOnly={readOnly}
              {...passRest(rest)}
            >
              {opts.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            {hint && !hasError && <div className="lf-form-react-message">{hint}</div>}
            {hasError && <div className="lf-form-react-error-message">{error}</div>}
          </>
        </IfNotPlaintext>
      </div>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { Select };
