import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon } from '../../components';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Slider = ({
  name,
  label,
  hint,
  value,
  onChange,
  onBlur,
  disabled = false,
  readOnly = false,
  //plaintext = false,
  error,
  required,
  placeholder,
  min,
  max,
  step
}) => {

  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <Form.Group
      className="lf-control-input-text mb-3"
    >
      <Form.Label>
        {label}
        {required && <RequiredIcon />}
      </Form.Label>
      <Form.Range
        name={name}
        defaultValue={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        isInvalid={error != null}
      />
      {hint && !error && <Form.Text>{hint}</Form.Text>}
      {_.isString(error) && !_.isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export { Slider };