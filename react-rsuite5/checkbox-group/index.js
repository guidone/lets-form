import React from 'react';
import { Form, Checkbox, CheckboxGroup } from 'rsuite';

import { I18N } from '../../components';

const CheckboxGroupRSuite = I18N(
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
        <CheckboxGroup
          inline
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        >
          {(options ?? []).map(({ value, label}) => (
            <Checkbox
              key={value}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
            >
              {label}
            </Checkbox>
          ))}
        </CheckboxGroup>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: (value, i18n) => (value ?? []).map(value => ({ ...value, label: i18n(value.label) }))
  }
);

export { CheckboxGroupRSuite as CheckboxGroup };
