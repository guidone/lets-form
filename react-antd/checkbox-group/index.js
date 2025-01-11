import React from 'react';
import { Form, Checkbox } from 'antd';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { passRest } from '../../helpers/pass-rest';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';

const CheckboxGroupRSuite = I18N(
  ({
    name,
    label,
    hint,
    value,
    placeholder,
    className,
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
      <Form.Item
        {...makeClassName('checkbox-group', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Checkbox.Group
          options={options}
          disabled={disabled}
          defaultValue={value}
          onChange={onChange}
          {...passRest(rest)}
        />
      </Form.Item>
    );
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.CheckboxGroup');

export default CheckboxGroupRSuite;
