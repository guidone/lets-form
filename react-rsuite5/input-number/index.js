import React, { useCallback } from 'react';
import { Form, InputNumber as RsuiteInputNumber } from 'rsuite';
import _ from 'lodash';

// TODO move this up
import { Asterisk } from '../../components';

const hasDecimals = f => Math.floor(f) !== f;

const InputNumber = ({
  name,
  label,
  hint,
  value,
  size,
  placeholder,
  min,
  max,
  tooltip = false,
  disabled = false,
  readOnly = false,
  required = false,
  error,
  prefix,
  postfix,
  onChange = () => {},
  step = 1,
  onBlur
}) => {
  const onChangeCallback = useCallback(
    value => {
      let parsed;
      if (hasDecimals(step)) {
        parsed = parseFloat(value, 10);
      } else {
        parsed = parseInt(value, 10);
      }
      if (!isNaN(parsed)) {
        onChange(parsed);
      }
    },
    [onChange, step]
  );

  return (
    <Form.Group controlId={name}>
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        {required && <Asterisk />}
      </Form.ControlLabel>}
      <Form.Control
        accepter={RsuiteInputNumber}
        value={value}
        onChange={onChangeCallback}
        onBlur={onBlur}
        disabled={disabled}
        size={size}
        min={min}
        max={max}
        step={step}
        prefix={prefix}
        postfix={postfix}
        placeholder={placeholder}
        readOnly={readOnly}
        errorMessage={_.isString(error) ? error : undefined }
      />
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { InputNumber };