import React, { useCallback } from 'react';
import { Checkbox, Form } from 'antd';

import { I18N } from '../../components';
import { lfLog } from '../../helpers/lf-log';

const CheckboxAntd = I18N(
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
    maxLength,
    error,
    prefix,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    checkedChildren,
    unCheckedChildren,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.checked),
      [onChange]
    );

    return (
      <Form.Item
        name={name}
        className="lt-control-checkbox"
        data-lf-field-name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
        valuePropName={null}
      >
        <Checkbox
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          checked={value}
          disabled={disabled}
        >
          {label}
        </Checkbox>
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.Checkbox');

export default CheckboxAntd;
