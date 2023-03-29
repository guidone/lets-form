import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, InputNumber } from 'antd';

const InputNumberAntd = ({
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
  showControl,
  min,
  max,
  step,
  ...rest
}) => {
  console.log('ora con width', width)
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
      <InputNumber
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
        size={size}
        prefix={prefix}
        suffix={postfix}
        allowClear={allowClear}
        bordered={bordered}
        disabled={disabled}
        controls={showControl}
        min={min}
        max={max}
        step={step}
        style={_.isNumber(width) ? { width: `${width}px` } : undefined}
        {...(_.omit(rest, 'lfFramework', 'lfComponent'))}
      />
    </Form.Item>
  )
};

export { InputNumberAntd as InputNumber };
