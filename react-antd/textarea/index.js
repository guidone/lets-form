import React, { useCallback } from 'react';
import { Form, Input } from 'antd';

import { I18N } from '../../components';
import { makeWidthStyle, passRest } from '../../helpers';

const TextareaAntd = I18N(
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
    allowClear,
    bordered,
    onChange,
    onBlur,
    width,
    fullWidth,
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <Form.Item
        data-lf-field-name={name}
        className="lf-control-textarea"
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Input.TextArea
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          value={value}
          size={size}
          allowClear={allowClear}
          disabled={disabled}
          showCount={showCount}
          maxLength={maxLength}
          bordered={bordered}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);

export { TextareaAntd as Textarea };
