import React, { useCallback } from 'react';
import _ from 'lodash';
import { Form, Input } from 'antd';
import classNames from 'classnames';

import { I18N } from '../../components';
import { passRest } from '../../helpers';
import { TextOrIcon } from '../../common';

import './input-text.scss';


const TextInput = I18N(
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
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );

    return (
      <Form.Item
        className={classNames('lf-control-input-text', `lf-size-${size}`)}
        label={label}
        name={name}
        help={error != null ? error : (hint && !tooltip ? hint : undefined)}
        required={required}
        tooltip={tooltip && hint}
        hasFeedback={error != null}
        validateStatus={error ? 'error': undefined}
      >
        <Input
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={handleChange}
          onBlur={onBlur}
          value={value}
          size={size}
          prefix={TextOrIcon(prefix)}
          suffix={TextOrIcon(postfix)}
          allowClear={allowClear}
          bordered={bordered}
          disabled={disabled}
          showCount={showCount}
          maxLength={maxLength}
          style={_.isNumber(width) ? { width: `${width}px` } : undefined}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);

export { TextInput };
