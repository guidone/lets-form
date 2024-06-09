import React from 'react';
import { Form, Radio, RadioGroup } from 'rsuite';

import { I18N } from '../../components/i18n';
import { RequiredIcon } from '../../components/required-icon';
import { passRest } from '../../helpers/pass-rest';
import { i18nOptions } from '../../helpers/i18n-options';
import { RSuite5FieldControl } from '../../components/rsuite-field-control';
import { lfLog } from '../../helpers/lf-log';

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
          {required && <RequiredIcon />}
        </Form.ControlLabel>}
        <RSuite5FieldControl errorMessage={_.isString(error) ? error : undefined }>
          <RadioGroup
            inline
            name={name}
            value={value}
            onChange={onChange}
            appearance={appearance}
            {...passRest(rest)}
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
        </RSuite5FieldControl>
        {hint && !tooltip && <Form.HelpText>{hint}</Form.HelpText>}
      </Form.Group>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded RSuite.RadioGroup');

export default RadioGroupRSuite
