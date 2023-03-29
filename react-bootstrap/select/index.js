import React, { useCallback } from 'react';
import _ from 'lodash';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components';

const Select = ({
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
  plaintext,
  floatingLabel = false
}) => {
  const handleChange = useCallback(
    e => {
      onChange(e.target.value !== placeholder ? e.target.value : undefined);
    },
    [onChange, placeholder]
  );

  const inner = (
    <Form.Select
      name={name}
      value={value}
      plaintext={plaintext}
      onChange={handleChange}
      size={size}
      placeholder={placeholder}
      onBlur={onBlur}
      disabled={disabled}
      readOnly={readOnly}
      isInvalid={error != null}
    >
      {placeholder && <option>{placeholder}</option>}
      {(options ?? []).map(({ value, label }) => (
        <option value={value} key={value}>{label}</option>
      ))}
    </Form.Select>
  );

  return (
    <Form.Group
      className="lf-control-input-text mb-3"
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
};

export { Select };