import React from 'react';
import { Form, Checkbox, CheckboxGroup } from 'rsuite';

import { I18N } from '../../components';
import { i18nOptions, passRest } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

const CheckboxGroupRSuite = I18N(
  ({
    name,
    label,
    hint,
    value,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    error,
    color,
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
          {...passRest(rest)}
        >
          {(options ?? []).map(({ value, label}) => (
            <Checkbox
              key={value}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
              color={color}
            >
              {label}
            </Checkbox>
          ))}
        </CheckboxGroup>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded RSuite.CheckboxGroup');

export default CheckboxGroupRSuite;
