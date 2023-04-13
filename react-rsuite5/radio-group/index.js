import React from 'react';
import { Form, Radio, RadioGroup } from 'rsuite';

import { I18N } from '../../components';

const RadioGroupRSuite = I18N(
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
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { RadioGroupRSuite as RadioGroup };
