import React, { useCallback } from 'react';
import _ from 'lodash';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { RequiredIcon, I18N } from '../../components';
import { passRest, filterOptions, i18nOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const Select = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    options,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    onChange,
    onBlur,
    floatingLabel = false,
    filterKey,
    filterValue,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.value !== placeholder ? e.target.value : undefined);
      },
      [onChange, placeholder]
    );
    const filteredOptions = filterOptions(options, filterValue, filterKey);

    const inner = (
      <Form.Select
        name={name}
        value={value}
        onChange={handleChange}
        size={size}
        placeholder={placeholder}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        isInvalid={error != null}
        {...passRest(rest)}
      >
        {placeholder && <option>{placeholder}</option>}
        {(filteredOptions ?? []).map(({ value, label }) => (
          <option value={value} key={value}>{label}</option>
        ))}
      </Form.Select>
    );

    return (
      <Form.Group
        className="lf-control-input-text"
        data-lf-field-name={name}
      >

        {!floatingLabel && (
          <Form.Label>
            {label}
            {required && <RequiredIcon />}
          </Form.Label>
        )}
        {!floatingLabel && inner}
        {floatingLabel && (
          <FloatingLabel label={label}>
            {inner}
          </FloatingLabel>
        )}
        {hint && !error && <Form.Text>{hint}</Form.Text>}
        {_.isString(error) && !_.isEmpty(error) && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded ReactBootrap.Select');

export default Select;