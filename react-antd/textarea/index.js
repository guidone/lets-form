import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Input } from 'antd';

const TextareaAntd = ({
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
  ...rest
}) => {
  const handleChange = useCallback(
    e => onChange(e.target.value),
    [onChange]
  );

  return (
    <Form.Item
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
        style={_.isNumber(width) ? { width: `${width}px` } : undefined}
        {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
      />
    </Form.Item>
  )
};

export { TextareaAntd as Textarea };
