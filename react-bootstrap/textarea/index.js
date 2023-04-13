import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { RequiredIcon, I18N } from '../../components';

// DOC: https://react-bootstrap.github.io/forms/form-control/#form-control-props

const Textarea = I18N(
  ({
    name,
    label,
    hint,
    value,
    onChange,
    onBlur,
    size,
    disabled = false,
    readOnly = false,
    plaintext = false,
    error,
    required,
    rows,
    placeholder
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
        <Form.Control
          name={name}
          as="textarea"
          rows={rows}
          value={value}
          plaintext={plaintext}
          onChange={handleChange}
          size={size}
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
  },
  ['label', 'hint', 'placeholder']
);

export { Textarea };