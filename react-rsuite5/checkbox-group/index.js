import React from 'react';
import { Form, Checkbox, CheckboxGroup } from 'rsuite';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';

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
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
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
        </RSuite5FieldControl>
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
