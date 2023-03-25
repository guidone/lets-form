import React from 'react';
import { Form, Input, InputGroup } from 'rsuite';
import _ from 'lodash';

import { Asterisk } from '../../components';

const TextInput = ({
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
  prefix,
  postfix,
  onChange,
  onBlur
}) => {
  const inner = (
    <Form.Control
      name={name}
      accepter={Input}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      size={size}
      placeholder={placeholder}
      readOnly={readOnly}
      errorMessage={_.isString(error) ? error : undefined }
    />
  );

  const needsGroup = postfix || prefix;
  return (
    <Form.Group controlId={name}>
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <Asterisk />}
      </Form.ControlLabel>}
      {!needsGroup && inner}
      {needsGroup && (
        <InputGroup>
          {prefix && <InputGroup.Addon>{prefix}</InputGroup.Addon>}
          {inner}
          {postfix && <InputGroup.Addon>{postfix}</InputGroup.Addon>}
        </InputGroup>
      )}
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { TextInput };