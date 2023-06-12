import React from 'react';
import classNames from 'classnames';
import { Form, Checkbox } from 'antd';

import { I18N } from '../../components';
import { i18nOptions, passRest } from '../../helpers';

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
        className={classNames('lf-control-checkbox-group', className)}
        data-lf-field-name={name}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
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

export { CheckboxGroupRSuite as CheckboxGroup };
