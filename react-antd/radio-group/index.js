import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Radio, Space } from 'antd';

import { I18N } from '../../components';
import { i18nOptions } from '../../helpers';
import { lfLog } from '../../helpers/lf-log';

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
          {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
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
          {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
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
        data-lf-field-name={name}
        className="lf-control-radio-group"
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
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
