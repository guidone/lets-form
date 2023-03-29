import React from 'react';
import { Form, Input, InputGroup } from 'rsuite';
import _ from 'lodash';

import { RequiredIcon } from '../../components';

const ControlTextare = (props) => <Input as="textarea" {...props} />

const Textarea = ({
  name,
  label,
  hint,
  value,
  size,
  placeholder,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  onChange,
  onBlur,
  rows = 10
}) => {
  const inner = (
    <Form.Control
      name={name}
      accepter={ControlTextare}
      rows={rows}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      errorMessage={_.isString(error) ? error : undefined }
    />
  );

  return (
    <Form.Group controlId={name}>
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <RequiredIcon />}
      </Form.ControlLabel>}
      {inner}
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { Textarea };