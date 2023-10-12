import React from 'react';
import { Form, Radio, RadioGroup } from 'rsuite';

import { I18N } from '../../components';
import { i18nOptions } from '../../helpers';

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
    appearance,
    ...rest
  }) => {
    return (
      <Form.Group 
        controlId={name}
        className="lf-control-radio-group"
        data-lf-field-name={name}
      >
        {label && <Form.ControlLabel>
          {label}
          {hint && tooltip && <Form.HelpText tooltip>{hint}</Form.HelpText>}
        </Form.ControlLabel>}
        <RadioGroup
          inline
          name={name}
          value={value}
          onChange={onChange}
          appearance={appearance}          
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
    options: i18nOptions
  }
);

export { RadioGroupRSuite as RadioGroup };
