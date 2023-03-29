import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Switch } from 'antd';

const Toggle = ({
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

  /*

        <Input
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        size={size}
        prefix={prefix}
        suffix={postfix}
        allowClear={allowClear}
        bordered={bordered}
        disabled={disabled}
        showCount={showCount}
        maxLength={maxLength}
        style={_.isNumber(width) ? { width: `${width}px` } : undefined}
        {...rest}
      />

  */

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
      <Switch
        defaultChecked={value}
        readOnly={readOnly}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        size={size}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
      />
    </Form.Item>
  )
};

export { Toggle };
