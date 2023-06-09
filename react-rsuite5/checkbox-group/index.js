import React from 'react';
import { Form, Checkbox, CheckboxGroup } from 'rsuite';

import { I18N } from '../../components';
import { i18nOptions } from '../../helpers';

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
      <Form.Group data-lf-field-name={name} className="lf-control-checkbox-group">
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
    options: i18nOptions
  }
);

export { CheckboxGroupRSuite as CheckboxGroup };
