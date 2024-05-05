import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import classNames from 'classnames';

import { I18N } from '../../components';
import { passRest, makeWidthStyle } from '../../helpers';
import { TextOrIcon } from '../../common';
import { lfLog } from '../../helpers/lf-log';

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
    submitOnEnter = false,
    maxLength,
    error,
    prefix,
    postfix,
    allowClear,
    bordered,
    onChange,
    onBlur,
    fullWidth,
    width,
    inputType,
    inputMode,
    autocomplete,
    lfOnEnter = () => {},
    ...rest
  }) => {
    const handleChange = useCallback(
      e => onChange(e.target.value),
      [onChange]
    );
    const handleKeyUp = useCallback(e => e.keyCode === 13 && lfOnEnter(), [lfOnEnter]);

    return (
      <Form.Item
        className={classNames('lf-control-input-text', `lf-size-${size}`)}
        data-lf-field-name={name}
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
          autocomplete={autocomplete}
          type={inputType ?? 'text'}
          inputmode={inputMode}
          onChange={handleChange}
          onBlur={onBlur}
          onKeyUp={submitOnEnter ? handleKeyUp : undefined}
          value={value}
          size={size}
          prefix={TextOrIcon(prefix)}
          suffix={TextOrIcon(postfix)}
          allowClear={allowClear}
          bordered={bordered}
          disabled={disabled}
          showCount={showCount}
          maxLength={maxLength}
          style={makeWidthStyle(fullWidth, width)}
          {...passRest(rest)}
        />
      </Form.Item>
    )
  },
  ['label', 'hint', 'placeholder']
);
lfLog('Loaded AntD.InputText');

export default TextInput;
