import React from 'react';
import { Form, TagInput } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components';

import './index.scss';

const InputTag = ({
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
  trigger,
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
        accepter={TagInput}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        size={size}
        trigger={trigger}
        readOnly={readOnly}
        errorMessage={_.isString(error) ? error : undefined }
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { InputTag };