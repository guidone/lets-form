import React, { useCallback } from 'react';
import _ from 'lodash';
import Form from 'react-bootstrap/Form';

import { I18N } from '../../components';

const Toggle = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
    plaintext,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    onChange,
    onBlur,
    appearance,
    locale,
    format,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => {
        onChange(e.target.checked);
      },
      [onChange]
    );

    return (
      <Form.Group
        className="lf-control-checkbox"
        data-lf-field-name={name}
      >
        <Form.Check type="switch">
          <Form.Check.Input
            onChange={handleChange}
            onBlur={onBlur}
            disabled={disabled}
            isInvalid={error != null}
          />
          {label && <Form.Check.Label>{label}</Form.Check.Label>}
          {_.isString(error) && !_.isEmpty(error) && (
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
          )}
        </Form.Check>
        {hint && <Form.Text>{hint}</Form.Text>}
      </Form.Group>
    );
  },
  ['label', 'hint']
);

export { Toggle };
