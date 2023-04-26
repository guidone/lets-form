import React, { useCallback } from 'react';
import { Form, Checkbox } from 'antd';

import { I18N } from '../../components'

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

export { CheckboxAntd as Checkbox };
