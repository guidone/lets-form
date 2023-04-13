import React from 'react';
import { Form, Rate } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon, I18N } from '../../components';

const RateRSuite = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    allowHalf = false,
    cleanable = true,
    max,
    color,
    onChange,
    onBlur
  }) => {
    return (
      <Form.Group controlId={name} className="lets-form-input-tag">
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <Form.Control
          name={name}
          accepter={Rate}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          size={size}
          max={max}
          color={color}
          allowHalf={allowHalf}
          cleanable={cleanable}
          readOnly={readOnly}
          errorMessage={_.isString(error) ? error : undefined }
        />
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder']
);

export { RateRSuite as Rate };