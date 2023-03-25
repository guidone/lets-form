import React from 'react';
import { Form, Radio, RadioGroup } from 'rsuite';

const RadioGroupRSuite = ({
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
  options = [],
  ...rest
}) => {
  return (
    <Form.Group controlId={name}>
      {label && <Form.ControlLabel>
        {label}
        {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
      </Form.ControlLabel>}
      <RadioGroup
        inline
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {(options ?? []).map(({ value, label}) => (
          <Radio
            key={value}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
          >
            {label}
          </Radio>
        ))}
      </RadioGroup>
      {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
    </Form.Group>
  );
};

export { RadioGroupRSuite as RadioGroup };
