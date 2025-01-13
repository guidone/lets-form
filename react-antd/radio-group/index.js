import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Radio, Space } from 'antd';

import { I18N } from '../../components/i18n';
import { i18nOptions } from '../../helpers/i18n-options';
import { lfLog } from '../../helpers/lf-log';
import { makeClassName } from '../../helpers/make-class-name';
import { passRest } from '../../helpers/pass-rest';

const RadioGroup = I18N(
  ({
    name,
    label,
    hint,
    value,
    size,
    placeholder,
    showCount,
    tooltip = false,
    disabled = false,
    readOnly = false,
    required = false,
    options,
    maxLength,
    inline,
    error,
    prefix,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    optionType,
    className,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    let ctrl;
    if (inline) {
      ctrl = (
        <Radio.Group
          onChange={handleChange}
          defaultValue={value}
          disabled={disabled}
          readOnly={readOnly}
          options={options}
          optionType={optionType}
          size={size}
          {...passRest(rest)}
        />
      );
    } else {
      ctrl = (
        <Radio.Group
          onChange={handleChange}
          defaultValue={value}
          disabled={disabled}
          readOnly={readOnly}
          optionType={optionType}
          size={size}
          {...passRest(rest)}
        >
          <Space direction="vertical">
            {(options ?? []).map(({ value, label}) => (
              <Radio
                key={value}
                value={value}
              >
                {label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    }

    return (
      <Form.Item
        {...makeClassName('radio-group', name, className)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        {ctrl}
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder'],
  {
    options: i18nOptions
  }
);
lfLog('Loaded AntD.RadioGroup');

export default RadioGroup;
